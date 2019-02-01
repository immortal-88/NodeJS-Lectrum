const EventEmitter = require("events").EventEmitter;
const {
    Bank,
    counterAgents
} = require('./bank');

const bank = new Bank();
const personId = bank.register({
    name: 'Oliver White',
    balance: 700,
    limit: amount => amount < 10
});

bank.emit('withdraw', personId, 5);
bank.emit('get', personId, (amount) => {
    console.log(`I have ${amount}₴`); // I have 695₴
});
// Вариант 1
bank.emit('changeLimit', personId, (amount, currentBalance,
    updatedBalance) => {
    return amount < 100 && updatedBalance > 700;
});
bank.emit('withdraw', personId, 15); // Error
// Вариант 2
bank.emit('changeLimit', personId, (amount, currentBalance,
    updatedBalance) => {
    return amount < 100 && updatedBalance > 700 && currentBalance >
        800;
});
// Вариант 3
bank.emit('changeLimit', personId, (amount, currentBalance) => {
    return currentBalance > 800;
});
// Вариант 4
bank.emit('changeLimit', personId, (amount, currentBalance,
    updatedBalance) => {
    return updatedBalance > 900;
});

console.log('counter agents 3', counterAgents);