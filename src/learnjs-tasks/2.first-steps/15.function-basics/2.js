'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

const confirm = msg => {
    let answer = '';
    do {
        answer = prompt(msg + ' (yes/no)');
    } while (answer !== 'yes' && answer !== 'no');
    return answer;
}

function checkAge1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

console.log(checkAge1(19));
console.log(checkAge2(17));
