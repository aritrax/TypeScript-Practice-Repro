// #35 — Count Array Values
//Input:  [1,2,2,3,3,3]
//Output: {1:1, 2:2, 3:3}

function countArray(numbers: number[])
{
    let frequency : any = {} ;
    
    for (let i=0 ; i<numbers.length ; i++)
    {
        if ((numbers[i] in frequency))
        {
            frequency[numbers[i]] = frequency[numbers[i]] + 1 ;
        }
        else
        {
            frequency[numbers[i]] = 1 ;
        }
    }

    return frequency ;
}

console.log(countArray([1,2,2,3,3,3])) ;