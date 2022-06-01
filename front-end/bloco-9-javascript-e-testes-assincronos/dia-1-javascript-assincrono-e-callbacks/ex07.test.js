const { uppercase } = require('./ex07')

describe('test', () => {
  it('test1', (done) => {
    uppercase('xablau', (str) => {
      try {
        expect(str).toBe('XABLAU')
        done();
      } catch (error) {
        done(error);
      }
    })
  })
});