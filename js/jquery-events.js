$(function(){

    const $clickMe = $("#clickMe");
    // $clickMe.click()
    $("#clickMe").on('click', function (){

    });
    $("#create-an-element").on('click', function (){
        $(this).after("<button class='will-this-work'>Click Me</button>");
    });

    // This won't work because we are trying to register an event handler with an element that doesn't yet exist
    // $(".will-this-work").on('click', function (){
    //     alert("Did it??");
    // });

    // This is called a delegated event
    // $("#dynamic-content").on('click', '.will-this-work', function (){
    //     alert('it worked')
    // });

    $('.box').hover(function (){
        $(this).css({
            'background-color': 'red'
        });
    }, function (){
        $(this).css({
            'background-color': 'unset'
        });
    });

    console.log($('div').text());
    console.log($('div').html());




    // select box class
    // $('.box').hover(function (){
    //     $(this).css('background-color', 'hotpink');
    // }, function (){
    //     $(this).css('background-color', 'unset');
    // });


    // // This one didn't work
    // $('.box').hover( function (){
    //     $(this).css({
    //         'background-color': 'hotpink'
    //     }, function (){
    //        $(this).css({
    //            'background-color': 'none'
    //        });
    //     });
    //     // $(this).css({
    //     //     'background-color' : 'hot-pink'
    //     // });
    // });

    // $(document).keydown(function (e){
    //     alert(`you just pressed the ${e.originalEvent.key} key.`);
    //
    // })

});