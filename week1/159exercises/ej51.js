function timeconv(int){
    var hours = Math.floor(int / 60);
    var minutes = int % 60;

    if(hours < 10 && minutes < 10){
        return "0" + hours + ":0" + minutes;
    }else if(hours < 10){
        return "0" + hours + ":" + minutes;
    }else if(minutes < 10){
        return hours + ":0" + minutes;
    }

    return hours + ":" + minutes;
}

console.log(timeconv(120)); // "02:00"
console.log(timeconv(90));  // "01:30"
console.log(timeconv(450));  // "07:30"
console.log(timeconv(1441)); // "24:01"