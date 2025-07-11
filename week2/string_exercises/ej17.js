stringChop =  function(str, size){
      if (str == null) {
        return [];
    }else{
        str = String(str);// Convert the input to a string
        size = ~~size;// Convert the size to an integer
    }
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str]; // Split the str into chunks of the specified "size"
}


console.log(stringChop('w3resource'));
console.log(stringChop('w3resource',2));
console.log(stringChop('w3resource',3));