function makeid(large) {

  var id = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < large; i++) {
    id += char_list.charAt(Math.floor(Math.random() * char_list.length));// Generate a random character from the char_list 
  }

  return id;
}

console.log(makeid(8));
console.log(makeid(16));