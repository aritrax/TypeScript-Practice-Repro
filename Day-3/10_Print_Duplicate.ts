// Print Duplicate 

function printDuplicate(numbers: number[])
{
    let seen : number[] = [] ;
    let duplicate : number[] = [] ;
    
    for (let i =0 ; i <numbers.length ; i++)
    {
        if (!seen.includes(numbers[i]))
        {
            seen.push(numbers[i]) ;
        }
        else
        {
            duplicate.push(numbers[i]) ;
        }  
    }

    return duplicate;
}

console.log(printDuplicate([1,2,3,2,4,1,5]))