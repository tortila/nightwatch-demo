module.exports = function (browser) {

    return {

        selectors: {
            header: "//div//h2/a"
        },

        messages: {
            url: "/ptaq-o-nas.html",
            title: "PTaQ, czyli Poznań Testing and Quality Group"
        },

        getHeader: function () {
            return this.selectors.header + "[contains(., \"" + this.messages.title + "\")]";
        }

    };
};