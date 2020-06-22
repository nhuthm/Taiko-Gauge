'use strict'
const baseAction = require('../common/commons_action')
const {screenshot} = require ('taiko')

step('EDT-001 Click on <edit> button', async(edit) => {
  await baseAction.clickElementByText(edit)
})