// Алгоритм создания случайных перестановок Фишера — Йетса
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}
