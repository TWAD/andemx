// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var resizeVideo = function(){
  var $video = $('video');
  var body = $('body').get(0);
  var actualClientWidth = body.clientWidth;
  var actualClientHeight = body.clientHeight;
  if($video && actualClientWidth && actualClientHeight){
    $video.attr('width',actualClientWidth);
    $video.attr('height',actualClientHeight);
    console.log("resizeVideo:",$video,actualClientWidth,actualClientHeight);
  }else{
    console.log("resizeVideo:fail");
  }
}

$(function(){
  resizeVideo();
  $(window).on('resize',debounce(resizeVideo,150,false));

$('video').get(0).play();

});

/*
$(window).on("load", function (e) {})
*/
