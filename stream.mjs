import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Belajar ");
writer.write("NodeJS ");
writer.end("Dasar")

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString())
})//ketika diambil aslinya buffer