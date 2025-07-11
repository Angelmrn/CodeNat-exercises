const validParentheses = (text) => {
  if (typeof text !== 'string') {
    return 'It must be string'
  }
  
  const stack = []
  const result = new Array(text.length ).fill(-Infinity)// Initialize an array to store the result, filled with -Infinity
  for (let i = 0; i < text.length ; i++) {
    const bracket = text[i]
    // If the current bracket is ']' and the top of the stack contains '[', mark the current index as valid
    if (bracket === ']' && text[stack[stack.length - 1]] === '[') {
      result[i] = 1
      result[stack[stack.length - 1]] = 1
      stack.pop()
    } 
    // If the current bracket is not a closing bracket, push its index to the stack
    else {
      stack.push(i)
    }
  }
  for (let i = 1; i < text.length ; i++) {
    result[i] = Math.max(result[i], result[i] + result[i - 1])
  }
  result.push(0)
  return Math.max(...result)
}

console.log(validParentheses("[[]")) 
console.log(validParentheses("][][]]")) 
console.log(validParentheses("")) 