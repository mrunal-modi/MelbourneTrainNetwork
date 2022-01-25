function renderContacts(contacts, container) {
    const users = contacts.users;
    const len = users.length;
    let html = '';
    for (let i = 0; i < len; i++) {
        // if (users[i]['userId'] == 1) { //Get First User
            html += '<class="post">' 
            + '<h2>' + users[i]['firstName'] + " " + users[i]['lastName'] + '</h2>' 
            + '<h4>' + users[i]['emailAddress'] + '</h4>'
            + '<br>';
            }
        // }
    console.log(html)
    // TODO: add code to display the html variable inside a ul element with id="data"
    // Hint: you can use the container parameter's innerHTML property to insert Html tags
    container.innerHTML = '<ul id = "contacts">' + html + '</ul>';
  }
  renderContacts(contacts, document.getElementById('contacts-section'));
