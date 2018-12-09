const mongoose = require('mongoose');
const Participant = require('../../api/models/eventFormModel');

const connectionStringToTestDb = "mongodb://localhost/TestEventFormdb";

describe('Database Tests', function() {
    before(function (done) {
      mongoose.connect(connectionStringToTestDb, { useNewUrlParser: true });
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, '/* --- connection error --- */'));
      db.once('open', function() {
        console.log('/* --- connection established --- */');
        done();
      });
    });

    it('should save participant with correct data', function(done) {
        const testParticipant = Participant({
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: '2018-12-16 01:00:00.000'
        });

        testParticipant.save(done);
    });

    it('should fail to save participant without first name', function(done) {
        const testParticipant = Participant({
            firstName: '',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: '2018-12-16 01:00:00.000'
        });

        testParticipant.save(err => {
            if(err) { return done(); }
            throw new Error('should throw an error');
          });
    });

    it('should fail to save participant without last name', function(done) {
        const testParticipant = Participant({
            firstName: 'Thomas',
            lastName: '',
            email: 'neo@matrix.com',
            date: '2018-12-16 01:00:00.000'
        });

        testParticipant.save(err => {
            if(err) { return done(); }
            throw new Error('should throw an error');
          });
    });

    it('should fail to save participant without email', function(done) {
        const testParticipant = Participant({
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: '',
            date: '2018-12-16 01:00:00.000'
        });

        testParticipant.save(err => {
            if(err) { return done(); }
            throw new Error('should throw an error');
          });
    });

    it('should fail to save participant with incorrect email', function(done) {
        const testParticipant = Participant({
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'incorrect_email',
            date: '2018-12-16 01:00:00.000'
        });

        testParticipant.save(err => {
            if(err) { return done(); }
            throw new Error('should throw an error');
          });
    });

    it('should fail to save participant without date', function(done) {
        const testParticipant = Participant({
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: ''
        });

        testParticipant.save(err => {
            if(err) { return done(); }
            throw new Error('should throw an error');
          });
    });

    it('should fail to save participant with incorrect date', function(done) {
        const testParticipant = Participant({
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: 'incorrect_date'
        });

        testParticipant.save(err => {
            if(err) { return done(); }
            throw new Error('should throw an error');
          });
    });

    after(function(done){
        mongoose.connection.db.dropDatabase(function(){
          mongoose.connection.close(done);
        });
    })
});