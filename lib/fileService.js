import fs from 'fs'
import path from 'path'

export function readDir(targetPath) {
  const dirPath = path.join(process.cwd(), targetPath)

  return fs.readdirSync(dirPath)
}

export function readFile(targetPath, options) {
  const filePath = path.join(process.cwd(), targetPath)

  return fs.readFileSync(filePath, options || "")
}

export function writeFile(targetPath, data, options){
    const filePath = path.join(process.cwd(), targetPath)
    return fs.writeFileSync(filePath, data, options || "")
}