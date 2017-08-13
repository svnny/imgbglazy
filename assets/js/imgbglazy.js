/* jQuery imgbglazy by muhammad f huda
Twitter: @f_huda19*/


(function($, src) {
$.imgbglazy= function() {
if($(src).length<1) {
return;
}
if(typeof($(src).css('transition')) == 'undefined') {
$(src).each(function() {
var ini= $(this),
src= ini.data('src');
if(ini.is("img") || ini.is("iframe")) {
ini.attr('src', src);
}
else {
ini.css('background-image', 'url('+src+')');
}
});
return;
}
$(window).on('scroll resize', function() {
var scrlTop= $(this).scrollTop(),
scrlHeight= scrlTop+this.innerHeight;
$(src).not(".imgbglazy").each(function() {
var ini= $(this),
src= ini.data('src'),
ofstTop= ini.offset().top,
ofstHeight= ofstTop+ini.height(),
elm= ini.is("iframe") ? 'iframe': 'img';
if(scrlTop<=ofstHeight && scrlHeight>=ofstTop) {
ini.addClass('imgbglazy');
var element= $('<'+elm+'/>', {
"src": src,
"load": function() {
var transDur= parseFloat(ini.css('transition-duration'));
if(ini.is("iframe") || ini.is("img")) {
var transDur= (transDur<1) ? 1000: transDur*1000;
ini.css('opacity', 0).attr('src', src).fadeTo(transDur, 1);
}
else {
var transition= (transDur<1) ? 'background 1s ease': ini.css('transition');
ini.css({
"background-image": "url("+src+")",
"transition": transition
});
}
element.remove();
}
});
}
});
});
}
$(document).ready($.imgbglazy());
})(jQuery, "[data-src]");
