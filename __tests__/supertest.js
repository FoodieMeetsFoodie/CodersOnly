const app = require('../server/server.js');
const request = require('supertest');

xdescribe('Create User', () => {

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

    xit('returns status code of 201 if succesfully created a user', async () => {
        const res = await request(app).post('/api/users').send(createUserObject);
        
        expect(res.statusCode).toEqual(201);
        
    })

    xit('returns an error when required fields are not entered correctly', async () => {

    })  

});

xdescribe('Verify User', () => {

    const verifyUserObj = {
        username: "Andrew",
        password: "12345"
    }

    xit('return status code of 201 if succesfully logged in', async () => {
        const res = await request(app).post('/api/auth').send(verifyUserObj);

        console.log(res)

        expect(res.statusCode).toEqual(201);
        // expect(typeof res).toBe('object')

    })

    xit('return status code of 201 on unsuccessful log-in', async () => {
        const res = await request(app).post('/api/auth').send({username: "Andrew", password: "wrong password"});

        expect(res.statusCode).toEqual(201);
        // expect(res).toBeInstanceOf(Error)
    })

});

xdescribe('Get User Profile', () => {

    const getUserObj = {
        "username": "Andrew",
        "password": "12345",
    }

    it('should return status code of 201 if succesfully retrieved user data', async () => {
        const res = await request(app).post('/api/users/Andrew').send(getUserObj);

        expect(res.statusCode).toEqual(201);

    })

    it('should return the string "Andrew" when succesfully getting user data', async () => {
        const res = await request(app).post('/api/users/Andrew').send(updateUserObj);

        expect(res.username).toBe("Andrew");

    })

});

xdescribe('Update User', () => {

    const updateUserObj = {
        "username": "Andrew",
        "password": "12345",
        "age": Math.floor(Math.random()* 100),
        "location": "Konoha",
        "proglang": "C",
        "comment": "I am a random number age",
        "url": null
    }

    it('should return status code of 201 if succesfully updated user', async () => {
        const res = await request(app).post('/api/users/Andrew').send(updateUserObj);

        expect(res.statusCode).toEqual(201);
    })

    it('should return a random integer between 0 and 100 as age if successfully updated user', async () => {
        const res = await request(app).post('/api/users/Andrew').send(updateUserObj);

        expect(res.age).toBeGreaterThanOrEqual(0);
        expect(res.age).toBeLessThan(100);
    })

});

describe('Get Friends middleware - this should find all the profiles listed in the database', () => {

    it('should return all the users listed in the database', async() => {

        const res = await request(app).get('api/functions/friends');
        expect(res).toBeInstanceOf(Array)
    })
})
