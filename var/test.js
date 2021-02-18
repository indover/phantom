var page = require('webpage').create(),
    // url = 'https://www.flagman.kiev.ua/igla-nasadochnaya-dlya-boylov-carp-pro-bait-needle-1-mm/p232569/';
    url = 'https://sputniknews.lt/baltic/20201124/13777231/JAV-specialij-pajg-lktuvai-vykdys-pratybas-danguje-vir-Estijos.html',
    fs = require('fs');
var path = "/home/innate/Documents/phantomJs/phantomjs/var/";
const popups = require('./popups');
getHTMLContent();

function getHTMLContent() {
    page.onError = function(msg, trace) {
        console.log(msg);
    };
    console.log('start loading');
    page.open(url, function (status) {
        if ( status === "success" ) {

            page.injectJs("popups.js");

            page.evaluate(function() {
                // var result = new Promise();
                // return result.success(getChildElements())
                return getChildElements();
            });
            fs.write('4-' + page.title + '.html', newContent, 'w');
            phantom.exit();

            // var newContent = page.evaluate(function() {
            //     return new Promise(getChildElements())
            // });

            // page.render(page.title + '.png');

            // newContent.then(function(suc){
            //     fs.write('4-' + page.title + '.html', suc, 'w');
            //         phantom.exit();
            // }, function(rej){
            //
            // });
            //
            // newContent.then((function (data) {
            //     fs.write('4-' + page.title + '.html', data, 'w');
            //     phantom.exit();
            // }));
            //
            // newContent.catch((error) => {
            //     console.error(error);
            // });

        }
    });
}

function getDocumentTitle() {
    page.viewportSize = { width: 1024, height: 768 };
    page.open(url, function(status) {
        var title = page.evaluate(function() {
            return document.title;
        });
        if(status === "success") {
            page.render(title + '.png');
        }
        phantom.exit();
    });
}