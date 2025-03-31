import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import loginPage from "../pageobjects/login.page.js";

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.positiveLoginandOut('standard_user', '')
        await loginPage.positiveLoginandOut('performance_glitch_user', '')
        await loginPage.positiveLoginandOut('error_user', '')
        await loginPage.positiveLoginandOut('problem_user', '')
        await loginPage.positiveLoginandOut('visual_user', '')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
})

