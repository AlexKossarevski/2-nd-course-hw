//--------------------------------------- ЗАДАНИЕ 1 ------------------------------------------------------
// let str = 'js';

// str = str.toUpperCase();

// console.log(str);
//--------------------------------------- ЗАДАНИЕ 2 ------------------------------------------------------
// function searchStart(arr, str) {
//     return arr.filter(el => el.toLowerCase().startsWith(str));
// }

// console.log(searchStart([`Кошка`, `Кит`, `Комар`, `Носорог`], `ко`));
//--------------------------------------- ЗАДАНИЕ 3 ------------------------------------------------------

// let number = 32.58884;

// console.log(Math.floor(number));

// console.log(Math.ceil(number));

// console.log(Math.round(number));

//--------------------------------------- ЗАДАНИЕ 4 ------------------------------------------------------
// const numbers = [52, 53, 49, 77, 21, 32];

// const minValue = Math.min.apply(null, numbers);

// const maxValue = Math.max.apply(null, numbers);


// console.log(minValue);
// console.log(maxValue);
//--------------------------------------- ЗАДАНИЕ 5 ------------------------------------------------------
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandom(1, 10));
//--------------------------------------- ЗАДАНИЕ 6 ------------------------------------------------------





//--------------------------------------- ЗАДАНИЕ 7 ------------------------------------------------------
// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(getRandomInt(14, 33));
//--------------------------------------- ЗАДАНИЕ 8 ------------------------------------------------------
// const currentDate = new Date();

// console.log(currentDate);
//--------------------------------------- ЗАДАНИЕ 9 ------------------------------------------------------



//--------------------------------------- ЗАДАНИЕ 10 ------------------------------------------------------





//--------------------------------------- ЗАДАНИЕ 11 ------------------------------------------------------
// function game2() {
//     let text = "Запомни очередность слов:"
//     let words = ['Яблоко', 'Груша', 'Дыня', 'Вноград', 'Персик', 'Апелсин', 'Мандарин',];
//     words = words.sort(() => Math.random() - 0.5);
//     alert(text + `${words}`);
//     let userAnswer1 = String(prompt(`Как назывался первый фрукт?`));
//     let userAnswer2 = String(prompt(`Как назывался последний фрукт?`));
//     function userAnswer(userAnswer1, userAnswer2) {
//         if (userAnswer1 === words[0] && userAnswer2 === words[6]) {
//             alert('Правильно, оба элемента!');
//         } else if (userAnswer1 === words[0] || userAnswer2 === words[6]) {
//             alert('Почти угадали!');
//         } else {
//             alert('Ответ не верный');
//         }
//     }
//     userAnswer(userAnswer1, userAnswer2);
// }


// *******************************************************************************
// const currentDate = new Date();
// currentDate.toLocaleDateString('ru-RU', { weekday: 'long' });

// console.log(currentDate);
// -------------------------------------------------------------
// function getRandomFloat(min, max) {
//     return Math.random() * (max - min) + min;
// }
// getRandomFloat(11, 101)

//--------------------------------------------------------------------

// let number = 32.58884;

// number = number.toFixed(2);

// console.log(number);
// ----------------------------------------------------------------

// let currentDate = new Date();

// console.log(currentDate); //Sat Jan 20 2024 11:51:11 GMT+0600 (Восточный Казахстан)
//----------------------------------------------------------
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();

// let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

// console.log(fullDate); // Сегодня: 20 Январь 2024, Суббота
//------------------------------------------------------------------------
// let myDate = new Date("3/27/2021");

// console.log(myDate);

// myDate.setHours(54);

// console.log(myDate);
//------------------------------------------------------------------------
// let regexp = /^[а-яА-Я]*$/; // что означает эта запись, мы разберем чуть ниже
// let name = prompt('Введите ваше имя. Используйте только кириллические символы');

// if (regexp.test(name)) {
// 	alert('Ваше имя сохранено');
// } else {
// 	alert('Введены некорректные символы');
// }
//-------------------------------------------------------------------------
// const currentDate = new Date()

// currentDate.toLocaleDateString('ru-RU', { weekday: 'long' })

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// const currentDate = new Date();

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// currentDate.toLocaleDateString('ru-RU', options);