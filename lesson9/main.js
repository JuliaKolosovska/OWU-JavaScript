// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.fontSize = '20px';
block.style.background = 'yellow';
block.style.color = 'brown';
block.innerText = 'text'
document.body.appendChild(block);
document.body.appendChild(block.cloneNode(true));


// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ulList = document.createElement('ul');
for (const element of arr) {
    let liList = document.createElement('li');
    liList.innerText = `${element}`
    ulList.appendChild(liList)
}
document.body.appendChild(ulList)


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course = coursesAndDurationArray[i];
    let divBlock = document.createElement('div');
    divBlock.innerText = `title: ${course.title}; monthDuration: ${course.monthDuration}`;
    document.body.appendChild(divBlock)
}


document.body.appendChild(document.createElement('br'))


//     - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let i = 0; i < coursesAndDurationArray1.length; i++) {
    const course = coursesAndDurationArray1[i];
    let divBlock = document.createElement('div');
    divBlock.classList.add('item');
    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = `${course.title}`;
    let paragraph = document.createElement('p');
    paragraph.classList.add('description');
    paragraph.innerText = `monthDuration: ${course.monthDuration}`
    divBlock.append(heading, paragraph);
    document.body.appendChild(divBlock)
}


// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let simpsonDiv = document.createElement('div');
    simpsonDiv.classList.add('member');
    let name = document.createElement('h2');
    name.innerText = `${simpson.name} ${simpson.surname}`
    let age = document.createElement('h4');
    age.innerText = `Вік: ${simpson.age}`
    let info = document.createElement('p');
    info.innerText = `${simpson.info}`;
    let photo = document.createElement('img');
    photo.src = `${simpson.photo}`;
    photo.style.width = '100px';
    simpsonDiv.append(name, age, info, photo);
    document.body.appendChild(simpsonDiv);
}


//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let container = document.createElement('div');

for (const course of coursesArray) {
    let title = document.createElement('div');
    title.style.fontSize = '30px';
    title.innerText = `Title: ${course.title}`;
    let duration = document.createElement('div');
    let monthDuration = document.createElement('div');
    monthDuration.innerText = `monthDuration: ${course.monthDuration}`;
    monthDuration.style.marginRight = '10px';
    let hourDuration = document.createElement('div');
    hourDuration.innerText = `hourDuration: ${course.hourDuration}`;
    duration.style.display = 'flex';
    duration.append(monthDuration, hourDuration);
    let modules = document.createElement('div');

    let children = course.modules;
    if (children.length !== 0) {
        for (const element of children) {
            let modulesUl = document.createElement('ul');
            modules.appendChild(modulesUl);
            let modulesLi = document.createElement('li');
            modulesUl.appendChild(modulesLi);
            let modulesDiv = document.createElement('div');
            modulesDiv.innerText = `${element}`;
            modulesLi.appendChild(modulesDiv);
        }

        container.append(title, duration, modules);
    }
}

document.body.appendChild(container);


//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
//     натисканні на кнопку зникав елемент з id="text".

let textElement = document.createElement('h1');
textElement.setAttribute('id', 'text');
textElement.innerText = 'TextTextTextTextTextTextTextText';
let btn = document.createElement('button');
btn.innerText = 'HIDE';
document.body.append(textElement, btn);
btn.onclick = function () {
    let blockHidden = textElement.style.visibility = 'hidden';
    document.body.appendChild(blockHidden)
}


document.body.appendChild(document.createElement('br'))
document.body.appendChild(document.createElement('br'))
document.body.appendChild(document.createElement('br'))

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let caption= document.createElement('h4');
caption.innerText='Enter Your age:';
document.body.appendChild(caption);
let input=document.createElement('input');
input.setAttribute('type', 'number');

let btnOk = document.createElement('button');
btnOk.innerText = 'OK';

document.body.append(input, btnOk);
btnOk.onclick = () => {
    let value = input.value;
    if(value<18){
        alert('Error: You must be over 18 years old!');
    }else {
        alert('You are welcome!');
    }
}


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('hr'));

let caption1= document.createElement('h4');
caption1.innerText='Кількість рядків';
let input1=document.createElement('input');
input1.setAttribute('type', 'number');
let caption2= document.createElement('h4');
caption2.innerText='Кількість стовбців';
let input2=document.createElement('input');
input2.setAttribute('type', 'number');
let caption3= document.createElement('h4');
caption3.innerText='Наповнення:';
let input3=document.createElement('input');
let btnPush = document.createElement('button');
btnPush.innerText = 'Push';



document.body.append(caption1, input1,caption2, input2,caption3, input3, btnPush);
btnPush.onclick=()=>{
    let table=document.createElement('table');
    let tblBody = document.createElement('tbody');
    let rowValue=input1.value;
    let columnValue=input2.value;
    let content=input3.value;

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