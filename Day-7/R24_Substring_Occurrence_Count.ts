//Substring Occurance COunt 

//Input:  "hello hello hello"
//Target: "hello"
// Output: 3

function substringCount(sentence: string, target: string)
{
    const words = sentence.split(" ") ;
    let count = 0 ;
    for(let i = 0 ; i < words.length ; i++)
    {
        if (words[i] === target)
        {
            count = count +1 ;
        }
    }
    return count ; 
}
console.log(substringCount("Hello Hello Hello Mango Hello", "Hello"));