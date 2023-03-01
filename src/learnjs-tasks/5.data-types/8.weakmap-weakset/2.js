class MessageReader {
    _hasBeenRead = new WeakMap();

    add(msg) {
        this._hasBeenRead.set(msg, new Date());
    }

    get(msg) {
        return this._hasBeenRead.get(msg);
    }
}

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let msgReader = new MessageReader();
msgReader.add(messages[0]);

messages.forEach((m, idx) => {
    const date = msgReader.get(m);
    let log = `read message[${idx}]: ${!!date}`;
    log += (!!date) ? ` at ${date}` : '';
    console.log(log);
})
