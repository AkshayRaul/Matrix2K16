/**
 * Created by akshay on 10/9/16.
 */
$(document).ready(function ($) {
    $(window).load(function () {
        $('body').show();
        setTimeout(function(){
            $('.loading').fadeOut('slow', function () {
            });
        },1000);


    });
});