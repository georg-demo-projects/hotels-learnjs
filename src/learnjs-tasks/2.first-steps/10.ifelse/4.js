'use strict';

import promtSync from "prompt-sync";
const prompt = promtSync();

let a = +prompt('a:');
let b = +prompt('b:');

let result = (a + b < 4) ? 'Мало' : 'Много';
