// const puppeteer = require("puppeteer-extra");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// const { Configuration, OpenAIApi } = require("openai");
// require("dotenv/config");

// puppeteer.use(StealthPlugin());

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// async function generateEmailContent(prompt) {
//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: prompt,
//       temperature: 0.7,
//       max_tokens: 256,
//     });
//     return response.data.choices[0].text.trim();
//   } catch (error) {
//     console.error("Error generating email content:", error);
//     return "";
//   }
// }

// async function sendEmail(subject, body) {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://mail.example.com");

//   // Log in
//   await page.type("#username", "yourUsername");
//   await page.type("#password", "yourPassword");
//   await page.click("#signInButton");

//   // Navigate to compose email
//   await page.click("#composeButton");

//   // Fill in the email details
//   await page.type("#to", "recipient@example.com");
//   await page.type("#subject", subject);
//   await page.type("#body", body);

//   // Send the email
//   await page.click("#sendButton");

//   await browser.close();
// }

// async function automateEmail() {
//   const emailContent = await generateEmailContent(
//     "Write a polite reminder email for a meeting."
//   );
//   if (emailContent) {
//     await sendEmail("Meeting Reminder", emailContent);
//     console.log("Email sent successfully.");
//   } else {
//     console.log("Failed to generate email content.");
//   }
// }

// automateEmail();

// import puppeteer from "puppeteer";

const nodemailer = require("nodemailer");

const email_sender = "mr.rahulsain@icloud.com";
const email_password = "Mayank@sain1";
const email_receiver = "sainsolution777@gmail.com";

// Set the subject and body of the email
const subject = "Check out my new video!";
const body = `I've just published a new video on YouTube`;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email_sender,
    pass: email_password,
  },
});

let mailOptions = {
  from: email_sender,
  to: email_receiver,
  subject: subject,
  text: body,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
