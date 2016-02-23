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
    static randomName () {
        // Yes, it's random enough :D
        return ["Alice", "Bob"][0];
    }
}

console.log(classMethods(Worker));
// [ 'setJob', 'getJob', 'setName', 'getName' ]

console.log(classMethods(Person));
// [ 'setName', 'getName' ]

console.log(classMethods(Worker, {
    deep: false
}));
// [ 'setJob', 'getJob' ]

console.log(classMethods(Worker, {
    includeStatic: true
}));
// [ 'setJob', 'getJob', 'randomName', 'setName', 'getName' ]
