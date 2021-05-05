import Base from "../Base";

class PaymentsPage extends Base {
    get selectCurrency() { return $('#pc_currency'); }
    get amount() { return $('#pc_amount'); }
    get inDollars() { return $('#pc_inDollars_true'); }
    get purchaseButton() { return $('#purchase_cash'); }
    get alertMsg() { return $('#alert_content'); }
    get payeeSelect() { return $('#sp_payee'); }
    get accountSelect() { return $("#sp_account"); }
    get payeeAmount() { return $('#sp_amount'); }
    get date() { return $('#sp_date'); }
    get description() { return $('#sp_description'); }
    get payButton() { return $('#pay_saved_payees'); }

    chooseCurrency(currency: string) {
        this.selectCurrency.waitForExist();
        this.selectCurrency.click();
        this.selectCurrency.selectByAttribute("value", currency);
    }

    setAmount(cash: string) {
        this.amount.setValue(cash);
        this.inDollars.click();
    }

    clickPurchase() {
        this.purchaseButton.click();
    }

    verifyPurchase() {
        this.alertMsg.waitForExist();
        expect(this.alertMsg).toHaveText("Foreign currency cash was successfully purchased.");
        this.pauseShort();
    }

    selectPayee(payeeName: string) {
        this.payeeSelect.waitForExist();
        this.payeeSelect.selectByAttribute("value", payeeName);
    }

    selectAccount(accounts: string) {
        this.accountSelect.selectByVisibleText(accounts);
    }

    enterAmount(cash: string) {
        this.payeeAmount.setValue(cash);
    }

    enterDate() {
        this.date.setValue("2021-05-31");
    }

    enterDescription(info: string) {
        this.description.setValue(info);
    }

    clickPay() {
        this.payButton.waitForExist();
        this.payButton.click();
    }

    verifyPayment() {
        this.alertMsg.waitForExist();
        expect(this.alertMsg).toHaveText("The payment was successfully submitted.");
        this.pauseShort();
    }

}
export default new PaymentsPage()