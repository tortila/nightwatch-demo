module.exports = {

    beforeEach: function (browser, done) {
        browser.url(browser.globals.host, done);
    },

    afterEach: function (browser, done) {
        browser.end(done);
    },

    "Header of PTAQ website should say \"Poznań Testing and Quality Group\"" : function (browser) {

        var header = browser.page.header();

        browser
            .waitForElementVisible(header.selectors.title)
            .assert.containsText(header.selectors.title, header.messages.title);
    },

    "\"PTaQ - o nas\" should navigate to /ptaq-o-nas.html": function (browser) {

        var header = browser.page.header();
        var about = browser.page.about();

        browser
            .waitForElementVisible(header.selectors.about)
            .click(header.selectors.about)
            .waitForElementVisible(about.getHeader())
            .assert.urlEquals(browser.globals.host + about.messages.url);
    }
};