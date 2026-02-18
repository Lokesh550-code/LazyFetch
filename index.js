const osInformation  = require('./osInformation');

console.log(`${osInformation.userName}@${osInformation.host}`);
console.log(`------------------------------------------------------------------------------`);
console.log(`OS: ${osInformation.osVersion}`);
console.log(`Host: ${osInformation.host}`);
console.log(`Kernel: ${osInformation.kernel}`);
console.log(`CPU: ${osInformation.cpuName}`)
console.log(`Memory: ${(osInformation.totalMemoryGb- osInformation.freeMemoryGb).toFixed(2)}/${osInformation.totalMemoryGb} GB`)