import Base from "../Base";

class FeedbackPage extends Base {
    get form() {
        return $('form');
    }
    get feedback() {
        return $('#feedback');
    }
    get name() {
        return $('#name');
    }
    get email() {
        return $('#email');
    }
    get subject() {
        return $('#subject');
    }
    get comment() {
        return $('#comment');
    }
    get sendMessageButton() {
        return $('.btn-signin');
    }

    formIsVisible(){
        this.form.waitForExist();
        expect(this.form).toBeVisible();
    }

    fillForm(name: string, email: string, subject: string, comment: string) {
        this.name.waitForExist();
        browser.waitAndType(this.name, "Ray");
        browser.waitAndType(this.email, "ray@gmail.com");
        browser.waitAndType(this.subject, "Regarding the Rent");
        browser.waitAndType(this.comment, "I will need an extension on this month's rent as my salary will be credited a week late.");
        this.pauseShort();
        this.sendMessageButton.click();
    }


}
export default new FeedbackPage();