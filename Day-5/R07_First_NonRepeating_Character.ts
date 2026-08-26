// First Non Repeating Character 

function nonReapeatingChar(word : string)
{
    const letters = word.split("") ;
    let frequency : any = {} ;

    for (let i =0 ; i <= letters.length -1 ; i++)
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
    //return frequency ;
    
    for (let j=0 ; j<=letters.length  ; j++)
    {   
        if (frequency[letters[j]]==1)
        {
            return letters[j]
        }
    }       
}

console.log(nonReapeatingChar("aabbcdde")) ;