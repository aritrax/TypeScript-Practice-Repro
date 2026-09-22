//Remove Duplicate Characters Preserving Order

function removeDuplicate(word : string) : string 
{
    const letter = word.split("") ;
    const seen = new Set<string>();
    let result ="" ;
    for(let i=0 ; i< letter.length ; i++)
    {
        if (!seen.has(letter[i]))
        {
            seen.add(letter[i])
            result = result + letter[i]
        }    
    }
    return result ;
}
console.log(removeDuplicate("aritra")) ;