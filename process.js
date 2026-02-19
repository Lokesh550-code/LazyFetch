const process = require('process');
const path = require('path')

const shellPath = process.env.SHELL || process.env.ComSpec;
const terminal = process.env.TERM_PROGRAM || process.env.TERM|| "Unknown";
const shell = path.basename(shellPath);

module.exports = {terminal, shell};