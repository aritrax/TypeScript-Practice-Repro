//Question : Capitalize First Letter of Each Word
//Input : "hello world" 
//Output : "Hello World"

function captalizeWord(sentence : string)
{
    let words = sentence.split(" ") ;

    for(let i=0 ; i<words.length ; i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    const captalizedWords = words.join(" ");
    return captalizedWords ;
}
console.log(captalizeWord("hello world"));