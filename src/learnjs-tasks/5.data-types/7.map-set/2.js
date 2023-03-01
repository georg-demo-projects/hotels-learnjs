function aclean(arr = []) {
    let map = new Map();
    arr.forEach(word => {
        let wordKey = word.toLowerCase().split("").sort().join("");
        map.set(wordKey, word);
    });
    return [...map.values()];
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
