let sessionsJson = localStorage.getItem('sessions');
let sessions=JSON.parse(sessionsJson);
console.log(sessions);
for (const session of sessions) {

    let onesession=document.createElement('div');

    onesession.innerText=session;

document.body.append(onesession);
}
