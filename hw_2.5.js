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

// printMessage = function (number) {
//     if (number % 2 === 0) {
//         return ("Число четное");
//     } else {
//         return ("Число нечетное");
//     }
// }
// alert(printMessage(number));
// ********************************* Задание_3 ********************************************
// function squared(inputNumber) {
//     console.log(inputNumber ** 2);
// }

// squared(prompt('Введи число.'));
// ------------------------------------------------------
// function returnSquared(inputNumber) {
//     return inputNumber ** 2;
// }

// let result = returnSquared(prompt('Введи число.'));

// console.log(result);
// ********************************* Задание_4 ********************************************
// function sayHello() {
//     const age = prompt(`Сколько Вам лет?`);
//     if (age < 0) {
//         console.log(`Вы ввели неправильное значение`);
//         return
//     } if (age <= 12) {
//         console.log(`Привет друг!`);
//     } else {
//         console.log(`Добро пожаловать!`);
//     }
// }

// sayHello();
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
// let circle1 = { radius: 2, getArea, getPerimeter }; 
// let circle2 = { radius: 4, getArea, getPerimeter };

// function getArea() {
//   return Math.PI * this.radius ** 2
// }

// function getPerimeter() {
//   return 2 * Math.PI * this.radius
// }

// console.log(circle1.getArea());

// console.log(circle1.getPerimeter());


// console.log(circle2.getArea());

// console.log(circle2.getPerimeter());
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