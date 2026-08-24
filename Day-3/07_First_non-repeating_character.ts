//Frist Non-Repaeating Function 

function frist_non_Reapeating(word: string){
    const letters = word.toLowerCase().split("");
    let frequency : any = {}
    for (let i=0 ; i <= letters.length-1 ; i++)
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

    for (let j=0 ; j<=letters.length - 1 ; j ++)
    {
        if (frequency[letters[j]] === 1 )
        {   
            return letters[j] ;
        }
    
    }

}

console.log(frist_non_Reapeating("aabbcdde")) ;