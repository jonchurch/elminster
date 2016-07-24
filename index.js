const util = require('util');
const eventEmitter = require('events').EventEmitter;

const ctrl = new eventEmitter();

process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', function(data) {
    var text = data.trim();

    if (data === 'quit\n') {
        console.log('Bye!');
		process.exit();
        return;
    }
    ctrl.emit(text);
});
