alphabetizeString = function (str) 
{
    return str.split('').sort().join('').trim();
}

console.log(alphabetizeString('United States'));
console.log(alphabetizeString('Hello World!'));