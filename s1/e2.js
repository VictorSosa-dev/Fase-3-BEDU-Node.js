let os = require('os');

let misCpus = os.cpus();
console.log(misCpus);

let moment = require('moment');
let now = moment();
console.log(now.format('MMMM Do YYYY, h:mm:ss a'));