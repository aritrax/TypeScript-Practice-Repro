//Question : First & second largest
//Input : [10,5,20,8,15] 
//Expected Output : First = 20, Second = 15 

const numbers3 : number[] = [10,5,20,8,15] ;
let first: number = numbers3[0];
let second: number = numbers3[0];

for (let i=0 ; i <= numbers3.length-1 ; i++)
{
    if(numbers3[i]> first)
    {
        second = first ;
        first = numbers3[i] ;
    }

    else if (numbers3[i] > second)
    {
        second = numbers3[i]
    }
}

console.log("First =", first);
console.log("Second =", second);
/*
IF current > first
    second = first
    first = current

ELSE IF current > second
    second = current

*/    