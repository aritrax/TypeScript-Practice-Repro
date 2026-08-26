//Palindrom Check 

function plaindromCheck(word :string)
{
    const letters = word.toLowerCase().split("") ;
    const rev_letters = letters.reverse() ;
    const rev_word = rev_letters.join("") ;
    
    if (rev_word === word)
    {
        return true ;
    }
    else
    {
        return false ;
    }
}

console.log(plaindromCheck("madam")) ; //true 
console.log(plaindromCheck("aritra")) ; //false 