function checknumberPyT(str){
    var numP = str.replace(/[^pP]/g, "").length;
    var numT = str.replace(/[^tT]/g, "").length;

    return numP === numT;

}

console.log(checknumberPyT("paatpss"));
console.log(checknumberPyT("paatps"));
console.log(checknumberPyT("paatpssT"));