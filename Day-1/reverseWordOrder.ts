//Question : Reverse word order
//Input : "I love Playwright" 
//Output : "Playwright love I"

const sentence2 : string = "I love Playwright"  ;
const words4 : string[] = sentence2.split(" ")  ;
console.log(words4) ;
let result4 : string = ""
for (let i =(words4.length-1) ; i >=0 ; i--)
{
    result4 = result4 + words4[i]
    if (i > 0)
    {
    result4 = result4 + " "
    }
}
console.log(result4)