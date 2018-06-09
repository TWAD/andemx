var phi = 1.618;
console.log('This would be the main JS file.');

var widthMAx = screen.width;
var heightMax = screen.height;

var width = window.innerWidth;
var height = window.innerHeight;

var size = 32;
var nbTileX = Math.round(width/size);
var nbTileY = Math.round(height/size);

console.log("w/h:",nbTileX,",",nbTileY);

$(function(){
	var $tiletmpl = $("#tiletmpl");
	/*
	$tile.width();
	$tile.height();
	*/

	var $tileContainer = $("#tile-container");
	for(var i =0; i <nbTileX*nbTileY ;i++){
		$tileContainer.append($tiletmpl.html());
	}

	/*
	var $app = $(".app");
	var $logo = $(".logo");
	var appWidth = window.innerWidth;
	var appHeight = window.innerHeight;
	console.log("svg",appWidth,"---",appHeight);
	setTimeout(function(){
		console.log("grow");
		//$logo.find(".logo__svg").addClass('logo__svg--ready');
		//$logo.find(".logo__svg").addClass('logo__svg--ready');
	},2700);
	console.log($logo.length);

function lighting(){
	console.log(">Lighting Scene");
	//$app.addClass('app--lighting');
	$logo.addClass('logo--lighting');
}

$logo.find('.logo__letter--x').one('animationend',lighting);
//$logo.on('transitionend',function(){console.log("transitionend")});


$('.card__trigger').on('click touch',function(){$(this).closest('.card').toggleClass('card--open')});

setTimeout(function(){
	console.log("app_ready");
	$app.addClass('app--ready');
	$logo.addClass('logo--animating');
},2500);

setTimeout(function(){
	console.log("app_ready");
	$logo.addClass('logo--growth');
},8500);

*/
});
