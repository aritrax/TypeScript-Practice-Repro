//Find the First Non-Repeating Character 

/* Return the first character that appears exactly once, scanning from the left. If every character
repeats, return null. "Position" matters here. It must be the first such character in the original order,
not just any unique one. */

function NonRepeatingCharacter(word : string) : string | null
{
    const letters = word.split("") ;
    let frequency : any = {} ;
    for (let i = 0 ; i < letters.length ; i++)
    {
        if (letters[i] in frequency)
        {
            frequency[letters[i]] ++ 
        }
        else 
        {
        frequency[letters[i]] = 1;
        }
    }
    
    for (let j = 0 ; j < letters.length ; j++)
    {
        if (frequency[letters[j]] === 1)
        {
            return letters[j] ;
        }
    }

    return null;
}

console.log(NonRepeatingCharacter("aabbc")); // c
console.log(NonRepeatingCharacter("abcabc")); // nul