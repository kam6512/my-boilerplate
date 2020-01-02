
"use strict";

let winston = require("winston");

let logger = winston.createLogger({
    level: "debug",
    // transports: transports,
    exitOnError: false
});
module.exports = logger;