//01 Reverse a String Using Two Pointers

function reverse_string(word : string)
{
    const letters : string[] = word.split("") ;
    let rev_letters = ""
    for (let i= letters.length-1 ; i >=0  ; i--)
    {
        rev_letters = rev_letters + letters[i] ;
    }
    return rev_letters ;
}

console.log(reverse_string("aritra")); 

function reverse_string_two_pointer(word: string)
{
    const letters : string[] = word.split("") ;
    let left = 0 ;
    let right = letters.length -1 ;
    while (left < right)
    {
        [letters[left], letters[right]] = [letters[right], letters[left]];
        left ++ ;
        right -- ;
    }
    let rev_word = letters.join("") ;
    return rev_word ;
}
console.log(reverse_string_two_pointer("paul")) ;