//Question : Missing number 
// Input : [1,2,3,5,6] 
// Output : 4

function missingNumber(numbers : number[])
{
    for (let i = 1; i <= numbers.length; i++)
    {
        if(!numbers.includes(i))
        {
            return i ;
        }
    }

}
console.log(missingNumber([1,2,3,5,6]))
