window.returnTitle = function () {
    var footer = document.getElementsByTagName("footer")[0];
    if (footer) {
        footer.parentNode.removeChild(footer);
    }

    var div = $("div[id^='cookie']");
    if (div) {
        div.eq(0).remove();
    }

    var modal = $("div[class^='modal']");

    if (modal) {
        modal.eq(0).remove();
        // modal.each(function (){
        //     modal.remove();
        // });
    }
    return document.documentElement.innerHTML;
    // return document.getElementsByTagName('html')[0].innerHTML;
};

function inject() {
    document.getElementsByTagName("h1")[0].append(11112222233333+'aaaaqqqqwwww');
}

window.getChildElements = function () {
    var chilNodes = document.body.children;
    for (var chilNode in chilNodes) {
        var rect1, rect2;
        var deleteElem;
        if (chilNodes[chilNode].getBoundingClientRect) {
            rect2 = chilNodes[chilNode].getBoundingClientRect();
            if (rect1 && rect2) {
                if (isOverflap(rect1, rect2)) {
                    deleteElem.remove();
                }
            }
            if (chilNodes[chilNode] && chilNodes[chilNode].getBoundingClientRect) {
                rect1 = chilNodes[chilNode].getBoundingClientRect();
                deleteElem = chilNodes[chilNode];
            }
        }
    }

    // setTimeout(function() {
    //     var chilNodes = document.body.childNodes;
    //     for (var chilNode in chilNodes) {
    //         if (chilNodes[chilNode] && chilNodes[chilNode].getAttribute && chilNodes[chilNode].getAttribute('style')) {
    //             if (chilNodes[chilNode].getAttribute('style').includes('block')) {
    //                 chilNodes[chilNode].remove();
    //             }
    //         }
    //     }
    // }, 2000)
    // return document.documentElement.outerHTML;
    // sleepFor(3000);
    return document.getElementsByTagName('html')[0].innerHTML;
}

function isOverflap(rect1, rect2) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);
}

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */
    }
    console.log('sleep');
}