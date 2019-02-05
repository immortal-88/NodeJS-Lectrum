const {
    Transform
} = require('stream');
const DB = require('./db');

const db = new DB();

class Logger extends Transform {
    constructor(options = {}) {
        super(options);
    }

    _transform(chunk, encoding, done) {
        const receivedData = JSON.parse(chunk);
        const obj = {
            source: '',
            payload: receivedData,
            created: new Date(),
        }
        console.log('obj', obj)
        db.emit('logger', obj);
        this.push(JSON.stringify(receivedData));
    }

    _flush(done) {
        console.log('do something before stream is finished');

        done();
    }
}

module.exports = Logger;