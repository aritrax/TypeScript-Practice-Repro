//Duplicate Character 

function Duplicate_Character(word : string)
{
    const letters = word.split("") ;
    let frequency : any = {} ;
    let duplicate : string[] = [] ;

    for (let i=0 ; i <=letters.length-1 ; i++)
    {
        if (letters[i] in frequency)
        {
            frequency[letters[i]] = frequency[letters[i]] + 1 ;
        }
        else 
        {
            frequency[letters[i]] = 1 ;
        }
    }

    for (let j=0 ; j<=letters.length-1 ; j++)
    {
        if (frequency[letters[j]] > 1 && !duplicate.includes(letters[j]))
        {
            duplicate.push(letters[j])
        }
    }

    return duplicate ;
}

console.log(Duplicate_Character("programming"))