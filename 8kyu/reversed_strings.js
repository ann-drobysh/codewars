/*DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//Solution
function solution(str){
    let strReverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
      strReverse += str[i];
    }
    return strReverse;
  }