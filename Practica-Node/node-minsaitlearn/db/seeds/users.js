// Archivo seed.js
const mongoose = require('mongoose');

const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPass(){
  bcrypt.hash('password', saltRounds).then(hash => {
    const user = [
      {
        email: 'admin@hola.com',
        password: hash,
        admin: 1,
      },
      {
        email: 'user@hola.com',
        password: hash,
        admin: 0,
      }
    ];
    
    const userDocuments = user.map(user => new User(user));
    const DB_URL = "mongodb+srv://admin:verySecurePassword@cluster0.m5exa.mongodb.net/ecommerce?retryWrites=true&w=majority";

  
    mongoose
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(async () => {
        const allUsers = await User.find();
        
        if (allUsers.length) {
          await User.collection.drop();
        }
      })
      .catch((err) => console.log(`Error deleting data: ${err}`))
      .then(async () => {
        await User.insertMany(userDocuments);
      })
      .catch((err) => console.log(`Error creating data: ${err}`))
      .finally(() => mongoose.disconnect());
  });
}


hashPass();