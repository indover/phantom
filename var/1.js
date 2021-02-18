var webPage = require('webpage');
var page = webPage.create();
var fs = require('fs'),
    url = 'https://www.meta.ua/'
    // url = 'https://www.ukr.net'
    // url = 'https://sputniknews.lt/baltic/20201124/13777231/JAV-specialij-pajg-lktuvai-vykdys-pratybas-danguje-vir-Estijos.html'
page.open(url, function(status) {
    console.log('start');
    if (status === "success") {
        console.log('success');
        if (page.injectJs("popups.js")) {
            console.log('injecting');
            var title = page.evaluate(function() {
                return returnTitle();
            });

            fs.write('4-1-' + page.title + '.html', title, 'w');

            page.viewportSize = { width: 1920, height: 1080 };
            // page.paperSize = {
            //     format: 'Letter',
            //     orientation: 'portrait',
            //     margin: {left:"2.5cm", right:"2.5cm", top:"1cm", bottom:"1cm"},
            //
            // };

            // page.settings.dpi = "120";

            // page.content = fs.read('11111.jpeg');
            phantom.exit();
            // window.setTimeout(function () {

            // }, 2000);
            // phantom.exit();
        }
    }
});