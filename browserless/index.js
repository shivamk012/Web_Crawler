const {Builder , Capabilities} = require('selenium-webdriver');
const fs = require('fs');

const chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set('browserless:token', '34b33279-40f3-43b7-bcc2-90ef767995c5');
chromeCapabilities.set('goog:chromeOptions', {
  args: [
    '--headless',
    '--no-sandbox',
  ],
});

const driver = new Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  // Specify browserless for the server
  .usingServer('https://chrome.browserless.io/webdriver')
  .build();

(async () => {
  try {
    await driver.get('https://www.google.com/');

    // Take screenshot of results page. Save to disk.
    const base64png = await driver.takeScreenshot();
    fs.writeFileSync('./screenshot1.png', new Buffer(base64png, 'base64'));
  } finally {
    driver.quit();
  }
})();