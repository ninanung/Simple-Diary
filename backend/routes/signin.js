const express = require("express");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const router = express.Router();
const User = require("../models/user.js");

//email confirm(test ended)
let transporter = nodemailer.createTransport(smtpTransport({
    service: "gmail",
    auth: {
        user: "ninanung0503@gmail.com",
        pass: "1004nmnm"
    }
}));

const randomConfirm = function() {
    let word = "";
    let num = "";
    for(let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 10);
        word = word + num;
    }
    return word;
}

router.post("/", function(req, res, next) {
    const id = req.body.id;
    const password = req.body.password;
    const email = req.body.email;
    let info = {
        error: "false",
        words: "",
        id: "",
        email: ""
    }
    User.find({ $or: [ { "id": id }, { "email": email } ] }, function(err, user) {
        if(err) {
            info.error = "true";
            info.words = "Unknown Error Come Out.";
            return res.send(info);
        }
        if(user) {
            info.error = "true";
            info.words = "Same ID or Email Already Exist.";
            return res.send(info);
        }
        const word = randomConfirm();
        let newUser = new User({
            id: id,
            password: password,
            email: email,
            confirmWord: word
        });
        newUser.save(function(err) {    
            if(err) {
                info.error = "true";
                info.words = "Unknown Error Come Out.";
                console.log(err);
                return res.send(info);
            }
            info.id = id;
            info.email = email;

            //email sending part, it will go in.
            let emailOption = {
                from: "Siary <ninanung0503@gmail.com>",
                to: email,
                subject: "Hi, " + id + "! This is Siary! Please confirm your Email.",
                html:
                    "<h1>Your day, My day, Siary!</h1>" +
                    "<br/><p>Thank you for sign in. Please go to bellow link and confirm your account.</p>" +
                    "<br/><button><a href='localhost:3000/confirm/" + id + "/" + word + "'>Confirm!</a></button>"
            }
            transporter.sendMail(emailOption, (error, inf) => {
                if(error) {
                    info.error = "true";
                    info.words = "Email sending fail. Please check your Email.";
                    return res.send(info);
                }
                console.log(inf.messageId);
            });
            console.log(info);
            return res.send(info);
        });
    });
});

module.exports = router;