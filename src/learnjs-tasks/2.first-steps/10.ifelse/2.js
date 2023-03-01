'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

let jsName = prompt('Какое "официальное" название JavaScript?')

if (jsName === 'ECMAScript') {
    console.log('Верно!');
}
else {
    console.log('Не знаете? ECMAScript!');
}
