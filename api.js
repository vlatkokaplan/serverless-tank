/* global require, module */

var API = require('claudia-api-builder'),
	api = new API();
module.exports = api;
api.get('/info', function () {
	'use strict';
	return {
		name: 'Mrmot',
		owner: 'Gojko'
	};
});
api.post('/command', function (/*request*/) {
	'use strict';
	//var map = request.body;
	return {
		command: 'fire'
	};
});

