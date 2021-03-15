const Ethermine = require('ethermine-api');
const ethermine = new Ethermine();

const miner = "0x54CBb86D5e2895B2573F1C78A02EA4120Bf67a0C";
ethermine.getMinerWorkers(miner,function(err,data){
	console.log(err, data);
})
