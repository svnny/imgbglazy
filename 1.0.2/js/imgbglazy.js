/* jQuery imgbglazy v1.0.2
Author: muhammad f huda
License: MIT
*/
!function(i,a){i(function(){i(a).length<1||(void 0!==i(a).css("transition")?i(window).on("imgbglazy scroll resize",function(){var s=i(this).scrollTop(),r=s+this.innerHeight;i(a).not(".imgbglazy").each(function(){var a=i(this),t=a.data("src"),n=a.offset().top,o=n+a.height();if(s<=o&&r>=n){a.addClass("imgbglazy");var c=i("<img/>",{src:t}).on("load",function(){i=parseFloat(a.css("transition-duration"));if(a.is("img")){var i=i<1?1e3:1e3*i;a.css("opacity",0).attr("src",t).fadeTo(i,1)}else{var s=i<1?"background-image 1s ease":a.css("transition");a.css({"background-image":"url("+t+")",transition:s})}c.remove()})}})}).trigger("imgbglazy"):i(a).each(function(){var a=i(this),s=a.data("src");if(a.is("img"))a.attr("src",s);else{var r="url("+s+")",t=a.css("background-image");"none"!==t&&(r+=","+t),a.css("background-image",r)}}))})}(jQuery,"[data-src]");
