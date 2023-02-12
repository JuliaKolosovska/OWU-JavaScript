// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     console.log(a * b);
// }
//
// area(5, 10)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleArea(r) {
//     console.log(3.1415 * r * r);
// }
//
// circleArea(5)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderArea(h, r) {
//     console.log(2 * 3.1415 * h * r)
// }
//
// cylinderArea(6, 9)


// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function looper(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// looper(users)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function printer(text) {
//     let html = `
//     <p>${text}</p>`;
//     document.write(html);
// }

// printer('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam earum eligendi fugit hic nesciunt quibusdam tempore veniam, veritatis!')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(li) {
//     document.write(`<ul>
// <li>${li}</li>
// <li>${li}</li>
// <li>${li}</li>
// </ul>`)
// }
// list('element');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(li, quantity) {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${li}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
//
// list('element', 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list(...items) {
//     document.write(`<ul>`)
//     for (const item of items) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list('element', 10, true, NaN, 'kmsjan', 123);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
