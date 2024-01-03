// ********************************* Задание_1 ********************************************
// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");

// function minValue(a, b) {

//     if (a < b) {
//         return a;

//     } else {
//         return b;
//     }
// }

// console.log(minValue(a, b));

// ********************************* Задание_2 ********************************************
// let number = prompt("Введите число");

// let printMessage;

// if (number%2===0) {

//     printMessage = function () {
//         console.log("Число четное");
//     }

// } else {

//     printMessage = function () {
//         console.log("Число нечетное");
//     }

// }

// printMessage();
// ********************************* Задание_3 ********************************************
// const degree = () => {
//     num = Number(prompt("Введите число."));
//     let result = num ** 2;
//     console.log(result);
// }
// degree();

// function degree() {
//     let num = Number(prompt("Введите число."));
//     console.log(num ** 2);
//     return;
// }
// degree();

// ********************************* Задание_4 ********************************************
// let age = prompt("Введите возраст");
// let answer;

// if (age > 12) {
//     answer = function () {
//         alert("Добро пожаловать");
//     }

// } else if (age < 0) {
//     answer = function () {
//         alert("Вы ввели неправильное значение");
//     }

// } else {
//     answer = function () {
//         alert("Привет,друг!");
//     }
// }

// answer();
// ********************************* Задание_5 ********************************************
// let a = prompt(`Введите первое число`);
// let b = prompt(`Введите второе число`);

// function rightWrong(a, b) {

//     if (isNaN(a) || isNaN(b)) {
//         return `Одно или оба значения не являются числом`;
//     } else {
//         return a * b;
//     }
// }

// console.log(rightWrong(a, b));

// ********************************* Задание_6 ********************************************
// const request = () => {
//     let number = Number(prompt("Введите число."));
//     if (isNaN(number)) {
//         alert('Переданный параметр не является числом.');
//     } else {
//         let operation = number ** 3;
//         return console.log(`${number} в кубе равняется ${operation}`);
//     }
// }

// request();
// ********************************* Задание_7 ********************************************
// const cicle1 = {
//     radius: 2,
//     getArea() {
//         let mathRadius = 3.1415926536 * cicle1.radius;
//         return mathRadius;
//     },
//     getPerimeter() {
//         let mathPerimeter = 2 * cicle1.radius * 3.1415926536;
//         return mathPerimeter;
//     }
// }

// const cicle2 = {
//     radius: 4,
//     getArea() {
//         let mathRadius = 3.1415926536 * cicle2.radius;
//         return mathRadius;
//     },
//     getPerimeter() {
//         let mathPerimeter = 2 * cicle2.radius * 3.1415926536;
//         return mathPerimeter;
//     }
// }

// console.log(cicle1.getArea());
// console.log(cicle1.getPerimeter());

// console.log(cicle2.getArea());
// console.log(cicle2.getPerimeter());
// ********************************* Задание_8 ********************************************

// let gameSeasons = Number(prompt("Введите месяц"));
// function data(gameSeasons) {

//     if ((gameSeasons >= 1 && gameSeasons <=2) || gameSeasons === 12) {
//         return `Зима`;
//     } else if (gameSeasons >= 3 && gameSeasons <= 5) {
//         return `Весна`;
//     } else if (gameSeasons >= 6 && gameSeasons < 8) {
//         return `Лето`;
//     } else if (gameSeasons >= 9 && gameSeasons < 11) {
//         return `Осень`;
//     } else {
//         return `Такого месяца несуществует`;
//     }
// }

// alert(data(gameSeasons));



// let num = Number(prompt('Введи число от 1 до 12!'));
// function seasons(num) {
//     if (num <= 0 || num >= 13) {
//         alert('Вы ввели неправильное число');
//     } else if (num === 1 || num === 2 || num === 12) {
//         alert('Зима');
//     } else if (num === 3 || num === 4 || num === 5) {
//         alert('Весна');
//     } else if (num === 6 || num === 7 || num === 8) {
//         alert('Лето');
//     } else {
//         alert('Осень')
//     }
// }
// seasons(num);