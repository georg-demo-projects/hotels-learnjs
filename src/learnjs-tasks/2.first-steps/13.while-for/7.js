'use strict';
import promtSync from "prompt-sync";
const prompt = promtSync();

// Решето Эратосфена
function getPrimeNumbers(num) {
    const sieveMarks = [];
    const primeNumbers = [];
    for (let i = 2; i <= num; i++) {
        if (!sieveMarks[i]) {
            primeNumbers.push(i);
            for (let j = i ** 2; j <= num; j += i) {
                sieveMarks[j] = true;
            }
        }
    }
    return primeNumbers;
}

let num = prompt("Вывести простые числа до n=");
console.log(getPrimeNumbers(num));
