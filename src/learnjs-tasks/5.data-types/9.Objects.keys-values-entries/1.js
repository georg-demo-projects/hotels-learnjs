let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((acc, val) => acc + val, 0)
}

console.log(sumSalaries(salaries)); // 650
