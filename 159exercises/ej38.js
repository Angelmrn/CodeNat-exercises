function totalmarks(marks, type){
    if(type === "exam"){
        return marks >= 89;
    }else if(type == "final-exam"){
        return marks >= 90;
    }else{
        return false;
    }
}

console.log(totalmarks(90, "exam")); // Output: true
console.log(totalmarks(90, "final-exam")); // Output: true
console.log(totalmarks(90, "quiz")); // Output: false
console.log(totalmarks(89, "final-exam")); // Output: false
console.log(totalmarks(89, "")); // Output: false