//Question : Two Sum 
//Input : [2,7,11,15], target=9 
//Output : [2,7]

function twoSum(numbers: number[] , target : number)
{   
    let output : number[] = []
    for (let i=0 ; i <numbers.length ; i++)
    {
        for (let j=i+1 ; j< numbers.length ; j++)
        {
            if (numbers[i] + numbers[j] === target)
            {
                output.push(numbers[i])
                output.push(numbers[j])
            }
        }
    }
    return output
}
console.log(twoSum([2,7,11,15],9))