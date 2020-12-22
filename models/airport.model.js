const mongoose = require('mongoose')
const Terminal = require('./terminal.model')

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        name: String,
        country: String,
        terminals: [Terminal.Schema],
        opened: Date,
    })
)

module.exports = Airport