// Question : Character Frequency from Word 
// Input : "testing"
// Output : {t:2,e:1,s:1,i:1,n:1,g:1}

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
console.log(characterFrequency("testing")) ;