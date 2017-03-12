const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('GET /users는', ()=> {
  describe('성공시', ()=> {
    it('유저 객체를 담은 배열로 응답한다 ', (done)=> {
      request(app)
          .get('/users')
          .end((err, res) => {
            res.body.should.be.instanceOf(Array);
            done();
          });
    });
    
    it('최대 limit 갯수만큼 응답한다 ', (done) => {
      request(app)
          .get('/users?limit=2')
          .end((err, res) => {
            res.body.should.have.lengthOf(2)
            done();
          });
    });
  });
  describe('실패시', ()=> {
    it('limit이 숫자형이 아니면 400을 응답한다', (done) => {
      request(app)
          .get('/users?limit=two')
          .expect(400)
          .end(done);
    })
  })
});
