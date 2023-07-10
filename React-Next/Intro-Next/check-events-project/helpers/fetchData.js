// fetch data from the internal api
import fs from "fs";
import path from "path";

export function getFilePath(fileName) {
  return path.join(process.cwd(), "data", fileName + ".json");
}

export function getFileData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
