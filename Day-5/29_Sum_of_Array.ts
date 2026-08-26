//Question : Sum of Array 
//Input :  [10,20,30,40] 
// Output : 100

function sumofArray(numbers: number[])
{
const sum = numbers.reduce((total, current) => total + current, 0);
return sum ;
}
console.log(sumofArray([10,20,30,40])) ;

///.......................///

function sumofArray2(numbers: number[])
{
    let sum = 0 ;

    for (let i =0 ; i < numbers.length ; i++)
    {
        sum = sum + numbers[i]
    }
    return sum ;
}

console.log(sumofArray2([10,200,10,20])) ;