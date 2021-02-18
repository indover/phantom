var page = require('webpage').create();
var url = 'https://www.flagman.kiev.ua/igla-nasadochnaya-dlya-boylov-carp-pro-bait-needle-1-mm/p232569/';
page.open(url, function(status) {
    var title = page.evaluate(function() {
        return document.title;
    });
    console.log('Page title is ' + title);
    phantom.exit();
});