const fs = require('fs')
const path = require('path')

module.exports = function deleteAfterResponse(pdfpath) {
  fs.unlink(path.join(__dirname, `../${pdfpath}`), function(err) {
    if (err) return true
    return false
  })
}
