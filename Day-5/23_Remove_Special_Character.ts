// Question : 23 Remove special characters 
// Input : "Hello@123#World!" 
// Output : "Hello123World"

function removeSpecialCharacters(sentence: string) {
    return sentence.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeSpecialCharacters("Hello@World#123!"));