const express = require("express");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();
const User = require("../models/user.js");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "../static/profilePhoto");
    },
    filename: function(req, file, cb) {
        let getSome = new Date();
        const now = "-" + getSome.getTime();
        let filename = file.originalname;
        if(file.mimetype === "image/png") {
            filename = filename.replace(".png", "");
            filename += now;
            filename = filename + ".png";
        }
        else if(file.mimetype === "image/jpeg") {
            filename = filename.replace(".jpg", "");
            filename = filename.replace(".jpeg", "");
            filename += now;
            filename = filename + ".jpeg";
        }
        cb(null, filename);
    }
});
var upload = multer({ storage: storage }).single("file");