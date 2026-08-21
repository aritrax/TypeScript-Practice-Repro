// Question : Reverse without built-in reverse() 
// Input - Hello 
//Expected Output - olleH 

const word6 : string = "Hello" ;
const letters3 : string[] = word6.split("") ;
let reverse_word2 : string = "" ;

for (let i = letters3.length-1 ; i >=0 ; i--)
    {
        reverse_word2 = reverse_word2 + letters3[i] ;
    }   

console.log(reverse_word2);    