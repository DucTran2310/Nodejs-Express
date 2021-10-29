const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on - listen for an event
customEmitter.on("response", () => {
    console.log(`data received`);
});
customEmitter.on("response", () => {
    console.log(`data received 2`);
});
// emit - emit an event thuc thi lan luot tung listener
customEmitter.emit("response");
