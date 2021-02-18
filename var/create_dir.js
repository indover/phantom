"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address = system.args[1],
    format = system.args[2],
    output = system.args[3];

page.viewportSize = { width: 1024, height: 600 };
if (format === 'pdf') {
    page.paperSize = { format: 'Letter', orientation: 'portrait', margin: '1cm' }
}

page.open(address, function (status) {
    if (status !== 'success') {
        phantom.exit(1);
    } else {
        output = output + '/' + page.evaluate(function () {
            return document.title;
        }) + '.' + format;

        window.setTimeout(function () {
            page.render(output);
            phantom.exit();
        }, 200);
    }
});