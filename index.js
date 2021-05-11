const fs = require('fs');
const Ethermine = require('ethermine-api');
const Person = require('./methods/person.js');
const Board = require('./methods/board.js');
const config = JSON.parse(fs.readFileSync('config.json','utf-8'));
const wallet = config.adress;
if (!(wallet[0] === "0" && wallet[1] === "x")) {
	console.error('Wallet adress invalid');
}
const updateMin = config.updateFrequency;

const ethermine = new Ethermine();
let beginDate = '';
function getStats(data) {
	console.log('Updating Stats');
	const ethermine = new Ethermine();
	ethermine.getMinerWorkers(wallet,function(err,out){
		try {
			for (let i = 0;i<out.data.length;i++) {
				let person = out.data[i];
				let p = 0;
				for (let j = 0; j < data.workers.length;j++) {
					if (data.workers[j]['name'] == person.worker) {
						data.workers[j].add(person.currentHashrate);
						p++;
					}
				}
				if (p == 0) {
					const per = new Person(person.worker);
					per.add(person.currentHashrate);
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
			console.error('Wallet adress probably invalid...');
		}
	});
}
ethermine.getMinerPayouts(wallet, function(err, pay) {

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

	getStats(data);
	setInterval(function() {
	  getStats(data);
	}, 60 * updateMin * 1000);
})
