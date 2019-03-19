 
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

        if (root.location.hash !== '') {
            page = root.location.hash.slice(1);
        } else {
            page = 'home';
        }

        previousPage = page;

        $.ajax({
            url: page + '.html',
            method: 'GET', 
            success: function (template) {
                renderPage(template, page);
            }
        });
    };
    
    function renderPage (template, page) {
        if (page) {
            cacheTemplates[page] = template;
        }

        $('#app').html(template);
    };
    
    function isTemplateCached(obj, page) {
        return Object.keys(obj).some(function (key) { 
            return key === page;
        });
    };

    $('.js-nav-link').on('click', function(e) {
        e.preventDefault();
        let href = $(e.currentTarget).attr('href'); 

        if (href !== previousPage && !isTemplateCached(cacheTemplates, href)) { 
            root.location.hash = href; 

            getPage(href);  
        } else {
            renderPage(cacheTemplates[href]);
        }
        
    });

    getPage();

    document.addEventListener('hashchange', getPage);

})(window);