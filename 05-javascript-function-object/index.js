// no 1
console.log("");
console.log("Jawaban No. 1");
function cetakFunction() {
  var a = "Halo nama saya adalah Yan Danu Tirta";
  return a;
}
console.log(cetakFunction());

//no 2
console.log("");
console.log("Jawaban No. 2");

function myFunction(angka1, angka2) {
  let output = angka1 + angka2;
  return output;
}
let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);
console.log(output);

// no 3
console.log("");
console.log("Jawaban No. 3");
const myFunction1 = () => {
  return "Hello";
};
console.log(myFunction1());

// no 4
console.log("");
console.log("Jawaban No. 4");
let obj = {
  nama: "john",
  umur: 22,
  bahasa: "indonesia",
};
console.log(obj.bahasa);

// no 5
console.log("");
console.log("Jawaban No. 5");

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let nama, jenisKelamin, hobi, tahunLahir;
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  gender: arrayDaftarPeserta[1],
  hobby: arrayDaftarPeserta[2],
  birth: arrayDaftarPeserta[3],
};

console.log(objDaftarPeserta);

// no 6
console.log("");
console.log("Jawaban No. 6");

let objBuah = [
  { nama: "Nanas", warna: "Kuning", biji: false, harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", biji: true, harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", biji: true, harga: 10000 },
  { nama: "Pisang", warna: "Kuning", biji: false, harga: 5000 },
];

let objBuahFil = objBuah.filter(function (item) {
  return item.biji == false;
});
console.log(objBuahFil);

// no 7
console.log("");
console.log("Jawaban No. 7");
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

const { name, brand, year } = phone;

// kode di bawah ini jangan dirubah atau dihapus
console.log(name, brand, year);

// no 8
console.log("");
console.log("Jawaban No. 8");
let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = {
  ...dataBukuTambahan,
  penulis: "john doe",
  tahunTerbit: 2020,
  ...buku,
  nama: "pemogram dasar",
  jumlahHalaman: 172,
};

// kode diatas ini jangan di rubah atau di hapus sama sekali

/* 
      Tulis kode jawabannya di sini 
  */
// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput);

// no 9
console.log("");
console.log("Jawaban No. 9");
let mobil = {
  merk: "bmw",
  color: "red",
  year: 2002,
};

const functionObject = (param) => {
  return param;
};

console.log(functionObject(mobil));
