const mongoose = require("mongoose");

const user = mongoose.Schema({
    id: { type: String, required: true },
    date: { type: String, require: true },
    photos: [{ type: String }],
    text: { type: String, require: true },
    isPublic: { type: Boolean, default: true }
});

module.exports = mongoose.model("User", user);