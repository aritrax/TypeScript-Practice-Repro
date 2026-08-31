// Longest Substring 
//"abcabcbb" 
//"abc" /3 

function LongestSubstring(words: string)
{
    let current: string[] = [];
    let longest: string[] = [];

    const letters = words.split("") ;

    for(let i=0 ; i < letters.length ; i++)
    {
        while(current.includes(letters[i]))
        {
            current.shift() ;
        }

        current.push(letters[i]);

        if (current.length > longest.length) 
        {
            longest = [...current];
        }
    }

    return longest.join("");
}

console.log(LongestSubstring("abbsbebshrabciueoabsbcabcsaabc"));