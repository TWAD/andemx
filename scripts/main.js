var phi = 1.618;
console.log('This would be the main JS file.');

var debug=true;

var widthMax = screen.width;
var heightMax = screen.height;

var width = window.innerWidth;
var height = window.innerHeight;

var doit;

/*
var size = 32;
var nbTileX = Math.round(width/size);
var nbTileY = Math.round(height/size);
*/
//console.log("w/h:",nbTileX,",",nbTileY);
function parralax(event){
	/*
	clearTimeout(doit);
	doit = setTimeout(function(){
	*/
	//console.log(event);
	var mouseTop = event.clientY;
	var mouseLeft = event.clientX;
	var verticaleOffset = heightMax/2-mouseTop;
	var horizontaleOffset = widthMax/2-mouseLeft;
	//console.log(heightMax/widthMax,widthMax/heightMax);
	var amplitudeH = 0.001;
	var amplitudeV = 0.004;

	var $etherLayer = $(".area-ether__layer");
	if($etherLayer.length>0){
		$etherLayer.each(function(i,el){
			var index=i;
			var verticale = verticaleOffset*index*amplitudeV;
			var horizontale = horizontaleOffset*index*amplitudeH;
			$(el).css('transform','translate('+horizontale+'%,'+verticale+'%)');
			//console.log(i,el);
		});
	}else{
		console.log("no-ether-layer");
	}

	var $site = $(".area-site");
	var $corners = $(".card__corner");
	if($site.length==1){
		//console.log("rotate site");
		var maxDegY=25;
		var maxDegX=25;
		var maxDegZ=25;

		var degY = maxDegY/100*mouseLeft*100/width - maxDegY/2;
		var degX = (maxDegX/100*mouseTop*100/height - maxDegX/2) *-1 ;
		var degZ = 0;
		var transform ='rotateX('+degX+'deg) rotateY('+degY+'deg)';
		//var transformCorner =transform+' translateZ(-80px)';
		$site.css('transform',transform);// rotateZ('+degZ+'deg)');
		$corners.css('transform',transform);
		//console.log($corners.length,'|',transformCorner);
	}else{
		console.log("no site found to be rotate");
	}
	//}, 16);
}

function logoActive(){
	var $logo = $('.logo');
	var $bg = $('.area-background');
	$logo.toggleClass('logo--active');
	$bg.toggleClass('area-background--active');
}

function setState(event){
	var $button = $(event.currentTarget);
	var action = $button.attr('class');
	$('body').attr('class','');
	switch(action){
		case 'loading':
		$('body').addClass('app--loading');
		break;
		case 'ready':
		$('body').addClass('app--ready');
		break;
		case 'active':
		$('body').addClass('app--active');
		//logoActive();
		break;
		case 'debug':
		$('body').addClass('app--debug');
		break;
	}
}

function toggle(event){
	var $button = $(event.currentTarget);
	var action = $button.attr('class');

	var $background = $('.area-background');
	var $ether = $('.area-ether');
	var $site = $('.area-site');
	var $overlay = $('.area-overlay');
	//$('body').attr('class','');
	switch(action){
		case 'background':
		var attr = $background.attr('hidden');
		if (typeof attr !== typeof undefined && attr !== false) {
			$background.removeAttr('hidden')
		}else{
			$background.attr('hidden','')
		}
		break;
		case 'overlay':
		var attr = $overlay.attr('hidden');
		if (typeof attr !== typeof undefined && attr !== false) {
			$overlay.removeAttr('hidden')
		}else{
			$overlay.attr('hidden','')
		}
		break;
		case 'ether':
		var attr = $ether.attr('hidden');
		if (typeof attr !== typeof undefined && attr !== false) {
			console.log("ether:remove hidden|",typeof attr,'|',attr);
			$ether.removeAttr('hidden')
		}else{
			$ether.attr('hidden','hidden')
		}
		break;
		case 'site':
		var attr = $site.attr('hidden');
		if (typeof attr !== typeof undefined && attr !== false) {
			$site.removeAttr('hidden')
		}else{
			$site.attr('hidden','')
		}
		break;
	}
}

$(function(){
	//console.log($('button').length);
	$('button[state]').on('click',setState);
	$('button[toggle]').on('click',toggle);
	//$('button').on('click',debug);

});


/*
setTimeout(function(){
$('body').addClass('app--ready');
},1000);
//console.log("loaded");
$("body").on('mousemove',parralax);
$(".logo").on('click',logoActive);
*/
$("body").on('mousemove',parralax);



//	var $tiletmpl = $("#tiletmpl");
/*
$tile.width();
$tile.height();
*/
/*
var $tileContainer = $("#tile-container");
for(var i =0; i <nbTileX*nbTileY ;i++){
$tileContainer.append($tiletmpl.html());
}*/

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
