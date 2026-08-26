//Duplicate Character 

function duplicateCharacter(word : string)
{
    const letter = word.split("") ;
    let duplicate : string[] = []
    let unique : string[] = []

    for (let i=0 ; i<= letter.length-1 ; i++)
    {
        if(!unique.includes(letter[i]))
        {
            unique.push(letter[i])
        }
        else
        {
            duplicate.push(letter[i])
        }
    }
    return duplicate ;
}

console.log(duplicateCharacter("programming"))
