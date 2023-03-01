function getLocalDay(date) {
    return date.getDay() || 7;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getLocalDay(date)); // вторник, нужно показать 2

let date2 = new Date(2012, 0, 8);
console.log(getLocalDay(date2)); // 7

let date3 = new Date(2012, 0, 9);
console.log(getLocalDay(date3)); // 1
