import Base from "../../page-objects/Base";

class LandingPage extends Base {
    get logout() {
        return $('#logout_link');
    }
    get profile() {
        return $('.dropdown-toggle .icon-user');
    }
    get button() {
        return $('#signin_button');
    }

    userIconVisible() {
        this.profile.waitForExist();
        expect(this.profile).toBeVisible();
    }

    logoutUser() {
        this.profile.click();
        this.logout.waitForExist();
        expect(this.logout).toBeVisible();
        this.logout.click();
    }
}
export default new LandingPage()