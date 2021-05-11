module.exports = class Person {
    constructor(name) {
        this.name = name;
        this.currentHashrate = [];
        this.avgshare = 0;
    }
    add(share) {
        this.currentHashrate.push(share);
    }
    avg(len) {
        let sum = 0;
        for (let share of this.currentHashrate) {sum+=share}

        this.avgshare = sum/len;
        return this.avgshare;
    }

    load(obj) {
        this.name = obj.name;
        this.currentHashrate = obj.currentHashrate;
    }
}
