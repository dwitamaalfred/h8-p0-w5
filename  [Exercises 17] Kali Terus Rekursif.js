function kaliTerusRekursif(angka) {

  var hasil = 1
  angka = angka.toString();
  angka = angka.split("");
  
  for(var i = 0; i<angka.length ; i++){
    hasil = hasil * angka[i]
  }
  if(hasil > 9){
    hasil = kaliTerusRekursif(hasil)
  }
  return hasil
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
// 6*6 = 36 ; 3*6 = 24 ; 2*4 = 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6