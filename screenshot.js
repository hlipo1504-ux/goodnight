const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600 });
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot.png' });
  console.log('Screenshot saved to screenshot.png');
  await browser.close();
})();
