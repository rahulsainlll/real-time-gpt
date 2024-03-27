const puppeteer = require("puppeteer");

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://web.whatsapp.com");

  console.log("Please scan the QR code...");
  await page.waitForSelector('canvas[aria-label="Scan me!"]', { timeout: 0 });

  await page.waitForNavigation({ timeout: 0 });
  await page.click('span[title="Nikhil Singh"]');

  await page.waitForSelector('div[title="Type a message"]', { timeout: 0 });

  await page.type('div[title="Type a message"]', "MSG send by real-time-GPT!");
  await page.keyboard.press("Enter");
  await delay(10000);

  console.log("Message sent!");

  setTimeout(async () => {
    await browser.close();
  }, 5000);
})();
