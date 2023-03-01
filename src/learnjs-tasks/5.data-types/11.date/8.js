function format(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    let now = new Date();
    let dayNumber = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffSec = Math.round((now - date) / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // Если спустя date прошло менее 1 секунды, вывести "прямо сейчас"
    if (diffSec < 1) {
        return 'прямо сейчас';
    }
    // В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад"
    else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    }
    // В противном случае, если меньше часа, вывести "m мин. назад".
    else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    }
    // В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
    else {
        year = year.toString().slice(-2);
        month = format(month);
        dayNumber = format(dayNumber);
        hour = format(hour);
        minutes = format(minutes);
        return `${dayNumber}.${month}.${year} ${hour}:${minutes}`
    }
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));
