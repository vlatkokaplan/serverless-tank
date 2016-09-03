module.exports = function (tank, walls) {
	var newPos = {};
	if(tank.direction == 'top') {
		newPos = {
			x: tank.x,
			y: tank.y - 1
		}
	}
	if(tank.direction == 'left') {
		newPos = {
			x: tank.x - 1,
			y: tank.y
		}
	}
	if(tank.direction == 'right') {
		newPos = {
			x: tank.x+1,
			y: tank.y
		}
	}
	if(tank.direction == 'bottom') {
		newPos = {
			x: tank.x,
			y: tank.y + 1
		}
	}
	var isWallNext = false
	for (var i = 0; i < walls.length; i++) {
   		if(newPos.x == walls[i].x) {
   			if(newPos.y == walls[i].y) {
   				isWallNext = true;
   			}
   		}
   	}
   	return isWallNext;
   // more statements
}	