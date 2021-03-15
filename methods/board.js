const Person = require('./person.js');
module.exports = class Board {
    constructor(data) {
        if(data !== undefined ){
            this.totalchecks = data.totalchecks;
            this.workers = [];
            for (let i = 0; i < data.workers.length;i++) {
                const obj = data.workers[i];
                let person = new Person('');
                person.load(obj);
                this.workers[i] = person;
            }
        } else {
            this.totalchecks = 0;
            this.workers = [];
        }

    }
    percent() {
        let sum = 0;
        let avgarr = [];
        for (let worker of this.workers) {
            let avg = worker.avg(this.totalchecks);
            avgarr.push(avg);
            sum+=avg;
        }

        for (let i = 0; i < this.workers.length;i++) {
            this.workers[i].percent = avgarr[i]/sum;
        }

    }
}
