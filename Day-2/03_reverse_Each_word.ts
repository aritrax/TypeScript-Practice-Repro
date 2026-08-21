//Question : Reverse each word 
//Input : "Hello World" 
//Output : "olleH dlroW"

const sentence3 : string = "Hello World"  ;
const word8 : string[] = sentence3.split(" ") ;
let reverse_Sentence : string = ""

for (let i=0 ; i < word8.length ; i++)
    {
        for (let j = word8[i].length -1 ; j >=0 ; j--)
        {
            reverse_Sentence = reverse_Sentence + word8[i][j]
        }
        if (i < word8.length-1)
        {
        reverse_Sentence = reverse_Sentence + " "
        }
    }

console.log(reverse_Sentence) ;