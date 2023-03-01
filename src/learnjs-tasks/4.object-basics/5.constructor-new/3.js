'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

function Accumulator(initialValue) {
    this.value = initialValue;

    this.read = function () {
        this.value += +prompt('add value: ');
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
