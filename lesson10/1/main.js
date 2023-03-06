// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const btn = document.forms.frm.ok;
const name = document.forms.frm.username;
const surname = document.forms.frm.usersurname;
const age = document.forms.frm.userage;

btn.onclick = function (ev) {
    ev.preventDefault();
    const block = document.createElement('div');
    const value = name.value + ' ' + surname.value + ', age:' + age.value;
    block.append(value);
    document.body.appendChild(block);
}


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

let divnum = document.getElementById('divnum');

let currentValue = localStorage.getItem('counter');

currentValue = parseInt(currentValue);

if (!isNaN(currentValue)) {
    currentValue += 1;
} else {
    currentValue = 1;
}

localStorage.setItem('counter', currentValue);

divnum.innerHTML = currentValue.toString();









