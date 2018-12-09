const request = require('supertest');

describe("EventForm API Tests", function() {
    it('[integration] should return status 200', (done) => {
        const app = require('../../server');
        const testParticipant = {
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: '2018-12-16 01:00:00.000'
        };
        request(app)
            .post('/participants')
            .send(testParticipant)
            .expect(200, done);
    });

    it('should return status 400 (bad request) when first name is empty', (done) => {
        const app = require('../../server');
        const testParticipant = {
            firstName: '',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: '2018-12-16 01:00:00.000'
        };
        request(app)
            .post('/participants')
            .send(testParticipant)
            .expect(400, done);
    });

    it('should return status 400 (bad request) when last name is empty', (done) => {
        const app = require('../../server');
        const testParticipant = {
            firstName: 'Thomas',
            lastName: '',
            email: 'neo@matrix.com',
            date: '2018-12-16 01:00:00.000'
        };
        request(app)
            .post('/participants')
            .send(testParticipant)
            .expect(400, done);
    });

    it('should return status 400 (bad request) when email is empty', (done) => {
        const app = require('../../server');
        const testParticipant = {
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: '',
            date: '2018-12-16 01:00:00.000'
        };
        request(app)
            .post('/participants')
            .send(testParticipant)
            .expect(400, done);
    });

    it('should return status 400 (bad request) when email is incorrect', (done) => {
        const app = require('../../server');
        const testParticipant = {
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'incorrect_email',
            date: '2018-12-16 01:00:00.000'
        };
        request(app)
            .post('/participants')
            .send(testParticipant)
            .expect(400, done);
    });

    it('should return status 400 (bad request) when date is empty', (done) => {
        const app = require('../../server');
        const testParticipant = {
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: ''
        };
        request(app)
            .post('/participants')
            .send(testParticipant)
            .expect(400, done);
    });

    it('should return status 404 (bad url)', (done) => {
        const app = require('../../server');
        const testParticipant = {
            firstName: 'Thomas',
            lastName: 'Anderson',
            email: 'neo@matrix.com',
            date: '2018-12-16 01:00:00.000'
        };
        request(app + 'xyz')
            .post('/participants')
            .send(testParticipant)
            .expect(404, done);
    });
});