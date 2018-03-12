const express = require("express");
const multer = require("multer");
const Diary = require("../models/diary");
const fs = require("fs");
const router = express.Router()

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
        cb(null, "./public/static/diaryPhoto")
    },
    filename: function(req, file, cb) {
        const filename = randomConfirm() + file.originalname;
        cb(null, filename);
    }
});
const upload = multer({ storage: storage }).array("files", 10);

router.post("/", upload, function(req, res, next) {

});

module.exports = router;