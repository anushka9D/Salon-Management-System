const express = require('express');
const router = express.Router();
const User = require("../models/user");
router.use(express.json());
const bcrypt = require('bcrypt');

//http://localhost:8070/user/new_user_registor
router.route("/new_user_registor").post(async (req, res) => {
    const { user_name, user_phone, user_gender, user_email, user_password } = req.body;

    // Input validation
    if (!user_name || !user_email || !user_password || !user_phone || !user_gender) {
        return res.status(400).send({ message: "All fields are required" });
    }

    // Check if the email is a valid email and not null
    if (!user_email || !user_email.trim() || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user_email)) {
        return res.status(400).send({ message: "Invalid email address" });
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ user_email });
        if (existingUser) {
            return res.status(400).send({ message: "Email already in use" });
        }

        // Hash password with salt rounds of 10
        const hashedPassword = await bcrypt.hash(user_password, 10);

        const newUser = new User({
            user_name: user_name,
            user_phone: Number(user_phone),
            user_gender: user_gender,
            user_email: user_email,
            user_password: hashedPassword,
        });

        
        await newUser.save();
        res.status(201).send({ message: "User registered successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error during registration", error: error.message, });
    }
});


router.route("/get_all_users").get(async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.route("/update_user/:id").put(async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.username, req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.route("/delete_user/:id").delete(async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.username);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.route("/get_user/:username").get(async (req, res) => {
    try {
        const user = await User.find({ username: req.params.username });
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});



module.exports = router;