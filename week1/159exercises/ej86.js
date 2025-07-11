function angleType(angle) {
  if(angle < 90) {
    return "Acute angle.";  //An angle between 0 and 90 degrees.
  }
  if(angle === 90) {
    return "Right angle.";  // An 90 degree angle.
  }
  if(angle < 180) {
    return "Obtuse angle."; // An angle between 90 and 180 degrees.
  }
  return "Straight angle.";  // An angle of exactly 180 degrees.
}


console.log(angleType(47));   // Acute angle.
console.log(angleType(90));   // Right angle.
console.log(angleType(145));  // Obtuse angle.
console.log(angleType(180));  // Straight angle.