/*DESCRIPTION:
Create a function add(n)/Add(n) which returns a function that always adds n to any number
*/

//Solution:
function add(n) {
    return function number(x) {
      return n + x;
    };      
  }