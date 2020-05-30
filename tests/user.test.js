const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Arafath',
        email:'arafa@gmailllll.com',
        password: 'Arraba123'
    }).expect(201)
})