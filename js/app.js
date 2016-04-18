chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
        $(function(){
            var $body = $("html");
            var $video = $("video");
            var _overlay = "<div class='overlay'></div>";
            var $overlay = $(".overlay");

            if ($overlay.length === 0) {
                if ($video.length >== 1) {
                    console.log($video.length, "entrou");
                    $body.append(_overlay);


                } else {

                }
            }

        });
    }
});
