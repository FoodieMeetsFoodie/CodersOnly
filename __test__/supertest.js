const app = require('../server.server.js');
const request = require('supertest');

describe('Create User', () => {

    let createUserObject = {
        "username": "velocirabbit",
        "password": "12345",
        "age": 25,
        "location": "the great plains",
        "proglang": "Java",
        "comment": "Bounce with me",
        "matches": null,
        "url": null
    } 

    it('returns status code of 200 if succesfully created a user', async () => {
        const res = await request(app).post('/api/users')
    })
})