fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
        for (const user of usersArray) {
           let userDiv= document.createElement('div');
           userDiv.classList.add('user');
           let a=document.createElement('a');
           a.innerText=`${user.id}. ${user.name}`;
           a.href='user-details.html?data='+JSON.stringify(user);
           userDiv.appendChild(a);
           let container=document.getElementById('container');
            console.log(container);
            container.appendChild(userDiv)
        }
    });