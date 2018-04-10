console.log('This would be the main JS file.');

$(function(){
  var $svg = $(".svg-container");
  var phi = 1.618;
  var appWidth = window.innerWidth;
  var appHeight = window.innerHeight;
  console.log("svg",appWidth,"---",appHeight);
  var svgContainerWidth = appWidth/phi;
  var svgContainerHeight = appHeight/phi;
  console.log("svg",svgContainerWidth,"---",svgContainerHeight);

  $svg.css('width',svgContainerWidth);
  $svg.css('height',svgContainerHeight);

  $svg.addClass('animating');
  console.log($svg.length);

});
