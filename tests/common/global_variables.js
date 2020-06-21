var url =
  process.env.WEB_URL || 'https://dev.marketplace.reapit.cloud/developer/login'
var headless_chrome = process.env.HEADLESS_CHROME !== 'false'

module.exports = {
  url,
  headless_chrome,
}
