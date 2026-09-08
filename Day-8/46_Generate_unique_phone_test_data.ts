// Question : Generate unique phone test data 
// Input : Generate 3 numbers  
//Output : Synthetic dummy 10-digit numbers* 

function generateNumbers()
{
    let result = "" ;
    for (let i = 0 ; i < 10 ; i ++)
    {
        const randomNumber = Math.floor(Math.random() * 10) ;
        result = result + randomNumber ;
    }
    return result ;
}

function generateNumbers3()
{
    let result : string[] = [] ;
    for (let i = 0 ; i < 3 ; i++)
    {
        const number = generateNumbers() ;
        if (!result.includes(number)) 
        {
            result.push(number);
        }
    }
    return result ;
}

console.log(generateNumbers3()) ;