/**
 * Created by akshay on 10/9/16.
 */
$(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('#Loading').fadeOut('slow', function () {
            });
        },1000);
        $('body').css('opacity',1);

    });
});