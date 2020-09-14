function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};
function nav_agent(){
    $("#right-content").removeClass("active").prop("class","sidebar");
}

function nav_chat(){
    $("#right-content").removeClass("sidebar").prop("class","sidebar active");
}

function delete_status_bar(){
    console.log("sdadada");
    $("body").on('mouseover', 'a', function (e) {
        var $link = $(this),
            href = $link.attr('href') || $link.data("href");
    
        $link.off('click.chrome');
        $link.on('click.chrome', function () {
            window.location.href = href;
        })
        .attr('data-href', href) //keeps track of the href value
        .css({ cursor: 'pointer' })
        .removeAttr('href'); // <- this is what stops Chrome to display status bar
    });
}

(function($){
    delete_status_bar();
})(jQuery);
