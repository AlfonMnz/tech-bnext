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

const contactsData = {
	"contacts": [
		{
			"contactName": "Pepe",
			"phone": "+34692579990"
		},
		{
			"contactName": "Pepe1",
			"phone": "+34692579991"
		},
		{
			"contactName": "Pepe2",
			"phone": "+34692579992"
		}
	],
	"userId": 1
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
});
describe('POST api/contacts/addContacts', () => {
	it("Add contacts to an user", (done) => {
		request(app)
			.post('/api/contact/addContacts')
			.set("Accept", "application/json")
			.send(contactsData)
			.expect("Content-Type", /json/)
			.expect(201)
			.end(function (err, res) {
				if (err) done(err)

				expect(res.body.message).to.be.equal("Contacts created correctly");
				expect(res.body.data[0].contactName).to.be.equal(contactsData.contacts[0].contactName);
				expect(res.body.data[0].phone).to.be.equal(contactsData.contacts[0].phone);

				expect(res.body.data[1].contactName).to.be.equal(contactsData.contacts[1].contactName);
				expect(res.body.data[1].phone).to.be.equal(contactsData.contacts[1].phone);
				done();
			});
	});
	it("Trying to insert contacts without userId", (done) => {
		const data = utils.copyObject(contactsData);
		delete data.userId;
		request(app)
			.post('/api/contact/addContacts')
			.set("Accept", "application/json")
			.send(data)
			.expect("Content-Type", /json/)
			.expect(400)
			.end(function (err, res){
				if (err) done (err)
				expect(res.body.message).to.be.equal("UserId is required");
				done();
			});
	});
	it("Trying to insert contacts with bad type userId", (done) => {
		const data = utils.copyObject(contactsData);
		data.userId = "1";
		request(app)
			.post('/api/contact/addContacts')
			.set("Accept", "application/json")
			.send(data)
			.expect("Content-Type", /json/)
			.expect(400)
			.end(function (err, res){
				if (err) done(err)
				expect(res.body.message).to.be.equal("UserId must be integer");
				done();
			});
	});
	it ("Trying to insert contacts without bad phone", (done) => {
		const data = utils.copyObject(contactsData);
		data.contacts[0].phone = "741852296";
		request(app)
			.post('/api/contact/addContacts')
			.set("Accept", "application/json")
			.send(data)
			.expect("Content-Type", /json/)
			.expect(400)
			.end(function(err, res){
				if (err) done(err)
				expect(res.body.message).to.be.equal("Must be a valid phone number");
				done();
			});
	})


})
describe('GET api/users/contacts/', () => {
	it ("Get contact of an user", (done) => {
		const userId = 1;
		request(app)
			.get('/api/user/contacts/'+userId)
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(200)
			.end(function(err,res){
				if (err) done(err)
				expect(res.body.data.contacts[0].contactName).to.be.equal(contactsData.contacts[0].contactName);
				expect(res.body.data.contacts[0].phone).to.be.equal(contactsData.contacts[0].phone);

				expect(res.body.data.contacts[1].contactName).to.be.equal(contactsData.contacts[1].contactName);
				expect(res.body.data.contacts[1].phone).to.be.equal(contactsData.contacts[1].phone);
				done();
			})
	});
	it("Trying to get an user with non exists id", (done) => {
		const userId = 619;
		request(app)
			.get('/api/user/contacts/'+userId)
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(400)
			.end(function(err,res){
				if (err) done(err)
				expect(res.body.message).to.be.equal("User not found");
				done();
			})
	});
});