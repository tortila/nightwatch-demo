var flag;

exports.assertion = function (text) {

    /**
     * The message which will be used in the test output and
     * inside the XML reports
     * @type {string}
     */
    this.message = "Testing if top article in search results contains text: \"" + text + "\"";

    /**
     * A value to perform the assertion on. If a function is
     * defined, its result will be used.
     * @type {function|*}
     */
    this.expected = true;

    /**
     * The method which performs the actual assertion. It is
     * called with the result of the value method as the argument.
     * @type {function}
     */
    this.pass = function () {
        return flag === this.expected;
    };

    /**
     * The method which returns the value to be used on the
     * assertion. It is called with the result of the command's
     * callback as argument.
     * @type {function}
     */
    this.value = function (result) {
        return result;
    };

    /**
     * Performs a protocol command/action and its result is
     * passed to the value method via the callback argument.
     * @type {function}
     */
    this.command = function (callback) {

        var browser = this.api;

        browser.getText(browser.page.search().getNthResultText(1), function(result) {
            flag = (result.value.indexOf(text) > -1);
            callback.call();
        });


    };
};
