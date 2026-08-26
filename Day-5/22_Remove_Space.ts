//Question : Remove Space
//Input : "Hello World Test"
//Output : "HelloWorldTest"

function removeSpace(sentence:string)
{
    const word = sentence.split(" ") ;
    const removeSpaceSentence = word.join("")
    return removeSpaceSentence ;
}

console.log(removeSpace("Hello World Testing")) ;

