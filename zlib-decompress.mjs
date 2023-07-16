import fs, { readFileSync } from "fs";
import zlib, { inflate, unzipSync } from "zlib";

const source = fs.readFileSync("zlib.mjs.txt");
const result = zlib.unzipSync(source);
console.info(result.toString());