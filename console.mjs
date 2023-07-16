import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

//asalnya kan di process
const log = new Console({
    stdout: file,
    stderr: file
});

log.info("Tes123");
log.error("Coba-Coba");

const person = {
    firstName: "Thariq",
    lastName: "Maulana"
}

log.table(person);