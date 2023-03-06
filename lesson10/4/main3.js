// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let caption1 = document.createElement('h4');
caption1.innerText = 'Кількість рядків';
let input1 = document.createElement('input');
input1.setAttribute('type', 'number');
let caption2 = document.createElement('h4');
caption2.innerText = 'Кількість стовбців';
let input2 = document.createElement('input');
input2.setAttribute('type', 'number');
let caption3 = document.createElement('h4');
caption3.innerText = 'Наповнення:';
let input3 = document.createElement('input');
let btnPush = document.createElement('button');
btnPush.innerText = 'Push';


document.body.append(caption1, input1, caption2, input2, caption3, input3);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(btnPush);
btnPush.onclick = () => {
    let table = document.createElement('table');
    let tblBody = document.createElement('tbody');
    let rowValue = input1.value;
    let columnValue = input2.value;
    let content = input3.value;

    for (let i = 0; i < rowValue; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < columnValue; j++) {
            let cell = document.createElement('td');
            let cellText = document.createTextNode(content);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
        btnPush.style.visibility = 'hidden';

    }

    table.appendChild(tblBody);
    document.body.appendChild(table);
    table.setAttribute("border", "2");

}