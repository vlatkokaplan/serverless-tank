exports = {

	isEnemyInLine: function(me, enemy){
		if(me.x == enemy.x || me.y == enemy.y) {
			return true;
		}

		return false;
	}

	getEnemyLinePosition: function(me, enemy) {
		if(me.x == enemy.x) {
			return 'vertical';
		}

		if(me.y == enemy.y) {
			return 'horizontal';
		}

		return false;
	}

	getStepsToFace: function(current, wanted) {
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

	getNextToFace: function(current, wanted) {
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
};