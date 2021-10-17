//javascript
//put your words in input variable
let input = 'katak'
let palindrome = ''

function checkPalindrome() {
  //reverse input words to palindrome variable
  for(let i=input.length-1; i>=0; i--) {
    palindrome+=input[i]
  }
  //checking input and palindrome variable, if it the words palindrome then will return it is palindrome, vice versa 
  if(input === palindrome) {
    return `${input} adalah palindrome karena apabila dibalik hasilnya ${palindrome}`
  } else {
    return `${input} Bukan palindrome karena apabila dibalik hasilnya ${palindrome}`
  }
}

console.log(checkPalindrome(input))