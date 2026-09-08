//Question : Intersection of Array 
//Input : [1,2,3,4], [2,4,6,8]
//Output : [2,4] 

function intersection(numbers1: number[], numbers2: number[]) {
    let result: number[] = [];

    for (let i = 0 ; i < numbers1.length ; i ++)
    {
        if (numbers2.includes(numbers1[i]))
        {
            result.push(numbers1[i]) ;
        }
    }

    return result;
}

console.log(intersection([1,2,3,4], [2,4,6,8])) ;