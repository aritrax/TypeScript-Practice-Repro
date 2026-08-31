// Reverse Each Word 

function reverseEachWord(sentence: string)
{
    const words = sentence.split(" ") ;
    let result : any = []

    for(let i = 0 ; i < words.length ; i++)
    {
        for(let j = words[i].length-1 ; j>=0 ; j-- )
        {
            result = result + words[i][j]
        }
        if (i<words.length-1)
        {
            result = result + " "
        }
    }
    return result ;
}

console.log(reverseEachWord("Hello World")) ;

// sentence = "Hello World"
// words = "Hello" , "World"

//result = "olleH dlroW""