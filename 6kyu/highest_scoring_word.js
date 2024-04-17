/*Description:
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

//Solution:
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
function score(letter) {
  return alphabet.indexOf(letter) + 1;
}
function high(x){
  const wordsArray = x.split(" ");  
  let scoreMax = 0;
  let resultWord = '';  
  for (let i = 0; i < wordsArray.length; i++) {
    let scoreOfCurrentWord = 0;
    let oneWord = wordsArray[i];
    for (let j = 0; j < oneWord.length; j++) {      
      scoreOfCurrentWord += score(oneWord[j]);}   
    if (scoreOfCurrentWord > scoreMax) {
        scoreMax = scoreOfCurrentWord;
        resultWord = wordsArray[i];
    };
  }  
  return resultWord;
}