// Palindrom Check 

function Palindrom_Check(word : string){
    let letters = word.split("") ;
    let reverse_letters = letters.reverse() ;
    let reverse_word = reverse_letters.join("") ;

    if (reverse_word === word)
    {
        return true ;
    }
    else 
    { 
        return false ;
    }
    
}

console.log(Palindrom_Check("madam")) ;