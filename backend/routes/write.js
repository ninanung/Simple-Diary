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

const getTime = function() {
    const date = new Date();
    const time = date.getFullYear() + " " + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    return time;
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
    let data = {
        error: "false",
        word: "",
    }
    Diary.find({ id: req.body.id }, function(err, diary) {
        if(err) {
            data.error = "true";
            data.word = "Unknown server error, please try again or contact us.";
            console.log(err);
            return res.send(data);
        }
        const photos = [];
        for(let i = 0; i < req.files.length; i++) {
            photos.push(req.files[i].filename);
        }
        const newDiary = {
            id: req.body.id,
            text: req.body.text,
            photos: photos,
            date: getTime(),
            isPublic: req.body.isPublic
        } 
        newDiary.save(function(err) {
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