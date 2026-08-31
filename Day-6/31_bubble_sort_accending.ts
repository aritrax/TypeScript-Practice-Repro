//Question :  Bubble sort ascending  
// Input : [5,2,8,1,3] 
// Output :[1,2,3,5,8] 

function bubbleSortasending(numbers : number[])
{
    let temp : any ;

    for (let i = 0 ; i < numbers.length ; i ++)
    {
        for (let j = i+1 ; j< numbers.length ; j++ )
        {
            if ( numbers[i]>numbers[j])
            {   
                temp = numbers[i]
                numbers[i] = numbers[j];
                numbers[j] = temp;   
            }
        }
    }

    return numbers ;
}

console.log(bubbleSortasending([5,2,8,1,3] )) ;