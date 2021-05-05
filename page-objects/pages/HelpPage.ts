import Base from "../Base";

class HelpPage extends Base {
    get transferFundsLink() {
        return $('*=transfer funds');
    }
    get payBillsLink() {
        return $('*=pay bills');
    }
    get heading() {
        return $('.span8 h3');
    }

    clickOnTransferFunds() {
        this.transferFundsLink.waitForExist();
        this.transferFundsLink.click();
        expect(this.heading).toHaveText("How do I transfer funds?");
    }

    clickOnPayBills() {
        this.payBillsLink.waitForExist();
        this.payBillsLink.click();
        expect(this.heading).toHaveText("How do I pay bills?");  
    }
}
export default new HelpPage()