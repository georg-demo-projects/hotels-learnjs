'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

let login = prompt('login:');

let message = (login === 'Сотрудник')
    ? 'Привет'
    : (login === 'Директор')
        ? 'Здравствуйте'
        : (login === '') ? 'Нет логина' : '';

console.log(message);
