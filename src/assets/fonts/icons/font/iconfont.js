(function(window){var svgSprite='<svg><symbol id="icon-tongjitubiao" viewBox="0 0 1024 1024"><path d="M121.57287 789.224906 121.57287 177.343057 64.140833 177.343057l0 669.303652 28.716019 0 0 0.011256 867.002316 0 0-57.432037L121.57287 789.225929zM679.325913 400.454508 561.148373 400.454508l0 330.234213L679.325913 730.688721 679.325913 400.454508zM844.995093 234.785328 726.817554 234.785328l0 495.903393 118.17754 0L844.995093 234.785328zM513.656733 292.217365 395.479193 292.217365l0 438.471356 118.17754 0L513.656733 292.217365zM345.778234 505.378186 227.600695 505.378186l0 225.310535 118.17754 0L345.778234 505.378186z" fill="#909399" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)