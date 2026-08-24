//Question : Maximum in array
//Input : [10,25,7,40,15]
//Output : 40

function maximum(numbers: number[])
{
    let max : number = numbers[0]
    for(let i =0 ; i< numbers.length-1 ; i++)
    {
        if (numbers[i]>max)
        {
            max = numbers[i]
        }
    }
    return max ;
}

console.log(maximum([10,25,7,40,15]))