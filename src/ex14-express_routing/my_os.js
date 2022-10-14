
const os = require("os");

const my_os = {
    name: os.type(),
    release: os.release(),
    totalMemory : os.totalmem()
}

module.exports.my_os = my_os;