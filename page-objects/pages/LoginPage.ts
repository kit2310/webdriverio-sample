import Base from "../../page-objects/Base";

class LoginPage extends Base {
    get loginForm() {
        return  $('#login_form');
    }
    get username() {
        return $('#user_login');
    }
    get passwdInput() {
        return $('#user_password');
    }
    get signInButton() {
        return $('.btn.btn-primary');
    }

    get error() {
        return $('.alert.alert-error');
    }
    
    login(username: string, password: string) {
        this.loginForm.waitForExist();
        browser.waitAndType(this.username, username);
        browser.waitAndType(this.passwdInput, password);
        // this.signInButton.click();
        browser.waitAndClick(this.signInButton);
    }
}

export default new LoginPage()