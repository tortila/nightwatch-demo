module.exports = {

    beforeEach: function (browser, done) {
        browser.url(browser.globals.host, done);
    },

    afterEach: function (browser, done) {
        browser.end(done);
    },

    "Search page displays 0 results when query string doesn't match anything": function (browser) {

        var searchPage = browser.page.search();
        browser
            .search(searchPage.queries.noResults)
            .waitForElementVisible(searchPage.selectors.resultsMessage)
            .assert.containsText(searchPage.selectors.resultsMessage, searchPage.getResultsMessage(0));
    },

    "Search page displays info about me in top article when searching for \"Egnyte\" ": function (browser) {

        var searchPage = browser.page.search();
        browser
            .search(searchPage.queries.exists)
            .waitForElementVisible(searchPage.selectors.resultText)
            .assert.topResultContains(browser.globals.getAuthorName());
    }
};