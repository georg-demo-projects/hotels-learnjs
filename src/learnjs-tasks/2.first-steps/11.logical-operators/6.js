'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

let age = +prompt('age:');

if (age >= 14 && age <= 90) {
    console.log('true');
}
else {
    console.log('false');
}
