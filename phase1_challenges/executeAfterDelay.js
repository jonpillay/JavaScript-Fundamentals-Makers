const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (delay , executeFunction) => {
  return setTimeout(executeFunction, delay*1000);
};

executeAfterDelay(5, printHello);