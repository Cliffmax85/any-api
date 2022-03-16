const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Poolplayer = require('../lib/models/Poolplayer');

describe('any-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a poolplayer', async () => {
    const expected = {
      name: 'Shane Van Boening',
      age: 39,
      cue: 'CueTec', 
    };
    const res = await request(app).post('/api/v1/poolplayers').send(expected);

    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  it('gets a list of pool players', async () => {
    const expected = await Poolplayer.findAll();
    const res = await request(app).get('/api/v1/poolplayers');

    expect(res.body).toEqual(expected);
  });
});
