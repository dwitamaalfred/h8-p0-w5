function changeVocals (str) {
  //code di sini
  var newStr = str.split('')
  var huruf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var vokal = 'aeiouAEIOU'
  var output = ''

  for(var i = 0; i < newStr.length; i++){
      for(var j = 0; j<vokal.length; j++){
          for(var k = 0; k<huruf.length; k++){
            if(newStr[i]=== vokal[j] && newStr[i] === huruf[k]){
              index = k+1
              newStr[i] = huruf[index]
          }
        }

   
      }
      output += newStr[i]
    }
    
    return output
}


function reverseWord (str) {
  var balikKata = ''
  for(var i = 0; i<str.length; i++){
    balikKata = str[i] + balikKata
  }
  //code di sini
  return balikKata
}

function setLowerUpperCase (str) {
  var resetKata = ''
  var upperCase = str.toUpperCase();
  var lowerCase = str.toLowerCase();

  for(var i = 0; i<str.length; i++){
    if(str[i] === upperCase[i]){
      resetKata += lowerCase[i]
    }
    if(str[i] === lowerCase[i]){
      resetKata += upperCase[i]
    }
  }
  //code di sini
  return resetKata
}

function removeSpaces (str) {
  //code di sini
  var removeSpace = ''
  for(var i = 0; i<str.length; i++){
    if(str[i] !== ' '){
      removeSpace += str[i]
    }
  }
  return removeSpace
}

function passwordGenerator (name) {
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  //code di sini
  var gantiVokal = changeVocals (name);
  var balikKata = reverseWord (gantiVokal);
  var tukarKata = setLowerUpperCase (balikKata);
  var tanpaSpasi = removeSpaces (tukarKata);

  return tanpaSpasi
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'