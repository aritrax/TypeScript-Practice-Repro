//Question : Diff. between 1st & 2nd largest [10,5,20,8,15] 5
//Input : [10,5,20,8,15]
//Output : 5 

function diffBwLargest(numbers: number[]) {
    let first: number = numbers[0];
    let second: number = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        } else if (numbers[i] > second && numbers[i] < first) {
            second = numbers[i];
        }
    }


    return first - second;
}
console.log(diffBwLargest([10,5,20,8,15])) 