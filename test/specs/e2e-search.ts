import App from "../../page-objects/App";
import Search from "../../page-objects/components/NavBar";
describe("E2E Tests - Search", () => {
    
    it("Should load homepage", () => {
        App.launchURL();
        Search.searchBarVisible();
    });

    it(" Should submit search box", () => {
        Search.search("Bank");
        Search.validateSearchResults();
    });
});