//Question : Count array values 
// Input : [1,2,2,3,3,3] 
// Output : {1:1,2:2,3:3}

function countArrayValues(number : number[])
{
    let  frequency: any = {};

    for (let i=0 ; i < number.length ; i++)
    {
        if (number[i] in frequency)
        {
            frequency[number[i]] = frequency[number[i]] + 1 ;
        }
        else
        {
            frequency[number[i]] = 1 ;
        }
    }
    return frequency ; 
}
console.log(countArrayValues([1,2,2,3,3,3] ));