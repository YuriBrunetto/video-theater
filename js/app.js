chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {

        var VideoTheater = {};

        VideoTheater.init = function(){
            var $body = $("html");
            var $video = $("video");
            var _overlay = "<div class='overlay'></div>";
            var $overlay = $(".overlay");

            if ($overlay.length === 0) { // if there isn't already a .overlay div in the <body>
                if ($video.length >= 1) { // if there's a <video> in the body
                    console.log($video.length, "entrou3");
                    $body.append(_overlay);
                } else {

                }
            }
        }

        $(function(){

            VideoTheater.init();

        });
    }
});
