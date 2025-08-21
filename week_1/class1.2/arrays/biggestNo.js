// find biggest number in array

let arr =[ 1,59, 84,5,45,87,87, 79, 89, 56,15];

let MAX_VALUE= arr[0];

for (let i = 0; i < arr.length; i++) {
 if (arr[i]>= MAX_VALUE) {
    MAX_VALUE= arr[i];
 }
    // console.log(MAX_VALUE);
}

console.log(MAX_VALUE);