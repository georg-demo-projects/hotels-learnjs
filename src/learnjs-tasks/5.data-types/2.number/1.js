import promtSync from "prompt-sync";
const prompt = promtSync();

let a = +prompt("a: ");
let b = +prompt("b: ");

console.log(a + b);
