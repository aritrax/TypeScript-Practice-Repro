//Question : Merge arrays
// Input : [1,2,3], [4,5,6]
//Output : [1,2,3,4,5,6] 

function mergearray(numbers1 : number[] , numbers2 : number[])
{
    let number : number[] = []

    for(let i = 0 ; i<numbers1.length ; i ++)
    {
        number.push(numbers1[i]) ;
    }

    for(let j = 0 ; j<numbers2.length ; j ++)
    {
        number.push(numbers2[j]) ;
    }

    return number ;
}
console.log(mergearray([1,2,3], [4,5,6]));