const EventEmitter = require("events").EventEmitter;
const {
  Bank,
  counterAgents
} = require('./bank');

const bank = new Bank();
const personId = bank.register({
  name: "Pitter Black",
  balance: 1000
});
const personId2 = bank.register({
  name: "John Doe",
  balance: 200
});
const personId3 = bank.register({
  name: "Jurgen Klopp",
  balance: 300
});

bank.emit("add", personId, 20);
bank.emit("get", personId, balance => {
  console.log(`I have ${balance}₴`); // I have 120₴
});
bank.emit("withdraw", personId, 50);
bank.emit("get", personId, balance => {
  console.log(`I have ${balance}₴`); // I have 70₴
});

console.log("counter agents", counterAgents);