const myCountPromise = (params) => {
  return new Promise((resolve, reject) => {
    if (params !== undefined) {
      setTimeout(() => {
        resolve(params * 2);
      }, 2000);
    } else {
      reject("maaf tidak ada nilai dalam parameter");
    }
  });
};

//kode dibawah ini jangan dihapus atau diedit sama sekali ya

myCountPromise(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
