// Remove Duplicate 

function removeDuplicate(numbers: number[]) {
    let uniqueNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }

    return uniqueNumbers;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
