const {
    Readable
} = require('stream');

class Ui extends Readable {
    constructor(data, options = {}) {
        super();
        this.data = data;
        this.init();

        this.on('error', error => {
            throw Error(error)
        })
    }

    init() {
        this.on('data', chunk => {
            const data = JSON.parse(chunk);
            const keys = Object.keys(data);
            const values = Object.values(data);
            if(JSON.stringify(keys) !== JSON.stringify(['name', 'email', 'password'])) {
                this.emit('error', 'Object must have such required fields only: name, email, password');
            } 
            values.some(el => {
                if(typeof el !== 'string') {
                    this.emit('error', 'Field must be string');
                }
            })
        });
    }

    _read() {
        let data = this.data.shift();
        if (!data) {
            this.push(null);
        } else {
            console.log('vv', JSON.stringify(data))
            this.push(JSON.stringify(data))
        }
    }
}

module.exports = Ui;