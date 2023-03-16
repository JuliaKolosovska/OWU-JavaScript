let url = new URL(location.href);
let jsn = url.searchParams.get('data');
let user = JSON.parse(jsn);

let userDiv = document.createElement('div');
userDiv.classList.add('user-details');

let h1 = document.createElement('h1');
h1.innerText = `${user.id}. ${user.name}`;
let h2 = document.createElement('h2');
h2.innerText = `Username: ${user.username}`;
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
userDiv.append(h1, h2, email, address, phone, website, company);
let container = document.getElementById('container');
let btn = document.createElement('button');
btn.setAttribute('id', 'btn-posts');
btn.innerText = `Posts of current user`;
container.append(userDiv, btn);

btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(postsArray => {
            for (const post of postsArray) {
                let postDiv = document.createElement('div');
                postDiv.setAttribute('id', 'post');

                let title = document.createElement('h4');
                title.innerText = `${post.title}`;

                let detailsBtn = document.createElement('button');
                detailsBtn.innerText = 'Details';
                detailsBtn.setAttribute('id', 'details');
                let a = document.createElement('a');

                a.href = 'post-details.html?data=' + JSON.stringify(post);
                a.appendChild(detailsBtn);
                postDiv.append(title, a);

                let posts = document.getElementById('posts');
                posts.appendChild(postDiv);
                container.appendChild(posts);

            }

        })

    btn.disabled = true;
}


