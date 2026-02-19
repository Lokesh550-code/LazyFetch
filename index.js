const chalk = require('chalk');

const osInformation = require("./osInformation");
const getInfo = require("./display");
const env = require('./process');

const uptimeHours = Math.floor(osInformation.uptime / 3600);
const uptimeMinutes = Math.floor((osInformation.uptime % 3600) / 60);


console.log(chalk.blueBright(`${osInformation.userName}`,`${chalk.blueBright(`${osInformation.host}`)}`));

console.log(chalk.blueBright(`------------------------------------------------------------------------------`));
dis();
console.log(`${chalk.redBright('OS:')} ${osInformation.osVersion}`);
console.log(`${chalk.redBright('Host:')} ${osInformation.host}`);
console.log(`${chalk.redBright('Kernel:')} ${osInformation.kernel}`);
console.log(`${chalk.redBright('Terminal:')} ${env.terminal}`);
console.log(`${chalk.redBright('Shell:')} ${env.shell}`);
console.log(`${chalk.redBright('CPU:')} ${osInformation.cpuName.trim()} (${osInformation.cpuCores}) @ ${osInformation.cpucoreSpeed}GHz`);
console.log(`${chalk.redBright('Used Memory:')} ${(osInformation.totalMemoryGb - osInformation.freeMemoryGb).toFixed(2)}/${osInformation.totalMemoryGb} GB`);
console.log(`${chalk.redBright('Uptime:')} ${uptimeHours} hours ${uptimeMinutes} minutes`);
console.log(`${chalk.redBright('Node version:')} ${osInformation.nodeVersion}`);

async function dis() {
  const displayInfo = await getInfo();
  console.log(`${chalk.redBright('GPU:')} ${displayInfo.model}`);
  console.log(`${chalk.redBright('Resolution:')} ${displayInfo.resolutionX} X ${displayInfo.resolutionY}`)
}