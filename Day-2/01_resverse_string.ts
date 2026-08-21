// Question : Reverse a string 
// Input : Playwright 
// Output : "thgirwyalP" 

const word7 : string= "Playwright" ;
const letters4 : string[] = word7.split("") ;
const reverse_letters : string[] = letters4.reverse() ;
const reverse_word3 : string = reverse_letters.join("") ;
console.log(reverse_word3) ;