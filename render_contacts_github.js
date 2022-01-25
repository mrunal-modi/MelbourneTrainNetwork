function renderGitHub(contacts, container) {
const users = contacts.users;
const len = users.length;
for (let i = 0; i < len; i++) {
    if (users[i]['userId'] == 1) { //Get First User
        github_url = users[i]['github_url'];
    }
}
container.innerHTML = '<a href="' + github_url + '"> <i class="bi bi-github"></i></a>';
}
renderGitHub(contacts, document.getElementById('github_url'));

