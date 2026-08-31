//Question : Find Common Elements 
//Input : [1,2,3,4], [3,4,5,6]
//Output : [3,4]

function commonElement(numbers1 : number[] , numbers2 : number[])
{
    let common_element = [] ;

    for (let i=0 ; i < numbers1.length; i++)
    {
        if (numbers2.includes(numbers1[i]))
        {
            common_element.push(numbers1[i]) ;
        }
    }
    return common_element ;
}

console.log(commonElement([1,2,3,4], [3,4,5,6])) ;