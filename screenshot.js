const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

// Apply the stealth plugin to avoid being detected as a bot
puppeteer.use(StealthPlugin());

// Provide a default URL for testing purposes
const url = process.argv[2] || "https://mail.google.com/mail/u/0/#inbox";
const timeout = 5000;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
    userDataDir:
      "/Users/rahulsain/Library/Application Support/Google/Chrome Canary",
    dumpio: true,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 1200,
    deviceScaleFactor: 1,
  });

  try {
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: timeout,
    });
  } catch (error) {
    console.error(`Failed to navigate: ${error.message}`);
    await browser.close();
    process.exit(1); // Exit with an error code
  }

  await page.waitForTimeout(timeout);

  await page.screenshot({
    path: "screenshot.jpg",
    fullPage: true,
  });

  await browser.close();
})();
