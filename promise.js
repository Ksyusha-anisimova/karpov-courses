const hasWater = () => true;
const washMyClothes = () => {
  return new Promise((resolve, reject) => {
//расмотрим это на примере стиральной машины
// что нужно сдлать, чтобы машинка постирала?
      //проверить, что вода поступает
      if( !hasWater() ){
        reject('Все плохо'); //вода не поступает - все плохо
      }
      //постирать вещи
      setTimeout(() => {
          resolve('Все хорошо');//через 4с говорим, что все хорошо
      }, 4000);
  });
};
Promise.all([washMyClothes(),washMyClothes(),washMyClothes()])
    .then((response) => {
        console.log(response);
    })
// washMyClothes()
//     .then((response) => {
//         lsfvlndflvnldvd
//         console.log(response);
//     }) //вызывается, когда все хорошо
//     .catch((error) => {
//         console.log(error);
//     })
//     .then(() => console.log(123))
//     .finally(() =>{
//         console.log('finally!');
//     })