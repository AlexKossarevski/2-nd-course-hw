//   ****************************************** Задание 1 ****************************
//  let password = 123;
//  let messege = prompt('Введите пароль');
//  if (password = 123) {
//  	alert('Пароль введен верно');
//  } else {
//  	alert ('Пароль введен неправильно')
//  }

//   ****************************************** Задание 2 ****************************
//  let c = 2;
//  if (c > 0 && c < 10) {
//      console.log ('Верно');
//  } else {
//      console.log ('Неверно');
//  }
//   ****************************************** Задание 3 ****************************
//  let d = 2;
//  let c = 107;
//  if (d > 100 || c > 100) {
//      console.log ('Верно');
//  } else {
//      console.log ('Неверно');
//  }
//   ****************************************** Задание 4 ****************************
//  let a = '2';
//  let b = '3';
//  alert(Number (a) + Number (b));
//   ****************************************** Задание 5 ****************************
let monthNumber = prompt ('Введите номер месяца.');
switch (monthNumber) {
    case '1':
        console.log('Январь. Зима');
        break;
    case '2':
        console.log('Февраль. Зима');
        break;
    case '3':
        console.log('Март. Весна');
        break;
    case '4':
        console.log('Апрель. Весна');
        break;
    case '5':
        console.log('Май. Весна');
        break;
    case '6':
        console.log('Июнь. Лето');
        break;
    case '7':
        console.log('Июль. Лето');
        break;
    case '8':
        console.log('Август. Лето');
        break;
    case '9':
        console.log('Сентябрь. Осень');
        break;
    case '10':
        console.log('Октябрь. Осень');
        break;
    case '11':
        console.log('Ноябрь. Осень');
        break;
    case '12':
        console.log('Декабрь. Зима');
        break;
    default:
        console.log('Такого месяца нет, ты из какой вселенной!?');
        break;
}