function formatted_string(pad, str, pad_pos) {
  if (typeof str === 'undefined') 
    return pad;
  if (pad_pos == 'l') {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));