const { EventEmitter } = require('events');

const db = new Map();

class DB extends EventEmitter {
    constructor() {
        super();
        this.on('logger', (data) => {
            db.set(data);
        })
    }
}

module.exports = DB;