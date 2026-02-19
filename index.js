const chalk = require('chalk');

const osInformation = require("./osInformation");
const getInfo = require("./display");
const env = require('./process');

const uptimeHours = Math.floor(osInformation.uptime / 3600);
const uptimeMinutes = Math.floor((osInformation.uptime % 3600) / 60);


console.log(chalk.blueBright.bold(`${osInformation.userName}`,`${chalk.blueBright.bold(`${osInformation.host}`)}`));

console.log(chalk.blueBright(`------------------------------------------------------------------------------`));
dis();
console.log(`${chalk.redBright.bold('OS:')} ${chalk.rgb(255, 173, 188)(`${osInformation.osVersion}`)}`);
console.log(`${chalk.redBright.bold('Host:')} ${osInformation.host}`);
console.log(`${chalk.redBright.bold('Kernel:')} ${osInformation.kernel}`);
console.log(`${chalk.redBright.bold('Terminal:')} ${env.terminal}`);
console.log(`${chalk.redBright.bold('Shell:')} ${env.shell}`);
console.log(`${chalk.redBright.bold('CPU:')} ${osInformation.cpuName.trim()} (${osInformation.cpuCores}) @ ${osInformation.cpucoreSpeed}GHz`);
console.log(`${chalk.redBright.bold('Used Memory:')} ${(osInformation.totalMemoryGb - osInformation.freeMemoryGb).toFixed(2)}/${osInformation.totalMemoryGb} GB`);
console.log(`${chalk.redBright.bold('Uptime:')} ${uptimeHours} hours ${uptimeMinutes} minutes`);
console.log(`${chalk.redBright.bold('Node version:')} ${osInformation.nodeVersion}`);

async function dis() {
  const displayInfo = await getInfo();
  console.log(`${chalk.redBright.bold('GPU:')} ${displayInfo.model}`);
  console.log(`${chalk.redBright.bold('Resolution:')} ${displayInfo.resolutionX} X ${displayInfo.resolutionY}`)
}