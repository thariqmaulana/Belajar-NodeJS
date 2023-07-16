import { threadId, parentPort } from "worker_threads";

parentPort.addListener("message", (message) => {
    for (let i = 0; i <= message; i++) {
        console.info(`thread-${threadId} mengirim pesan ${i}`)
        parentPort.postMessage(`tes ke- ${i}`)//yang dikerjakan
        
    }
    parentPort.close();
})