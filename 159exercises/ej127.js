function reverseBits(n) {
    // Convert number to binary and split into array of bits
    let t = n.toString(2).split("");

    // Add leading zeroes to make the length of the binary string 8
    for (let i = 0; i < 8 - t.length; i++) {
        t.unshift("0");
    }
    // Reverse the bits and convert the binary string back to a number
    return parseInt(t.reverse().join(""), 2);
}


// 14 -> 00001110 -> 01110000 -> 112
console.log(reverseBits(14));
// 56 -> 00111000 -> 00011100 -> 28
console.log(reverseBits(56));
// 234 -> 11101010 -> 01010111 -> 87
console.log(reverseBits(234));
// 255 -> 11111111 -> 11111111 -> 255
console.log(reverseBits(255));