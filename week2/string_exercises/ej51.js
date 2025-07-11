const buildBadMatchTable = (str) => {
  const tableObj = {} 
  const strLength = str.length 
  
  for (let i = 0; i < strLength - 1; i++) {
    tableObj[str[i]] = strLength - 1 - i
  }
  // If the last character is not present in the table, add it with the full pattern length
  if (tableObj[str[strLength - 1]] === undefined) {
    tableObj[str[strLength - 1]] = strLength
  }
  return tableObj
}

const boyerMoore = (str, pattern) => {
  const badMatchTable = buildBadMatchTable(pattern) 
  let offset = 0 
  const patternLastIndex = pattern.length - 1 // Index of the last character in the pattern
  const maxOffset = str.length - pattern.length // Maximum offset to avoid unnecessary comparisons

  // Iterate through the string until the maximum offset is reached
  while (offset <= maxOffset) {
    let scanIndex = 0 
    // Compare characters of pattern with characters of string starting from current offset
    while (pattern[scanIndex] === str[scanIndex + offset]) {
      if (scanIndex === patternLastIndex) {
        return offset
      }
      scanIndex++ 
    }
    const badMatchString = str[offset + patternLastIndex] // Character causing mismatch in string
    // If bad match character is present in the table, move offset accordingly
    if (badMatchTable[badMatchString]) {
      offset += badMatchTable[badMatchString]
    } else {
      offset++ // Move one position to the right in the string
    }
  }
  return -1 
}

// Test cases
console.log(boyerMoore('THIS IS A TEST TEXT', 'TEST'))
console.log(boyerMoore('AAIOOOAADDZXYCAADAABAABA', 'AADA')) 