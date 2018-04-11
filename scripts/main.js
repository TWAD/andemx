var phi = 1.618;
console.log('This would be the main JS file.');

$(function(){
  var $logo = $(".logo");
  var appWidth = window.innerWidth;
  var appHeight = window.innerHeight;
  console.log("svg",appWidth,"---",appHeight);
/*
  var svgContainerWidth = appWidth/phi;
  var svgContainerHeight = appHeight/phi;

  console.log("svg",svgContainerWidth,"---",svgContainerHeight);

  $logo.css('width',svgContainerWidth);
  $logo.css('height',svgContainerHeight);
*/
  $logo.addClass('logo--animating');
  console.log($logo.length);

});
