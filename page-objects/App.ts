class App {
    openFeedbackPage() {
        browser.url("http://zero.webappsecurity.com/feedback.html");
    }
    launchURL(){
        browser.url("http://zero.webappsecurity.com/index.html");
    }
    openLoginPage() {
        browser.url("http://zero.webappsecurity.com/login.html");
    }
}
export default new App()