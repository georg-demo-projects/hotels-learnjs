'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

let calculator = {
    // ... ваш код ...
    read() {
        this.a = +prompt('a: ');
        this.b = +prompt('b: ');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
