jQuery_3_6_0(document).ready(function(){
    // When alt+tab mouseenter event fires twice,
    // when leaving the window and when coming back again,
    // therefore we can block the warning on blur and turn it back on again on focus
    let blockWarning = false;

    jQuery_3_6_0(window).on("focus", function() {
        blockWarning = false;
    });

    jQuery_3_6_0(window).on("blur", function() {
        blockWarning = true;
    });

    function requestFullScreen() {
        // Supports most browsers and their versions.
        var element = document.body; // Make the body go full screen.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

        if (requestMethod) { // Native full screen.
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }

        jQuery_3_6_0("#js-fullscreen-splash").addClass("d-none");
        jQuery_3_6_0("#js-main").removeClass("d-none");

        jQuery_3_6_0(document).mouseenter(function (e) {
            if (!blockWarning){
                $('.modal').modal('hide');
                $('#modal-window-warning').modal('show');
            }
        });
    }

    jQuery_3_6_0("#js-fullscreen-prompt").click(requestFullScreen);
});
