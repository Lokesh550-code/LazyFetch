const si = require("systeminformation");

async function getInfo() {
    const data = await si.graphics();
    return {
        model: data.controllers[0].model,
        resolutionX: data.displays[0].resolutionX,
        resolutionY: data.displays[0].resolutionY,
    };
}

module.exports = getInfo;