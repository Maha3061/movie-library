document.getElementById('sign-in-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simulating authentication
    localStorage.setItem('user', JSON.stringify({ email }));
    window.location.href = 'home.html';
  });
  
  document.getElementById('sign-up-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simulating user registration
    localStorage.setItem('user', JSON.stringify({ username, email }));
    window.location.href = 'home.html';
  });
  