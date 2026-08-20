//Question : Palindrome check 
//Input : madam 
//Output :  true

const word5 : string = "madam" ;
const letters2 : string[] = word5.split("") ;
let reverse_word : string = ""

for (let i = (word5.length-1) ; i >=0 ; i--)
{
    reverse_word = reverse_word + letters2[i]
}
if (reverse_word === word5)
{
    console.log(true);
}
else
{
    console.log(false);
}