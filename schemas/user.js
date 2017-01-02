const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type    : String,
    required: true
  },

  email: {
    type  : String,
    unique: true
  },

  password: {
    type  : String,
    unique: true
  },

  admin: {
    type  : Boolean,
    unique: true
  }

});

module.exports = userSchema;
