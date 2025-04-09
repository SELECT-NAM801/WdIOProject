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
        return $('//span[@class="title"][contains(text(), "Your Cart")]')
    }

    // get checkOutBtn () {
    //     return $('//span[@class="title"][contains(text(), "Your Cart")]')
    // }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async Cartbtn() {
        await this.shoppingCartlink.click();
        await browser.pause(1000)
        await expect(this.yourcartHeader).toExist();
        await browser.pause(4000);
    }

    // async hamburgerMenu() {
    //     await this.hamburgerButton.click();
    //     await browser.pause(400);
    //     await this.allItemslink.click();
    //     await browser.pause(4000);
    // }

    async postiveLoginandOut (username, password) {
        await this.login(username, password);
        await expect(this.productsHeader).toExist();
        await this.Cartbtn();
        //await this.hamburgerMenu();
        // await this.logoutButton.click();
        // await expect(this.inputUsername).toExist();


    }


    open () {
        return super.open('');
    }
}

export default new LoginPage();
