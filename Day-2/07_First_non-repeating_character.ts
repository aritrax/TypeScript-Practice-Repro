//Question : First non-repeating character
// Input : "aabbcdde"
//Expected output : "c"

const word11 : string = "aabbcdde"
const letters11 : string[] = word11.split("") ;
console.log(letters11) ;
let frequency1 : any = {}

for (let i = 0 ; i <= letters11.length-1 ; i++)
{
    if (letters11[i] in frequency1)
    {
        frequency1[letters11[i]] = frequency1[letters11[i]] + 1 ;
    }
    else 
    {
        frequency1[letters11[i]] = 1 ;
    }
}
//console.log(frequency1)
let nonrepating : string[] = []
for (let j = 0 ; j <=letters11.length-1 ; j++ )
{
    if (frequency1[letters11[j]] == 1)
    {
        nonrepating.push(letters11[j])
    }
}
console.log(nonrepating[0]);


//=================================================//
//=================================================//

const word12: string = "aabbcdde";

const letters12: string[] = word11.split("");

let frequency12: any = {};

// Step 1: Count frequency
for (let i = 0; i < letters11.length; i++) {
    if (letters12[i] in frequency1) {
        frequency1[letters12[i]] = frequency1[letters12[i]] + 1;
    } else {
        frequency1[letters12[i]] = 1;
    }
}

// Step 2: Find the first non-repeating character
for (let j = 0; j < letters11.length; j++) {
    if (frequency1[letters12[j]] === 1) {
        console.log(letters12[j]);
        break;
    }
}