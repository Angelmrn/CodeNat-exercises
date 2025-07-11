function cityname(str) {
  if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New'))) {
    return str;
  }else{
    return "";
  }
}

console.log(cityname("Los Angeles"));
console.log(cityname("New York"));
console.log(cityname("San Francisco"));
console.log(cityname("Los"));