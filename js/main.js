 
(function (root){

    'use strict'
    
    //nav-menu-btn- toggle
    $('.nav-btn-wrapper').on('click', function() {
        $('nav').toggleClass('right');
        $('.icon').toggleClass('close');
        $('.line').toggleClass('switch');
    });

    let previousPage = null;
    let cacheTemplates = {};

    function getPage (page) {
        root.location.pathname = ''; //window.url.pathname of location assigned to empty

        if (root.location.hash !== '') {  //location.anchorname is empty
            page = root.location.hash.slice(1); //remove or slice the # character from the anchorname ---1
        } else {
            page = 'home';
        }

        $.ajax({
            url: page + '.html', //url is page.html
            method: 'GET', //gets data from server
            success: function (res) {
                cacheTemplates[0] = res;
                renderPage(res);
            }
        });
    };
    
    function renderPage (html) {
        $('#app').html(html);
    };
    
    function isTemplateCached(obj, page) {
        return Object.keys(res).forEach(function (page) {
            return key !== page;
        });
    }

    $('.js-nav-link').on('click', function(e) {
        e.preventDefault(); //stops link default event
        let href = $(e.currentTarget).attr('href'); // current clicked target is assign to href

        if (previousPage === null || href !== previousPage) { // previous page is null first time so 
            previousPage = href; // previoudpage is assign to href
            root.location.hash = href; //window/url infornation/anchorname assign it to href only its key not its value

            getPage(href); // invoke the getpage function and pass the value href ---1   ---1 = firstTime 
        } else {
            renderPage(iscacheTemplates[0]);
        }
        
    });

    getPage();

    document.addEventListener('hashchange', getPage);

})(window);