module.exports = function (tank, map, walls) {
	//'use strict';
	isNextBlock = require('nextBlock');
	map.hCenter = Math.floor(map.height/2);
	map.vCenter = Math.floor(map.width/2);
	var nextBlock = isNextBlock(tank, walls);
	if(tank.y > map.hCenter) {
		//change direction
		if(tank.direction == 'top') {
			if(nextBlock)	{
				return 'fire';
			} else {
				return 'forward';
			}
		} else {
			if(tank.direction == "left") {
				return 'turn-right';
			} else if (tank.direction == "right") {
				return 'turn-left';
			} else {
				return 'turn-right';
			}
		}
	} else if(tank.y < map.hCenter) {

		if(tank.direction == 'bottom'){
			if(nextBlock)	{
				return 'fire';
			} else {
				return 'forward';
			}
		} else {
			if(tank.direction == "left") {
				return 'turn-left';
			} else if (tank.direction == "right") {
				return 'turn-right';
			} else {
				return 'turn-right';
			}
		}

	} else {
		if(tank.x > map.vCenter) {
			if(tank.direction == 'left') {
				if(nextBlock)	{
					return 'fire';
				} else {
					return 'forward';
				}
			} else {
				if(tank.direction == 'bottom') {
					return 'turn-right';
				} else if(tank.direction == 'top') {
					return 'turn-left';
				} else {
					return 'turn-left';
				}
			}
		} else if(tank.x < map.vCenter) {
			if(tank.direction == 'right') {
				if(nextBlock)	{
					return 'fire';
				} else {
					return 'forward';
				}
			} else {
				if(tank.direction == 'bottom') {
					return 'turn-left';
				} else if(tank.direction == 'top') {
					return 'turn-right';
				} else {
					return 'turn-left';
				}
			}
		}
	} 
}