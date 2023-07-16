import net from "net";

//Membuat callback untuk setiap kali ada client yang terkoneksi ke servernya
const server = net.createServer((client) => {
    console.info(`Client Terhubung`);
    client.addListener("data", (data) => {
        console.info(`Menerima data dari client : ${data.toString()}`)
        client.write(`Halo ${data.toString()}\r\n`)
    })//perlu menambahkan \r\n sebagai enter. di network enter dianggap 1 baris perintah. tapi kalau tidak ditambah enter maka dianggap belum siap dikirim
})

server.listen(5500, "localhost")// menjalankan server