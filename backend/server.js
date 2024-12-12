const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8070;

app.use(cors());

mongoose.connect("mongodb+srv://admin:admin147@salon.szecr.mongodb.net/?retryWrites=true&w=majority&appName=salon")

/*
mongoose.connect("mongodb+srv://it22292490:ovmWiwlvHJBYEgxZ@salon.szecr.mongodb.net/salonDatabase?retryWrites=true&w=majority&appName=salon", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("Mongodb Connection success!"))
.catch((err) => console.log("Mongodb Connection failed:", err));
*/
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Mongodb Connection success!");
})


const salonRouter_login = require("./routes/login_routes");
app.use("/login",salonRouter_login);

const salonRouter_user = require("./routes/users_routes");
app.use("/user",salonRouter_user);



app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
  })