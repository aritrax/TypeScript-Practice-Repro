//Question : Find pairs with target sum
// Input :  [2,4,3,5,7,8], target=10 
// Output : [[2,8],[3,7]]

function target_sum(numbers : number[], target : number)
{   
    let result = [] ; 
    for(let i=0 ; i < numbers.length ; i++)
    {
        for(let j=i+1 ; j< numbers.length ; j++)
        {
            if (numbers[i]+numbers[j] === target)
            {
                result.push([numbers[i], numbers[j]]);
            }
        }
    }
    return result ;
}
console.log(target_sum([2,4,3,5,7,8],10)) ;