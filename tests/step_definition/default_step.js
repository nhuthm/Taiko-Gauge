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

step('DFT-002 Focus and click on <text> button', async(text) => {
    await baseAction.focusAndClickByKeyboard("//*[contains(@class,'button') and text()='"+text+"']")
})

step('DFT-003 Enter <value> into <textField> field', async(value, textField) => {
    await baseAction.enterValueToFieldByName(textField, value)
})

step('DFT-004 Verify <textTitle> title display', async(textTitle) => {
    await baseAction.checkTextDisplay(textTitle)
})

step('DFT-005 Verify the <titleName> title display', async(titleName) => {
    await baseAction.checkXpathDisplay("//h3[text()='"+titleName+"']")
})

step('DFT-006 Click on the app at <position> position', async(position) => {
    await baseAction.clickElementByXpath("(//*[contains(@class,'is-clickable')])[1]")
})

