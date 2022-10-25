const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/friends', () => {
    describe('GET', () => {
      it('responds with 200 status', () =>
        request(server).get('/api/friends').expect(200));
    });
  });
});
