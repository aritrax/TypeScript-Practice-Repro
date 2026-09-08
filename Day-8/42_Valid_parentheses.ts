// Question: Valid Parentheses
// Input: "({[]})"
// Output: true

function validParentheses(input: string) {
    let stack: string[] = [];

    for (let i = 0; i < input.length; i++) {

        // Opening bracket → push into stack
        if (input[i] === "(" || input[i] === "{" || input[i] === "[") {
            stack.push(input[i]);
        }

        // Closing bracket → pop and check
        if (input[i] === ")" || input[i] === "}" || input[i] === "]") {

            if (stack.length === 0) {
                return false;
            }

            const last = stack.pop();

            if (
                (input[i] === ")" && last !== "(") ||
                (input[i] === "}" && last !== "{") ||
                (input[i] === "]" && last !== "[")
            ) {
                return false;
            }
        }
    }

    // No unmatched opening brackets
    return stack.length === 0;
}

console.log(validParentheses("({[]})")); // true
console.log(validParentheses("([)]"));   // false
console.log(validParentheses("((("));    // false