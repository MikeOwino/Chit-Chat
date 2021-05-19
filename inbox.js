
document.getElementById('nav-image-link').addEventListener('click', e => {
  window.location.href = "index.html";
})

const currentUsername = sessionStorage.getItem('username');

window.addEventListener('mousedown', e => {
  sessionStorage.setItem('username', currentUsername);
})

window.onbeforeunload = getUsername;

function getUsername() {
  sessionStorage.setItem('username', currentUsername);
}