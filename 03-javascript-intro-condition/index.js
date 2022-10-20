// no 1
console.log("");
console.log("Jawaban No. 1");
let namaLengkap = "Yan Danu Tirta";
console.log(namaLengkap);

// no 2
console.log("");
console.log("Jawaban No. 2");
let word = "JavaScript";
let second = "is";
let third = "awesome";

let outputGabunganVariable;
console.log(word + " " + second + " " + third);

// no 3
console.log("");
console.log("Jawaban No. 3");
let hello = "Hello ";
let world = "World!!";

console.log(hello.concat(world));

// no 4
console.log("");
console.log("Jawaban No. 4");
let panjangPersegiPanjang = 8;
let lebarPersegiPanjang = 5;
parseInt(panjangPersegiPanjang);
parseInt(lebarPersegiPanjang);
let kelilingPersegiPanjang = 2 * (panjangPersegiPanjang + lebarPersegiPanjang);

console.log(kelilingPersegiPanjang);

// no 5
console.log("");
console.log("Jawaban No. 5");
let sentences = "wah javascript itu keren sekali";

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords = sentences.substring(19, 24);
let fifthWords = sentences.substring(25, 31);

console.log("Kata Pertama: " + firstWords);
console.log("Kata Kedua: " + secondWords);
console.log("Kata Ketiga: " + thirdWords);
console.log("Kata Keempat: " + fourthWords);
console.log("Kata Kelima: " + fifthWords);

// no 6
console.log("");
console.log("Jawaban No. 6");
var sentence = "I am going to be React JS Developer";
var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

// no 7
console.log("");
console.log("Jawaban No. 7");
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17); //lakukan pengambilan kalimat di variable ini

console.log(hasil);

// no 8
console.log("");
console.log("Jawaban No. 8");
var nilaiDoe = 50;
if (nilaiDoe > 80) {
  console.log("Nilai anda A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  console.log("Nilai anda B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  console.log("Nilai anda C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  console.log("Nilai anda D");
} else if (nilaiDoe < 50) {
  console.log("Nilai anda E");
}

// no 9
console.log("");
console.log("Jawaban No. 9");
let angka = 2;
let angkaDua = angka === 2 ? "angka nya 2" : "bukan angka 2";
console.log(angkaDua);

// no 10
console.log("");
console.log("Jawaban No. 10");
var trafficLight = "red";

switch (trafficLight) {
  case "red": {
    console.log("Berhenti");
    break;
  }
  case "green": {
    console.log("Jalan");
    break;
  }
  case "yellow": {
    console.log("Hati - Hati");
    break;
  }
}
