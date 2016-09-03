
// CONSTANTS
// --------------------

// direction constants
var direction = {
  "TOP": "top",
  "RIGHT": "right",
  "BOTTOM": "bottom",
  "LEFT": "left"
};

// Enemy functions
// --------------------

/**
 * enemyInSight - Checks if enemy is in sight (visible)
 *
 * @todo handle multiple enemies
 *
 * @param {Object} state game state
 * @return {bool}
 */
function enemyInSight(state) {
    var enemies = state.enemies;
    return _.has(enemies, 'x');
};


/**
 * enemyInSight - Checks if enemy is in weapon range
 *
 * @todo handle multiple enemies
 *
 * @param {Object} state game state
 * @return {bool}
 */
function enemyInWeaponRange(state) {
  var tank = state.you,
      enemies = state.enemies,
      targetRange = state.targetRange;

  console.error('not implemented');
}

/**
 * enemyOnAim - Checks if enemy is on aim.
 *
 * @todo handle multiple enemies
 *
 * @param {Object} state game state
 * @return {bool}
 */
function enemyOnAim(state) {
  var tank = state.you,
      enemies = state.enemies;

  // is visible
  if (!enemyInSight()){
    return false;
  }

  // based on our direction
  if (tank.direction == direction.TOP) {
    // search y cord
    return enemies.y < tank.y;
  }

  if (tank.direction == direction.RIGHT) {
    // search x cord
    return enemies.x > tank.x;
  }

  if (tank.direction == direction.BOTTOM) {
    // search y cord
    return enemies.y > tank.y;
  }

  if (tank.direction == direction.LEFT) {
    // search x cord
    return enemies.x < tank.x;
  }

};
