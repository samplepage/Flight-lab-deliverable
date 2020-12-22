const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.flight = require("./flight.model");
db.terminal = require("./terminal.model");
db.airport = require("./airport.model");

module.exports = db;