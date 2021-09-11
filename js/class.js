"use strict";
// typeScript Classes
class Welcome {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let welcome = new Welcome("world");
