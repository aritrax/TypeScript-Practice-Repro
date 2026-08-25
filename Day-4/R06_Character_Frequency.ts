// Character Frequency 

function characterFrequency(word : string)
{
    const letters = word.split("") ;
    let Frequency :any = {} ; 

    for(let i=0 ; i < letters.length ; i++)
    {
        if (letters[i] in Frequency)
        {
            Frequency[letters[i]] = Frequency[letters[i]] + 1 ;
        }
        else 
        {
            Frequency[letters[i]] = 1 ;
        }
    }
    return (Frequency)
}
console.log(characterFrequency("Hello")) ;