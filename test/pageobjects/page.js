module.exports = class Page {
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }

    waitForElement(element) {
        return element.waitForDisplayed({ timeout: 3000 });
    }
};
