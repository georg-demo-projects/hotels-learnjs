function topSalary(salaries) {
    let top = 0;
    let topName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (top < salary) {
            top = salary;
            topName = name;
        }
    }
    return topName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));
