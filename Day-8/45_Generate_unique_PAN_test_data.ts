//Question : Generate unique PAN test data 
// Input : Generate 3 PAN-like values  (5 letters + 4 digits + 1 letter)
// Output : Synthetic dummy PAN-format strings* // ABCDE1234F

function randomLetters() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "" ;
    for (let i = 0 ; i < 5 ; i ++)
    {
        const randomLetter1 =  letters[Math.floor(Math.random() * letters.length)] ;
        result = result + randomLetter1 ;
    }
    return result ;
}

function randomDigits() {
    let result = "" ;
    for (let i = 0 ; i < 4 ; i ++)
    {
        const randomNumber = Math.floor(Math.random() * 10) ;
        result = result + randomNumber ;
    }
    return result ;
}

function randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter =  letters[Math.floor(Math.random() * letters.length)] ;
    return randomLetter ;
}

function generatePAN() {
    const letters = randomLetters();  // 5 letters
    const digits = randomDigits();    // 4 digits
    const lastLetter = randomLetter(); // 1 letter

    const pan = letters + digits + lastLetter;

    return pan;

}

function generatePAN3() 
{
    let result : string[] = [] ;
    for (let i = 0 ; i < 3 ; i++)
    {
        const pan = generatePAN() ;
        if (!result.includes(pan)) 
        {
            result.push(pan);
        }
    }
    return result ;
}

console.log(generatePAN3()) ;