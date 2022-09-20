// $(document).ready() makes it so the function will execute only when the document is first loaded. This is useful
// when putting the jquery script tags in the <head> rather than the <body>

$(document).ready(function (){
    $('h3').click(function (){
        $(this).next().slideToggle(500);
    })
});


// $("h3").click(function (){
//     // alert('you clicked it');
//     //$(this) selects the
//     $(this).next().slideToggle(500);
// });


// JS version
function init () {
    $('h3').click(function (){
        $(this).next().slideToggle(500);
    });
}
window.onload = init;