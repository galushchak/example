const Common = require('../tests/common.tests');
const AllureReporter = require('@wdio/allure-reporter').default;
const Credentials = require('../testdata/example.e2e.data');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        AllureReporter.addFeature('Login with valid credentials');

        await Common.login(
            Credentials.Credentials.CorrectCredentials.USER_NAME,
            Credentials.Credentials.CorrectCredentials.PASSWORD,
            Credentials.Credentials.CorrectCredentials.OUTCOME
        );
    });

    it('should not login with wrong password', async () => {
        AllureReporter.addFeature('Login with wrong password');

        await Common.login(
            Credentials.Credentials.WrongPasswordCredentials.USER_NAME,
            Credentials.Credentials.WrongPasswordCredentials.PASSWORD,
            Credentials.Credentials.WrongPasswordCredentials.OUTCOME
        );
    });

    it('should not login with wrong username', async () => {
        AllureReporter.addFeature('Login with wrong username');

        await Common.login(
            Credentials.Credentials.WrongUserNameCredentials.USER_NAME,
            Credentials.Credentials.WrongUserNameCredentials.PASSWORD,
            Credentials.Credentials.WrongUserNameCredentials.OUTCOME
        );
    });
});
