const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Arafath',
    email:'whyareyousoougly@gmail.com',
    password: 'Classical99'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})


test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Arafath',
        email:'arafa@gmailllll.com',
        password: 'Arraba123'
    }).expect(201)
})

test('Should log in existing user', async () => {
    await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200)
})

test('Should not login non exitent user', async() => {
    await request(app).post('/users/login').send({
        email: 'osfh@gmail.com',
        password: 'hssjdf'
    }).expect(400)
})