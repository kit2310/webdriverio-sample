import App from "../../page-objects/App";
import LoginForm from "../../page-objects/pages/LoginPage";
import LandingPage from "../../page-objects/pages/LandingPage";
import NavTabs from "../../page-objects/components/NavTabs";
import FiltersPage from "../../page-objects/pages/FiltersPage";

describe("E2E Test - Transactions Filter", ()=> {
    it("Should log into application", () => {
        App.openLoginPage();
        LoginForm.login("username","password");    
        LandingPage.userIconVisible();
    });

    it(" Transaction filter should work and display no results", () => {
        NavTabs.clickAccountActivityTab();
        NavTabs.clickfindTransactionsTab();
        FiltersPage.fillDescription("Test");
        FiltersPage.submitFilter();
        FiltersPage.verifyNoResultsDisplayed();
    });

    it(" Transaction filter should work and display results", () => {
        FiltersPage.fillDescription("OFFICE SUPPLY");
        FiltersPage.submitFilter();
        FiltersPage.verifyResultsDisplayed();
    });
});