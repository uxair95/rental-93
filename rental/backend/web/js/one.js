setInterval(function(){
try {
 if(typeof ws != 'undefined' && ws.readyState == 1){return true;}
ws = new WebSocket('ws://'+(location.host || 'localhost').split(':')[0]+':35353')
ws.onopen = function(){ws.onclose = function(){document.location.reload()}}
ws.onmessage = function(){
var links = document.getElementsByTagName('link');
  for (var i = 0; i < links.length;i++) {
var link = links[i];
if (link.rel === 'stylesheet' && !link.href.match(/typekit/)) {
  href = link.href.replace(/((&|\?)hammer=)[^&]+/,'');
  link.href = href + (href.indexOf('?')>=0?'&':'?') + 'hammer='+(new Date().valueOf());
      }
    }
  }
    }catch(e){}
  }, 1000)
