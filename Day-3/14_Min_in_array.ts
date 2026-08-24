//Question : Minimum in array
//Input : [10,25,7,40,15]
//Output : 7

function Minimum(numbers: number[])
{
    let min : number = numbers[0]
    for(let i =0 ; i< numbers.length-1 ; i++)
    {
        if (numbers[i]<min)
        {
            min = numbers[i]
        }
    }
    return min ;
}

console.log(Minimum([10,25,7,40,15]))