const globalObj = {}; // любой объект (не примитив)

function A() { return globalObj; }
function B() { return globalObj; }

console.log(new A() === new B()); // true
