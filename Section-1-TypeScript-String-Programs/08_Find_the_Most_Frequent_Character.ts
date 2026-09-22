//Find the Most Frequent Character
/*Return the character that appears most often. On a tie, return the one that reached the top count
first. Return null for an empty string rather than guessing.*/

function frequentCharacter(word :string) : string | null
{   
    const letter = word.toLowerCase().replace(/\s/g, "").split("");
    const frequency = new Map<string,number>() ; 
    for(let i =0 ; i < letter.length ; i++)
    {
        if (frequency.get(letter[i]))
        {
            const count = frequency.get(letter[i])! ;
            frequency.set(letter[i], count+1) ;            
        }
        else
        {
            frequency.set(letter[i], 1) ; 
        }
    }

    let highestCount = 0
    let mostFrequent = ""
    for (let j=0 ; j<letter.length ; j++)
    {   
        
        let currentCount = frequency.get(letter[j])!
        if (currentCount > highestCount)
        {
            highestCount = currentCount;
            mostFrequent = letter[j] ;
        }
    }
    if (letter.length === 0)
    {
        return null;
    }
    return mostFrequent;
}

console.log(frequentCharacter("success"));