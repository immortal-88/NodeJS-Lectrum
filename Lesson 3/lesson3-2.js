const EventEmitter = require("events").EventEmitter;
const {
    Bank,
    counterAgents
} = require('./bank');

const bank = new Bank();
const personFirstId = bank.register({
    name: 'Pitter Black',
    balance: 100
});
const personSecondId = bank.register({
    name: 'Oliver White',
    balance: 700
});

bank.emit('send', personFirstId, personSecondId, 50);
bank.emit('get', personSecondId, (balance) => {
    console.log(`I have ${balance}₴`); // I have 750₴
});

console.log("counter agents 2", counterAgents);