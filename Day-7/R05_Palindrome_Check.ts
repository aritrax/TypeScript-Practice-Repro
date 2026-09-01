// Palindrome Check 

function palindrom_check(word : string)
{
    let letter = word.split("") ;
    const reverse_letter = letter.reverse() ;
    const reverse_word = reverse_letter.join("") ;

    if (word === reverse_word)
    {
        return true ;
    }
    else 
    {
        return false ;
    }
}

console.log(palindrom_check("madam")) ; 
console.log(palindrom_check("Paul")) ;