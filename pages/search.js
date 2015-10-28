
module.exports = function (browser) {

    return {

        selectors: {
            title: "//*[@id=\"content\"]/div/div[2]/div[2]/h1",
            resultsMessage: "//*[@id=\"searchForm\"]/div[1]/p/strong",
            resultText: "//dl/dd"
        },

        messages: {
            title: "Szukaj",
            results: {
                begin: "Łącznie: ",
                end: " znalezionych pozycji."
            }
        },

        queries: {
            exists: "Egnyte",
            noResults: "asdfghjk"
        },

        getTitle: function () {
            return this.selectors.title + "[contains(., \"" + this.messages.title + "\")]";
        },

        getResultsMessage: function (number) {
            return this.messages.results.begin + number + this.messages.results.end;
        },

        getNthResultText: function (number) {
            return this.selectors.resultText + "[" + (3 * number - 1) + "]";
        }

    };
};
