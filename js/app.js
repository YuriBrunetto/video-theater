chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {

        var VideoTheater = {};
        var player;
        var $body = $("html");
        var $video = $("video");
        var _overlay = "<div class='overlay'></div>";
        var $overlay = $(".overlay");
        var _close = "<a href='javascript:;' title='Close' class='close-btn'><span>x</span></a>";

        VideoTheater.init = function(){
            if ($overlay.length === 0) { // if there isn't already a .overlay div in the <body>
                if ($video.length >= 1) { // if there's a <video> in the body
                    var video_url = window.location.href;
                    video_url = video_url.split("=");
                    video_url = video_url[1];

                    $body.append(_overlay);
                    $(".ytp-play-button").click();
                    var currentTime = $(".ytp-progress-bar").attr("aria-valuenow");

                    // ?t=20s
                    var $new_video = "<iframe class='video-theater' src='https://www.youtube.com/embed/"+ video_url +"?start="+ currentTime +"&rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>";

                    $(".overlay").append($new_video, _close);
                } else {

                }
            }
        }

        VideoTheater.close = function(){
            $(".video-theater").remove();
            $(".overlay").remove();
        }

        $(function(){
            VideoTheater.init();

            $(".close-btn").click(function(){
                VideoTheater.close();
            });
        });
    }
});
