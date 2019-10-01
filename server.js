const express = require('express');

const router = express.Router();
const app = express();
const port = 3000;
const path = require('path');
const pdfPage = require('./src/js/pdf');
const { check, validationResult, sanitizeBody } = require('express-validator');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.post(
  '/generate-pdf',
  [sanitizeBody('url'), check('url').isURL()],
  async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let pdf = await pdfPage.PdfFromUrl(req.body.url);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdf.length
    });

    res.send(pdf);
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
