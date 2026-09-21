//Count Vowels and Consonants

function countVowelandConsonant(input : string) : {vowel : number ; consonants : number} 
{   
    const letter = input.toLowerCase() ;
    const vowels = "aeiou";
    let v = 0;
    let c = 0;
    for(let i=0 ; i < letter.length ; i++)
    {   
    if (letter >= "a" && letter <= "z")
    {
        if (vowels.includes(letter[i]))
        {
            v++
        }
        else
        {
            c++
        }
    }
    }
    return { vowel: v, consonants: c };
}
console.log(countVowelandConsonant("Aritra Paul")) ;