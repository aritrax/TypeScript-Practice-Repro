//frist non-repeating character 
//"aabbcdde"
//"c"

function nonrepeatingCharacter(word : string)
{
    const letters = word.split("") ;
    let frequency : any = {}

    for(let i = 0 ; i < letters.length ; i++)
    {
        if (letters[i] in frequency)
        {
            frequency[letters[i]]++
        }
        else
        {
            frequency[letters[i]] = 1
        }
    }

    for(let i = 0 ; i < letters.length ; i++)
    {
        if (frequency[letters[i]] === 1)
        {
            return letters[i]
        }
    }
    return ""
}

console.log(nonrepeatingCharacter("abbacdde")) ;