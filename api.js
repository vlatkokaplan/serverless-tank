/* global require, module */
var API = require('claudia-api-builder'),
	api = new API(),
	tankMovement = require('./movement');
module.exports = api;
api.get('/info', function () {
	'use strict';
	return {
		name: 'Mrmot',
		owner: 'Mrmoti'
	};
});
api.post('/command', function (request) {
	'use strict';
	//var map = request.body;
	var map = {
		width : request.body.mapWidth,
		height : request.body.mapHeight
	};
	return {
		command: tankMovement(request.body.you, map)
	};
});

