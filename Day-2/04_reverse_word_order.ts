// Question : Reverse word order
// Input : "I love Playwright"
//Expected Output : ""Playwright love I"

const sentence4 : string = "I love Playwright" ;
const words1 : string[] = sentence4.split(" ") ;
//console.log(words1) ;
const reverse_words1 : string[] = words1.reverse()
//console.log(reverse_words1) ;
const reverse_Sentence2 : string = reverse_words1.join(" ")
console.log(reverse_Sentence2) ;
