jQuery_3_6_0(document).ready(function(){
    // When alt+tab mouseenter event fires twice,
    // when leaving the window and when coming back again,
    // therefore we can block the warning on blur and turn it back on again on focus
    let warnings = jQuery_3_6_0("#modal-window-warning").data("warnings");
    const warnURL = jQuery_3_6_0("#modal-window-warning").data("href");
    console.log(warnURL);
    const csrfmiddlewaretoken = jQuery_3_6_0("input[name=csrfmiddlewaretoken]").val();
    const maxWarnings = 3;
    let windowWarningStarted = false;
    let blockWindowWarning = false;

    jQuery_3_6_0(window).on("focus", function() {
        blockWindowWarning = false;
    });

    jQuery_3_6_0(window).on("blur", function() {
        blockWindowWarning = true;
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
    }

    const query = matchMedia('(display-mode: fullscreen)')
    query.addListener(e => {
        if (!e.matches){ // fullscreen exit
            jQuery_3_6_0("#js-main").addClass("d-none");
            jQuery_3_6_0("#js-fullscreen-splash").removeClass("d-none");
            
            warnings++;
            const warningsLeft = maxWarnings - warnings;
            jQuery_3_6_0(".js-warnings-left").text(warningsLeft);
            if (warningsLeft < 0) {
                jQuery_3_6_0("#submit-btn").click();
            }
            else if (warningsLeft === 0) {
                jQuery_3_6_0(".js-0-warnings-left").removeClass("d-none");
            }
            $('.modal').modal('hide');
            $('#modal-fullscreen-warning').modal('show');
            jQuery_3_6_0.ajax({
                type: "POST",
                url: warnURL,
                data: {
                    csrfmiddlewaretoken: csrfmiddlewaretoken,
                },
                error: function(data) {
                    console.error('FAILED WARNING SAVING');
                    console.error(data);
                }
            });
        }
        else { // fullscreen enter
            if (!windowWarningStarted){
                jQuery_3_6_0(document).mouseenter(function (e) {
                    if (!blockWindowWarning){
                        warnings++;
                        const warningsLeft = maxWarnings - warnings;
                        jQuery_3_6_0(".js-warnings-left").text(warningsLeft);
                        if (warningsLeft < 0) {
                            jQuery_3_6_0("#submit-btn").click();
                        }
                        else if (warningsLeft === 0) {
                            jQuery_3_6_0(".js-0-warnings-left").removeClass("d-none");
                        }
                        $('.modal').modal('hide');
                        $('#modal-window-warning').modal('show');
                        jQuery_3_6_0.ajax({
                            type: "POST",
                            url: warnURL,
                            data: {
                                csrfmiddlewaretoken: csrfmiddlewaretoken,
                            },
                            error: function(data) {
                                console.error('FAILED WARNING SAVING');
                                console.error(data);
                            }
                        });
                    }
                });
                windowWarningStarted = true;
            }
            jQuery_3_6_0("#js-fullscreen-splash").addClass("d-none");
            jQuery_3_6_0("#js-main").removeClass("d-none");
        }
    });
    jQuery_3_6_0("#js-fullscreen-prompt").click(requestFullScreen);
});
