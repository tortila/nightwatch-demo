module.exports = function (browser) {

    return {

        selectors: {
            title: "//header/table//h1/a",
            about: "//*[@id=\"item-475\"]/a",
            searchInput: "//*[@id=\"mod-search-searchword\"]"
        },

        messages: {
            title: "Poznań Testing and Quality Group"
        }

    };
};
