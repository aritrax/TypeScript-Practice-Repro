// Character Frequency 

function Character_Frequency(word : string){
    const letters = word.toLowerCase().split("");
    let frequency : any = {}
    for (let i = 0 ; i <= letters.length-1 ; i++)
    {
        if (letters[i] in frequency)
        {
            frequency[letters[i]] = frequency[letters[i]] + 1
        }
        else
        {
            frequency[letters[i]] = 1
        }
    }
    return frequency ;
}

console.log(Character_Frequency("Hello")) ;