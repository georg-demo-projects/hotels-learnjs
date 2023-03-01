'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

function readNumber() {
    let num;
    do {
        num = prompt("Number: ");
        if (num === null || num === '') {
            return null;
        }
    } while (!isFinite(num));

    return +num;
}

console.log(readNumber());
