'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

let user = prompt("Кто там?");

if (user === 'Админ') {
    let pass = prompt('Пароль?');

    if (pass === 'Я главный') {
        console.log('Здравствуйте!');
    }
    else if (pass === '' || pass === null) {
        console.log('Отменено');
    }
    else {
        console.log('Неверный пароль');
    }
}
else if (!user) {
    console.log('Отменено');
}
else {
    console.log("Я вас не знаю");
}
