var webPage = require('webpage');
var page = webPage.create();
var fs = require('fs');
var url = 'https://sputniknews.lt/baltic/20201124/13777231/JAV-specialij-pajg-lktuvai-vykdys-pratybas-danguje-vir-Estijos.html';

page.open(url, function (status) {
    console.log('start');
    if (status === "success") {
        console.log('success');
        if (page.injectJs("popups.js")) {
            console.log('injecting');
            var title = page.evaluate(function () {
                return getChildElements();
            });
            fs.write('test' + page.title + '.html', title, 'w');
            console.log('done');

            phantom.exit();
        }
    }
});

