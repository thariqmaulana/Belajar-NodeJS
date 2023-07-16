import cluster from "cluster";
import os from "os";
import process from "process";

if(cluster.isPrimary){
    console.info(`primary : ${process.pid}`);
   // cluster.fork();// bekerja dari atas file lagi
   // cluster.fork();
   for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
    
   }
}
if(cluster.isWorker){
    console.info(`worker : ${process.pid}`);
}
// akan ada 12 worker. ingat primary tidak akan bekerja. jadi primary tidak dihitung