import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`Exit with exit code ${exitCode}`);
})

console.info(process.version);
console.info(process.argv);
console.info(process.report);
console.info(process.env);

process.exit(1);//akan dikirim ke exit code
// kode selanjutnya tidak akan dijalankan karena kita sudah exit

console.info(`Ini tidak akan dijalankan karena sudah`);