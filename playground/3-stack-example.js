//application starts so main() method goes to the callstack
//method goes to stack under main method
console.log('Starting')

//INIT ASYNC FUNCTIONS
//set timeout goes to stack but later will be moved to node environment (c)
setTimeout(() => console.log('2 seconds timer') , 2000)
setTimeout(() => console.log('0 seconds timer') , 0)

//at some point those setTimeotus will be moved to the queue stack in order to be called by the event loop

//FI ASYNC FUNCTIONS

//method log will be sended to stack under main method
console.log('Stopping')
//main method is now finished
//when method main is finished, javascript engine calls queue methods in order to keep foing things
//at this point setTimeout(0) will be called
//later on, setTimeout(2000) will be also called but it's the second one because has a 2s delay