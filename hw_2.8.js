//=============================================== 1 Task =============================================
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];


// console.log(people.sort(function sortAge(a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// }));




// console.log(people.sort((a, b) => a.age - b.age));
//=============================================== 2 Task =============================================
// function isPositive(num) {
//     return num > 0;
// }

// console.log(filter([3, -4, 1, 9], isPositive));


// function isMale(person) {
//     return person.gender === 'male';
// }

// function filter(array, ruleFunction) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (ruleFunction(array[i])) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//=============================================== 3 Task =============================================
// let interval;
// let counter = 0;

// function logCurrentDate() {
//     const currentDate = new Date();
//     console.log(currentDate);
//     counter += 3;
//     if (counter >= 30) {
//         clearInterval(interval);
//         console.log('30 секунд прошло');
//     }
// }

// interval = setInterval(logCurrentDate, 3000);

//=============================================== 4 Task =============================================
// function delayForSecond(callback) {  // Код писать можно только внутри этой функции  // setTimeout
//     setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })
//=============================================== 5 Task =============================================
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if (cb) { cb(); }

//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// // delayForSecond(sayHi('Глеб'))

// delayForSecond(() => {
//     sayHi('Глеб');
// });

//--------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

// people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }

//     return 0;
// });

// console.log(people);


// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// people.sort((person2, person1) => person1.age - person2.age);

// console.log(people);



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
// //------------------------------------------------------------------------//
// function showAd() {
// 	alert('Купи наш лучший в мире продукт, только сейчас со скидкой 90%');
// }

// setTimeout(showAd, 1000 * 60);
//------------------------------------------------------------------------//
// let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
// console.log(timerId); // идентификатор таймера

// clearTimeout(timerId);
//------------------------------------------------------------------------//
// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);
//------------------------------------------------------------------------//
// повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
//------------------------------------------------------------------------//
/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);
//------------------------------------------------------------------------//
// let delay = 1000;

// let timerId = setTimeout(function request() {
// //   ...отправить запрос...

//   if ('ошибка запроса из - за перегрузки сервера') {
//     // увеличить интервал для следующего запроса
//     delay *= 2;
// }

// timerId = setTimeout(request, delay);

// }, delay);
//------------------------------------------------------------------------//
// const timer = (deadline) => {
//     setInterval(() => {
//         console.log(deadline);
//     }, 1000);
// };

// // вызовем функцию
// timer(3);
//------------------------------------------------------------------------//
// const timer = (deadline) => {
//     const interval = setInterval(() => {
//         console.log(deadline);
//     }, 1000);


//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Время истекло!')
//     }, deadline * 1000)
// };

// timer(3);
//------------------------------------------------------------------------//
// const timer = (deadline) => {
//     let time = deadline;
//     console.log(time);
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);


//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Время истекло!')
//     }, deadline * 1000)
// };

// timer(3);
//------------------------------------------------------------------------// *******************
// const timer = (deadline) => {
//     if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
//         console.log('Передано некорректное число'); // выводим сообщение
//         return; // выходим из функции
//     }

//     let time = deadline;
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Время истекло!')
//     }, deadline * 1000)
// };

// const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
// timer(deadline);

