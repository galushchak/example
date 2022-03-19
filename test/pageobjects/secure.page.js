const Page = require('./page');
const Selectors = require('../selectors/secure.page.selectors');

class SecurePage extends Page {
    get flashAlert() {
        return $(Selectors.ALERT_FLASH);
    }
}

module.exports = new SecurePage();
