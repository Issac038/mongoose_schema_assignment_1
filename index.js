const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const User = require('./schema');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


const newUser = new User({
  username: 'johndoe',
  email: 'johndoe@example.com',
  password: 'securepassword123',
  roles: ['user', 'admin'],
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  },
  lastLogin: new Date(),
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


