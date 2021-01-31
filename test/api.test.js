const request = require('supertest');
const chai = require('chai');
const app = require('../src')

const expect = chai.expect;

const userData = {
	"name": "Test",
	"lastName": "Test LastName",
	"phone": "Test +34"
}

describe('POST api/user/add', () => {
	it('Add a new user', (done) => {
		request(app)
			.post('/api/user/add')
			.set("Accept", "application/json")
			.send(userData)
			.expect("Content-Type", /json/)
			.expect(201)
			.end(function (err, res) {
				if (err) done(err)
				expect(res.message).to.be("String")
				expect(res.message).to.be.equal("User created correctly")
				expect(res.data.__v).to.be.equal(0);
			});
	})
})