import { promises as fs } from "fs"

export async function readJsonFile(filePath: string): Promise<unknown> {
  const file = await fs.readFile(filePath, "utf8")    
  return JSON.parse(file)
}