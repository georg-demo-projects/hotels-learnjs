function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
