// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let users = [
    new User(1, 'Oleg', 'Kovalenko', 'olkov@or.com', 2356478910),
    new User(2, 'Oksana', 'Mykhalchuk', 'omych@ot.com', 1561453610),
    new User(3, 'Mark', 'Los', 'losmark@gty.com', 47895210),
    new User(4, 'Artem', 'Shevchenko', 'artsheva@klo.com', 747586935221),
    new User(5, 'Maks', 'Bondar', 'mabond@ot.com', 52752527),
    new User(6, 'Alla', 'Polishchuk', 'allpolis@pol.com', 272774466),
    new User(7, 'Boris', 'Pysar', 'borpys@bbr.com', 78945874),
    new User(8, 'Dima', 'Sheiko', 'dimshei@vgtr.com', 25896458),
    new User(9, 'Bogdan', 'Metoshop', 'bogmet@ygy.com', 784785475),
    new User(10, 'Alina', 'Lishchuk', 'alis@ot.ygy', 523652148),
]
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filtered = users.filter(user => {
    return user.id % 2 === 0;
})
console.log(filtered);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// (робила по спаданню, щоб було видно результат)

let sorted = users.sort((a, b) => {
    return b.id - a.id;
})
console.log(sorted);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

let Client = class {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Lesia', 'Solovei', 'sol@ail.com', 598746932, ['table', 'pillow', 'sheets']),
    new Client(2, 'Olga', 'Bondar', 'bond@ail.com', 148529637, ['picture', 'blanket', 'sheets', 'curtains', 'blossoms']),
    new Client(3, 'Maria', 'Polishchuk', 'pol@ail.com', 784596321, ['shelf', 'pillow', 'doormat', 'blanket']),
    new Client(4, 'Anna', 'Abbasova', 'abbas@ail.com', 741258963, ['sofa', 'pillow', 'chandelier', 'doormat']),
    new Client(5, 'Karolina', 'Silchenko', 'silch@ail.com', 987456321, ['curtains', 'picture', 'blossoms']),
    new Client(6, 'Alisa', 'Shevchuk', 'shev@ail.com', 123654789, ['shelf', 'chandelier', 'sheets']),
    new Client(7, 'Julia', 'Pysarchuk', 'pysar@ail.com', 541263987, ['doormat', 'sofa', 'curtains']),
    new Client(8, 'Anastazja', 'Lobashchuk', 'lobas@ail.com', 852417963, ['picture', 'pillow', 'sheets', 'blanket', 'doormat']),
    new Client(9, 'Sofia', 'Nahorna', 'naho@ail.com', 365214789, ['table', 'blossoms', 'chandelier']),
    new Client(10, 'Lena', 'Sofianidi', 'sofi@ail.com', 954123687, ['curtains', 'chandelier', 'sheets', 'shelf'])
]

console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((a, b) => {
    return a.order.length - b.order.length;
})

console.log(sortedClients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engVol) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engVol = engVol;
    this.drive = function () {

        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`model: ${model}; manufacturer: ${manufacturer}; year: ${year}; maxSpeed: ${maxSpeed}; engVol: ${engVol}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let bmwCar = new Car('x5m', 'bmw', 2020, 250, 3.0);
bmwCar.drive();
bmwCar.info();
bmwCar.increaseMaxSpeed(20);
bmwCar.changeYear(2019);
bmwCar.addDriver({name: 'kolya', age: 35})
console.log(bmwCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let Car1 = class {
    constructor(model, manufacturer, year, maxSpeed, engVol) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engVol = engVol;
        this.drive = function () {

            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
        };
        this.info = function () {
            console.log(`model: ${model}; manufacturer: ${manufacturer}; year: ${year}; maxSpeed: ${maxSpeed}; engVol: ${engVol}`)
        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
        };
        this.changeYear = function (newValue) {
            this.year = newValue;
        };
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

let audiCar = new Car('sQ7', 'audi', 2022, 260, 3.2);
audiCar.drive();
audiCar.info();
audiCar.increaseMaxSpeed(10);
audiCar.changeYear(2018);
audiCar.addDriver({name: 'vasya', age: 37})
console.log(audiCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

let Cinderella = class {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}

let cinderellas = [
    new Cinderella('anna', 18, 35),
    new Cinderella('viktoria', 20, 36),
    new Cinderella('julia', 22, 37),
    new Cinderella('olga', 19, 45),
    new Cinderella('sonia', 21, 33),
    new Cinderella('alina', 19, 34),
    new Cinderella('nicole', 18, 36),
    new Cinderella('katya', 25, 38),
    new Cinderella('maria', 23, 37),
    new Cinderella('natalia', 22, 36),
]
console.log(cinderellas);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella {
    constructor(name, age, findSize) {
        super(name, age);
        this.findSize = findSize;
    }
}



//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let prince1 = new Prince('viktor', 25, 45);

let find = (cinderella, prince) => {
    for (const item of cinderella) {
        if (prince.findSize === item.footSize) {
            return `My Cinderella is ${item.name}`;
        }
    }
}
console.log(find(cinderellas,prince1));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


let find1=(arr, callback)=> {

    arr.find(value => value.footSize === prince1.findSize);

}
console.log(find1(cinderellas));