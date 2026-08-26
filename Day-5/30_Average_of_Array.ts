//Question : Average of array 
// Input : [10,20,30,40] 
// output : 25

function averageArray(numbers: number[])
{   
    let sum : number = 0  ;
    for (let i =0 ; i < numbers.length ; i++)
    {
        sum = sum + numbers[i]
    }

    return sum / numbers.length;
}

console.log(averageArray([10,20,30,40])) ;

//=========================================//

function averageArray2(numbers: number[]) {
    const sum = numbers.reduce((total, current) => total + current, 0);
    return sum / numbers.length;
}

console.log(averageArray2([10, 20, 30, 40]));