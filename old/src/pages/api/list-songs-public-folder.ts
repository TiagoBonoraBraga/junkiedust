// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Path } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import path from 'path';
import getAllFilesAndPaths from '@/lib/getAllFilesAndPaths';

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Path[]>,
) {
  const files = await getAllFilesAndPaths('./public/songs', []);
  const paths: Path[] = files.arrayOfPaths.reverse();

  res.status(200).json(paths);
}
