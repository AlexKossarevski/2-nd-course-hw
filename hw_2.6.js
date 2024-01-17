// ********************************* Задание_1  ********************************************
// const job1 = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < job1.length; i++) {
//     if (job1[i] == 10) break;
//     console.log(job1[i]);    
// }

// ********************************* Задание_2 ********************************************
// const job = [1, 5, 4, 10, 0, 3];
// const res = job.indexOf(10);

// console.log(res);
// ********************************* Задание_3 ********************************************
// const job = [1, 3, 5, 10, 20];
// const str = job.join(' ');
// console.log(str);

// ********************************* Задание_4 ********************************************
// const job = [
//     [1, 1, 1], 
//     [1, 1, 1], 
//     [1, 1, 1]
// ];

// console.log(job [0] [0]);
// console.log(job [0] [1]);
// console.log(job [0] [2]);
// ********************************* Задание_5 ********************************************
// const job = [1, 1, 1];
// job[3] = 2;
// job[4] = 2;
// job[5] = 2;

// console.log(job);
// ********************************* Задание_6 ********************************************
// const job = [9, 8, 7, 'a', 6, 5];
// const work = job.sort();
// console.log(job.pop());
// console.log(job);

// ********************************* Задание_7********************************************
// let riddle = [9, 8, 7, 6, 5];

// if (riddle.includes(Number(prompt(`Угадай число`)))) {

//     alert(`Угадал`)

// } else {

//     alert(`Не угадал`)

// }

// ********************************* Задание_8 ********************************************
// let job = 'abcdef';
// let changeling = job.split('').reverse().join('');

// console.log(changeling);
// ********************************* Задание_9 ********************************************
// const torn = [[1, 2, 3,],[4, 5, 6]];

// const connected = torn.flat();
// console.log(connected);
// ********************************* Задание_10 ********************************************
//  Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла 
// for и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: 
// i + 1 // . Обратите внимание, что у последнего элемента нет следующего.


// const random = [4, 2, 7, 4, 8, 9, 1]
// let sum = 0
// for (let index = 0; index < random.length - 1; index++) {
//     console.log(random[index] + random[index + 1]);
    
// }

// ********************************* Задание_11 ********************************************
//  Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив 
//  квадратов этих чисел.


// const integer = [15, -6, 20, 0, -305];
// const square = integer.map(el => el * el);
// console.log(square);

// ********************************* Задание_12 ********************************************
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

// const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква']; 
// const newArray = [];
// for (let i = 0; i < getLengthWords.length; i++) {
//     newArray.push(getLengthWords[i].length);
// }
// console.log(newArray);
// ********************************* Задание_13 ********************************************
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

// function filterPositive(array) {

//     const negative = []; 

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] < 0) { 

//             negative.push(array[i])
//         }

//     }

//     return negative 
// }



// console.log(filterPositive([5, 0, -5, 20, -12])); 

// ******************************************************************************************

// let product = ['Кресло', 'Стул', 'Стол'];
// console.log(product);

// let product = ['Кресло', 'Стул', 'Стол'];
// console.log(product.length);

// let product = ['Кресло', 'Стул', 'Стол'];
// console.log(product[0]);
// console.log(product[1]);
// console.log(product[2]);

// let product = ['Кресло', 'Стул', 'Стол'];
// console.log(product);
// product[0] = 'Комод';
// console.log(product);
// product[3] = 'Диван';
// console.log(product);

// let numbers = [1, 2, 3, 4];
// console.log(numbers);
// numbers[3] = 4;
// numbers[4] = 5;
// console.log(numbers);
// numbers = 6;
// console.log(numbers);

// const userName = ['Alex', 'Dima', 'Vlad'];
// console.log(userName);
// userName[userName.length] = 'Bob';
// console.log(userName);
// userName = 'Jim';

// const numbs = [2, 4, 5, 6, 8];
// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
    
// }


