const GAME_CONSTANTS = Object.freeze({
    ITEM_RESPAWN_TIME_RANGE: [200, 600],
    ITEM_AMOUNT: 300,
    ITEM_SIZE_RANGE: [8, 20], // min - max

    BOTS_AMOUNT: 10,
    BOT_ACTION_TIME_RANGE: [2000, 5000], // a range of how often a bot activates the gravity
    BOT_MOVEMENT_TIME_RANGE: [500, 5000], // a range of how often a bot changes the direction
    BOT_RESPAWN_TIME_RANGE: [2000, 10000],
    BOT_SIZE: 30,

    PLAYERS_AMOUNT: 10,
    PLAYER_SPEED_RANGE: [3, 6],
    PLAYER_GRAVITY_TIME_RANGE: [3500, 6000], // as a player grows the gravity action time goes down
    PLAYER_COOLDOWN_TIME_RANGE: [5000, 10000], // as a player grows the colldown time goes up
    PLAYER_SIZE: 30,

    ROOMS_AMOUNT: 10,
    LOOP_DELTA_TIME: 1000 / 60,
    WORLD_WIDTH: 3000,
    WORLD_HEIGTH: 3000
});

const CONNECTION_CONSTANTS = Object.freeze({
    CONNECTION: "connection", // one of Socket's default,
    DISCONNECT: "disconnect", // one of Socket's default,
    LOGIN_PLAYER: "LOGIN_PLAYER",
    PLAYER_LOGGEDIN: "PLAYER_LOGGEDIN",
    CONNECT_PLAYER: "CONNECT_PLAYER",
    PLAYER_CONNECTED: "PLAYER_CONNECTED",
    SERVER_UPDATES: "SERVER_UPDATES",
    PLAYER_UPDATES: "PLAYER_UPDATES",
    GAME_OVER: "GAME_OVER"
});

module.exports = {
    GAME_CONSTANTS,
    CONNECTION_CONSTANTS
};