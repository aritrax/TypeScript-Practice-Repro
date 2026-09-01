// Difference Bw 1st and 2nd Number 

function diff_first_second(numbers : number[])
{
    let first = numbers[0] ;
    let second = numbers[0] ;

    for (let i =0 ; i < numbers.length ; i ++)
    {
        if (numbers[i]>first)
        {
            second = first ; 
            first = numbers[i] ;
        }
        else if (numbers[i]>second && numbers[i]<first)
        {
            second = numbers[i] ;
        }
    }
    return (first - second ) ;
}

console.log(diff_first_second([10, 5, 20, 8, 15])) ;