function unique_char(str) {
  var uniql = "";

  for (var i = 0; i < str.length; i++) {
    // Check if the current character is not already in the uniql string
    if (uniql.indexOf(str.charAt(i)) == -1) {
      uniql += str[i];
    }
  }
  return uniql;
}

// Log the result of calling unique_char with the input string "thequickbrownfoxjumpsoverthelazydog" to the console
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog")); 