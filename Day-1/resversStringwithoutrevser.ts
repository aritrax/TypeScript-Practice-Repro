// Question : Reverse without built-in reverse()
// Input : "Playwright" 
// Output : "thgirwyalP"

const word4 : string = "Playwright" ;
const letters : string[] = word4.split("") ;
let result2: string = "";
for (let i=9 ; i>=0 ; i--)
    {
        result2 = result2 + letters[i];
    }

console.log(result2) ;