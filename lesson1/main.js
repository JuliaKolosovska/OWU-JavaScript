// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//

// let a='hello';
// let b;
// let c;
// let d;
// let e;
// let f;
// let g;
// let h;
// let i;
// let j;
// let k;
// let l;
//
// b='owu';
// c='com';
// d='ua';
// e=1;
// f=-999;
// g=123;
// h=3.14;
// i=2.7;
// j=16;
// k=true;
// l=false;
// console.log(a, b, c, d, e, f, g, h, i, j, k, l);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// let firstName='Julia';
// let lastName='Kolosovska';
// let fatherName='Serhii';
//
// let person=firstName+' '+lastName+' '+fatherName;
// let person1=`${firstName} ${lastName} ${fatherName}`;
//
// console.log(person);
// console.log(person1);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100;
//     let b = '100';
//     let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let answer = prompt("ПІБ?");
console.log('Привіт, '+answer);
