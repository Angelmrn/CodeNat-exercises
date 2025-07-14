NnonWord = function  (str) {
    if ((str===null) || (str===''))
       return false;
    else
       str = str.toString();
  
    return str.replace(/[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g, ''); // Replace non-word characters with an empty string
}

console.log(NnonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));