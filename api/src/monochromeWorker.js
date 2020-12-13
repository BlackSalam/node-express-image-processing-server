const gm = require('gm');
const workerThreads = require('worker_threads');
const workerData = workerThreads.workerData
const parentPort = workerThreads.parentPort

gm(workerData.source).monochrome().write(workerData.destination, (error) => {
    if (error) {
        throw error
    }
    parentPort.postMessage({monochrome: true})
})