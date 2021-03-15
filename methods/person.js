module.exports = class Person {
    constructor(name) {
        this.name = name;
        this.validshares = [];
        this.avgshare = 0;
    }
    add(share) {
        this.validshares.push(share);
    }
    avg(len) {
        let sum = 0;
        for (let share of this.validshares) {sum+=share}

        this.avgshare = sum/len;
        return this.avgshare;
    }

    load(obj) {
        this.name = obj.name;
        this.validshares = obj.validshares;
    }
}
