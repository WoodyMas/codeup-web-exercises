
// ###################################### jQuery FAQ #############################################################

//     Create some CSS rules that sets elements with the invisible class to visibility: hidden;.
// Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.
$('#showHide').click(function (){
    $('dd').toggleClass('invisible');

});

//     Bonus


// When any of the dt elements is clicked, the element that was clicked should be highlighted.
$('dt').click(function (){
    $(this).css({
        'background-color': 'lightblue'
    });
});


// ###################################### jQuery Traversal Exercise ###############################################

    
// Create a button that, when clicked, makes the last li in each ul have a yellow background.
    $('#last-li-highlighter').click(function (){
        $('ul li:last-child').css({
            'background-color': 'yellow'
        });
    });
// 
// When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
    $('h3').click(function (){
        $('ul').children().css({
            'font-weight' : 'bold'
        });
    });
// When any list item is clicked, first li of the parent ul should have a font color of blue.
    $('li').click(function (){
        $('ul li:first-child').css({
            'color': 'blue'
        })
    })
// 
// Bonus
// Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
// 
// The rules are the following:
// 
// The left frame swaps to the right and takes the image from the frame in the center.
// The center frame swaps randomly to either the left or right.
// The right frame swaps to the left and takes the image from the frame in the center.



