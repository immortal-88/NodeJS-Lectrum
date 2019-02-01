const EventEmitter = require("events").EventEmitter;

let counterAgents = new Map();

class Bank extends EventEmitter {
    constructor() {
        super();
        this.id = 0;

        this.on('error', (error) => {
            console.log(error);
        });

        this.on('add', (counterAgent, addAmount) => {
            if (addAmount <= 0) {
                this.emit('error', 'Amount must be more than 0')
            }
            if (typeof counterAgent == undefined) {
                this.emit('error', 'Invalid counter agent id')
            }
            counterAgent.balance += addAmount;
        });

        this.on('get', (counterAgent, callback) => {
            if (typeof counterAgent == undefined) {
                this.emit('error', 'Invalid counter agent id')
            }
            return callback(counterAgent.balance);
        });

        this.on('withdraw', (counterAgent, withdrawAmount) => {
            if (withdrawAmount > counterAgent.balance) {
                this.emit('error', 'Withdraw amount is greater than money you have on your balance')
            }
            if (typeof counterAgent == undefined) {
                this.emit('error', 'Invalid counter agent id')
            }
            counterAgent.balance -= withdrawAmount;
        });

        this.on('changeLimit', (counterAgent, callback) => {
            // if (!callback(...params)) this.emit('error', 'error');
            console.log('dfsf', callback());
            return callback();
        });
    }

    register({
        name,
        balance
    }) {
        if (counterAgents.size != 0) {
            for (const el of counterAgents.keys()) {
                if (el['name'] === name) {
                    this.emit('error', 'Such user already exists');
                    return;
                }
            }
        }
        if (balance < 0) {
            this.emit('error', "Balance cannot be less than 0");
            return;
        }
        const counterAgent = {
            name: name,
            balance: balance,
            id: this.id++
        }
        counterAgents.set(counterAgent);
        return counterAgent;
    }
}

module.exports = {
    Bank,
    counterAgents
};