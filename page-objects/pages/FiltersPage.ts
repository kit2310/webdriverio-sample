import Base from "../Base";

class FiltersPage extends Base {
    get description() { return $('#aa_description'); }
    get findtBtn() { return $('.btn-primary'); }
    get filteredTransaction() { return $('#filtered_transactions_for_account'); }
    get noResults() { return $('.well'); }
    get results() { return $('#filtered_transactions_for_account .table-condensed'); }

    fillDescription(text: string) {
        this.description.waitForExist();
        this.description.setValue(text);
    }

    submitFilter() {
        this.findtBtn.click();
    }

    verifyNoResultsDisplayed() {
        this.filteredTransaction.waitForExist();
        expect(this.noResults).toHaveText("No results.");
    }

    verifyResultsDisplayed() {
        this.results.waitForExist();
        expect(this.results).toBeVisible();
    }
}
export default new FiltersPage()