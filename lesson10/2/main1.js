// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

window.onpageshow = function () {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

    const d = new Date();
    let lastVisited = d.toDateString();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let time = hours + ':' + minutes + ':' + seconds;
    let date = lastVisited + ' ' + time;
    sessions.push(date);
    localStorage.setItem('sessions', JSON.stringify(sessions));

    console.log(sessions);
};

