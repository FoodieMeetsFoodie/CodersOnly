const app = require('../server/server.js');
const request = require('supertest');

describe('Create User', () => {

    let createUserObject = {
        "username": "Andrew",
        "password": "12345",
        "age": 25,
        "location": "the great plains",
        "proglang": "Java",
        "comment": "Bounce with me",
        "matches": 8,
        "url": null
    } 

    it('returns status code of 201 if succesfully created a user', async () => {
        const res = await request(app).post('/api/users').send(createUserObject);
        
        expect(res.statusCode).toEqual(201);
        
    })

    xit('returns an error when required fields are not entered correctly', async () => {


    })  

},

describe('Verify User', () => {

    const verifyUserObj = {
        username: "Andrew",
        password: "12345"
    }

    it('return status code of 201 if succesfully logged in', async () => {
        const res = await request(app).post('/api/auth').send(verifyUserObj);

        expect(res.statusCode).toEqual(201);
    })

    xit('return status code of 400 on unsuccessful log-in', async () => {
        const res = await request(app).post('/api/auth').send({username: "Andrew", password: "wrong password"});

        expect(res.statusCode).toEqual(400);
    })

});