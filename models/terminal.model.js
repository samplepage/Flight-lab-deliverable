const mongoose = require('mongoose')

const Terminal = mongoose.model (
    "Terminal",
    new mongoose.Schema({
        name: String,
        flights: [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Flight"
             }],
        capacity: Number
    })
)

module.exports = Terminal