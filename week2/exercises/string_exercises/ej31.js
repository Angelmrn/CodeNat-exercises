escape_html = function (str) {
  
 if ((str===null) || (str===''))
       return false;
 else
   str = str.toString();
  
  var map = {
    '&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;'
  };

  return str.replace(/[&<>"']/g, function(m) { return map[m]; });// Replace special characters with HTML entities "map"
}
console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));
console.log(escape_html('3 < 2'));