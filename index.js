'use strict'

const uniqueRandomArray = require('unique-random-array');
let data = require('./data')

exports.all = data;
exports.random = uniqueRandomArray(data);

exports.getAttraction = (id) => {
	const name = data[id - 1];

	if (!name) {
		throw new Error(`Data with ID '${id}' does not exist.`);
	}

	return name;
};

exports.getAttractionId = (name) => {
	const index = data.indexOf(name);

	if (index === -1) {
		throw new Error(`Data with name '${name}' does not exist.`);
	}
	return index + 1;
};
exports.addAttraction = (name) => {
  if(!name) {
    throw new Error(`No name found to add`)
  }
  return data.push(name)
}
exports.removeAttraction = (name) => {
  if(!name) {
    throw new Error(`No name found to remove`)
  }
  const index = data.indexOf(name)
  return data.splice(index, 1)
}
