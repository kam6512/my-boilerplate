
"use strict";

let winston = require("winston");

let logger = winston.createLogger({
    level: "debug",
    exitOnError: false
});
module.exports = logger;