// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllFilesAndPaths } from '@/lib/files';
import { Path } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Path[]>,
) {
  const files = await getAllFilesAndPaths('./public/songs', []);
  const paths: Path[] = files.arrayOfPaths.reverse();

  res.status(200).json(paths);
}
