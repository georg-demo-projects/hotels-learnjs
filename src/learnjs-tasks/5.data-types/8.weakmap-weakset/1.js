class MessageReader {
    _hasBeenRead = new WeakSet();

    add(msg) {
        this._hasBeenRead.add(msg);
    }

    contains(msg) {
        return this._hasBeenRead.has(msg);
    }
}

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let msgReader = new MessageReader();
msgReader.add(messages[0]);

console.log("read message[0]: " + msgReader.contains(messages[0])); // true
console.log("read message[1]: " + msgReader.contains(messages[1])); // false

messages = [];
