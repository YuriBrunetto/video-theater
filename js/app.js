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
                    var video_url = window.location.href;
                    video_url = video_url.split("=");
                    video_url = video_url[1];

                    console.log(video_url);

                    $body.append(_overlay);
                    $video.remove();

                    // TODO: use YouTube API
                    var $new_video = "<iframe class='video-theater' src='https://www.youtube.com/embed/"+ video_url +"?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>";

                    $(".overlay").html($new_video);
                } else {

                }
            }
        }

        $(function(){ VideoTheater.init(); });
    }
});
