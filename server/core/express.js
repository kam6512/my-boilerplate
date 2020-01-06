"use strict";

let logger 			= require("./logger");
let config 			= require("../config");
let redis 			= require("./redis");

let express 		= require("express");
let http 			= require("http");
let path 			= require("path");

let moment 			= require("moment");
let flash 			= require("express-flash");
let favicon 		= require("serve-favicon");
let morgan 			= require("morgan");
let bodyParser 		= require("body-parser");
let cookieParser	= require("cookie-parser");
let validator 		= require("express-validator");
let csrf 			= require("csurf");
let netjet			= require("netjet");

let session 		= require("express-session");
let compress 		= require("compression");
let methodOverride 	= require("method-override");
let helmet 			= require("helmet");
let crossdomain 	= require("helmet-crossdomain");
let mongoose 		= require("../core/mongoose");
let MongoStore 		= require("connect-mongo")(session);

let serverDir = path.normalize(path.join(config.rootPath, "server"));