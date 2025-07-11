function simplifyPath(main_path) {
  
  var parts = main_path.split('/');
  var newPath = [];
  var length = 0; 

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && length > 0) {
        length--; // If the part is '..', remove the last valid part if it exists
      }
      continue;
    }
    newPath[length++] = part; // If the part is valid, add it to the new path
  }

  if (length === 0) {
    return '/';
  }

  var result = '';
  for (var i = 0; i < length; i++) {
    result += '/' + newPath[i]; // Append parts of the new path separated by '/'
  }

  return result;
}

console.log(simplifyPath("/home/var/./www/../html//sql/")); // Output: '/home/var/html/sql' 
console.log(simplifyPath("/../")); // Output: '/'
console.log(simplifyPath("/home//foo/")); // Output: '/home/foo'