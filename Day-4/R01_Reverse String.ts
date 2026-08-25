// Reverse String 

function reverseString(word : string){
    const letters = word.split("") ;
    const reverseLetters = letters.reverse() ;
    const reverseWord = reverseLetters.join("")
    return reverseWord ;
}

console.log(reverseString("Hello")) ;