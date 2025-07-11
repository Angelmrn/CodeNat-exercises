const test = function(text) {
    if (typeof text !== 'string') {
        return 'It must be string'
    } 
  
    if (text.length==0) {
        return text
    }
    // Initialize a 2D array 'data' with dimensions 'n x n' filled with zeros
    const data = new Array(text.length).fill(0).map(item => new Array(text.length).fill(0).map(item => 0))
    // Set diagonal elements of 'data' to 1
    for (let i = 0; i < text.length; i++) {
        data[i][i] = 1
    }
    for (let i = 1; i < text.length; i++) {
        for (let j = 0; j < text.length - i; j++) {
            const col = j + i
            if (text[j] === text[col]) {
                // Update 'data' with the length of the palindrome by adding 2 to the value of the previous diagonal element
                data[j][col] = 2 + data[j + 1][col - 1]
            } else {
                // Otherwise, update 'data' with the maximum value from the adjacent elements
                data[j][col] = Math.max(data[j][col - 1], data[j + 1][col])
            }
        }
    }
    return data[0][text.length - 1]
}

console.log(test("aaaba"))    
console.log(test("maadaem"))  
console.log(test("zkksk"))    
console.log(test("ab"))     
console.log(test(""))     