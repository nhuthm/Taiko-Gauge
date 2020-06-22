'use strict'
const baseAction = require('../common/commons_action')
const globalVariables = require('../common/global_variables')
const {screenshot} = require ('taiko')

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};
step('DFT-001 Go to login page', async () => {
  await baseAction.navigateTo(globalVariables.url)
})

step('DFT-002 Click on <name> button', async(name) => {
    await baseAction.clickElementByXpath("//*[contains(@class,'button') and text()='"+name+"']")
})

step('DFT-003 Enter <value> into <textField> field', async(value, textField) => {
    await baseAction.enterValueToFieldByXpath(textField, value)
})