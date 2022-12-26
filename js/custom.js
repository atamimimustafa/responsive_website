// 
$(function() {
    'use strict';
    $('.info_list li').click(function() {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.content article').hide();
        $('.' + $(this).data('class')).fadeIn();

    });

});