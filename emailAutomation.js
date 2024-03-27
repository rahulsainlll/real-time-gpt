const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "/path/to/your/Chrome/User Data/Default",
  });
  const page = await browser.newPage();
  await page.goto("https://mail.google.com/mail/u/0/#inbox", {
    waitUntil: "networkidle2",
  });

  // Wait a bit for the page to fully load
  await page.waitForTimeout(5000); // Adjust based on your connection speed

  // Click on the Compose button
  await page.click('[gh="cm"]'); // Selector for the Compose button, might need updates

  // Fill out the recipient email
  await page.waitForSelector('textarea[name="to"]', { visible: true });
  await page.type('textarea[name="to"]', "recipient@example.com");

  // Fill out the subject
  await page.type('input[name="subjectbox"]', "Test Subject");

  // Fill out the email body
  const emailBodySelector = '[role="textbox"]';
  await page.waitForSelector(emailBodySelector, { visible: true });
  await page.type(
    emailBodySelector,
    "Hello, this is a test email sent using Puppeteer."
  );

  // Here, add your logic for user confirmation before sending the email

  // Click the Send button
  // await page.click('[aria-label*="Send"]'); // Uncomment this line to actually send the email, and make sure the selector is correct

  console.log("Email is prepared (and potentially sent).");

  // Keep the browser open for debugging (you might want to close it automatically in production)
  // await browser.close();
})();
