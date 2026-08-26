// Question : Factorial 
// Input : 5 
//Output : 120 

function Factorial(target:number)
{
    let result = 1 ;
    if (target==0)
    {
        result = 1 ;
    }
    else{
        for (let i=1 ; i<= target ; i ++)
        {
        result = result * i 
        }
    }
    return result ; 
}
console.log(Factorial(5));
console.log(Factorial(0));