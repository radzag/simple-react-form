"use strict";
const mongoose = require("mongoose");
const Participant = mongoose.model("Participants");

const isValidEmail = value =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

exports.add_participant = function(req, res) {
  const { firstName, lastName, email, date } = req.body;
  res.statusCode = 400;

  if (!firstName) {
    res.status(400).send("The first name was missing.");
  } else if (!lastName) {
    res.status(400).send("The last name was missing.");
  } else if (!email || !isValidEmail(email)) {
    res.status(400).send("The email was missing or was in incorrect format.");
  } else if (!date) {
    res.status(400).send("The date was missing.");
  } else {
    const new_participant = new Participant(req.body);
    new_participant.save(function(err, participant) {
      if (err) {
        res.statusCode = 500;
        res.status(500).send(`Server error:\n${err}`);
      } else {
        res.status(200).json(participant);
      }
    });
  }
};
