const PhysicsObject = require("./PhysicsObject.js");
const Vector2D = require("./Vector2D.js");
const { GAME_CONSTANTS } = require("../shared/Constants.js");

class PlayerObject extends PhysicsObject {
    constructor(id, pos, r) {
        super(id, pos, r);

        this.score = 0;

        const [grtMin, grtMax] = GAME_CONSTANTS.PLAYER_GRAVITY_TIME_RANGE;
        this.gravityTime = grtMax;
        this.gravityTimer = 0;
        this.gravityEasing = 0.5;  // TODO change it to function
        this.isActivated = false;

        this.gravityRadiusEasint = 1.2;
        this.gravityRadius = (3 * this.r);


        const [cdtMin, cdtMax] = GAME_CONSTANTS.PLAYER_COOLDOWN_TIME_RANGE
        this.coolDownTime = cdtMin;
        this.coolDownTimer = 0;
        this.isCooledDown = true;
        this.coolDownEasing = 2.5;  // TODO change it to function

        // TODO change it to function
        this.velocityEasing = 1.2;
        this.originalR = r;
    }

    /** To activate grtavity force */
    activate() {
        if (!this.isCooledDown) {
            return;
        }

        this.isActivated = true;
        this.isCooledDown = false;
    }

    /** To deactivate gravity force */
    deactivate() {
        this.isActivated = false;
    }

    /**
     * @param {number} size - the radius of an item a player absorbed
     */
    countScore(size) {
        this.score += size;
    }

    /**
     * Player will be drawn as a circle. To calculate new radius:
     * A_new = A_1 + A_2 the same as r_new = sqrt(r_1^2 + r_2^2)
     * 
     * @param {number} size - the radius of an item a player absorbed
     */
    grow(size) {
        this.r = Math.sqrt(this.r * this.r + size * size);
    }

    /**
     * To update player's properties postions
     * @override
     * @param {number} dt - delta time
     */
    update(dt) {
        this.updateGravityTimer(dt);
        this.updateCoolDownTimer(dt);
        this.updateGravityRadius()


        const velocityMag = (this.originalR / this.r) * this.velocityEasing;
        this.velocity.multiply(velocityMag);
        super.update(dt);
    }

    /**
     * In the case when a player is active (gravitating) update timers
     * @param {number} dt 
     */
    updateGravityTimer(dt) {
        if (!this.isActivated) {
            return;
        }

        this.gravityTimer += dt * GAME_CONSTANTS.LOOP_DELTA_TIME;
        if (this.gravityTimer >= this.gravityTime) {
            this.gravityTimer = 0;
            this.deactivate();
            this.updateGravityTime();
        }
    }

    /**
     * Update cool down timer
     * @param {number} dt 
     */
    updateCoolDownTimer(dt) {
        if (this.isCooledDown) {
            return;
        }

        this.coolDownTimer += dt * GAME_CONSTANTS.LOOP_DELTA_TIME;
        if (this.coolDownTimer >= this.coolDownTime) {
            this.coolDownTimer = 0;
            this.isCooledDown = true;
            this.updatecoolDownTime();
        }
    }

    updateGravityRadius() {
        this.gravityRadius = (3 * this.r) * this.gravityRadiusEasint;
    }

    updatecoolDownTime() {
        // based on new R update min, max timer
    }

    updateGravityTime() {
        // based on new R update min, max timer
    }

    /**
     * @param {PhysicsObject} item 
     * @returns {boolean}
     */
    canAbsorb(item) {
        const dist = Vector2D.getDistanceSqrt(this.position, item.position);
        return (dist < (this.r * this.r + (item.r * item.r) / 2))
    }

    /**
     * @param {PhysicsObject} item 
     * @returns {boolean}
     */
    canGravitate(item) {
        return (this.position.getDistanceTo(item.position) < this.gravityRadius);
    }

    /**
     * To apply gravity force to an item
     * F = G * ((m1 * m2) / dist^2); 
     * m = V * density; 
     * V = PI * r^2 * h; 
     * assume h = density = G = 1;
     * F = 1 * (PI * (r1^2 * r2^2) / dist^2)
     * @param {PhysicsObject} item 
     */
    gravitate(item) {
        const gravity = Vector2D.getDirection(item.position, this.position);
        const dist = Vector2D.getDistanceSqrt(item.position, this.position);
        const gravityMag = Math.PI * (this.r * this.r + item.r * item.r) / dist;
        gravity.multiply(gravityMag);
        item.applyForce(gravity);
    }

    /**
     * @extends
     * @returns {object}
     */
    serialize() {
        const data = super.serialize();
        data.isActivated = this.isActivated;
        data.isCooledDown = this.isCooledDown;
        data.gravityTimer = this.gravityTimer;
        data.gravityTime = this.gravityTime;
        data.coolDownTimer = this.coolDownTimer;
        data.coolDownTime = this.coolDownTime;
        data.gravityRadius = this.gravityRadius;
        return data;
    }
}

module.exports = PlayerObject;