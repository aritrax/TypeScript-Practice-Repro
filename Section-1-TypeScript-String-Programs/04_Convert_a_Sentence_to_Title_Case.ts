// Convert a Sentence to Title Case

function SentenceCase(Sentence: string)
{
    const word = Sentence.split(" ") ;
    for(let i=0 ; i < word.length ; i ++)
    {
        const letter = word[i][0] ;
        const upperletter = letter.toUpperCase() ;
        word[i] = upperletter + word[i].slice(1) ;
    }
    const SentenceCase = word.join(" ") ;
    return SentenceCase ;
}

console.log(SentenceCase("hello world From playwright !")) ;

function toTitleCase(input: string): string 
{
return input
.split(" ")
.map((word) =>
word.length === 0
? word
: word[0].toUpperCase() + word.slice(1).toLowerCase(),
)
.join(" ");
}
console.log(toTitleCase("the quick brown FOX"));