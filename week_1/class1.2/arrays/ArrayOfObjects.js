// const object ={

// userName: `Ishaan`,
// age: 20,
// gender : `male`


// };


// console.log(object["userName"]);
// console.log(object["age"]);
// console.log(object["gender"]);

// Nested Objects

const object ={

userName: `Ishaan`,
age: 20,
gender : `male`,
 college: {
  branch: `ECE`,
  Roll: 74,
  YGPA: 8.45
 }

}

console.log(object["college"]["branch"]);


// Array of objects:

const user = [
  {
    userName: `Ishaan`,
    age: 20,
    gender: `male`,
    college: {
      branch: `ECE`,
      Roll: 74,
      YGPA: 8.45
    }
  },
  {
    userName: `Arunabh`,
    age: 19,
    gender: `male`,
    college: {
      branch: `AIML`,
      Roll: 66,
      YGPA: 9.81
    }
  }
];

for(let i=0; i< user.length; i++){


    console.log(user[i]["college"]["YGPA"]);
}