'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

let num;
do {
    num = prompt("Введите число больше 100");
} while (num && num <= 100);
