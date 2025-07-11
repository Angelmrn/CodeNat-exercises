function correctSentence(input_str) {

    var first_char = input_str[0];
    var last_char = input_str[input_str.length - 1];
    // Check if the first character is an uppercase letter and the last character is a period
    return /[A-Z]/.test(first_char) && last_char == ".";
}

// Examples of checking correct sentences using the function
console.log(correctSentence("This tool will help you write better English and efficiently corrects texts.")); 
console.log(correctSentence("This tool will help you write better English and efficiently corrects texts")); 
console.log(correctSentence("this tool will help you write better English and efficiently corrects texts.")); 
console.log(correctSentence("This tool will help you write better English and efficiently corrects texts."));
console.log(correctSentence("This tool will help you write better English and efficiently corrects texts."));