//Two Sums 

function twosums(numbers: number[] , target: number)
{
    let result : any = []

    for (let i =0 ; i < numbers.length ; i ++)
    {
        for (let j = i+1 ; j<numbers.length ; j++)
        {
            if (target === numbers[i]+numbers[j])
            {
                result.push(numbers[i]);
                result.push(numbers[j]);
            }
        }
    }
    return result ;
}

console.log(twosums([2,7,11,15],9)) ;