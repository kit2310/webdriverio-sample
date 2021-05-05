import Base from "../Base";

class Navtabs extends Base {
    get accountActivity() { return $('#account_activity_tab') };
    get findTransactionTab() { return $('a[href="#ui-tabs-2"]'); }
    get payBills() { return $('#pay_bills_tab') };
    get purchaseCurrency() { return $('a[href="#ui-tabs-3"]') };
    get payeeSelect() { return $('#sp_payee'); };
    
    clickAccountActivityTab() {
        this.accountActivity.waitForExist();
        this.accountActivity.click();
    }

    clickfindTransactionsTab() {
        this.findTransactionTab.waitForExist();
        this.findTransactionTab.click();
    }

    clickPayBillsTab() {
        this.payBills.waitForExist();
        this.payBills.click();
    }

    clickPurchaseForiegnCurrencyTab() {
        this.purchaseCurrency.waitForExist();
        this.purchaseCurrency.click();
    }
}
export default new Navtabs()