//Question : Character frequency
//Input : "hello"
//Output : {h:1, e:1, l:2, o:1}

const word10 = "hello" ;
let frequency: any = {} ;
const letters10 = word10.split("") ;
for (let i = 0 ; i <= letters10.length-1 ; i ++)
{
    if (letters10[i] in frequency)
    {
        frequency[letters10[i]] = frequency[letters10[i]] + 1;
    }
    else 
    {
        frequency[letters10[i]] = 1;
    }
}
console.log(frequency)
