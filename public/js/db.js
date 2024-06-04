const express = require('express');
const mongodb = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Connect to MongoDB
const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URI;;
const dbName = 'movieLibrary';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Routes for user authentication
  app.post('/signup', (req, res) => {
    // Signup logic here
    document.getElementById('sign-up-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        // Simulating user registration
        localStorage.setItem('user', JSON.stringify({ username, email }));
        window.location.href = 'home.html';
      });
      
  });

  app.post('/login', (req, res) => {
    document.getElementById('sign-in-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        // Simulating authentication
        localStorage.setItem('user', JSON.stringify({ email }));
        window.location.href = 'home.html';
      });
      
  });

  // Other routes...

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
