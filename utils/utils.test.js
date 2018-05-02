const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);

	expect(res).toBe(44).toBeA('number');

	// if (res != 44) {
	// 	throw new Error(`Expected 44, but got ${res}.`);
	// }
});


it('should square a number', () => {
	var res = utils.square(9);

	expect(res).toBe(81).toBeA('number');

	// if (res != 81) {
	// 	throw new Error(`Expected 81, but got ${res}.`);
	// }
});


// it('should expect some values', () => {
// 	// expect(12).toNotBe(11);
// 	// expect({name: 'jacob'}).toNotEqual({name: 'Jacob'});
// 	// expect([2, 3, 4]).toExclude(1);
// 	expect({
// 		name: 'Jacob',
// 		age: 28,
// 		location: 'New Jersey'
// 	}).toInclude({
// 		age: 28
// 	});

// 


it('should verify that first and last names are set', () => {
	var userObj = {age: 28, location: 'New York City'};
	var res = utils.setName(userObj, 'Jacob Erling');
	expect(userObj).toBeA('object');
	expect(userObj).toInclude({firstName: 'Jacob', lastName: 'Erling'});
});
















