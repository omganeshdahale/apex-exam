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

    jQuery_3_6_0(document).mouseenter(function (e) {
        if (!blockWarning){
            $('.modal').modal('hide');
            $('#modal-window-warning').modal('show');
        }
    });
});
