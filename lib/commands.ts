module.exports = {
    waitAndClick: function (selector: WebdriverIO.Element) {
        try {
            selector.waitForExist();
            selector.click();
        } catch (error) {
            throw new Error("Could not click on selector:" + selector);
        }
    },
}