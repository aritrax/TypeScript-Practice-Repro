//Question : Substring occurrence count 
// Input : "hello hello hello", "hello" 
// Output : 3

function countOccurrence(sentence: string, target: string)
{
    const words = sentence.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++)
    {
        if (words[i]=== target)
        {
            count ++
        }
    }

    return count;
}

console.log(countOccurrence("hello hello hello cat","hello")) 