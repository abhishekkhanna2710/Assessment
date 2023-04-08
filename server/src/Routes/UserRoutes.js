const express = require("express");
const router = new express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/UserSchema.js");


router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error saving user");
    }
});


router.post("/login", async (req, res) => {


    try {
        let token;
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the Details" })
        }

        const userLogin = await User.findOne({ email: email });
        if (!userLogin) {
            return res.status(402).json({ error: "User Not found" })
        }

        console.log(userLogin)

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)


            token = await userLogin.generateAuthToken();
            console.log(token)

            if (!isMatch) {
                res.status(400).res.json({ message: "Invalid Credentials" });

            } else {
                res.json({ message: "User Signin Successfully" });
            }
        }
        else {
            res.status(400).res.json({ message: "Invalid Credentials" });

        }

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
