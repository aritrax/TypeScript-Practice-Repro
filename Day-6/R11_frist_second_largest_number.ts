// First and Second Largest Number 

function twolargestnumbers(numbers : number[])
{
    let first = numbers[0] ;
    let second= numbers[0] ;

    for (let i=0 ; i < numbers.length ; i++)
    {
        if (numbers[i] > first)
        {
            second = first ;
            first = numbers[i]
        }
        else if (numbers[i] > second && numbers[i]<first)
        {
            second = numbers[i] ;
        }
    }

    return [first , second]
}

console.log(twolargestnumbers([10,5,20,8,15])) ;