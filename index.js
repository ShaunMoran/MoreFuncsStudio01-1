//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

let minVal = function(arr){
  let newMinVal = arr[0];
  for (i=1;i <arr.length; i++){
    if(newMinVal > arr[i]){
    newMinVal = arr[i];
  
    }
    
  }
  return newMinVal;
}
console.log(minVal(nums3));









let minToMax = function(arr){
  let newMinToMax =[];
while (arr.length > 0){
  let smallestVal = minVal(arr);
  newMinToMax.push(smallestVal);
  arr.splice(arr.indexOf(smallestVal), 1);
  }
  return newMinToMax;
}
console.log(minToMax(nums3));

newArr = (nums1.sort(function(a, b){return a-b}));
newArr2 = (nums2.sort(function(a, b){return a-b}));
newArr3 = (nums1.sort(function(a, b){return a-b}));
console.log(newArr);
console.log(newArr2);
console.log(newArr3);
console.log(nums1);
