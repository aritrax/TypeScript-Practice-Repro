//Question : Fibonacci Series 
//Input :  7 
//Output : [0, 1, 1, 2, 3, 5, 8]

function Fibonacci(target:number)
{
    let a = 0;
    let b = 1;
    let result = [a, b];

    for (let i = 0; i < target-2 ; i++) 
    {
        let c = a +b ; 
        result.push(c) ;
        a = b ;
        b = c  ;
    }   

    return result;
}

console.log(Fibonacci(9));