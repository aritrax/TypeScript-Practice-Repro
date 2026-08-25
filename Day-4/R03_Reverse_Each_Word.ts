// Reverse Each Word 

function reverseSentence(sentence : string)
{
    const words = sentence.split(" ")
    let reverseSentence = "" ;

    for (let i=0 ; i < words.length  ; i++)
    {
        for(let j=words[i].length -1  ; j>=0 ; j--)
        {
            reverseSentence = reverseSentence + words[i][j] ;
        }
        if (i < words.length-1)
        {
            reverseSentence = reverseSentence + " "
        }
    }
    
    return reverseSentence ;
}
console.log(reverseSentence("I love Playwright")) ;