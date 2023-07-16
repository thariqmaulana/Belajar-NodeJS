import timers from "timers/promises";

const name = await timers.setTimeout(5000, "thariq");
console.info(`Tulisan ini muncul setelah 5 detik`)
console.info(name)

//await timers.setInterval(1000, new Date())
//console.info("tes")

/*for await (const startTime of timers.setInterval(1000, new Date())){
    console.info(startTime);
} */

for await (const startTime of timers.setInterval(1000, "hiraukan")){
    console.info(new Date());
} 