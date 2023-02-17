// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let newStr = str.replaceAll(' ', '');
let newStr1 = newStr.replaceAll('y', 'y ');
console.log(newStr1);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str7 = 'Ревуть воли як ясла повні';
let stringToarray = str => {
    return str.split(' ')
}
console.log(stringToarray(str7));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let mas = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = mas.map(value => {
    return value.toString()
})
console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a)
    }

}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
}));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtered = coursesAndDurationArray.filter(course => {
    return course.monthDuration > 5;
});
console.log(filtered);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapped = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
});
console.log(mapped);


//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'}];
// - знайти піковий туз
let spadeAce = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(spadeAce);

// - всі шістки
let sixes = cards.reduce(
    (acc, value) => {
        if (value.value === '6') {
            acc.push(value)
        }
        return acc
    }, [])
console.log(sixes);

// - всі червоні карти
let reds = cards.reduce(
    (acc, value) => {
        if (value.color === 'red') {
            acc.push(value)
        }
        return acc
    }, [])
console.log(reds);

// - всі буби
let diamonds = cards.reduce(
    (acc, value) => {
        if (value.cardSuit === 'diamond') {
            acc.push(value)
        }
        return acc
    }, [])
console.log(diamonds);


// - всі трефи від 9 та більше
let selection = cards.reduce(
    (acc, value) => {
        if (value.cardSuit === 'clubs' && value.value === '9') {
            acc.push(value)
        } else if (value.cardSuit === 'clubs' && value.value === '10') {
            acc.push(value)
        } else if (value.cardSuit === 'clubs' && value.value === 'ace') {
            acc.push(value)
        } else if (value.cardSuit === 'clubs' && value.value === 'jack') {
            acc.push(value)
        } else if (value.cardSuit === 'clubs' && value.value === 'queen') {
            acc.push(value)
        } else if (value.cardSuit === 'clubs' && value.value === 'king') {
            acc.push(value)
        }
        return acc
    }, []);
console.log(selection);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let packaged = cards.reduce(
    (acc, value) => {
        if (value.cardSuit === 'spade') {
            acc.spades.push(value)
        } else if (value.cardSuit === 'diamond') {
            acc.diamonds.push(value)
        } else if (value.cardSuit === 'heart') {
            acc.hearts.push(value)
        } else if (value.cardSuit === 'clubs') {
            acc.clubs.push(value)
        }
        return acc
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });

console.log(packaged);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass
let moduleWithSass = coursesArray.reduce(
    (acc, value) => {
        if (value.modules.includes('sass')) {
            acc.push(value)
        }
        return acc
    }, []);
console.log(moduleWithSass);


// --написати пошук всіх об'єктів, в який в modules є docker

let moduleWithDocker = coursesArray.reduce(
    (acc, value) => {
        if (value.modules.includes('docker')) {
            acc.push(value)
        }
        return acc
    }, []);
console.log(moduleWithDocker);