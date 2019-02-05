const {
    Transform
} = require('stream');

class Guardian extends Transform {
    constructor(options = {}) {
        super(options);
    }

    _transform(chunk, encoding, done) {
        const receivedData = JSON.parse(chunk);
        const encryptedEmail = Buffer.from(receivedData.email).toString('hex');
        const encryptedPassword = Buffer.from(receivedData.password).toString('hex');
        const transformedChunk = {
            meta: {
                source: 'ui'
            },
            payload: {
                name: receivedData.name,
                email: encryptedEmail,
                password: encryptedPassword
            }
        }
        this.push(JSON.stringify(transformedChunk));
        done();
    }

    _flush(done) {
        console.log('do something before stream is finished');

        done();
    }
}

module.exports = Guardian;