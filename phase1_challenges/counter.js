let count = 0

const increment = () => {
    count++
    console.log(count)
};

setInterval(increment, 1000);