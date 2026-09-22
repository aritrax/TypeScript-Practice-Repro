//Find the First Non-Repeating Character 

/* Return the first character that appears exactly once, scanning from the left. If every character
repeats, return null. "Position" matters here. It must be the first such character in the original order,
not just any unique one. */

function NonRepeatingCharacterMap(word : string): string | null
{
    const letters = word.split("") ;
    const frequency = new Map<string, number>();
    for (let i = 0 ; i < letters.length ; i++)
    {
        if (frequency.has(letters[i]))
        {
            const count = frequency.get(letters[i])!;
            frequency.set(letters[i], count + 1);
        }
        else 
        {
            frequency.set(letters[i], 1);
        }
    }
    
    for (let j = 0 ; j < letters.length ; j++)
    {
        if (frequency.get(letters[j]) === 1)
        {
            return letters[j] ;
        }
    }

    return null;
}

console.log(NonRepeatingCharacterMap("aabbc"));  // c
console.log(NonRepeatingCharacterMap("abcabc")); // null