/*global $, document, window*/

$(document).ready(function () {
    'use strict';
    
    /*Top Button*/
    
    var topBtn = $("#bTop");
    
    $(window).on("scroll", function () {
       
        var scrTop = $(window).scrollTop();
        
        if (scrTop >= 15) {
            topBtn.fadeIn();
        } else {
            
            topBtn.fadeOut();
        }
    });
    
    topBtn.on("click", function () {
        $(document).scrollTop(0);
    });
    
    /*For pages: Sign Up, Sign In, Booking*/

    function floatedLabel(input) {
        
        var field = input.closest('.form-group');
        if (input.val()) {
            field.addClass('input-not-empty');
        } else {
            field.removeClass('input-not-empty');
        }
    }
    
    $('.form-control').each(function () {
        
        floatedLabel($(this));
    });

    $('.form-control').on('input', function () {
        
        floatedLabel($(this));
    });
    
    /*For Home page*/
    
    

    /*For page Hotels*/
    
    var high = $(".FHigh");

    $(function () {

        high.css({height: ($(window).outerHeight()) - ($("nav").innerHeight())});

    });
    
    $(window).resize(function () {
        
        high.css({height: ($(window).outerHeight()) - ($("nav").innerHeight())});
    });
    
    /*For Blog page*/
    
    var more = $("#blog .seeMore");
    
    more.on("click", function () {
        
        $(this).siblings("").slideDown();
        $(this).slideUp();
    });
    
    $("#ex .share").on("click", function () {
        
        $("#new").show();
        $("#new p").text($("input.in").val());
        $("#new h6").text($("input.date").val() + " " + $("input.name").val());
        var upimg = $("input[type=file]").val().split("\\").pop();
        $("#new img").attr('src', "Images/" + upimg);
    });

});