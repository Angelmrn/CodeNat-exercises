nonPrintable = function (str) {

  if ((str===null) || (str===''))
       return false;
  else
    str = str.toString();
  
  return str.replace(/[^\x20-\x7E]/g, '');// Replace non-printable characters with an empty string
}

console.log(nonPrintable('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
