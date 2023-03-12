// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.


let url = new URL(location.href);
let jsn = url.searchParams.get('data');
let user = JSON.parse(jsn);

let userDiv = document.createElement('div');
userDiv.classList.add('user-details');

let h4 = document.createElement('h4');
h4.innerText = `${user.id}. ${user.name}`;
let h5 = document.createElement('h5');
h5.innerText = `Username: ${user.username}`;
let email = document.createElement('p');
email.innerText = `E-mail: ${user.email}`;
let address = document.createElement('div');
let street = document.createElement('p');
street.innerText = `address: ${user.address.street} ${user.address.suite}, ${user.address.zipcode} ${user.address.city} , geo: lat ${user.address.geo.lat}, lng ${user.address.geo.lng}`;

address.appendChild(street);
let phone = document.createElement('p');
phone.innerText = `Phone: ${user.phone}`;
let website = document.createElement('p');
website.innerText = `Website: ${user.website}`;
let company = document.createElement('p');
company.innerText = `Company: ${user.company.name}, catch phrase: ${user.company.catchPhrase}, bs: ${user.company.bs}`;
userDiv.append(h4, h5, email, address, phone, website, company);
let container = document.getElementById('container');
let btn = document.createElement('button');
btn.classList.add('btn-posts');
btn.innerText = 'posts of current user';
container.append(userDiv, btn);

btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(postsArray => {
            for (const post of postsArray) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('post');
                let postId = document.createElement('p');
                postId.innerText = `Post ID: ${post.id}`;
                let title = document.createElement('h4');
                title.innerText = `${post.title}`;
                let postBody = document.createElement('p');
                postBody.innerText = `${post.body}`;
                postDiv.append(postId, title, postBody);

                let posts = document.createElement('div');
                posts.classList.add('posts');
                posts.appendChild(postDiv);
                container.appendChild(posts)
            }

        })
}
