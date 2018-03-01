const express = require("express");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();
const User = require("../models/user.js");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./static/profilePhoto");
    },
    filename: function(req, file, cb) {
        let filename = file.originalname;
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
        console.log(req.file.path);
        user.profilePhoto = req.file.path;
        data.id = user.id;
        data.email = user.email;
        data.src = req.file.path;
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