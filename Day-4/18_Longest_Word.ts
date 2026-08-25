//Question : Longest Word 
//Input:    "I love automation testing"
//Output:   "automation"

function longestWord(sentence: string) 
{
    const words = sentence.split(" ") ;
    let Longest : string = ""

    for (let i = 0 ; i< words.length ; i++)
    {
        if (words[i].length> Longest.length)
        {
            Longest = words[i] 
        }
    }
    return Longest
}
console.log(longestWord("I love automation testing"))