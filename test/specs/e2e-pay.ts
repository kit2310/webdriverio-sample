import App from "../../page-objects/App";
import LoginForm from "../../page-objects/pages/LoginPage";
import LandingPage from "../../page-objects/pages/LandingPage";
import NavBar from "../../page-objects/components/NavBar";
import NavTabs from "../../page-objects/components/NavTabs";
import PaymentsPage from "../../page-objects/pages/PaymentsPage";
 
describe('E2E Tests - Pay ', ()=> {
    it("Should log into application", () => {
        App.openLoginPage();
        LoginForm.login("username","password");    
        LandingPage.userIconVisible();
    });

    it("Should make payment", () => {
        NavTabs.clickPayBillsTab();
        PaymentsPage.selectPayee("apple")
        PaymentsPage.selectAccount("Loan");
        PaymentsPage.enterAmount("5000");
        PaymentsPage.enterDate();
        PaymentsPage.enterDescription("Adding a payee details");
        PaymentsPage.clickPay();
        PaymentsPage.verifyPayment();
    })
})