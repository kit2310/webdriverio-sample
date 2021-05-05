import { short } from "../../lib/timeout";
import App from "../../page-objects/App";
import LoginForm from "../../page-objects/pages/LoginPage";
import LandingPage from "../../page-objects/pages/LandingPage";
import NavBar from "../../page-objects/components/NavBar";
import NavTabs from "../../page-objects/components/NavTabs";
import PaymentsPage from "../../page-objects/pages/PaymentsPage";

describe("E2E Tests - Currency Exchange", () => {
    it("Should log into application", () => {
        App.openLoginPage();
        LoginForm.login("username","password");    
        LandingPage.userIconVisible();
    });

    it("Should make currency exchange", () => {
        NavTabs.clickPayBillsTab();
        NavTabs.clickPurchaseForiegnCurrencyTab();
        PaymentsPage.chooseCurrency("GBP");
        PaymentsPage.setAmount("2000");
        PaymentsPage.clickPurchase();
        PaymentsPage.verifyPurchase();
    });
});