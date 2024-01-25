//------------------------------------------------------------------------//

// const fibonacci = [1, 1, 2, 3, 5, 8];

// const multipleByTwoFib = fibonacci.map((number) => number * 2);
// const plusTenFib = fibonacci.map((number) => number + 10);
// const onlyBigFib = fibonacci.filter((number) => number > 3);

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]

//------------------------------------------------------------------------//
// function functionWithCallback(callback) {
//     // Вызов колбэка
//     callback();
// }

// // Функция пишет в консоль приветствие
// function greetWorld() {
//     console.log("Привет, мир с колбэками!");
// }

// // Вызываем функцию functionWithCallback и передаем в нее аргумент — колбэк-функцию greet
// functionWithCallback(greetWorld); // => Выведет в консоль "Привет, мир с колбэками!"
//------------------------------------------------------------------------//
// function functionWithCallback(callback) {
//     callback();
// }

// // Сохраняем стрелочную функцию в переменную
// const greet = () => {
//     console.log("Привет из именованной стрелочной функции");
// };

// functionWithCallback(greet); // => Выведет в консоль «Привет из именованной стрелочной функции»

// // А можем использовать анонимную стрелочную функцию,
// // то есть не сохранять функцию в переменную и не объявлять ее через function,
// // а прямо тут создать и передать ее в functionWithCallback
// functionWithCallback(() => {
//     console.log("Привет из анонимной стрелочной функции");
// }); // => Выведет в консоль «Привет из анонимной стрелочной функции»
//------------------------------------------------------------------------//
// function functionWithCallback(callback) {
//     // Передаем в колбэк-функцию 2 аргумента строчки: "Глеб" и "Фокин"
//     callback("Глеб", "Фокин");
// }

// functionWithCallback((name, surname) => {
//     // Внутри колбэк-функции мы можем использовать данные,
//     // которые передает в него код, который его вызывает, то есть functionWithCallback
//     // Название параметров значения не имеет, здесь я назвал их name и surname,
//     // потому что functionWithCallback передает в колбэк имя и фамилию
//     console.log('Привет, ${name} ${surname}!');
// }); // => Выведет в консоль «Привет, Глеб Фокин!»
//------------------------------------------------------------------------//
// const greet = (name, surname) => {
//     console.log('Привет, ${name} ${surname}!');
// };

// function functionWithoutCallback() {
//     greet("Глеб", "Фокин");
// }

// functionWithoutCallback(); // => Выведет в консоль «Привет, Глеб Фокин!»
//------------------------------------------------------------------------//
// function callbackWithArrayLength(arr, callback) {
//     console.log(arr);
//     //(arr.length);/* Писать код тут */
//     // callback(-1);
//     callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
//     console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
//     console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//     console.log(l);
// });
//------------------------------------------------------------------------//
// function log(arrItem) {
//     console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     // callback(arr[i]);
//     cb(arr[i]);
//   }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);
//------------------------------------------------------------------------//
