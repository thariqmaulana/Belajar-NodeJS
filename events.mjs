import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.addListener("halo", (name) => {
    console.info(`Halo ${name}`)
})
emitter.emit("halo", "thariq")