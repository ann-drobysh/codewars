/*Description:
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

The questions array is already defined for you and is not the same as the one in the example.
*/
//Solution:
for (let i = 0; i < questions.length; i++) {
    let newProperty = questions[i];
    newProperty.usersAnswer = null;
  }