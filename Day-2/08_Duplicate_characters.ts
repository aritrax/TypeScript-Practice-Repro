//Question : Duplicate characters  
//Input : "programming"
//Expected Output : ["r","g","m"]

const word13 : string = "programming" ;
const letters13 : string[] = word13.split("") ;
let frequency13 : any = {} ;

for (let i=0 ; i <=letters13.length-1 ; i++)
{
    if (letters13[i] in frequency13)
    {
        frequency13[letters13[i]] = frequency13[letters13[i]] + 1 ;
    }
    else
    {
        frequency13[letters13[i]] = 1
    }
}
console.log(frequency13);
let duplicate : any = []
for (let j=0 ; j<=letters13.length-1 ; j++)
{
    if (frequency13[letters13[j]] > 1 && !duplicate.includes(letters13[j]))        
    {
        
        duplicate.push(letters13[j]) ;

    }
}
console.log(duplicate);