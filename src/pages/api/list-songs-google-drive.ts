import type { NextApiRequest, NextApiResponse } from 'next';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!folderId || !apiKey) {
    return res
      .status(500)
      .json({ error: 'Missing Google Drive configuration' });
  }

  try {
    const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;
    const response = await fetch(driveUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch files from Google Drive');
    }

    const data = await response.json();
    const audioFiles: DriveFile[] = data.files.filter((file: DriveFile) =>
      file.mimeType.includes('audio/'),
    );

    res.status(200).json(audioFiles);
  } catch (error: unknown) {
    console.error((error as Error).message);
    res.status(500).json({ error: 'Failed to list files' });
  }
}
