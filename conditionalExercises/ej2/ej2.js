function singOfThreeNumbers(n1, n2, n3){

  if(n1 > 0 && n2 > 0 && n3 > 0){
      alert("All numbers are positive");
  }else if(n1 < 0 && n2 < 0 && n3 < 0){
      console.log("All numbers are negative");
  }else if (n1 > 0 && n2 < 0 && n3 < 0) {
    console.log("The sign is +");
  } else if (n1 < 0 && n2 > 0 && n3 < 0) {
    console.log("The sign is +");
  } else {
    console.log("The sign is -");
  }
}


singOfThreeNumbers(-1, -5, -3);
singOfThreeNumbers(1, -2, -3);
