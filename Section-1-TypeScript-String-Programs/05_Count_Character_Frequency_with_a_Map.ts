// Count Character Frequency with a Map

/* Build a table of how many times each character appears in a string. This frequency table is the
foundation for several later programs: anagrams, first non-repeating, most frequent, so it is worth
getting the idiom exactly right. */

function frequency(Sentence : string)
{
    let frequency : any = {} ;
    const words = Sentence.split(""); 

    for (let i=0 ; i < words.length ; i++)
    {
        if (words[i] in frequency) 
        {
            frequency[words[i]]++;
        } 
        else 
        {
        frequency[words[i]] = 1;
        }
    }
    return frequency ;
}
console.log(frequency("the quick brown fox")) ;

function frequencyMap(Sentence : string): Map<string, number>
{
    const frequency = new Map<string, number>();
    const words = Sentence.split(""); 
    for (let i=0 ; i < words.length ; i++)
    {
        if (frequency.has(words[i])) 
        {
            const count = frequency.get(words[i])!;
            frequency.set(words[i], count + 1);
        } 
        else 
        {
            frequency.set(words[i], 1);
        }
    }
    return frequency ;
}
console.log(frequencyMap("arritra")) ;