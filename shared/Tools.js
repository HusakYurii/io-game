module.exports = {
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    callAfter(number = 1, callback, arg = [], scope) {
        const total = number;
        let counter = 0;
        return function (...payload) {
            counter += 1;
            arg.push.apply(arg, payload);
            if (counter === total) {
                callback.call(scope, arg);
            }
        }
    }
}