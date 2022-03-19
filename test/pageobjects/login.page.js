const Page = require('./page');
const Selectors = require('../selectors/login.page.selectors');

class LoginPage extends Page {
    get inputUsername() {
        this.waitForElement($(Selectors.INPUT_USERNAME));
        return $(Selectors.INPUT_USERNAME);
    }

    get inputPassword() {
        this.waitForElement($(Selectors.INPUT_PASSWORD));
        return $(Selectors.INPUT_PASSWORD);
    }

    get btnSubmit() {
        this.waitForElement($(Selectors.BUTTON_SUBMIT));
        return $(Selectors.BUTTON_SUBMIT);
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
