function totalDigitRekursif(angka) {
  if(angka % 10 === 0){
   return 0
}
  else{
    return angka%10 + totalDigitRekursif((angka - (angka%10))/10)
  }
}
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5


// function totalDigitRekursif(angka) {


//   if(angka % 10 === 0){
//       return 0
//   }
//   else{
//       return angka % 10 + totalDigitRekursif((angka - angka % 10) / 10)
//   }
// }