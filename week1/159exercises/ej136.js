function replaceDig(str) {
  return str.replace(/[0-9]/, '$');
}

console.log(replaceDig("abc1dabc"));
console.log(replaceDig("p3ython"));
console.log(replaceDig("ab1cabc"));
console.log(replaceDig("12345"));