const server = require('../api/server.js');
const request = require('supertest');

// it('should be the testing environment', () => {
//     expect(process.env.DB_ENV).toBe('testing');
// })

describe('server.js', () => {
    describe('GET /', () => {
        it('should return 200 OK status', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it('should return JSON response', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('application/json');
                })
        })
    })


})