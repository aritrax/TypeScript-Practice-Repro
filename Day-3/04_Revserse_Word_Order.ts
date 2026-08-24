//Reverse Word Order 

function reverse_word_order(sentence : string){
    const word = sentence.split(" ") ;
    const reverse_word = word.reverse() ;
    const reverse_word_order = reverse_word.join(" ") ;
    return reverse_word_order ;
}

console.log(reverse_word_order("I love Playwright")) ;
