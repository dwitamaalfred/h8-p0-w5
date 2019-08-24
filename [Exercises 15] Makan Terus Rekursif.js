// function makanTerusRekursif(waktu) {
//   var refill = 15
//   var chance = Math.ceil(waktu / refill)
//   return chance
// }



function makanTerusRekursif(waktu) {
    if (waktu <= 0) {
      return 0
    } else {
      return 1 + makanTerusRekursif(waktu-15)
    }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  //1 + 1 + 1 + 1 + 1 + makanTerusRekursif(-6)
  console.log(makanTerusRekursif(100)); // 7
  //1 + 1 + 1 + 1 + 1 + 1 + 1 + makanTerusRekursif(-10)
  console.log(makanTerusRekursif(90)); // 6
  //1 + 1 + 1 + 1 + 1 + 1 + makanTerusRekursif(0) 
  console.log(makanTerusRekursif(10)); // 1
  // 1 + makanTerusRekursif(-5)
  // 1 + 0
  console.log(makanTerusRekursif(0)); // 0
  //  0