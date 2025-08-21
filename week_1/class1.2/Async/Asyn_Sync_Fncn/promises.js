 const prompt = require('prompt-sync')();


let userObject = {
 


};

const addDetails = (name, gender) => {

    userObject.userName = userName; 
    userObject.gender = gender;


 }

let isAdult = new Promise((resolve, reject) => {
 let enterAge = prompt(`Enter your age: `);
  if (enterAge >= 18) resolve();
  else reject(`not an adult`);
});

isAdult.then(() => {
    let userName = prompt(`Enter your name: `);
    let gender = prompt('Enter your gender: ');
    addDetails(userName, gender);
}).catch((message) => {
    console.log(`Sir you're ` + message);
});