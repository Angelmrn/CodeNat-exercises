truncate_string = function (str1, length) {

    if ((str1.constructor === String) && (length>0)) {// Check if str1 is a string and length is greater than 0
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));
console.log(truncate_string("Robin Singh", 10));