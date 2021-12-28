// Daily Coding Problem: Problem #1 [Easy]
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?
//filter through the arr,
//if any two nums = k, then return
// const testArr = [10, 15, 3, 7];
// Daily Coding Problem: Problem #1 [Easy]
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?
//filter through the arr,
//if any two nums = k, then return
const testArr = [10, 15, 3, 7];
// const k = 17;
function checkPairs(anArr, k) {
     for(i=0; i<anArr.length; i++) {

          for(j= i+1; j<anArr.length; j++) {
               if(anArr[i] + anArr[j] === k) {
                    console.log(anArr[i], anArr[j])
                    
                    
                    
                    }
               }
          }
}
checkPairs(testArr, 17);

//bubble sort

// function sumOfTwoNum(arr,target){

//     for(let i = 0 ; i < arr.length; i ++){
//       for(let j = 0; j < arr.length; j++){
//         if(i !== j && (arr[i] + arr[j]) === target){
//             return true;
//           }
//         }
//       }
//       return false;
//     };
    
//     console.log(sumOfTwoNum([10,15,3,7],22));