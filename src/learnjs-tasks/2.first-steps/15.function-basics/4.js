'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

let x = +prompt("x: ");
let n = +prompt("n: ");

if (Number.isInteger(n) && n >= 1) {
    console.log(pow(x, n));
}
else {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
}
