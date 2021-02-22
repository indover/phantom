var page = require('webpage').create();
var fs = require('fs');
var system = require('system');
var url = system.args[1];

page.open(url, function(status) {
    if (status === "success") {
        if (page.injectJs("popups.js")) {
            var title = page.evaluate(function() {
                return getChildElements();
            });

            fs.write(page.title + '.html', title, 'w');

            page.viewportSize = { width: 1920, height: 1080 };
            page.paperSize = {
                format: 'Letter',
                orientation: 'portrait',
                margin: {left:"1.5cm", right:"1.5cm", top:"1cm", bottom:"1cm"},

            };

            page.settings.dpi = "120";
            page.render(page.title + '.jpeg');

            phantom.exit();
        }
    }
});