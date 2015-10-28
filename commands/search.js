exports.command = function (query) {

    var searchInput = this.page.header().selectors.searchInput;

    return this
        .waitForElementVisible(searchInput)
        .clearValue(searchInput)
        .setValue(searchInput, query)
        .keys(this.Keys.ENTER)
        .waitForElementVisible(this.page.search().getTitle());
};