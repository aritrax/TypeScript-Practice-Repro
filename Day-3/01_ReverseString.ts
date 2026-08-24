// Reverse String resuabale function 

//==============================================//

function reverseWord(word : string){
    const letters = word.split("") ;
    const reverseletters = letters.reverse() ;
    const reverse_word = reverseletters.join("") ;
    return reverse_word ;
}

console.log(reverseWord("Aritra"));
console.log(reverseWord("Playwright"))