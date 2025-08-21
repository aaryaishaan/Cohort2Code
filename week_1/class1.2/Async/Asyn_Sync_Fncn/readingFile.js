// const fs = require ("fs");

// fs.readFile("hello.txt", "utf-8", function (err, data){
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(data);
// });


function myOwnSetTimeout(fn, duration){

  setTimeout(fn, duration)

}

myOwnSetTimeout( function(){
    for (let i = 0; i <3; i++) {
    console.log(i);
        
    }
}, 6000)

// make a promsified async function of the above

function promsifiedTimeOut(duration){
const p = new Promise(function (resolve) {
    setTimeout( function (){
        resolve()
    }, duration)
})

return p
}

let ans = promsifiedTimeOut(6000)
ans.then(function (){
    for (let i = 0; i < 3; i++) {
    console.log(i);        
    }
})