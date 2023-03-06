//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let people = [];

for (let i = 1; i <= 100; i++) {
    let person = {
        id: i,
        name: "Person " + i,
        age: Math.floor(Math.random() * 100) + 1
    };
    people.push(person);
}

console.log(people);

let startIndex = 0;

function showPeople() {
    const container = document.getElementById('people');
    container.innerHTML = '';
    for (let i = startIndex; i < startIndex + 10; i++) {
        if (i >= people.length) {
            break;
        }
        const personElement = document.createElement('div');
        personElement.innerText = `${people[i].id}) ${people[i].name}, age:${people[i].age}`;

        container.appendChild(personElement);
    }
}

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
    if (startIndex > 80) {
        startIndex = 80;
    }
    startIndex += 10;

    showPeople();
});

const prevButton = document.getElementById('prev');
prevButton.addEventListener('click', () => {
    startIndex -= 10;

    if (startIndex < 0) {
        startIndex = 0;
    }

    showPeople();
});

showPeople();
