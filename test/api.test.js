const request = require('supertest');
const chai = require('chai');
const app = require('../src')
const utils = require('./utils');
const expect = chai.expect;

const userData = {
	"name": utils.makeRandomString(6),
	"lastName": utils.makeRandomString(6),
	"phone": "+34 692579981"
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
				expect(res.body.message).to.be.equal("User created correctly")
				expect(res.body.data.__v).to.be.equal(0);
				done();
			});
	});
	it('Trying to insert an existing user', (done) => {
		request(app)
			.post('/api/user/add')
			.set("Accept", "application/json")
			.send(userData)
			.expect("Content-Type", /json/)
			.expect(400)
			.end(function (err, res) {
				if (err) done(err)
				expect(res.body.message).to.be.equal("User already exists");
				done();
			});
	});
	it('Trying to insert an user with invalid phone', (done) => {
		let data = utils.copyObject(userData);
		data.name = utils.makeRandomString(6);
		data.phone = '888777441'
		request(app)
			.post('/api/user/add')
			.set("Accept", "application/json")
			.send(data)
			.expect("Content-Type", /json/)
			.expect(400)
			.end(function (err, res) {
				if (err) done(err)
				expect(res.body.message).to.be.equal("Must be a valid phone number");
				done();
			})
	})
})