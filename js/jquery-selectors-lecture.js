// The new $(document).ready is $(function(){});
    $(function (){
        const $refToLibrary = $("#library")
        // JS vanilla .innerText is jQuery .text()
        // this is an id selector to alter content
            // refToLibrary.text(`jQuery makes life easier!`);

        // get reference to content:
        // console.log($(refToLibrary).text());
        let li3Text = $refToLibrary.text();
        $refToLibrary.text(`${li3Text} makes life easier!`);

        // class selector and css method to alter styles using single declaration syntax
        // $(".framework").css('border', '1px solid black');

        // multiple declaration syntax
        $(".framework").css({
            'border': '1px solid black',
            'width': 'fit-content'
        });

        const pLiSelector = "p, li";

        // type list with chained methods
        $(pLiSelector).text(`I've taken over.`).css("color", "hotpink");

    });


