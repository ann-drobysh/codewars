/*DESCRIPTION:
Write the processArray function, which takes an array and a callback function as parameters. 
The callback function can be, for example, a mathematical function that will be applied on each element of this array. 
Optionally, also write tests similar to the examples below.
*/

//Solution
function processArray(arr, callback) {
    // TODO
  let arrNew = []
  for (let i = 0; i < arr.length; i++) {
    arrNew[i] = callback(arr[i]);
  }
  return arrNew;
}