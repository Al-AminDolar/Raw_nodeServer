const events = require("events");

const emetter = new events.EventEmitter();

// Crearting events handeler
const callme = () => {
  console.log("Oh babu koy tme ? I am waithing for you");
};

//  assign the handeler into an event

emetter.on("call", callme);

// firing the event

emetter.emit("call");
