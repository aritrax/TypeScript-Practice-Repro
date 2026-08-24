//Reverse Each Word 

function reverse_sentences(sentence : string){
    const word = sentence.split(" ");
    let reverse_sentence = ""

    for (let i = 0 ; i <= word.length-1 ; i++)
    {
        for (let j=word[i].length-1 ; j >=0 ; j--)
        {
            reverse_sentence = reverse_sentence + word[i][j]
        }
        if (i < word.length-1)
        {
        reverse_sentence = reverse_sentence + " "
        }
    }

    return reverse_sentence ;
}

console.log(reverse_sentences("Hello World"))