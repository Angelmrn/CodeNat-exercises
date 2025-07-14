humanizeFormat = function (num) {
   if(typeof(num) == "undefined") return;
   
   // if num is in range 11 to 13, return the number followed by "th"
  if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";
        
        switch(num % 10) {
            // if the last digit is 1 return the number followed by "st"
            case 1: return num + "st";
            // if the last digit is 2 return the number followed by "nd"
            case 2: return num + "nd";
            // if the last digit is 3 return the number followed by "rd"
            case 3: return num + "rd";
        }
        // for all other cases, return the number followed by "th"
        return num + "th";
    }


console.log(humanizeFormat());  
console.log(humanizeFormat(1));  
console.log(humanizeFormat(8));    
console.log(humanizeFormat(402));
console.log(humanizeFormat(130));