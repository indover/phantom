// var fs = require('fs');
// var webPage = require('webpage');
// var page = webPage.create();
//
// var url = 'https://www.flagman.kiev.ua/'
// page.open(url, function(status) {
//     if (status === 'success') {
//         page.viewportSize =  { width: 1024, height: 800 };
//         page.paperSize = {
//             format: "Letter",
//             orientation: "portrait",
//             margin: {left:"2.5cm", right:"2.5cm", top:"1cm", bottom:"1cm"},
//             footer: {
//                 height: "0.9cm",
//             }
//         };
//         page.zoomFactor = 1.5;
//         page.render('123.pdf');
//         phantom.exit()
//     }
// });

var page = new WebPage();
// var system = require("system");
// change the paper size to letter, add some borders
// add a footer callback showing page numbers
// page.paperSize = {
//     format: "Letter",
//     orientation: "portrait",
//     margin: {left:"2.5cm", right:"2.5cm", top:"1cm", bottom:"1cm"},
//     footer: {
//         height: "0.9cm",
//     }
// };
// assume the file is local, so we don't handle status errors
page.open( 'https://www.flagman.kiev.ua/', function () {
    // export to target (can be PNG, JPG or PDF!)
    page.render('622.pdf', {format:'pdf'});
    phantom.exit();
});


/**
 var page = require('webpage').create();
 var fs = require('fs');
 var system = require('system'), url;

 url = system.args[1];

 page.open(url, function(status){
    console.log("Status: " + status);
    if(status === "success"){
        page.render('example.png');
        // if (page.injectJs("var/popups.js")) {
        //     console.log('injecting');
        //     var title = page.evaluate(function () {
        //         return returnTitle();
        //     });
        //
        //     fs.write('example.html', title, 'w');
        //
        //     console.log('example-php.png');
        // } else {
        //     console.log('injecting error');
        // }
    } else {
        console.log('error');
    }
    phantom.exit();
});

 // (function () {
//     console.log(111);
//
// }())
 // phantom.exit();

 */