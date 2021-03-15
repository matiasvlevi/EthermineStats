
const fs = require('fs');
const Ethermine = require('ethermine-api');
const ethermine = new Ethermine();
const miner = "0x54CBb86D5e2895B2573F1C78A02EA4120Bf67a0C";
ethermine.getMinerPayouts(miner, function(err, pay) {
    let path = './data/stat_payout_'+pay.data.length+'.json';
    const data = JSON.parse(fs.readFileSync(path,'utf-8'));

    console.log("Update "+data.totalchecks + ":");
    for (let worker of data.workers) {
        console.log("	- "+worker.name +": "+worker.percent);
    }

})
