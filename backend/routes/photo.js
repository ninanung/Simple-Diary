const express = require("express");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();
const User = require("../models/user.js");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "../static/profilePhotos");
    },
    filename: function(req, file, cb) {
        let filename = file.originalname;
        if(file.mimetype === "image/jpeg") {
            filename = filename.replace(".jpg", "");
            filename = filename.replace(".jpeg", "");
            filename = filename + ".jpeg";
        }
        cb(null, filename);
    }
});
var upload = multer({ storage: storage }).single("file");

router.post("/", upload, function(req, res, next) {
    const id = req.body.id;
    const photo = req.file.path;
});