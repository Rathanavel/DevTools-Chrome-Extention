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

    $('.right li:first-child').addClass('active');
    redirect('https://onlinedevtool.blogspot.com/p/url-encode-decode-url-percent-encoding.html?mode=true');
    $('.header')[0].innerText = 'Online Dev Tools - URL Encode/Decode';

    // $('#').click(function(){      
    //     redirect('?mode=true')
    // });
})