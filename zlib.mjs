import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib.mjs");
const result = zlib.gzipSync(source)//harus buffer dan hasilnya buffer yang dikompres

console.info(result.toString())
fs.writeFileSync("zlib.mjs.txt", result)

// cocok jika kita mau mengirim file. Agar ukuran filenya menjadi kecil