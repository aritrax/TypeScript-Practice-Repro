//Question : Prime Number
//Input : 17 
//Output : True 

function isPrime(target: number) 
{
    for (let i=2 ; i < target ; i++ )
    {
        if (target % i === 0)
        {
            return false ;
        }
    }
    return true ; 
}
console.log(isPrime(17)) ;
console.log(isPrime(39)) ;