//Question : Find largest word 
// Input : "JavaScript Playwright Automation"
//Output : "JavaScript"

function largestWord(sentence: string)
{
    let words = sentence.split(" ");
    let largest_word_count = 0 ;
    let largest_word : string = "";

    for(let i=0 ; i < words.length ; i++)
    {
        if(words[i].length > largest_word_count)
        {
            largest_word = words[i] ;
            largest_word_count = words[i].length;
        }
    }

    return largest_word ;
}
console.log(largestWord("JavaScript Playwright Automation")) ;