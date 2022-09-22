$(function (){ // START IIFE


    // $(function (){
    //     $('li').each(function (index){
    //         if (index %2 !== 0) {
    //             $(this).css('font-style', 'italic');
    //         }
    //
    //     });
    // $('li').css('font-style', 'italic');
    // })

    // $('main ul li').first().css('font-size', 'larger');
    //
    // $('li a').last().css('text-decoration', 'underline dotted');

    $('button').on('click', function (){
       // $('main').children().css('font-family', 'sans-serif');
       $('ul').last().children().children().css('text-decoration', 'underline dotted');
    });

    // $('h2').hover(function (){
    //     $(this).next().slideToggle();
    // });
    $('h2').css({
        'color': 'blue',
        'text-decoration': 'underline',
        'cursor' : 'pointer'
    }).on('click', function (){
        $(this).next().slideToggle();
    });

    $('header p').hover(function (){
        $(this).parent().toggleClass('darkMode');
    });



}); // END IIFE