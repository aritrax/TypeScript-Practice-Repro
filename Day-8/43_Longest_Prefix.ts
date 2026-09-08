//Question : Longest Prefix 
// Input : ["flower","flow","flight"]
// Output : "fl" 

function longestCommonPrefix(words: string[]) {
    let output = "";

    for (let i = 0; i < words[0].length; i++) {

        // We are checking ONE character position
        let match = true;

        for (let j = 1; j < words.length; j++) 
        {

            if (words[0][i] !== words[j][i]) 
            {
                match = false;
                break;
            }
        }

        // Only add the character AFTER checking all words
        if (match) 
        {
            output = output + words[0][i];
        } 
        else 
        {
            break;
        }
    }

    return output;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));