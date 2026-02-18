const os = require('os');


// variable
const host = os.hostname();   // displays the host name
const userName = os.userInfo().username; // gives the username on the divice
const osVersion = os.version();  // give operating system on windows
const kernel = os.release(); // gives the kernel version
const osPlatform = os.platform();  // gives paltform
const uptime = os.uptime();  // gives os uptime in seconds 
const cpuName = os.cpus()[0].model; // gives cpu name 
const freeMemory = os.freemem()/(1024**3); //  give total amout of free energy
const freeMemoryGb = freeMemory.toFixed(2); // gives the free memory in gigabytes
const totalMemory = os.totalmem()/(1024**3); // give the total memory of the system
const totalMemoryGb = totalMemory.toFixed(2); // give the total memory of the system in gigabytes
const nodeVersion = process.version; // gives os version

module.exports = {host, userName, osVersion, osPlatform, uptime, cpuName, freeMemoryGb, totalMemoryGb, nodeVersion, kernel}