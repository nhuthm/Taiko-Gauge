'use strict'
const baseAction = require('../common/commons_action')
const globalVariables = require('../common/global_variables')
const {screenshot} = require ('taiko')

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};
step('EDT-001 Go to login page', async () => {
  await baseAction.navigateTo(globalVariables.url)
})