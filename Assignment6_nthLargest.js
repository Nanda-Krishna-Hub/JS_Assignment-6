
let arr = [3,45,6,7,23,5,7,8];
var n = parseInt(prompt("Enter the number: "));
console.log(find_largest(arr, n));


function find_largest(arr, n){
    let temp = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]>arr[i]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[n-1];
};