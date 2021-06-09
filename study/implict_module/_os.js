var os = require('os');

console.log("host name : ", os.hostname());
console.log("os type : ",os.type());
console.log("os platform : ",os.platform());
console.log("cpu arch : ",os.arch());
console.log("os version : ",os.release());
console.log("os running while : ",os.uptime());
console.log("??? : ",os.loadavg());
console.log("total memory : ",os.totalmem());
console.log("usable memoty : ",os.freemem());
console.log("cpu info : ",os.cpus());
console.log("cpu thread count : ", os.cpus().length);
console.log("net...? : ",os.getNetworkInterfaces());

