define&&define({name:"anticheat",namespace:"rs.business",$anticheat:function(){if(window.antiArray&&document.getElementById("container")){this.check("container",window.antiArray)}},antiCheatArray:[],mouseInClientX:-1,mouseInClientY:-1,mouseInTime:-1,mouseInTimeSpan:-1,mousePressTime:-1,mouseClickClientX:-1,mouseClickClientY:-1,mouseClickCheckNum:-1,mouseOverTimes:-1,bind:function(b,a,c){if(window.addEventListener){b.addEventListener(a,c,false)}else{b.attachEvent("on"+a,c)}},formatEventObj:function(a){a=a||window.event;a.target=a.target||a.srcElement;return a},mouseInHandler:function(a){if(this.mouseInClientX===-1){this.mouseInClientX=a.clientX}if(this.mouseInClientY===-1){this.mouseInClientY=a.clientY}},mouseInTimeHandler:function(a){if(this.mouseInTime===-1){this.mouseInTime=(new Date()).getTime()}this.mouseInTimeSpan=(new Date()).getTime()-this.mouseInTime},mousePressTimeHandler:function(a){if(a.type==="mousedown"){this.mousePressTime=(new Date()).getTime()}else{this.mousePressTime=(new Date()).getTime()-this.mousePressTime}},mouseClickHandler:function(l){l=this.formatEventObj(l);var h=l.target;while(h.tagName.toLowerCase()!=="a"&&h.tagName.toLowerCase()!=="body"){h=h.parentNode}this.mouseClickClientX=l.clientX;this.mouseClickClientY=l.clientY;this.mouseInTimeHandler();this.mouseClickCheckNum=0;var o=false;var g=h.href;var f=/(?:\?|&)q=(.*?)(?=\&|$)/i;if(h.href.indexOf("google.com")>0){o=true;var c=g.match(f)[1];h.href=decodeURIComponent(c)}var b=/\.php\?(url=)?([0-9a-zA-Z_-]*)\./.exec(h.href);var q=b[2];var a=/.*(\d+)/.exec(h.id);var d=a[1];var m=this.antiCheatArray[d];for(var k=0;k<(((this.mouseovertimes*m)%99)+9);k++){var n="(this.mousePressTime*k)%q.length;this.mouseClickCheckNum+=q.charCodeAt(n)}var" j="h.innerHTML;if(h.href.indexOf("&ck")==-1){h.href+="&ck="+this.mouseClickCheckNum+"."+this.mouseOverTimes+"."+this.mousePressTime+"."+this.mouseClickClientX+"."+this.mouseClickClientY+"."+this.mouseInClientX+"."+this.mouseInClientY+"."+this.mouseInTimeSpan}if((j.match(/(www\.)|(.*@.*)/i)!=null)&&document.all){j.match(/\<.*\">/i)==null?h.innerHTML=j:h.innerTEXT=j}if(o){h.href=g.replace(f,"&q="+encodeURIComponent(h.href))}},mouseOverHandler:function(a){if(this.mouseOverTimes===-1){this.mouseOverTimes=0}this.mouseOverTimes++},check:function(b,d){this.antiCheatArray=d||window.antiCheatArray;var a=document.getElementById(b);var f=a.getElementsByTagName("a");this.bind(a,"mouseover",this.mouseInHandler.proxy(this));this.bind(a,"mouseover",this.mouseInTimeHandler.proxy(this));for(var c=0;c</(((this.mouseovertimes*m)%99)+9);k++){var>