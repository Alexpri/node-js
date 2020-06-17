const os = require('os')

console.log('OS:', os.platform())

console.log('OS:', os.arch())

console.log('Processors info:', os.cpus());

console.log('Free memory:', os.freemem());

console.log('Total memory:', os.totalmem());

console.log('Home dir:', os.homedir());

console.log('Turned on:', os.uptime())
