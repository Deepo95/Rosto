function main() {

(function () {
   'use strict';
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($('#menu').offset().top > navHeight) {
            $('.navbar-default').addClass('abc');
        } else {
            $('.navbar-default').removeClass('abc');
        }
    });

}());


}
main();

