// Check Whether Two Strings Are Anagrams
/* Two strings are anagrams if one is a rearrangement of the other: same characters, same counts,
different order. Ignore case and spaces, so "Listen" and "Silent" should match. Different lengths after
normalisation can never be anagrams */ 

function anagram(word1 : string , word2 : string) : boolean 
{   
    const letters1 = word1.toLowerCase().replace(/\s/g, "").split("");
    const letters2 = word2.toLowerCase().replace(/\s/g, "").split("");
    const frequency = new Map<string, number>();
    
    if (letters1.length === letters2.length)
    {
        for(let i=0 ; i< letters1.length ; i++)
        {
            if(frequency.has(letters1[i]))
            {
                const count = frequency.get(letters1[i])!;
                frequency.set(letters1[i], count + 1);
            }
            else
            {
                frequency.set(letters1[i], 1);
            }
        }
    } 
    else
    {
        return false ;
    }

    for(let j=0 ; j< letters1.length ; j++)
    {
        if(frequency.has(letters2[j]))
        {
            const count = frequency.get(letters2[j])!;
            frequency.set(letters2[j], count - 1);
        }
        else
        {
            return false ;
        }
    }
    for (const count of frequency.values())
    {
        if (count !== 0)
        {
            return false ;
        }
    }

    return true;
} 

console.log(anagram("Listen", "Silent"));
console.log(anagram("hello", "world"));