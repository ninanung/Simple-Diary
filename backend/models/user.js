const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const user = mongoose.Schema({
    id: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    email: { type: String, required: true },
    isConfirmed: { typr: Boolean, default: false }
});

user.pre("save", function(next) {
    let user = this;
    if(!user.isModified("password")) {
        return next();
    }
    else {
        user.password = bcrypt.hashSync(user.password, 10);
        return next();
    }
});

user.methods.chechPassword = function(password) {
    let user = this;
    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model("User", user);