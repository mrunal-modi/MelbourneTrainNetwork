function renderTwitter(contacts, container) {
const users = contacts.users;
const len = users.length;
for (let i = 0; i < len; i++) {
    if (users[i]['userId'] == 1) { //Get First User
        twitter_url = users[i]['twitter_url'];
    }
}
container.innerHTML = '<a href="' + twitter_url + '"> <i class="bi bi-twitter"></i></a>';
}
renderTwitter(contacts, document.getElementById('twitter_url'));

