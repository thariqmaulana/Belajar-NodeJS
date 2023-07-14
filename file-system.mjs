import fs from "fs/promises"

const buffer = await fs.readFile("file-system.mjs");
console.info(buffer.toString());

await fs.writeFile("membuatFile.txt", "Membuat File dari fs");