var _ = require('underscore');

function hasEnemy(params) {
	var me = params.you;
	var enemies = params.enemies;
	var enemy = enemies[0];

	var isInLine = isEnemyInLine(me, enemy);
	var linePosition = getEnemyLinePosition(me, enemy);
	var 
	
	var isEnemyInLine = function(me, enemy){
		if(me.x == enemy.x || me.y == enemy.y) {
			return true;
		}

		return false;
	}

	var getEnemyLinePosition = function(me, enemy) {
		if(me.x == enemy.x) {
			return 'vertical';
		}

		if(me.y == enemy.y) {
			return 'horizontal';
		}

		return false;
	}

	var getStepsToFace = function(current, wanted) {
		if(current == 'top' || current == 'bottom') {
			if(wanted == 'left' || wanted == 'right') {
				return 1;
			}
			if(wanted == current) {
				return 0;
			}

			return 2;
		}
	}

	var getNextToFace = function(current, wanted) {
		if(current == 'top') {
			if(wanted == 'right' || wanted == 'bottom') {
				return 'turn-right';
			}
			if(wanted == 'left') {
				return 'turn-left';
			}

			return false;
		}
		if(current == 'left') {
			if(wanted == 'top' || wanted == 'right') {
				return 'turn-right';
			}
			if(wanted == 'bottom') {
				return 'turn-left';
			}

			return false;
		}

		if(current == 'bottom') {
			if(wanted == 'top' || wanted == 'left') {
				return 'turn-right';
			}
			if(wanted == 'right') {
				return 'turn-left';
			}

			return false;
		}

		if(current == 'right') {
			if(wanted == 'bottom' || wanted == 'left') {
				return 'turn-right';
			}
			if(wanted == 'top') {
				return 'turn-left';
			}

			return false;
		}
	}

	var runOrAttack = function(me, enemy){
		if(linePosition == 'vertical') {
			var enemyPosition = (me.y > enemy.y)?'top':'bottom';
			var myPosition = (enemy.y > me.y)?'top':'bottom';

			var stepsToFaceEnemy = getStepsToFace(me.direction, enemyPosition);
			var stepsToFaceMe = getStepsToFace(enemy.direction, myPosition);

			if(stepsToFaceEnemy < stepsToFaceMe) {
				return 1;
			}

			return 0;
		}
	}
}