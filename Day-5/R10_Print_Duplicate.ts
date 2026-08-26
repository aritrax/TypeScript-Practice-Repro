//remove duplicate 
//[1,2,2,3,3,4]
//[1,2,3,4]
function printDuplicate(numbers : number[])
{
    let unique: any[] = []
    let duplicate : any[] = []

    for (let i=0 ; i<= numbers.length-1 ; i++)
    {
        if(!unique.includes(numbers[i]))
        {
            unique.push(numbers[i])
        }
        else
        {
            duplicate.push(numbers[i])
        }
    }
    return duplicate ;
}
console.log(printDuplicate([1,2,2,3,3,4])) ;