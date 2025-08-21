function sum(num1,num2, fncnToCall){

    let result = num1+ num2;
   fncnToCall(result)
}
function displayResults(data) {
    console.log("Result of the data is : " + data);
}

function displayResultPassive(data) {
    console.log(`Sum's result is ` + data);
}
let finalResult = sum(6, 3, displayResultPassive);
 