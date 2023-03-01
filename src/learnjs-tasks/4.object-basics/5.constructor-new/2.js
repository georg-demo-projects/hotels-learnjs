'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

function Calculator() {
    this.read = () => {
        this.a = +prompt('a: ');
        this.b = +prompt('b: ');
    },
    this.sum = () => {
        return this.a + this.b;
    },
    this.mul = () => {
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
