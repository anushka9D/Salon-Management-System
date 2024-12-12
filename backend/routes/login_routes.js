const express = require('express');
const router = express.Router();
const Login = require("../models/login");
router.use(express.json());
const crypto = require('crypto'); // For generating OTP
const bcrypt = require('bcrypt');

//http://localhost:8070/login/add_login_registor_new_user
router.route("/add_login_registor_new_user").post(async (req, res) => {
  const { user_email, user_password, userrole } = req.body;

  // Input validation
  if (!user_email || !user_password || !userrole) {
      return res.status(400).send({ message: "All fields are required" });
  }

  // Check if the email is a valid email and not null
  if (!user_email || !user_email.trim() || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user_email)) {
      return res.status(400).send({ message: "Invalid email address" });
  }

  // Check if email already exists
  const existingUser = await Login.findOne({ user_email });
  if (existingUser) {
      return res.status(400).send({ message: "Email already in use" });
  }
  // Hash password with salt rounds of 10
  const hashedPassword = await bcrypt.hash(user_password, 10);
    const newLogin = new Login({
        user_email: user_email,
        user_password: hashedPassword,
        userrole: userrole,
    });


    try {
         await newLogin.save();
         res.status(201).send({ message: "successfully"});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.route("/update_login/:id").put(async (req, res) => {
    try {
        const login = await Login.findByIdAndUpdate(req.params.username, req.body);
        res.status(200).send(login);
    } catch (error) {
        res.status(400).send(error);
    }
});

// check login credintials
router.route("/check_login_credintials").get(async (req, res) => {
  const { user_email, user_password } = req.body;
  console.log(user_email, user_password);

  if (!user_email || !user_password) {
      return res.status(400).send({ message: "Both email and password are required" });
  }

  console.log(user_email, user_password);

  try {
      const user = await Login.findOne({ user_email });
      
      if (!user) {
          return res.status(400).send({ message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(user_password, user.user_password);
      
      if (!isMatch) {
          return res.status(400).send({ message: "Invalid email or password" });
      }

      res.status(200).send({ message: "Login successful" });
  } catch (error) {
      res.status(400).send(error);
  }
});


router.route("/delete_login/:id").delete(async (req, res) => {
    try {
        const login = await Login.findByIdAndDelete(req.params.username);
        res.status(200).send(login);
    } catch (error) {
        res.status(400).send(error);
    }
});



module.exports = router;


/*
//OTP genarator function 
router.route("/generate_otp").post(async (req, res) => {
    const { username } = req.body;
    const otp = crypto.randomInt(100000, 999999); // Generate 6-digit OTP

    try {
        // Update user with OTP (assuming Login model has an OTP field)
        const updatedUser = await Login.findOneAndUpdate({ username }, { otp }, { new: true });

        if (updatedUser) {
            res.status(200).send({ message: "OTP generated successfully!", otp });
        } else {
            res.status(404).send({ error: "User not found" });
        }
    } catch (error) {
        res.status(400).send({ error: "Error generating OTP", details: error });
    }
});*/





/*const express = require('express');
const router = express.Router();
const Login = require("../models/login");
router.use(express.json());
const crypto = require('crypto');

//http://localhost:8070/login/add_login_registor_new_user
router.route("/add_login_registor_new_user").post(async (req, res) => {
    const newLogin = new Login({
        username: req.body.username,
        password: req.body.password,
        userrole: req.body.userrole,
    });
    try {
        const login = await newLogin.save();
        res.status(201).send(login);
    } catch (error) {
        res.status(400).send(error);
    }
});

//npm install nodemailer

const nodemailer = require('nodemailer');

// SMTP server configuration (example for Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// OTP email message
function sendEmail(to, otp) {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: to,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

const userEmail = 'recipient@example.com';
sendEmail(userEmail, otp);

//npm install express

const app = express();


app.post('/generate-otp', (req, res) => {
  const otp = generateOTP();
  const { email, phone } = req.body;

  // Email
  if (email) {
    sendEmail(email, otp);
  } else if (phone) {
    sendSMS(phone, otp);
  }

  res.json({ message: 'OTP sent successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Genarate OTP 6 digit
function generateOTP(length = 6) {
    const otp = crypto.randomInt(100000, 999999).toString(); // 6 digit random number
    return otp;
  }
  
  const otp = generateOTP();
  console.log(otp);

router.route("/update_login/:id").put(async (req, res) => {
    try {
        const login = await Login.findByIdAndUpdate(req.params.username, req.body);
        res.status(200).send(login);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.route("/check_login_credintials/:username/:password").get(async (req, res) => {
    try {
        const login = await Login.find({ username: req.params.username, password: req.params.password });
        res.status(200).send(login);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.route("/delete_login/:id").delete(async (req, res) => {
    try {
        const login = await Login.findByIdAndDelete(req.params.username);
        res.status(200).send(login);
    } catch (error) {
        res.status(400).send(error);
    }
});



module.exports = router;
*/



/*
const sendOtpRequest = async () => {
  const response = await fetch('http://localhost:3000/generate-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'user@example.com', // or phone: '+94771234567'
    }),
  });

  const data = await response.json();
  console.log(data.message);
};

sendOtpRequest();

*/