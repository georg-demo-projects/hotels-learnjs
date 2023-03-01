import promtSync from "prompt-sync";
const prompt = promtSync();

const a = +prompt('Первое число?');
const b = +prompt('Второе число?');

console.log(a + b);
