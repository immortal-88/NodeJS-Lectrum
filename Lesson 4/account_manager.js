const {
    Writable
} = require('stream');

class AccountManager extends Writable {
    constructor(options = {}) {
        super(options);

        // const {
        //     objectMode,
        //     highWaterMark,
        //     decodeStrings,
        //     getBuffer
        // } = this._writableState;
        // // this.on('data', data => {
        // //     console.log('data', data);
        // // })
        // this.init();
    }
    // init() {
    //     this.on('drain', () => {
    //         console.log('\n------ writable on drain');
    //     });

    //     this.on('error', error => {
    //         console.log('\n------ writable on error', error);
    //     });

    //     this.on('finish', () => {
    //         console.log('\n------ writable on finish');
    //         console.log(
    //             '_writableState.getBuffer()',
    //             this._writableState,
    //         );
    //     });
    // }

    _write(chunk, encoding, done) {
        console.log('WRITABLE', JSON.parse(chunk));
        done();
    }
}

module.exports = AccountManager;