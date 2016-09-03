module.exports = function (tank, map) {
	//'use strict';
	map.hCenter = Math.floor(map.height/2);
	map.vCenter = Math.floor(map.width/2);
	var isNextWall = false;
	if(tank.y > map.hCenter) {
		//change direction
		if(tank.direction == 'top') {
			return 'forward';
		} else {
			if(tank.direction == "left") {
				return 'turn-left';
			} else if (tank.direction == "right") {
				return 'turn-right';
			} else {
				return 'turn-right';
			}
		}
	} else if(tank.y < map.hCenter) {

		if(tank.direction == 'bottom'){
			return 'forward';
		} else {
			if(tank.direction == "left") {
				return 'turn-right';
			} else if (tank.direction == "right") {
				return 'turn-left';
			} else {
				return 'turn-right';
			}
		}

	} else {
		return 'forward';
	} 
}