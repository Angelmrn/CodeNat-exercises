generateGUID = function (len) {

    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        length = len || 32;// Default length is 32 if no argument is provided.

    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * chars.length));// Randomly select a character from 'chars' and add it to the buffer.
    }

    return buf.join('');
}

console.log(generateGUID());
console.log(generateGUID(15));
console.log(generateGUID(8));