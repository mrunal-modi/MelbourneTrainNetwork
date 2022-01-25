function renderLinkedIn(contacts, container) {
const users = contacts.users;
const len = users.length;
for (let i = 0; i < len; i++) {
    if (users[i]['userId'] == 1) { //Get First User
        linkedin_url = users[i]['linkedin_url'];
    }
}
container.innerHTML = '<a href="' + linkedin_url + '"> <i class="bi bi-linkedin"></i></a>';
}
renderLinkedIn(contacts, document.getElementById('linkedIn_url'));
