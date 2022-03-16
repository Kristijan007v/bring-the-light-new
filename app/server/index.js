import express from "express";
import cors from "cors";
import sgMail from "@sendgrid/mail";

// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sgMail.setApiKey(
  "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"
);

app.get("/test", (req, res) => {
  const msg = {
    to: "kiki.vidovic.6969@gmail.com",
    from: "vidovic@kristijan.me", // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
  res.send("Email sent.");
});

app.post("/send-email", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(name);
  console.log(email);
  console.log(message);
  const msg = {
    to: "kiki.vidovic.6969@gmail.com",
    from: "vidovic@kristijan.me", // Use the email address or domain you verified above
    subject: `Message from ${name} - BringTheLightUA`,
    html: `<p>Email: ${email}</p><br><p>Message: ${message}</p>`,
  };
  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
  res.send("Email sent.");
});

/* Start the backend server */
app.listen(8080, () => console.log("Listening on port http://localhost:8080"));
