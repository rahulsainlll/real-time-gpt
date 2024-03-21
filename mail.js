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
const puppeteer = require("puppeteer");

const searchTermCLI =
  process.argv.length >= 3
    ? process.argv[2]
    : " Made a Million Dollar Meme Coin In 1 Hour";

// For this one we have to export this form terminal
// export SEARCHTXT="text here"
// echo $SEARCHTXT

const searchTermENV =
  process.env.SEARCHTXT ??
  "const searchTermENV = process.env.SEARCHTXT ?? 'Volbeat';";

(async () => {
  //   const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "/Users/rahulsain/Library/Application Support/Google/Chrome/Profile 1",
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
  });

  await page.goto("https://mail.google.com/mail/u/0/#inbox");
  //   await page.waitForSelector("#search-input #search");
  //   await page.type("#search-input #search", searchTermCLI, { delay: 100 });
  //   await page.emulateVisionDeficiency("blurredVision");
  //   await page.screenshot({ path: "./screens/blur-search.png" });
  //   await page.emulateVisionDeficiency("none");
  //   await page.screenshot({ path: "./screens/screen-short.png" });
  //   await Promise.all([
  //     page.waitForNavigation(), // wait for previous page to render
  //     page.click("#search-icon-legacy"),
  //   ]);
  //   await page.waitForSelector("ytd-radio-renderer h3 #video-title");
  //   await page.screenshot({ path: "./screens/search-results.jpg" });

  //   const firstMatch = await page.$eval(
  //     "ytd-video-renderer h3 a#video-title",
  //     (elem) => {
  //       // run when that #video-title is found
  //       return elem.innerText;
  //     }
  //   );

  //   console.log(firstMatch);

  //   await Promise.all([
  //     page.waitForNavigation(), //waitForNetworkIdle()
  //     page.click("ytd-video-renderer h3 a#video-title"),
  //     new Promise((resolve) => setTimeout(resolve, 10000)),
  //   ]);
  //   await page.screenshot({ path: "./screens/first-video.jpg" });

  //   await page.waitForSelector("ytd-comments-header-renderer");
  //   const videoComments = await page.$eval(
  //     "ytd-comments-header-renderer h2",
  //     (h2) => {
  //       return h2.innerText;
  //     }
  //   );
  //   console.log({ videoComments });

  //   const firstSuggested = await page.$eval(
  //     "ytd-compact-video-renderer",
  //     (elem) => {
  //       return elem.querySelector("h3").innerText;
  //     }
  //   );
  //   console.log({ firstSuggested });

  //   await browser.close();
})();
