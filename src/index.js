// all, random are our api access points
var uniqueRandomArray = require('unique-random-array');
var autobotsNames = require('./autobots-names.json');

module.exports = {
	all: autobotsNames,
	random: uniqueRandomArray(autobotsNames)
}