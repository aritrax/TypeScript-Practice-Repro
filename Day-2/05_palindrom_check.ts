//Question : Palindrome check 
//Input : "madam"
//Expected Output : true 

const word9 : string = "madam" ;
const letters5 : string[] = word9.split("") ;
const reverse_letters5 : string[] = letters5.reverse() ;
const reverse_word9 : string = reverse_letters5.join("") ;
//console.log(reverse_word9) ;
if (word9 === reverse_word9)
{
    console.log(true)
}
else
{
    console.log(false)
}