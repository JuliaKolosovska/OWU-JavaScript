fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
        for (const user of usersArray) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            let h4=document.createElement('h4');
            h4.innerText=`${user.id}. ${user.name}`
            let a = document.createElement('a');
            a.innerText = 'D e t a i l s';
            a.href = 'user-details.html?data=' + JSON.stringify(user);
            userDiv.append(h4, a);
            let container = document.getElementById('container');
            console.log(container);
            container.appendChild(userDiv)
        }
    });