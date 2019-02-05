const {
    Writable
} = require('stream');

class AccountManager extends Writable {
    constructor(options = {}) {
        super(options);
    }
   
    _write(chunk, encoding, done) {
        console.log('WRITABLE', JSON.parse(chunk));
        done();
    }
}

module.exports = AccountManager;