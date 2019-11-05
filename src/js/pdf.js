const puppeteer = require('puppeteer');

module.exports = class PdfPage {
  static async PdfFromUrl(url) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.emulateMedia('screen');
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '2.54cm',
        bottom: '2.54cm',
        left: '2.54cm',
        right: '2.54cm'
      }
    });

    await browser.close();
    return pdf;
  }

  getRandomHash() {
    return Math.random().toString(36);
  }
};
