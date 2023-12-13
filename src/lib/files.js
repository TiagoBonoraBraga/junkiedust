import * as fs from 'fs';
import path from "path";

export const getAllFilesAndPaths = function (dirPath, arrayOfPaths) {
  let files = fs.readdirSync(dirPath)

  // arrayOfFiles = arrayOfFiles || []
  arrayOfPaths = arrayOfPaths || []
  //   let arrayAux = {}
  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfPaths.push({ name: file })
      let arrayAux = getAllFilesAndPaths(dirPath + '/' + file, arrayOfPaths)
      arrayOfPaths = arrayAux.arrayOfPaths
      // arrayOfFiles = arrayAux.arrayOfFiles
    } else {
      let arquivo = { src: path.join('/', dirPath.replace('/public', ''), '/', file), filename: file, dirPath: arrayOfPaths[arrayOfPaths.length - 1].name }
      // arrayOfFiles.push(arquivo)
      let files = arrayOfPaths[arrayOfPaths.length - 1].files || [];
      arrayOfPaths[arrayOfPaths.length - 1] = { name: arrayOfPaths[arrayOfPaths.length - 1].name, files: [...files, arquivo] }
    }
  })

  return { arrayOfPaths }
}


// import fs from 'fs';
// import path from 'path';
// export const getAllFiles = function (dirPath: string, arrayOfFiles: any) {
//   let files = fs.readdirSync(dirPath)

//   arrayOfFiles = arrayOfFiles || []

//   files.forEach(function (file) {
//     if (fs.statSync(dirPath + '/' + file).isDirectory()) {
//       arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
//     } else {
//       arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
//     }
//   })

//   return arrayOfFiles
// }