//Question : Bubble sort descending
//Input : [5,2,8,1,3] 
//Output : [8,5,3,2,1]

function bubbleSortdescending(numbers : number[])
{
    let temp : number ;

    for(let i = 0 ; i < numbers.length ; i++)
    {
        for(let j =i+1 ; j < numbers.length ; j++)
        {
            if (numbers[i]<numbers[j])
            {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers ;
}
console.log(bubbleSortdescending([5,2,8,1,3])) ;