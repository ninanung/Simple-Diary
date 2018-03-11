const express = require("express");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();
const User = require("../models/user.js");

const randomConfirm = function() {
    let word = "";
    let num = "";
    for(let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 10);
        word = word + num;
    }
    return word.toString();
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/static");
    },
    filename: function(req, file, cb) {
        let filename = randomConfirm() + file.originalname;
        cb(null, filename);
    }
});
var upload = multer({ storage: storage }).single("file");

router.post("/", upload, function(req, res, next) {
    const id = req.body.id;
    let data = {
        error: "false",
        word: "",
        id: "",
        email: "",
        src: ""
    }
    console.log(req.file);
    User.findOne({ id: id }, function(err, user) {
        if(err) {
            data.error = "true";
            data.word = "Unknown server error, please try again or contact us.";
            console.log(err);
            return res.send(data);
        }
        if(user.profilePhoto !== "../../static/defaultPhoto.png") {
            fs.unlinkSync("./public/static/" + user.profilePhoto);
            console.log("profile photo deleted!");
        }
        user.profilePhoto = req.file.filename;
        data.id = user.id;
        data.email = user.email;
        data.src = "../../static/" + req.file.filename;
        user.save(function(err) {
            if(err) {
                data.error = "true";
                data.word = "Unknown server error, please try again or contact us.";
                console.log(err);
                return res.send(data);
            }
            console.log(data);
            res.send(data);
        })
    })
});

module.exports = router;