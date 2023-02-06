// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = ['abc', 1, 2, true, 'nana', 'koko', false, 25, 'qwe', 'asd'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let theGreatGatsby = {
//     title: 'The Great Gatsby',
//     pageCount: 345,
//     genre: 'Tragedy'};
// let hamlet = {title: 'Hamlet',
//     pageCount: 300,
//     genre: 'Tragedy'};
// let theAdventuresOfHuckleberryFinn = {
//     title: 'The Adventures of Huckleberry Finn',
//     pageCount: 280,
//     genre: 'Picaresque novel'
// };



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
//
// let theGreatGatsby = {
//     title: 'The Great Gatsby',
//     pageCount: 345,
//     genre: 'Tragedy',
//     author: {name: 'F. Scott Fitzgerald', age: 67}
// };
// let hamlet = {
// title: 'Hamlet',
// pageCount: 300,
// genre: 'Tragedy',
// author: {
// name: 'William Shakespeare',
// age: 88}
// };
// let theAdventuresOfHuckleberryFinn = {
//     title: 'The Adventures of Huckleberry Finn',
//     pageCount: 280,
//     genre: 'Picaresque novel',
//     author: {name: ' Mark Twain', age: 68}
// };


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
//
// let users = [
//     {name: 'Anna', username: 'Anmar', password: 123456},
//     {name: 'Kolya', username: 'Kolyamj', password: 147852},
//     {name: 'Petya', username: 'Petlsm', password: 789456},
//     {name: 'Katya', username: 'Katuoan', password: 852147},
//     {name: 'Olya', username: 'Olala', password: 321456},
//     {name: 'Vasya', username: 'Vasras', password: 964785},
//     {name: 'Maks', username: 'Makmak', password: 987452},
//     {name: 'Marcin', username: 'Marcoco', password: 159623},
//     {name: 'Aga', username: 'Akaolw', password: 753241},
//     {name: 'Alina', username: 'Alias', password: 159847}
// ];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 0;
//
// if (x !== 0) {
//     console.log('вірно');
// } else {
//     console.log('невірно');
// }



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter number');
// if (time >= 0 && time <= 15) {
//     console.log('first quarter');
// } else if (time >= 16 && time <= 30) {
//     console.log('second quarter');
// } else if (time >= 31 && time <= 45) {
//     console.log('third quarter');
// } else if (time >= 46 && time <= 59) {
//     console.log('fourth quarter');
// } else {
//     console.log('error');
// }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = +prompt('enter day');
// if (day >= 1 && day <= 10) {
//     console.log('first');
// } else if (day >= 11 && day <= 20) {
//     console.log('second');
// } else if (day >= 21 && day <= 31) {
//     console.log('third');
// } else {
//     console.log('error')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('enter day');
//
// switch (day) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('error');
//
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//
// let a = +prompt('enter a');
// let b = +prompt('enter b');
// if (a > b) {
//     console.log(a);
// } else if (a < b) {
//     console.log(b);
// } else if (a === b) {
//     console.log('a=b');
// } else {
//     console.log('err')
// }



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
// let x = NaN || 'default';
// console.log(x)



//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     if (course.monthDuration >= 5) {
//         console.log(course.title, 'супер');
//     } else {
//         console.log(course.title, 'не супер')
//     }
// }

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];



    if (coursesAndDurationArray[0].monthDuration >= 5) {
        console.log(coursesAndDurationArray[0].title, 'супер');
    } else {
        console.log(coursesAndDurationArray[0].title, 'не супер')
    }
