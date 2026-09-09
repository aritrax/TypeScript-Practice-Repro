// Question: Frequency-based output
// Input:  [1,2,2,3,3,3]
// Output: [1,2,0,3,0,0]

function frequencyOutput(numbers: number[]) {

    let frequency: any = {};

    // Step 1: Count frequency
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] in frequency) {
            frequency[numbers[i]]++;
        } else {
            frequency[numbers[i]] = 1;
        }
    }

    // Step 2: Build output
    let result: number[] = [];
    let seen: number[] = [];

    for (let i = 0; i < numbers.length; i++) {

        if (!seen.includes(numbers[i])) {

            result.push(frequency[numbers[i]]);
            seen.push(numbers[i]);

        } else {

            result.push(0);
        }
    }

    return result;
}

console.log(frequencyOutput([1, 2, 2, 3, 3, 3]));