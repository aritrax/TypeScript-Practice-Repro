//Question : Reverse each word 
//Input : "Hellow World"
//Output : "olleH dlroW"

const sentence : string = "Hello World" ; 
const words3 : string[] = sentence.split(" ")
let result3 : string = "" ;
for (let i = 0; i < words3.length; i++)
{
    for (let j= words3[i].length - 1 ; j >=0 ;j --)
    {
        result3 = result3 + words3[i][j]
    }
    result3 = result3 + " ";
}
console.log(result3) ;