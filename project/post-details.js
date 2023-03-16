let url = new URL(location.href);
let jsn = url.searchParams.get('data');
let post = JSON.parse(jsn);


let postDiv = document.createElement('div');
postDiv.setAttribute('id', 'post');
let postId = document.createElement('p');
postId.innerText = `Post ID: ${post.id}`;
let title = document.createElement('h4');
title.innerText = `${post.title}`;
let postBody = document.createElement('p');
postBody.innerText = `${post.body}`;

postDiv.append(postId, title, postBody);
let commentsDiv = document.createElement('div');
let commentsHeader = document.createElement('div');
commentsHeader.innerText = 'Comments';
commentsHeader.setAttribute('id', 'header')
commentsDiv.setAttribute('id', 'comments');
container.append(postDiv, commentsHeader, commentsDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(commentsArray => {
        for (const comment of commentsArray) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            let name = document.createElement('h5');
            name.innerText = `ID: ${comment.id}. ${comment.name}`;
            let email = document.createElement('p');
            email.innerText = `Email: ${comment.email}`;
            let body = document.createElement('p');
            body.innerText = `${comment.body}`;
            commentDiv.append(name, email, body)
            let container = document.getElementById('container');
            console.log(container);
            let commentsDiv = document.getElementById('comments')
            commentsDiv.appendChild(commentDiv);

        }
    });
