// Two Sum 

function twosum(numbers : number[] , target : number)
{
    let twosum : any = []
    
    for (let i=0 ; i<numbers.length ; i++)
    {
        for (let j= i+1 ; j<numbers.length ; j++)
        {
            if (numbers[i]+numbers[j] == target)
            {
                twosum.push(numbers[i]) ;
                twosum.push(numbers[j]) ;
            }
        }
    } 

    return twosum
}

console.log(twosum([2,7,11,15],9))