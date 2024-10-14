/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let numberofVowels = 0
    const vowels = ["a","e","i","o","u","A","E","I","O","U"]
    if(!str) return 0
    const arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if(vowels.includes(arr[i])) {
            numberofVowels++
        }
      
    }
    return numberofVowels

}

module.exports = countVowels;