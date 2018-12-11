'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ParticipantSchema = new Schema({
  firstName: {
    type: String,
    required: 'The first name was missing.'
  },
  lastName: {
    type: String,
    required: 'The last name was missing.'
  },
  email: {
    type: String,
    validate: {
      validator: value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
      message: value => `${value} is not a valid email!`
    },
    required: 'The email was missing.'
  },
  date: {
    type: Date,
    required: 'The date was missing.'
  },
  createdAt: {
    type: Date,
    default: Date.now }
});

module.exports = mongoose.model('Participants', ParticipantSchema);
