function Calculator() {

    this._operations = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.addMethod = function (name, func) {
        this._operations[name] = func;
    };

    this.calculate = function (str) {
        let split = str.split(' ');
        let a = +split[0];
        let b = +split[2];
        let oper = split[1];
        let func = this._operations[oper];

        if (!func) {
            throw new Error(`Operation ${func} is not defined`);
        }
        return isNaN(a) || isNaN(b) ? Nan : func(a, b)
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
