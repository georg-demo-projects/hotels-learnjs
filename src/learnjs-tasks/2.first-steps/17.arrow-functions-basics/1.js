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

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask("Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);
