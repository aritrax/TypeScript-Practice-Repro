//Question : Print Duplicates 
//Input : [1,2,3,2,4,1,5] 
//Output : [2,1] 

const numbers2 : number[] = [1,2,3,2,4,1,5] ; 
let seen : number[] = [] ;
let duplicate1 : number[] = []

for (let i=0 ; i<= numbers2.length-1 ; i++)
{
    if (!seen.includes(numbers2[i]))
    {
        seen.push(numbers2[i]);
    }
    else
    {
        duplicate1.push(numbers2[i]) ;
    }

}

//console.log(seen) ;
console.log(duplicate1) ;