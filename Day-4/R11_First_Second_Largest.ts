// R11 First & Second Largest 

function firstandsecondLarget(numbers: number[])
{
    let first = numbers[0] ;
    let second =numbers[0] ;

    for (let i=0 ; i< numbers.length ; i++)
    {
        if (numbers[i]>first)
        {
            second = first ;
            first = numbers[i] ;
        }
        else if (numbers[i]>second && numbers[i]<first)
        {
            second = numbers[i] ;
        }
    }
    return [first , second] ;
}
console.log(firstandsecondLarget([23,1,45,34,7,40]))
