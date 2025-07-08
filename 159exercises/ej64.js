function conctstr(str1, str2){
    min = Math.min(str1.length, str2.length);

    return str1.substring(str1.length - min) + str2.substring(str2.length - min);
}

console.log(conctstr("hello", "world")); // "hellorld"
console.log(conctstr("Python", "JS"));
console.log(conctstr("ab", "cdef")); 
console.log(conctstr("abcdef", "123456")); // "abc456"