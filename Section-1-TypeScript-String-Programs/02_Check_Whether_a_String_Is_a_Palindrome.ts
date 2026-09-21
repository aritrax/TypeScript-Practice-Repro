// Check Whether a String Is a Palindrome.

function palindromTwoPointer(word : string) : boolean
{   
    const letters = word.toLowerCase().split("");
    let left = 0 ;
    let right = letters.length -1  ;
    while(left < right)
    {
       if (letters[left] === letters[right])
        {
            left ++ ;
            right -- ;  
        }
        else
        {
            return false ;
        }   
    }
    return true ; 

}
console.log(palindromTwoPointer("MADAM"));
console.log(palindromTwoPointer("SPIDERMAN"));