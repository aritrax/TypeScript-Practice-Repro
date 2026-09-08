//Question : Move Zero to End 
//Input : [0,1,0,3,12]
//Output : [1,3,12,0,0]

function moveZero(numbers : number[])
{
    //let number = 0 ;
    let numbers2 = []

    for(let i=0 ; i < numbers.length ; i++)
    {
        if(!(numbers[i] === 0))
        {
            numbers2.push(numbers[i]) ;
        }
    }
    for (let j=0 ; j< numbers.length ; j++)
    {
        if(numbers[j ]=== 0)
        {
            numbers2.push(numbers[j]) ;
        }
    }

    return numbers2 ;
}

console.log(moveZero([0,1,0,3,12])) ;