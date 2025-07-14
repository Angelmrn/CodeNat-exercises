stringEnds = function (str, ends) 
{
    if (((str === null) || (str === '')) || ((ends === null) || (ends === ''))){

        return false;
    }else{     
        str = str.toString();
        ends = ends.toString();
    }
    return str.indexOf(ends, str.length - ends.length) !== -1;// Search for the substring 'ends' at the end of the string 'str'
}

console.log(stringEnds('JS PHP PYTHON', 'PYTHON')); // Output: true
console.log(stringEnds('JS PHP PYTHON', '')); // Output: false