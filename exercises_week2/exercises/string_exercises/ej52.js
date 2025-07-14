const test = (word) => {

    if (typeof word !== 'string') {
        return 'It must be string';
    }

    const upperChars = word.toUpperCase().replace(/[^A-Z]/g, '');
    const adjacentDiffList = [];

    for (let i = 0; i < upperChars.length - 1; i++) {
        const { [i]: char, [i + 1]: adjacentChar } = upperChars;// Get the current character and the next character
        if (char !== adjacentChar) {
            adjacentDiffList.push(//if the characters are not equal, calculate the absolute difference between their char codes
                Math.abs(char.charCodeAt() - adjacentChar.charCodeAt())
            );
        }
    }
    for (let i = 0; i < adjacentDiffList.length - 1; i++) {
        const { [i]: charDiff, [i + 1]: secondCharDiff } = adjacentDiffList;// Get the current difference and the next difference
        if (charDiff > secondCharDiff) {
            return false;
        }
    }
    return true;
};

console.log(test('acgl'));   
console.log(test('aebc'));  
console.log(test(12356));   