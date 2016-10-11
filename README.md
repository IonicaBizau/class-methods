
# class-methods

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/class-methods.svg)](https://www.npmjs.com/package/class-methods) [![Downloads](https://img.shields.io/npm/dt/class-methods.svg)](https://www.npmjs.com/package/class-methods) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the methods of a JavaScript class.

## :cloud: Installation

```sh
$ npm i --save class-methods
```


## :clipboard: Example



```js
const classMethods = require("class-methods");

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
```

## :memo: Documentation


### `classMethods(input, options)`
Get the methods of a JavaScript class.

#### Params
- **Class** `input`: The class you want to get the methods of.
- **Object** `options`: An object containing the following fields:
 - `deep` (Boolean): If `false` the parent classes will not be iterated.
 - `includeStatic` (Boolean): If `true`, the static methods will be included too.

#### Return
- **Array** The class methods.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
