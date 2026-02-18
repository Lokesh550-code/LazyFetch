const osInformation = require("./osInformation");
const getInfo = require("./display");

const uptimeHours = Math.floor(osInformation.uptime / 3600);
const uptimeMinutes = Math.floor((osInformation.uptime % 3600) / 60);

console.log(`${osInformation.userName}@${osInformation.host}`);

console.log(`------------------------------------------------------------------------------`,);

console.log(`OS: ${osInformation.osVersion}`);
console.log(`Host: ${osInformation.host}`);
console.log(`Kernel: ${osInformation.kernel}`);
console.log(`CPU: ${osInformation.cpuName.trim()} (${osInformation.cpuCores}) @ ${osInformation.cpucoreSpeed}`);
console.log(`Used Memory: ${(osInformation.totalMemoryGb - osInformation.freeMemoryGb).toFixed(2)}/${osInformation.totalMemoryGb} GB`);
console.log(`Uptime: ${uptimeHours} hours ${uptimeMinutes} minutes`);
console.log(`Node version: ${osInformation.nodeVersion}`);

async function dis() {
  const displayInfo = await getInfo();
  console.log(`GPU: ${displayInfo.model}`);
  console.log(`Display Resoultion: ${displayInfo.resolutionX} X ${displayInfo.resolutionY}`)
}
dis();