var page = require('webpage').create();
// var url = 'https://www.flagman.kiev.ua/';
var url = 'https://sputniknews.lt/baltic/20201124/13777231/JAV-specialij-pajg-lktuvai-vykdys-pratybas-danguje-vir-Estijos.html'

page.viewportSize = { width: 1366, height: 76800};
page.paperSize = {
    format: 'A2',
    orientation: 'landscape',
    margin: '1px'
};

page.settings.dpi = "120";

page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        // window.setTimeout(function () {
            page.render('12345.pdf', { format: 'pdf', quality: '100' });
            phantom.exit();
        // }, 30000); // Change timeout as required to allow sufficient time
    }
});

