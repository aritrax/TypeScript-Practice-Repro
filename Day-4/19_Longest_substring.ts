// Question: Longest substring without repeating characters
// Input: "abcabcbb"
// Output: "abc" / 3

function longestSubstring(word: string): string {

    let current: string[] = [];
    let longest: string[] = [];

    const letters = word.split("");

    for (let i = 0; i < letters.length; i++) {

        while (current.includes(letters[i])) 
        {
            current.shift();
        }

        current.push(letters[i]);

        if (current.length > longest.length) 
        {
            longest = [...current];
        }
    }

    return longest.join("");
}

console.log(longestSubstring("abcabcbb"));