const os = require('os');

console.log(os.platform());
//output: Linux

console.log(os.cpus());
//Output: an array of objects representing CPU cores

console.log(os.totalmem());
// Output: the total amount of system memory in bytes

console.log(os.tmpdir());