/*Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

//Solution:
function findUniq(arr) {
    // do magic
    let notEqualNumber;  
    for (let i = 0; i < arr.length; i++) {    
      if (arr[i] === arr[i+1]) {
        continue;
      } else {if (arr[i+1] === arr[i+2]) {
        notEqualNumber = arr[i];
      } else if (arr[i+1] != arr[i+2]) {
        notEqualNumber = arr[i+1];
      }}        
      return notEqualNumber;
    }  
  }
  