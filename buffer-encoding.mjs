const buffer = Buffer.from("thariq", "utf8");
console.info(buffer);
console.info(buffer.toString()); // defaultnya utf8
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("dGhhcmlx", "base64");
console.info(bufferBase64.toString());


