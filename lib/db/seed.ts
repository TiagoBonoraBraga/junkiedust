import fs from "fs/promises";
import path from "path";
import { parseBuffer } from "music-metadata";
import { db } from "./drizzle";
import { songs, playlists, playlistSongs } from "./schema";
import { eq } from "drizzle-orm";
//  import { put } from "@vercel/blob";
import { put } from "../storage";
import { generateLogoVariation } from "../imageGenerator";
import { writeMetadata } from "../metadata";
import { exit } from "process";
import getAllFilesAndPaths from "../getAllFilesAndPaths";

async function seed() {
  console.log("Starting seed process...");
  // await generateImages();
  await seedSongs();
  await seedPlaylists();
  console.log("Seed process completed successfully.");
}

async function generateImages(destination?: string) {
  const dir = path.join(process.cwd(), "public/songs");
  const logoPath = path.resolve("public/logo_junkie_transparente.png"); // Path to your logo file
  const prompt =
    "A creative reinterpretation of a band's logo for each rehearsal realized the band named Junkie Dust, a mix of crazynes and emotions, purple way of life JUNKIE DUST"; // Prompt for the AI model

  try {
    const logoBuffer = await generateLogoVariation(logoPath, prompt);

    // Save the generated image to a file (optional)
    const album = `public/songs/${destination}/album_cover.png`;
    await fs.writeFile(album, logoBuffer);
    return album;
    console.log("Logo variation saved to:", album);
  } catch (error) {
    console.error(error);
  }
}

async function genereteMetadata(tracksDir = "public/songs") {
  let filesArray = getAllFilesAndPaths(tracksDir, []);
  // console.log(filesArray);
  let imageBufferFileLogo = await fs.readFile(
    `public/logo_junkie_transparente.png`
  );
  const { arrayOfPaths } = filesArray;
  for (let dir of arrayOfPaths) {
    const { name, files, fullPath } = dir;
    let imageBufferFile = imageBufferFileLogo;
    try {
      await fs.access(`${fullPath}/album_cover.png`);
      imageBufferFile = await fs.readFile(`${fullPath}/album_cover.png`);
    } catch (error) {
      console.log(
        `album_cover.png not found in ${fullPath}, using default logo.`
      );
    }

    // console.log(imageBufferFile);
    if (files) {
      for (let file of files) {
        const { src, filename, dirPath } = file;

        const metadataSong = {
          title: filename, // Título da música
          artist: "Junkie Dust", // Nome do artista
          album: name, // Nome do álbum
          genre: "Rock", // Gênero
          year: "2024", // Ano
          comment: {
            language: "eng", // Idioma do comentário
            text: "Junkie Dust Fragments of time", // Comentário adicional
          },
          image: {
            mime: "image/jpeg", // Tipo MIME da imagem (jpeg, png, etc.)
            type: {
              id: 3, // Tipo da imagem (3 é 'Capa da frente')
              name: "Front Cover",
            },
            description: "Capa da Música", // Descrição opcional
            imageBuffer: imageBufferFile || imageBufferFileLogo, // Buffer da imagem de capa
          },
        };
        console.log(metadataSong);
        await writeMetadata(src, metadataSong);
      }
    }
  }
}

async function seedSongs() {
  let tracksDir = path.join(process.cwd(), "public/songs");

  await genereteMetadata(tracksDir);

  let files = await fs.readdir(tracksDir, { recursive: true });

  for (let file of files.filter(
    (file) => path.extname(file).toLowerCase() === ".mp3"
  )) {
    let filePath = path.join(tracksDir, file);
    let buffer = await fs.readFile(filePath);
    let metadata = await parseBuffer(buffer, { mimeType: "audio/mpeg" });

    console.log("metadata", metadata);

    let imageUrl;
    if (metadata.common.picture && metadata.common.picture.length > 0) {
      let picture = metadata.common.picture[0];
      let imageBuffer = Buffer.from(picture.data);
      let { url } = await put({
        Key: `junkiedust/images/${file}.${picture.format}`,
        Body: imageBuffer,
        ContentType: picture.format,
      });
      imageUrl = url;
      console.log(`Uploaded image for: ${imageUrl}`, metadata);
    }
    let { url: audioUrl } = await put({
      Key: `junkiedust/audio/${file}`,
      Body: buffer,
      ContentType: "audio/mpeg",
    });

    let songData = {
      name: metadata.common.title || path.parse(file).name,
      artist: metadata.common.artist || "Unknown Artist",
      album: metadata.common.album || "Unknown Album",
      duration: Math.round(metadata.format.duration || 0),
      genre: metadata.common.genre?.[0] || "Unknown Genre",
      bpm: metadata.common.bpm ? Math.round(metadata.common.bpm) : null,
      key: metadata.common.key || null,
      imageUrl,
      audioUrl,
      isLocal: false,
    };

    // Check if the song already exists
    let existingSong = await db
      .select()
      .from(songs)
      .where(eq(songs.audioUrl, songData.audioUrl))
      .limit(1);

    if (existingSong.length > 0) {
      // Update existing song
      await db
        .update(songs)
        .set(songData)
        .where(eq(songs.id, existingSong[0].id));
      console.log(`Updated song: ${songData.name}`);
    } else {
      // Insert new song
      await db.insert(songs).values(songData);
      console.log(`Seeded new song: ${songData.name}`);
    }
  }
}

async function seedPlaylists() {
  const dir = path.join(process.cwd(), "public/songs");
  const playlistNames = await fs.readdir(dir);

  for (let name of playlistNames) {
    // Check if the playlist already exists
    const existingPlaylist = await db
      .select()
      .from(playlists)
      .where(eq(playlists.name, name))
      .limit(1);

    let playlist;
    if (existingPlaylist.length > 0) {
      playlist = existingPlaylist[0];
      console.log(`Playlist already exists: ${name}`);
    } else {
      const [newPlaylist] = await db
        .insert(playlists)
        .values({
          name,
          coverUrl:
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
        })
        .$returningId();
      playlist = newPlaylist;
      console.log(`Seeded new playlist: ${name}`);
    }

    // Add some random songs to the playlist
    const allSongs = await db.select().from(songs);
    const playlistSongCount = Math.floor(Math.random() * 10) + 5; // 5 to 14 songs
    const shuffledSongs = allSongs.sort(() => 0.5 - Math.random());

    // Remove existing playlist songs
    await db
      .delete(playlistSongs)
      .where(eq(playlistSongs.playlistId, playlist.id));

    // Add new playlist songs
    for (let i = 0; i < playlistSongCount; i++) {
      await db.insert(playlistSongs).values({
        playlistId: playlist.id,
        songId: shuffledSongs[i].id,
        order: i,
      });
    }

    console.log(`Added ${playlistSongCount} songs to playlist: ${name}`);
  }
}

seed()
  .catch((error) => {
    console.error("Seed process failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seed process finished. Exiting...");
    process.exit(0);
  });
