const express = require('express')
const router = express.Router()
const fs = require('fs')
const app = express()
const port = 3000
const path = require('path')
const pdfPage = require('./src/index')
const { check, validationResult, sanitizeBody } = require('express-validator')
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post(
  '/generate-pdf',
  [sanitizeBody('url'), check('url').isURL()],
  async function(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    let newPDF = new pdfPage()
    await newPDF.PdfFromUrl(req.body.url)
    res.download(newPDF.getPath(), newPDF.getPath())
    await deleteAfterResponse(newPDF)
    res.end()
  }
)

async function deleteAfterResponse(pdf) {
  return fs.unlink(path.join(__dirname, `/${pdf.getPath()}`), function(err) {
    if (err) throw err

    console.log('successfully delete', pdf.getPath())
  })
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
