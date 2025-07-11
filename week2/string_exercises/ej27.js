ASCIIHexadecimal = function (str)
{
    var arr = [];
    
    for (var i = 0, l = str.length; i < l; i++)
    {
        var hex = Number(str.charCodeAt(i)).toString(16);//Convert each character to its ASCII code, then to hexadecimal
        arr.push(hex);
    }
    
    return arr.join('');
}

console.log(ASCIIHexadecimal('12'));
console.log(ASCIIHexadecimal('100'));
console.log(ASCIIHexadecimal('Hello World!'));
