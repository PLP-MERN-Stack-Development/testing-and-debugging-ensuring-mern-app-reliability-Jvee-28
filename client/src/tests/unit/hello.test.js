const request = require('supertest');
const app = require('../../src/app');

test('GET /api/hello', async ()=>{
  const res = await request(app).get('/api/hello').expect(200);
  expect(res.body.msg).toBe('hi');
});
