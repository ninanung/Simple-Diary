const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post("/", function(req, res, next) {
    const id = req.body.id;
    const code = req.body.code;
    let info = {
        error: "false",
        words: "",
    }
    User.findOne({ id: id }, function(err, user) {
        if(err) {
            info.error = "true";
            info.words = "Unknown Error Come Out.";
            return res.send(info);
        }
        if(!user) {
            info.error = "true";
            info.words = "There's no account that have same id, could be deleted by time out.";
            return res.send(info);
        }
        if(user.isConfirmed) {
            info.error = "true";
            info.words = "This account already confirmed."
            return res.send(info);
        }
        if(user.confirmWord == code) {
            console.log("code same");
            info.words = "Account confirmed! Welcome to Siary!";
            user.isConfirmed = true;
            user.save(function(err) {
                if(err) {
                    info.error = "true";
                    info.words = "Unknown error come out";
                    console.log(err);
                    return res.send(info);
                }
                else {
                    console.log("confirm success");
                    return res.send(info);
                }
            })
        }
    })
});

module.exports = router;