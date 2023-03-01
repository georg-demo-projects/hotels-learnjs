'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Number:");
        if (value === "" || value === null || !isFinite(value)) {
            break;
        }
        numbers.push(+value);
    }
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumInput());
