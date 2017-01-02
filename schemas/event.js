const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

  name: {
    type    : String,
    required: true,
  },

  topic: {
    type    : String,
    required: true,
  },

  users: [
    { id: String }
  ],

  count: {
    yes: Number,
    no: Number
  },

  expiration: {
    type: Date,
    required: true
  }

});

module.exports = eventSchema;

// { "name": "Cats or Dogs", "topic": "Do you like Cats better than Dogs", "users": ["5869f89eaa07c6756ab2d23f"],"count": {"yes": 1, "no": 0}, "expiration": 1352540684243}
