const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const allureReporter = require('@wdio/allure-reporter').default;

class Common {
    async login(userName, pass, outcome) {
        allureReporter.addStep('Opening the page');
        allureReporter.addIssue('EPELI-36000');
        allureReporter.addTestId('EPELI-36001');

        await LoginPage.open();

        allureReporter.addStep(
            `Logging in with credentials: userName:${userName}, pass:${pass}`
        );
        await LoginPage.login(userName, pass);
        await expect(SecurePage.flashAlert).toBeExisting();

        allureReporter.addStep(`Allert should contain text: ${outcome}`);
        await expect(SecurePage.flashAlert).toHaveTextContaining(outcome);
    }
}

module.exports = new Common();
