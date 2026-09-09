//Question : Find all palindromic substrings
//Input : "madam"  
//Output : ["ada","madam"]

function palindromicSubstrings(word: string) {

    let result: string[] = [];

    // Generate every possible substring
    for (let i = 0; i < word.length; i++) {

        for (let j = i + 2; j <= word.length; j++) {

            const substring = word.slice(i, j);

            // Reverse the substring
            const reversed = substring.split("").reverse().join("");

            // Check if palindrome
            if (substring === reversed) {
                result.push(substring);
            }
        }
    }

    return result;
}

console.log(palindromicSubstrings("madam"));