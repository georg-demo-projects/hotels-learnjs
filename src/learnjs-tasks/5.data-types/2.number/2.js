function toFixed(n, fractionDigits) {
    const digits = 10 ** fractionDigits;
    return Math.round(n * digits) / digits;
}

console.log(toFixed(6.35, 1)); // 6.4
