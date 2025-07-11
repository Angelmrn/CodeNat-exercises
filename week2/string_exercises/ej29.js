findWord = function (str, word){

    var x = 0, y = 0;

    for (i = 0; i < str.length; i++)
        {
        if(str[i] == word[0])
            {
            for(j = i; j < i + word.length; j++)// Start checking from the current index i
               {
                if(str[j] == word[j - i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y = 0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}

console.log(findWord('The quick brown fox', 'fox'));
console.log(findWord('aa, bb, cc, dd, aa', 'aa'));
console.log(findWord('aa, bb, cc, dd, aa', 'bb'));