type File = {
  filename: string;
  src: string;
  dirPath: string;
};
type Path = {
  name?: string;
  files?: File[];
};
export type { File, Path };
