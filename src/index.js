var puppeteer = require('puppeteer')
module.exports = class PdfPage {
  constructor(options) {
    this.config = Object.assign(
      this,
      {
        margin: {
          top: '2.54cm',
          bottom: '2.54cm',
          left: '2.54cm',
          right: '2.54cm'
        },
        format: 'A4',
        path: `${this.getRandomHash()}.pdf`,
        printBackground: true
      },
      options
    )
  }
  async PdfFromUrl(url) {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0' })
    await page.emulateMedia('screen')
    const pdf = await page.pdf(this.config)

    await browser.close()
    return pdf
  }
  callProps() {
    console.log(this.config)
  }
  getRandomHash() {
    return Math.random().toString(36)
  }
  getPath() {
    return this.config.path
  }
}
