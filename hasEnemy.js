var _ = require('underscore');
var util = require('./utility');
var run = require('./run');
var attack = require('./attack');

function handleEnemy(params) {
	var me = params.you;
	var enemies = params.enemies;
	var enemy = enemies[0];

	var isInLine = util.isEnemyInLine(me, enemy);
	var linePosition = util.getEnemyLinePosition(me, enemy);

	var chaseEnemy = function(me,enemy) {
		distToEnemy = {
			x: me.x - enemy.x,
			y: me.y - enemy.y
		};

		if(distToEnemy.x < 0 && me.direction == 'right') {
			if(Math.abs(distToEnemy.x) > 1){
				return 'forward';
			}

			if(
				enemy.direction == 'bottom' && distToEnemy.y > 0
				|| enemy.direction == 'top' && distToEnemy.y < 0)
			{
				return 'reverse';
			}


		}
	}

	var runOrAttack = function(me, enemy){
		if(linePosition == 'vertical') {
			var enemyPosition = (me.y > enemy.y)?'top':'bottom';
			var myPosition = (enemy.y > me.y)?'top':'bottom';

			var stepsToFaceEnemy = util.getStepsToFace(me.direction, enemyPosition);
			var stepsToFaceMe = util.getStepsToFace(enemy.direction, myPosition);

			if(stepsToFaceEnemy < stepsToFaceMe) {
				return 1;
			}

			return 0;
		}

		if(linePosition == 'horizontal') {
			var enemyPosition = (me.x > enemy.x)?'left':'right';
			var myPosition = (enemy.y > me.y)?'left':'right';

			var stepsToFaceEnemy = util.getStepsToFace(me.direction, enemyPosition);
			var stepsToFaceMe = util.getStepsToFace(enemy.direction, myPosition);

			if(stepsToFaceEnemy < stepsToFaceMe) {
				return 1;
			}

			return 0;
		}


	}

	if(!runOrAttack(me, enemy)) {
		return run(params);
	}

	return attack(params);
}

exports = handleEnemy;