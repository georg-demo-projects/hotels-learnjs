let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const sum = (obj) => Object.values(obj).reduce(
    (acc, cur) => acc + cur, 0);

console.log(sum(salaries)); // 390
