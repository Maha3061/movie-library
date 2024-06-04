document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      window.location.href = 'index.html';
    }
    document.querySelector('h2').innerText = `Welcome, ${user.email}`;
  });
  