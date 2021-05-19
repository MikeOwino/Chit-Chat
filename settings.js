// Get all the elements needed for the search bar to work

const currentUsername = sessionStorage.getItem('username');

window.addEventListener('mousedown', e => {
  sessionStorage.setItem('username', currentUsername);
})

window.onbeforeunload = getUsername;

function getUsername() {
  sessionStorage.setItem('username', currentUsername);
}