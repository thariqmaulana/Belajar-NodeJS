import path from "path";

const file = "/Users/thariq/contoh.txt";

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));