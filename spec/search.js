module.exports = {

    "Search page displays 0 results when query string doesn't match anything": function (browser) {

        var searchPage = browser.page.search();
        browser
            .url(browser.globals.host)
            .search(searchPage.queries.noResults)
            .waitForElementVisible(searchPage.selectors.resultsMessage)
            .assert.containsText(searchPage.selectors.resultsMessage, searchPage.getResultsMessage(0))
            .end();
    },

    "Search page displays info about me in top article when searching for \"Egnyte\" ": function (browser) {

        var searchPage = browser.page.search();
        browser
            .url(browser.globals.host)
            .search(searchPage.queries.exists)
            .waitForElementVisible(searchPage.selectors.resultText)
            .assert.topResultContains("Oliwia Golec")
            .end();

    }
};