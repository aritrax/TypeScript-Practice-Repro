//Question : Case-insensitive error count  
//Input : ["Syntax Error","SyntaxError","syntax error","Locator Issue","SYNTAX ERROR"] 
//Output : Syntax Error = 3, SyntaxError = 1, Locator Issue = 1

function caseInsensitiveErrorCount(errors : string[])
{
    let frequency: any = {};

    for (let i = 0; i < errors.length; i++) {
        const error = errors[i].toLowerCase();
        if (error in frequency)
        {
            frequency[error] = frequency[error] + 1 
        }
        else
        {
            frequency[error] = 1
        }
    }
    return frequency;
}
console.log(caseInsensitiveErrorCount(["Syntax Error","SyntaxError","syntax error","Locator Issue","SYNTAX ERROR"])) ;
