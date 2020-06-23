'use strict'

const { openBrowser, closeBrowser } = require('taiko')
const globalVariable = require('./global_variables')

beforeSpec(async () => {
  await openBrowser({
    headless: globalVariable.headless_chrome,
    args: [
      '--no-sandbox',
      '--window-size=1800,900',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--font-render-hinting=none',
      '--allow-running-insecure-content',
      '--max_old_space_size=4096'
    ],
  })
})

afterSpec(async () => {
  await closeBrowser()
})
