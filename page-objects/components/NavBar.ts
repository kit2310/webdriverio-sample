import Base from "../Base";

class NavBar extends Base {
    get signInButton() {
        return $('#signin_button');
    }

    get searchBox() {
        return $('#searchTerm');
    }

    get resultTitle() {
        return $('h2');
    }
    get settings() {
        return $('.icon-cog');
    }
    get helpLink() { 
        return $('#help_link'); 
    }

    clickSignIn() {
        // this.signInButton.waitForExist();
        // this.signInButton.click();
        browser.waitAndClick(this.signInButton);
    }

    verifyUserLoggedOut() {
        this.signInButton.waitForExist();
        expect(this.signInButton).toBeVisible();
    }

    search(value: string) {
        browser.waitAndType(this.searchBox, value);
        // simulates Enter key
        browser.keys("Enter");
    }
    validateSearchResults() {
        this.resultTitle.waitForExist();
        expect(this.resultTitle).toHaveText("Search Results:");
    }

    searchBarVisible() {
        this.searchBox.waitForExist();
        expect(this.searchBox).toBeVisible();
    }

    clickSetting() {
        this.settings.waitForExist();
        expect(this.settings).toBeVisible();
        this.settings.click();
    }

    clickHelp() {
        this.helpLink.waitForExist();
        expect(this.helpLink).toBeVisible();
        this.helpLink.click();
    }
}

export default new NavBar()