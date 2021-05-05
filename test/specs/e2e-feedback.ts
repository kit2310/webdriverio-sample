import App from "../../page-objects/App";
import Feedback from "../../page-objects/pages/FeedbackPage";
describe("E2E - Feedback", () => {
    it("Should load feedback form", ()=> {
        App.openFeedbackPage();
        Feedback.formIsVisible();
    });

    it("Should submit feedback form", ()=> {
        Feedback.fillForm("Ray","ray@gmail.com","Regarding the rent","I will need an extension on this month's rent as my salary will be credited a week late.");
        expect(browser).toHaveUrl("http://zero.webappsecurity.com/sendFeedback.html");
    });
});