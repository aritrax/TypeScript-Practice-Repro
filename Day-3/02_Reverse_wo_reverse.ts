//Reverse wo revsere

function reverse_word2(word : string){
    const letters = word.split("") ;
    let reverse_word = ""
    for (let i=letters.length-1 ; i >= 0 ; i--)
    {
        reverse_word = reverse_word + letters[i] ;
    }

    return reverse_word ;
}

console.log(reverse_word2("Aritra")) ;
