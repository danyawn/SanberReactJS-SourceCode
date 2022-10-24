function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function (resolve, reject) {
    var books = [
      { name: "shinchan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "doraemon", totalPage: 40, isColorful: true },
      { name: "algoritma", totalPage: 250, isColorful: false },
    ];
    if (amountOfPage >= 40) {
      resolve(books.filter((x) => x.totalPage >= amountOfPage && x.isColorful == colorful));
    } else {
      var reason = "Maaf buku di bawah 40 halaman tidak tersedia";
      reject(reason);
    }
  });
}

// jalankan function promisenya disini ( wajib menggunakan async/await )
// cara 1 (berhasil)
// const execute1 = async () => {
//   try {
//     let result = await filterBooksPromise(true, 40);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const execute2 = async () => {
//   try {
//     let result = await filterBooksPromise(false, 250);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const execute3 = async () => {
//   try {
//     let result = await filterBooksPromise(true, 30);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// execute1();
// execute2();
// execute3();

// cara 2 (berhasil tapi ada warning)
// try {
//   result1 = filterBooksPromise(true, 40);
//   console.log(result1);
// } catch (error) {
//   console.log(error);
// }
// try {
//   result2 = filterBooksPromise(false, 250);
//   console.log(result2);
// } catch (error) {
//   console.log(error);
// }
// try {
//   result3 = filterBooksPromise(true, 30);
//   console.log(result3);
// } catch (error) {
//   console.log(error);
// }

// cara 3 (berhasil)
const execute = async (color, amount) => {
  try {
    let result = await filterBooksPromise(color, amount);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

execute(true, 40);
execute(false, 250);
execute(true, 30);
