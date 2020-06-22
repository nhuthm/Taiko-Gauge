/* globals gauge*/
'use strict'
const {
  $,
  attach,
  below,
  button,
  clear,
  click,
  dropDown,
  doubleClick,
  evaluate,
  hover,
  fileField,
  focus,
  goto,
  into,
  link,
  press,
  reload,
  text,
  textBox,
  to,
  toRightOf,
  waitFor,
  write,
} = require('taiko')
const chai = require('chai')
const expect = chai.expect
const assert = require('assert')

class baseAction {
  async checkElementBackGround(rowName, color) {
    var background = await evaluate(
      (element, args) => {
        var xPath =
          "//a[contains(., '" + args[0] + "')]/ancestor::div[@role='row']"
        var xPathResult = document.evaluate(xPath, document).iterateNext()
        return xPathResult.style.backgroundColor
      },
      { args: [rowName] }
    )

    assert.equal(color, background)
  }

  async verifydeepEqual(actual, expected) {
    assert.deepEqual(actual, expected)
  }

  async getArrayListURL(xpath){
    let elements = await $(xpath).elements();
    let attributePromises = elements.map(e => {
      return evaluate(e, elem => {return elem.getAttribute('href');});
    });
    return attributePromises;
  }

  async clickButtonByID(buttonID) {
    await waitForButtonVisible(buttonID)
    await click(button({ id: buttonID }))
  }

  async clickButtonByName(buttonName) {
    await waitForButtonVisible(buttonName)
    await click(button({ id: buttonName }))
  }

  async clickLinkByID(linkID) {
    await waitForLinkVisible(linkID)
    await click(link({ id: linkID }))
  }

  async clickElementByCss(css) {
    await waitForElementByCssVisible(css)
    await click($(css))
  }

  async clickElementByText(elementText) {
    await click(elementText)
  }

  async clickElementByXpath(xpath) {
    await click($(xpath))
  }

  async clickElementByXpathAndID(ID) {
    await waitForElementByXpathAndIDVisible(ID)
    await click($("//*[@id = '" + ID + "']"))
  }

  async clickButtonToRightOf(buttonID, value) {
    await click(button({ id: buttonID }), toRightOf(value))
  }

  async clickCheckbox(value) {
    await this.clickElementByXpath("//span[text()='"+value+"']/ancestor::div[contains(@class,'checkbox-text')]")
  }

  async clickRadioButton(value) {
    await this.clickElementByXpath("//*[text()='"+value+"']/preceding-sibling::*[@class='radio-box']")
  }

  async clickElementTextToRightOf(elementText, value) {
    await click(elementText, toRightOf(value))
  }

  async verifyNumberInXpath(xpath,number){
    let productNumber = (await $(xpath).elements()).length
    await this.verifyActualAndExpectedResult(productNumber , number)
  }

  async doubleClickElementByText(elementText) {
    await doubleClick(elementText)
  }

  async enterValueToFieldByID(fieldID, fieldValue) {
    await clear(textBox({ id: fieldID }))
    await write(fieldValue, into(textBox({ id: fieldID })))
  }

  async enterValueToFieldByName(fieldName, fieldValue) {
    await clear(textBox({ name: fieldName }))
    await write(fieldValue, into(textBox({ name: fieldName })))
  }

  async enterValueToXpathFieldByName(xpath, fieldValue) {
    await write(fieldValue, into($(xpath)))
  }

  async enterValueToFieldByXpath(xpath, fieldValue) {
    await clear($(xpath))
    await write(fieldValue, into($(xpath)))
  }

  async enterValueToFieldByCss(css, fieldValue) {
    await clear($(css))
    await write(fieldValue, into($(css)))
  }

  async checkAttributeValue(elementID, attribute, attributeValue) {
    await waitFor(1000)
    assert.equal(
      (
        await evaluate(
          button({ id: elementID }),
          (element, args) => {
            return element.getAttribute(args[0])
          },
          { args: [attribute] }
        )
      ).result,
      attributeValue
    )
  }

  async checkButtonByIDDisabled(buttonID) {
    expect(await button({ id: buttonID }).isDisabled()).to.be.true
  }

  async checkTextDisplay(value) {
    expect(await text(value).exists()).to.be.true
  }

  async checkTextToRightOfDisplay(keyword, value) {
    expect(await text(keyword, toRightOf(value)).exists()).to.be.true
  }

  async checkXpathDisplay(xpath) {
    expect(await $(xpath).exists()).to.be.true
  }

  async checkTextNotDisplay(value) {
    assert.ok(!(await text(value).exists()))
  }

  async checkElementByXpathDisplay(xpath) {
    expect(await $(xpath).exists()).to.be.true
  }

  async focusAndClickByKeyboard(xpath) {
    await focus($(xpath))
    await this.pressKeyOnKeyboard("Enter")
  }

  async pressKeyOnKeyboard(key) {
    await press(key)
  }

  async navigateTo(url) {
    await goto(url)
  }

  async refreshPage() {
    await reload({ navigationTimeout: 10000 })
  }

  async selectDropDownByID(dropdownID, dropDownOption) {
    await dropDown({ id: dropdownID }).select(dropDownOption)
  }

  async selectDropDownByName(dropdownName, dropDownOption) {
    await dropDown({ name: dropdownName }).select(dropDownOption)
  }

  async selectDropDownBelowText(text, dropDownOption) {
    await dropDown(below(text)).select(dropDownOption)
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async uploadFileByFieldID(fieldID, fileName) {
    await attach(`./files/${fileName}`, to(fileField({ id: fieldID })))
  }

  async verifyActualAndExpectedResult(actual, expected) {
    assert.equal(
      actual,
      expected,
      'Actual: ' + actual + ' But Expected: ' + expected
    )
  }
}

module.exports = new baseAction()
