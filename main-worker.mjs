import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.addListener("message", (message) => {
    console.info(`thread-${threadId} menerima pesan : ${message}x`);//messagenya adalah perulangannya
});
worker2.addListener("message", (message) => {
    console.info(`thread-${threadId} menerima pesan : ${message}x`);
});

worker1.postMessage(5);
worker2.postMessage(5);