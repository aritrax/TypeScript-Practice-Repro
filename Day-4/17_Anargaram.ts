// Question: Anagram Check
// Input: "listen", "silent"
// Output: true

function anagram(word1: string, word2: string): boolean {

    const letters1 = word1.toLowerCase().split("");
    const letters2 = word2.toLowerCase().split("");

    if (letters1.length !== letters2.length) {
        return false;
    }

    let frequency: any = {};

    // Count characters from word1
    for (let i = 0; i < letters1.length; i++) {
        if (letters1[i] in frequency) {
            frequency[letters1[i]] = frequency[letters1[i]] + 1;
        }
        else {
            frequency[letters1[i]] = 1;
        }
    }

    // Subtract characters from word2
    for (let j = 0; j < letters2.length; j++) {
        if (letters2[j] in frequency) {
            frequency[letters2[j]] = frequency[letters2[j]] - 1;
        }
        else {
            return false;
        }
    }

    // Check remaining frequencies
    const keys = Object.keys(frequency);

    for (let k = 0; k < keys.length; k++) {
        if (frequency[keys[k]] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(anagram("listen", "silent")); // true
console.log(anagram("listen", "hello"));  // false