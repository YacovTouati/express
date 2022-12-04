const EventEmitter = require('events');
const login = new EventEmitter();

login.on('sendMyName', (arg) =>{
    console.log('your name is:', arg);
})

login.emit('sendMyName', {name: 'yacov', lastName: 'touati'})