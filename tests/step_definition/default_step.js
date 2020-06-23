'use strict'
const baseAction = require('../common/commons_action')
const globalVariables = require('../common/global_variables')
const {screenshot, waitFor} = require ('taiko')

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
    await baseAction.clickElementByXpath("(//*[contains(@class,'is-clickable')])["+position+"]")
})

step('DFT-007 Click on <buttonName> button', async (buttonName) => {
    await baseAction.clickElementByText(buttonName)
})

step('DFT-008 Click on <text> tab from Navigation Menu', async(text) => {
    await baseAction.clickElementByText(text)
})

step('DFT-009 Enter <value> to textbox by name <textboxName>', async(value, textboxName) => {
    await baseAction.enterValueToFieldByName(textboxName, value)
})

step('DFT-010 Click on <field> drop down list', async(field) => {
    await baseAction.clickElementByXpath("//*[text()='"+field+"']/following-sibling::select")
})

step('DFT-011 Select <option> from Dropdown below <title>', async (option, title) => {
    await baseAction.selectDropDownBelowText(title,option)
})

step('DFT-012 Check confirmation <text> display', async(text) => {
    await baseAction.checkTextDisplay(text)
})

step('DFT-013 Check <title> text display', async(title) => {
    await baseAction.checkXpathDisplay("//h4[text()='"+title+"']")
})

step('DFT-014 Enter <value> to textbox by id <textboxId>', async(value, textboxId) => {
    await baseAction.enterValueToFieldByID(textboxId, value)
})

step('DFT-015 Click on dropdown list below <part>', async(part) => {
    await baseAction.clickElementByXpath("//label[text()='"+part+"']/following-sibling::div[contains(@class,'select')]")
})

step('DFT-016 Click on <option> from the list of <part>', async(option, part) => {
    await baseAction.clickElementByXpath("//*[text()='"+part+"']/ancestor::div[contains(@class,'field')]/following-sibling::div/descendant::div[text()='"+option+"']")
})

step('DFT-017 Click on <button> below <text>', async(button, text) => {
    await baseAction.clickElementByXpath("//label[text()='"+text+"']/following-sibling::div//span[text()='"+button+"']")
})

step("DFT-018 Upload <file> into <iconImage>", async(file, iconImage) => {
    await baseAction.uploadFileByFieldID(iconImage, file)
})

step('DFT-019 Check <name> button display', async(name) => {
    await baseAction.checkTextDisplay(name)
})