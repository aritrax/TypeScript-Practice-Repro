//Question : Remove duplicate words 
//Input : "hello world hello test world"
//Output : ""hello world test"

function removeDuplicateWord(sentence : string)
{
    const words = sentence.split(" ") ;
    const unique_words: string[] = [] ;
    for(let i= 0 ; i < words.length ; i++)
    {
        if (!unique_words.includes(words[i]))
        {
            unique_words.push(words[i]);
        }
    }

    return unique_words.join(" ");
}

console.log(removeDuplicateWord("Hellow World Hello World")) ;