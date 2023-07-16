import net from "net";

const client = net.createConnection({
    port: 5500,
    host: "localhost"
});

client.addListener("data", (data) => {
    console.info(`${data.toString()}`)//buffer
});

setInterval(() => {
    client.write("Thariq\r\n")
},2000);