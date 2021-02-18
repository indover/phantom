var page = require('webpage').create();
var fs = require('fs');
var system = require('system');
var url = system.args[1];

page.open(url, function(status){
    console.log("Status: " + status);
    if(status === "success"){
        page.viewportSize = { width: 1366, height: 76800};
        page.render('example-php.jpeg');
        if (page.injectJs("/var/popups.js")) {
            var title = page.evaluate(function () {
                return returnTitle();
            });
            fs.write('example-php.html', title, 'w');
        } else {
            console.log('injecting error');
        }
    } else {
        console.log('error');
    }
    phantom.exit();
});