import { relations, sql } from "drizzle-orm";
import {
  mysqlTable,
  varchar,
  datetime,
  int,
  boolean,
  uuid,
  index,
  uniqueIndex,
} from "drizzle-orm/mysql-core";

export let songs = mysqlTable(
  "songs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", 255).notNull(),
    artist: varchar("artist", 255).notNull(),
    album: varchar("album", 255),
    duration: int("duration").notNull(), // Duration in seconds
    genre: varchar("genre", 255),
    bpm: int("bpm"),
    key: varchar("key", 255),
    imageUrl: varchar("image_url", 255),
    audioUrl: varchar("audio_url", 255).notNull(),
    isLocal: boolean("is_local").notNull().default(true),
    createdAt: datetime("created_at").notNull().defaultNow(),
    updatedAt: datetime("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    nameIndex: index("idx_songs_name").on(table.name),
    artistIndex: index("idx_songs_artist").on(table.artist),
    albumIndex: index("idx_songs_album").on(table.album),
    genreIndex: index("idx_songs_genre").on(table.genre),
    bpmIndex: index("idx_songs_bpm").on(table.bpm),
    keyIndex: index("idx_songs_key").on(table.key),
    createdAtIndex: index("idx_songs_created_at").on(table.createdAt),
  })
);

export let playlists = mysqlTable(
  "playlists",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", 255).notNull(),
    coverUrl: varchar("cover_url", 255),
    createdAt: datetime("created_at").notNull().defaultNow(),
    updatedAt: datetime("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    nameIndex: index("idx_playlists_name").on(table.name),
    createdAtIndex: index("idx_playlists_created_at").on(table.createdAt),
  })
);

export let playlistSongs = mysqlTable(
  "playlist_songs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    playlistId: uuid("playlist_id")
      .notNull()
      .references(() => playlists.id),
    songId: uuid("song_id")
      .notNull()
      .references(() => songs.id),
    order: int("order").notNull(),
  },
  (table) => ({
    playlistIdIndex: index("idx_playlist_songs_playlist_id").on(
      table.playlistId
    ),
    songIdIndex: index("idx_playlist_songs_song_id").on(table.songId),
    orderIndex: index("idx_playlist_songs_order").on(table.order),
    uniquePlaylistSongIndex: uniqueIndex("unq_playlist_song").on(
      table.playlistId,
      table.songId
    ),
  })
);

export let songsRelations = relations(songs, ({ many }) => ({
  playlistSongs: many(playlistSongs),
}));

export let playlistsRelations = relations(playlists, ({ many }) => ({
  playlistSongs: many(playlistSongs),
}));

export let playlistSongsRelations = relations(playlistSongs, ({ one }) => ({
  playlist: one(playlists, {
    fields: [playlistSongs.playlistId],
    references: [playlists.id],
  }),
  song: one(songs, {
    fields: [playlistSongs.songId],
    references: [songs.id],
  }),
}));
