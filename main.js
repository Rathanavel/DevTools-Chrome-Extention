<<<<<<< HEAD
function redirect(newSrc) {
    document.getElementById("iFrame").src = newSrc;
}
$(function () {
    $('#liUrlEnDe').click(function () {
        $('.right .active').removeClass('active');
        $(this).addClass('active');
        $('.header')[0].innerText = 'Online Dev Tools - URL Encode/Decode';

        redirect('http://onlinedevtool.blogspot.com/p/url-encode-decode-url-percent-encoding.html?mode=true')
    });

    $('#liHtmlEnDe').click(function () {
        $('.right .active').removeClass('active');
        $(this).addClass('active');
        $('.header')[0].innerText = 'Online Dev Tools - HTML Encode/Decode';

        redirect('http://onlinedevtool.blogspot.com/p/html-entity-encoderdecoder.html?mode=true')
    });

    $('#liCssBeauty').click(function () {
        $('.right .active').removeClass('active');
        $(this).addClass('active');
        $('.header')[0].innerText = 'Online Dev Tools - CSS Beautifier & Formatter';

        redirect('https://onlinedevtool.blogspot.com/p/free-online-css-beautifier-formatter.html?mode=true')
    });

    $('#liJsBeauty').click(function () {
        $('.right .active').removeClass('active');
        $(this).addClass('active');
        $('.header')[0].innerText = 'Online Dev Tools - Javascript Formatter';

        redirect('http://onlinedevtool.blogspot.com/p/javascript-viewer-beautifier-and.html?mode=true')
    });

    $('#liXmlBeauty').click(function () {
        $('.right .active').removeClass('active');
        $(this).addClass('active');
        $('.header')[0].innerText = 'Online Dev Tools - XML Formatter';

        redirect('https://onlinedevtool.blogspot.com/p/free-online-xml-viewer-xml-formatter.html?mode=true')
    });

    $('#liTextToImageWatermark').click(function () {
        $('.right .active').removeClass('active');
        $(this).addClass('active');
        $('.header')[0].innerText = 'Online Dev Tools - Text on Image watermark';

        redirect('https://onlinedevtool.blogspot.com/p/add-text-watermark-to-image-online.html?mode=true')
    });

    $('#liBase64ImageConverter').click(function () {
        $('.right .active').removeClass('active');
        $(this).addClass('active');
        $('.header')[0].innerText = 'Online Dev Tools - Base64 Image Data url Converter';

        redirect('https://onlinedevtool.blogspot.com/p/base64-image-encoder-best-online-image.html?mode=true')
    });    

    $('.right li:first-child').addClass('active');
    redirect('https://onlinedevtool.blogspot.com/p/url-encode-decode-url-percent-encoding.html?mode=true');
    $('.header')[0].innerText = 'Online Dev Tools - URL Encode/Decode';

    // $('#').click(function(){      
    //     redirect('?mode=true')
    // });
})
=======
(function () {

    const ApplicationConfig = {
        navs: [
            {
                route: "urlencodedecode",
                routeText: "Url En/Decode",
                tooltip: "Url En/Decode",
                description: "To encode/decode the given url to make it readable.",
                isSvg: false,
                svg: ``,
                icon: "oi oi-external-link pt-2",
                category: "Web",
                isFav: false
            },
            {
                route: "htmlendecode",
                routeText: "  HTML En/Decode",
                tooltip: "HTML En/Decode",
                description: "To encode/decode the given HTML.",
                isSvg: true,
                svg: `<svg class="mr-2" style="margin-left:-5px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" b-vc64vr64xw=""><path fill="none" d="M0 0h24v24H0z" b-vc64vr64xw=""></path><path class="fillColor" d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z" b-vc64vr64xw=""></path></svg>`,
                icon: "",
                category: "Web",
                isFav: false
            },
            {
                route: "cssbeautifier",
                routeText: " CSS Beautifier",
                tooltip: "CSS Beautifier",
                description: "To Beautify, Minify, Un-minify the CSS, help to reduce the overall CSS file size.",
                isSvg: true,
                svg: `<svg class="mr-2" style="margin-left:-5px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" b-vc64vr64xw=""><path fill="none" d="M0 0h24v24H0z" b-vc64vr64xw=""></path><path class="fillColor" d="M2.8 14h2.04l-.545 2.725 5.744 2.154 7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15-9 3-8-3z" b-vc64vr64xw=""></path></svg>`,
                icon: "",
                category: "Code",
                isFav: false
            },
            {
                route: "jsbeautifier",
                routeText: "JS Beautifier",
                tooltip: "JS Beautifier",
                description: "To Beautify JS code, makes the HUGE code readable also makes proper indent, wraping, remove extra lines.",
                isSvg: true,
                svg: `<span style='font-size: 1.5em;padding-right: 8px;margin-left: -5px;'>JS</span>`,
                icon: "oi oi-code",
                category: "Code",
                isFav: false
            },
            {
                route: "xmlbeautifier",
                routeText: "XML Beautifier",
                tooltip: "XML Beautifier",
                description: "To Beautify XML code and validate the element structure.",
                isSvg: false,
                svg: ``,
                icon: "oi oi-list-rich pt-1",
                category: "Code",
                isFav: false
            },
            // {
            //     route: "imagewatermark",
            //     routeText: "Text Image Watermark",
            //     tooltip: "Text Image Watermark",
            //     isSvg: false,
            //     svg: ``,
            //     icon: "oi oi-text pt-2",
            //     category: "Utility",
            //     isFav: false
            // },
            {
                route: "imagebase64",
                routeText: "Base64 Image Data Url",
                tooltip: "Base64 Image Data Url",
                description: "Converts any image to base 64 format and downlaod it to various formats.",
                isSvg: false,
                svg: ``,
                icon: "oi oi-image pt-2",
                category: "Utility",
                isFav: false
            },
            {
                route: "randomgradient",
                routeText: "Gradient Generator",
                tooltip: "Random Gradient Generator",
                description: "Generate random various gradient background.",
                isSvg: false,
                svg: ``,
                icon: "fas fa-adjust pr-3",
                category: "Utility",
                isFav: false
            },
            {
                route: "keystroke",
                routeText: "Key Code Loggers",
                tooltip: "Key Code Loggers",
                description: "Key the keycode based on your keyboard input.",
                isSvg: false,
                svg: ``,
                icon: "fas fa-keyboard pr-3",
                category: "Utility",
                isFav: false
            },
            {
                route: "wordcount",
                routeText: "Word Count",
                tooltip: "Word count",
                description: "Count Unique/Repeating count and characters & case converters.",
                isSvg: false,
                svg: ``,
                icon: "fas fa-calculator pr-3",
                category: "Utility",
                isFav: false
            },
            {
                route: "imagefilter",
                routeText: "Image Filter",
                tooltip: "Image Filter",
                description: "Create unique image preset or use your own filter cutomization",
                isSvg: false,
                svg: ``,
                icon: "fas fa-image pr-3",
                category: "Utility",
                isFav: false
            },
            // {
            //     route: "exceltojson",
            //     routeText: "Excel ↔ JSON",
            //     tooltip: "Excel to JSON",
            //     description: "Create unique image preset or use your own filter cutomization",
            //     isSvg: false,
            //     svg: ``,
            //     icon: "fas fa-image pr-3",
            //     category: "Utility",
            //     isFav: false
            // },


        ]
    }


    var groups = [];

    ApplicationConfig.navs.forEach(nav => {
        var group = groups.find(g => g.key == nav.category);
        if (!!group) {
            group.items.push(nav);
        }
        else {
            group = {
                key: nav.category,
                items: []
            }

            group.items.push(nav);
            groups.push(group);
        }
    })

    var ul = document.getElementById('data');
    var html = "<div class='accordion__item'>";
    groups.forEach(group => {
        html = "<div class='accordion__item'>";
        html += `<button class="accordion__btn">
                    <span class="accordion__caption"><i class="far fa-lightbulb"></i>${group.key}</span>
                    <span class="accordion__icon"><i class="fa fa-plus"></i></span>
                </button>`

        group.items.forEach(nav => {
            html += `<div class="accordion__content">
                        <p>
                         ${nav.svg}  ${nav.routeText}
                        </p>
                    </div>`;
        })
        html += "</div>";
        ul.innerHTML += html;
    })

    function renderAccordion() {
        // select all accordion items
        // const accItems = document.querySelectorAll(".accordion__item");
        const accItems = document.querySelectorAll(".accordion__btn");

        // add a click event for all items
        accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

        function toggleAcc() {
            // remove active class from all items exept the current item (this)
            accItems.forEach((item) => item != this ? /*item.classList.remove("accordion__item--active")*/ null : null);

            // toggle active class on current item
            // if (this.classList != "accordion__item--active") {
            //     this.classList.toggle("accordion__item--active");
            // }

            if (this.parentNode.classList != "accordion__item--active") {
                this.parentNode.classList.toggle("accordion__item--active");
            }
        }

    }

    renderAccordion();
})()
>>>>>>> 35e4d9c (Updates)
