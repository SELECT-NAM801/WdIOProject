import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[name="user-name"]');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get productsHeader () {
        return $('//span[@class="title"][contains(text(), "Products")]');
    }

    get hamburgerButton () {
        return $('#react-burger-menu-btn')
    }

    get logoutButton () {
        return $('#logout_sidebar_link')
    }

    get errorButton () {
        return $('.error-message-container')
    }

    get allItemslink () {
        return $('a[data-test="inventory-sidebar-link"]')
    }

    get shoppingCartlink () {
        return $('.shopping_cart_link')
    }

    get yourcartHeader () {
        const selector = '//span[@class="title"][contains(text(), "Your Cart")]'
        return $(selector)
    }

    get checkOutBtn () {
        return $('.btn.btn_action.btn_medium.checkout_button')
    }

    get cancelBtn () {
        return $('[data-test="cancel"]')
    }

    get chkoutinfoHeader () {
        const selector = '//span[@class="title"][contains(text(), "Checkout: Your Information")]'
        return $(selector)
    }

    get contshping () {
        return $('.btn.btn_secondary.back.btn_medium')
    }

    get swglbsLogo () {
        return $('.app_logo')
    }

    get aboutLInk () {
        return $('a[data-test="about-sidebar-link"]')
    }

    get rstAppStlink () {
        return $('a[data-test="reset-sidebar-link"]')
    }

    //browser.dismissAlert()


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async Cartbtn() {
        await this.shoppingCartlink.click();
        await expect(this.yourcartHeader).toExist();
        await this.checkOutBtn.click();
        await expect(this.chkoutinfoHeader).toExist();
        await this.cancelBtn.click();
        await expect(this.yourcartHeader).toExist();
        await this.contshping.click();
        await expect(this.productsHeader).toExist();
        await this.shoppingCartlink.click();
        await expect(this.yourcartHeader).toExist();
        await this.shoppingCartlink.click();
        await this.swglbsLogo.click();
    }

    async hamburgerMenu() {
        await this.hamburgerButton.click();
        await this.allItemslink.click();
        await expect(this.productsHeader).toExist();
        await this.hamburgerButton.click();
        await this.aboutLInk.click();
        await browser.url('https://www.saucedemo.com/inventory.html');
        await expect(this.productsHeader).toExist();
        await this.hamburgerButton.click();
        await this.rstAppStlink.click();
        await expect(this.rstAppStlink).toBeClickable()
        await this.logoutButton.click();
    }

    async postiveLoginandOut (username, password) {
        await this.login(username, password);
        await expect(this.productsHeader).toExist();
        await this.Cartbtn();
        await this.hamburgerMenu();
        await expect(this.inputUsername).toExist();


    }


    open () {
        return super.open('');
    }
}

export default new LoginPage();
