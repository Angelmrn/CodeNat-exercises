insertString = function (str, ins_string, pos) {
   if(typeof(pos) == "undefined") { // Set default position to 0
    pos = 0;
  }
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }else{
       return str.slice(0, pos) + ins_string + str.slice(pos); // Insert ins_string at position pos in str
  }
}
console.log(insertString('We are doing some exercises.','JavaScript '));
console.log(insertString('We are doing some exercises.','JavaScript ',18));