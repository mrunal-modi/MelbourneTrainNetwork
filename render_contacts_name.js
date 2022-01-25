function renderEmail(contacts, container) {
const users = contacts.users;
const len = users.length;
for (let i = 0; i < len; i++) {
    if (users[i]['userId'] == 1) { //Get First User
        firstName = users[i]['firstName'];
        lastName = users[i]['lastName'];
        '<h2>' + users[i]['firstName'] + " " + users[i]['lastName'] + '</h2>' 
    }
}
container.innerHTML = '<h2>' + firstName + ' ' + lastName + '</h2>';
}
renderEmail(contacts, document.getElementById('fullName'));

