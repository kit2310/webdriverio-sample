import App from "../../page-objects/App";
import LoginForm from "../../page-objects/pages/LoginPage";
import LandingPage from "../../page-objects/pages/LandingPage";
import NavBar from "../../page-objects/components/NavBar";
import HelpPage from "../../page-objects/pages/HelpPage";

describe('E2E Testing - Help Section', ()=> {
    it("Should log into application", () => {
        App.openLoginPage();
        LoginForm.login("username","password");    
        LandingPage.userIconVisible();
    });

    it("Should load help content", ()=>{
        const heading = HelpPage.heading;
        NavBar.clickSetting();
        NavBar.clickHelp();
        expect(heading).toHaveText("How do I log into my account?");
        HelpPage.clickOnTransferFunds();
        HelpPage.clickOnPayBills();
    });
})