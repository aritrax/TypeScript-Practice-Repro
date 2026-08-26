// Question : Odd Even Check 
// Input : 10 
// Output : "Even"

function OddEvenCheck(target: number)
{   
    if (target % 2 === 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}

console.log(OddEvenCheck(10)) ;
console.log(OddEvenCheck(11)) ;