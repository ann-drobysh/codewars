/*
Description
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

//Solution:
function wave(str){
    // Code here
    let waveArray = [];
    let newString = '';
    for (let i = 0; i < str.length; i++) {    
      if (str[i] === ' ') {
        newString = str.substring(str[0], str[i]) + str[i] + str.substr(str[i+1], str.length);
        continue;
      } else {
        upperCase = str[i].toUpperCase();
        newString = str.substring(0, i) + upperCase + str.substr(i+1);
        waveArray.push(newString);
      }  
    }
    return waveArray;
  }