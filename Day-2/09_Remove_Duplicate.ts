//Question : Remove duplicates 
// Input : [1,2,2,3,4,4,5]
//Expected Output : [1,2,3,4,5] 

const numbers: number[] = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers: number[] = [...new Set(numbers)];

console.log(uniqueNumbers);

//===============================//
//===============================//

const numbers1: number[] = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers1: number[] = [];

for (let i = 0; i < numbers1.length; i++) {
    if (!uniqueNumbers1.includes(numbers1[i])) {
        uniqueNumbers1.push(numbers1[i]);
    }
}

console.log(uniqueNumbers1);