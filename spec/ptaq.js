module.exports = {

    "Header of PTAQ website should say \"Poznań Testing and Quality Group\"" : function (browser) {
        browser
            .url("http://ptaq.org/")
            .useXpath()
            .waitForElementVisible("//header/table//h1/a", 5000)
            .assert.containsText("//header/table//h1/a", "Poznań Testing and Quality Group")
            .end()
    },

    "\PTaQ - o nas\" should navigate to /ptaq-onas.html": function (browser) {
        browser
            .url("http://ptaq.org/")
            .useXpath()
            .waitForElementVisible("//*[@id=\"item-475\"]/a", 5000)
            .click("//*[@id=\"item-475\"]/a")
            .waitForElementVisible("//div//h2/a[contains(., \"PTaQ, czyli Poznań Testing and Quality Group\")]", 5000)
            .assert.urlEquals("http://ptaq.org/ptaq-onas.html")
            .end()
    }
};