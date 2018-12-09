'use strict';
module.exports = function(app) {
  const eventForm = require('../controllers/eventFormController');

  app.route('/participants')
    .post(eventForm.add_participant);
};
