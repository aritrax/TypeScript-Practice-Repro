// Question : Generate unique Aadhaar test data
// Input : Generate 3 test values 
// Output : Synthetic dummy 12-digit numbers* 

function uniqueAdhaar()
{
    let result = "" ;
    for (let i = 0 ; i < 12 ; i ++)
    {
        const randomNumber = Math.floor(Math.random() * 10) ;
        result = result + randomNumber ;
    }
    return result ;
}

function uniqueAdhaar3()
{
    let result : string[] = [] ;
    for (let i = 0 ; i < 3 ; i++)
    {
        const number = uniqueAdhaar() ;
        if (!result.includes(number)) 
        {
            result.push(number);
        }
    }
    return result ;
}

console.log(uniqueAdhaar3()) ;