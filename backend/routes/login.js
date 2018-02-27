const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post("/", function(req, res, next) {
    const id = req.body.id;
    const password = req.body.password;
    let info = {
        error: "false",
        words: "",
        id: "",
        email: "",
        src: ""
    }
    User.findOne({ id: id }, function(err, user) {
        if(err) {
            info.error = "true";
            info.words = "Unknown Error Come Out.";
            return res.send(info);
        }
        if(!user) {
            info.error = "true";
            info.words = "Please Check Your ID or Password";
            return res.send(info);
        }
        if(!user.isConfirmed) {
            info.error = "true";
            info.words = "This account's Email is not Confirmed yet";
            return res.send(info);
        }
        if(!user.checkPassword(password)) {
            info.error = "true";
            info.words = "Please Check Your ID or Password";
            return res.send(info);
        }
        info.id = id;
        info.email = user.email;
        info.src = user.profilePhoto;
        console.log(info);
        return res.send(info);
    })
});

module.exports = router;