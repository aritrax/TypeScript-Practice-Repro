//Question :  Count vowels/consonants 
// Input : "Playwright" 
// Vowels = 2, Consonants = 8

function countVowelConsonants(word:string)
{
    const letters :string[] = word.toLowerCase().split("") ; 
    let vowels = 0;
    let consonants = 0;
    for (let i = 0; i < letters.length; i++) {

        if ("aeiou".includes(letters[i])) 
        {
            vowels++;
        }
        else {
            consonants++;
        }
    }

    return [vowels, consonants];
}
console.log(countVowelConsonants("Playwright"))