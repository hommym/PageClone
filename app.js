const express = require("express");
const nodeMailer = require("nodemailer");


const transporter = nodeMailer.createTransport({
  host: "truongllc.pro",
  port: 465,
  secure: true,
  auth: {
    user: "clients@truongllc.pro",
    pass: "Herberth1624$",
  },
});

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post("/api/contact-us", (req, res) => {
  const { firstName, lastName, email, tel, orgName, address, industryInfo, position, message } = req.body;

  if (firstName && lastName && email && tel && orgName && address && industryInfo && position && message) {
    const mailOptions = {
      from: "clients@truongllc.pro",
      to: "info@truongllc.pro",
      subject: "Message From A Client",
      text: `CleintDetails \n \n firstName:${firstName}  lastName:${password} \n email:${email}  address:${address} \n industryInfo:${industryInfo}  position:${position} \n message:${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
        res.status(500).json({message:"Server Error"})
      } else {
        console.log("Email sent: ", info.response);
        res.status(200).json({ message: "Message Submited successfully" });
      }
    });
  }


  else{
    res.status(400).json({ message: "Some fields are empty" });
  }
});

const port = process.env.PORT ? process.env.PORT : 80;

app.listen(port, () => {
  console.log(`Server listening ${port}`);
});
