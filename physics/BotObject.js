const PlayerObject = require("./PlayerObject.js");
const Vector2D = require("./Vector2D.js");
const { randomFloat, randomInt } = require("../shared/Tools.js");

class BotObject extends PlayerObject {
    constructor(id, pos, r) {
        super(id, pos, r);

        this.isBot = true;
        this.actionTime = randomInt(0, 3000);
        this.actionTimer = 0;
        this.currDir = new Vector2D(randomFloat(-1, 1), randomFloat(-1, 1));
    }

    /**
     * @extends
     * @param {number} dt
     */
    update(dt) {
        this.updateActionTimer(dt);
        this.applyForce(this.currDir);
        super.update(dt);
    }

    /**
     * @param {number} dt 
     */
    updateActionTimer(dt) {
        this.actionTimer += dt * 1000 / 60;
        if (this.actionTimer > this.actionTime) {
            this.actionTime = randomInt(0, 3000);
            this.actionTimer = 0;
            this.activate();
            this.currDir = new Vector2D(randomFloat(-1, 1), randomFloat(-1, 1));
        }
    }
}

module.exports = BotObject;