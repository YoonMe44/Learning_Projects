// global obj

// console.log(global);

global.setTimeout(() =>{
    console.log('in the timeout');
    clearInterval(init);
},3000);

const init = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);

