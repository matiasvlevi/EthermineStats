const fs = require('fs');
const Ethermine = require('ethermine-api');
const Person = require('./methods/person.js');
const Board = require('./methods/board.js');
const updateMin = 15;
const miner = "0x54CBb86D5e2895B2573F1C78A02EA4120Bf67a0C";
const ethermine = new Ethermine();
let beginDate = '';
function getStats(data) {
	console.log('Updating Stats');
	const ethermine = new Ethermine();
	//ethermine.getMinerPayouts(miner, function(err, data) {
	  //console.log(data.data.length)
	//})
	ethermine.getMinerWorkers(miner,function(err,out){
		try {
			for (let i = 0;i<out.data.length;i++) {
				let person = out.data[i];
				//console.log(data.workers['name']);
				let p = 0;
				for (let j = 0; j < data.workers.length;j++) {
					//console.log(data.workers[j]['name'],person.worker);
					if (data.workers[j]['name'] == person.worker) {
						//console.log(data.workers);
						data.workers[j].add(person.validShares);
						p++;
					}
				}
				if (p == 0) {
					const per = new Person(person.worker);
					per.add(person.validShares);
					data.workers.push(per);
				}

			}
			data.totalchecks++;
			data.lastmodifiedDate = new Date().toString();
			data.percent();
			console.log(data.totalchecks + ".");
			for (let worker of data.workers) {
				console.log("	- "+worker.name +": "+worker.percent);
			}
			fs.writeFileSync('./data/stat_payout_'+payouts+'.json',JSON.stringify(data),'utf-8');
		} catch(err) {
			console.log(err);
		}
	});
}
ethermine.getMinerPayouts(miner, function(err, pay) {

	payouts = pay.data.length;


	let path = './data/stat_payout_'+payouts+'.json';

	let datajson;
	let data;

	if (!fs.existsSync(path)) {
		beginDate = new Date().toString();
		fs.writeFileSync(path,JSON.stringify(new Board(undefined,beginDate)),'utf-8');

	}

	datajson = JSON.parse(fs.readFileSync(path,'utf-8'));
	data = new Board(datajson);
	//console.log(data);


	getStats(data);
	setInterval(function() {
	  getStats(data);
	}, 60 * updateMin * 1000); // 60 * 1000 milsec


})
