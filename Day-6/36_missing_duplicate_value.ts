function missing_duplicate(number: number[])
{
    let frequency: any = {};
    let duplicate: number[] = [];
    let missing: number[] = [];

    // Count frequency
    for (let i = 0; i < number.length; i++)
    {
        if (number[i] in frequency)
        {
            frequency[number[i]]++;
        }
        else
        {
            frequency[number[i]] = 1;
        }
    }

    // Find duplicate
    for (let j = 0; j < number.length; j++)
    {
        if (frequency[number[j]] > 1)
        {
            duplicate.push(number[j]);
            break;
        }
    }

    // Find missing
    for (let k = 1; k <= number.length; k++)
    {
        if (!(k in frequency))
        {
            missing.push(k);
            break;
        }
    }

    return [missing, duplicate];
}

console.log(missing_duplicate([1,2,3,3,5]));