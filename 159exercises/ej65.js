function endsWithScript(str) {
    // Check if the string ends with 'Script'
  if (str.substring(str.length - 6, str.length) == 'Script') {
    return true;

  } else {
    return false;
  }
}


console.log(endsWithScript("JavaScript"));
console.log(endsWithScript("Java Script"));
console.log(endsWithScript("Java Scripts"));