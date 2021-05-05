import App from "../../page-objects/App";
import LoginForm from "../../page-objects/pages/LoginPage";
import LandingPage from "../../page-objects/pages/LandingPage";
import NavBar from "../../page-objects/components/NavBar";
describe('E2E tests - Login /Logout flow',() => {
    it("Should not login with invalid credentials", () => {
        App.launchURL();
        const error = LoginForm.error;

        NavBar.clickSignIn();
        LoginForm.login("invalid","invalid");
        expect(error).toHaveText("Login and/or password are wrong.")

    });

    it("Should login with valid credentials", () => {
        App.launchURL();
        NavBar.clickSignIn()
        LoginForm.login("username","password");    
        LandingPage.userIconVisible();
    });

    it("Should logout from app", () => {
        LandingPage.userIconVisible();
        LandingPage.logoutUser();
        NavBar.verifyUserLoggedOut();
    });
})