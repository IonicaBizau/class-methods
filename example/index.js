"use strict";

const classMethods = require("../lib");

class Person {
    constructor (name) {
        this.setName(name);
    }
    setName (name) {
        this.name = name;
    }
    getName (name) {
        return this.name;
    }
}

class Worker extends Person {
    constructor (name, job) {
        super(name);
        this.setJob(job);
    }
    setJob (job) {
        this.job = job;
    }
    getJob (job) {
        return this.job;
    }
}

console.log(classMethods(Worker));
