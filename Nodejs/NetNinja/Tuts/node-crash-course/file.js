const fs = require('fs');

// read file
// fs.readFile('./docs/blog1.txt' , (err,data) => {
//     if (err){
//         console.log(err);
//     }else{
//        console.log(data.toString());
//     }
// })

// console.log('last line');


// write file 
fs.writeFile("./docs/blog1.txt", 'hello,world' , () =>{
    console.log('file was written')
})


// directories

// delete file