function renderEmail(contacts, container) {
const users = contacts.users;
const len = users.length;
for (let i = 0; i < len; i++) {
    if (users[i]['userId'] == 1) { //Get First User
        email_id = users[i]['emailAddress'];
    }
}
container.innerHTML = '<a href="mailto:' + email_id + '"> <i class="bi bi-envelope"></i></a>';
}
renderEmail(contacts, document.getElementById('email_id'));

