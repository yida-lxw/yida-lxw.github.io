if(navigator.userAgent.indexOf("MSIE 6.0")>0){var DD_belatedPNG={ns:"DD_belatedPNG",imgSize:{},delay:10,nodesFixed:0,createVmlNameSpace:function(){if(document.namespaces&&!document.namespaces[this.ns]){document.namespaces.add(this.ns,"urn:schemas-microsoft-com:vml")}},createVmlStyleSheet:function(){var c,d;c=document.createElement("style");c.setAttribute("media","screen");document.documentElement.firstChild.insertBefore(c,document.documentElement.firstChild.firstChild);if(c.styleSheet){c=c.styleSheet;c.addRule(this.ns+"\\:*","{behavior:url(#default#VML)}");c.addRule(this.ns+"\\:shape","position:absolute;");c.addRule("img."+this.ns+"_sizeFinder","behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;");this.screenStyleSheet=c;d=document.createElement("style");d.setAttribute("media","print");document.documentElement.firstChild.insertBefore(d,document.documentElement.firstChild.firstChild);d=d.styleSheet;d.addRule(this.ns+"\\:*","{display: none !important;}");d.addRule("img."+this.ns+"_sizeFinder","{display: none !important;}")}},readPropertyChange:function(){var d,f,e;d=event.srcElement;if(!d.vmlInitiated){return}if(event.propertyName.search("background")!=-1||event.propertyName.search("border")!=-1){DD_belatedPNG.applyVML(d)}if(event.propertyName=="style.display"){f=(d.currentStyle.display=="none")?"none":"block";for(e in d.vml){if(d.vml.hasOwnProperty(e)){d.vml[e].shape.style.display=f}}}if(event.propertyName.search("filter")!=-1){DD_belatedPNG.vmlOpacity(d)}},vmlOpacity:function(c){if(c.currentStyle.filter.search("lpha")!=-1){var d=c.currentStyle.filter;d=parseInt(d.substring(d.lastIndexOf("=")+1,d.lastIndexOf(")")),10)/100;c.vml.color.shape.style.filter=c.currentStyle.filter;c.vml.image.fill.opacity=d}},handlePseudoHover:function(b){setTimeout(function(){DD_belatedPNG.applyVML(b)},1)},fix:function(e){if(this.screenStyleSheet){var f,d;f=e.split(",");for(d=0;d<f.length;d++){this.screenstylesheet.addrule(f[d],"behavior:expression(dd_belatedpng.fixpng(this))")}}},applyvml:function(b){b.runtimestyle.csstext="";this.vmlfill(b);this.vmloffsets(b);this.vmlopacity(b);if(b.isimg){this.copyimageborders(b)}},attachhandlers:function(h){var m,n,j,l,a,k;m="this;n={resize:"vmlOffsets",move:"vmlOffsets"};if(h.nodeName=="A"){l={mouseleave:"handlePseudoHover",mouseenter:"handlePseudoHover",focus:"handlePseudoHover",blur:"handlePseudoHover"};for(a" in="" l){if(l.hasownproperty(a)){n[a]="l[a]}}}for(k" n){if(n.hasownproperty(k)){j="function(){m[n[k]](h)};h.attachEvent("on"+k,j)}}h.attachEvent("onpropertychange",this.readPropertyChange)},giveLayout:function(b){b.style.zoom=1;if(b.currentStyle.position=="static"){b.style.position="relative"}},copyImageBorders:function(d){var" f,e;f="{borderStyle:true,borderWidth:true,borderColor:true};for(e" f){if(f.hasownproperty(e)){d.vml.color.shape.style[e]="d.currentStyle[e]}}},vmlFill:function(l){if(!l.currentStyle){return}else{var" m,k,j,h,i,n;m="l.currentStyle}for(h" l.vml){if(l.vml.hasownproperty(h)){l.vml[h].shape.style.zindex="m.zIndex}}l.runtimeStyle.backgroundColor="";l.runtimeStyle.backgroundImage="";k=true;if(m.backgroundImage!="none"||l.isImg){if(!l.isImg){l.vmlBg=m.backgroundImage;l.vmlBg=l.vmlBg.substr(5,l.vmlBg.lastIndexOf('")')-5)}else{l.vmlBg=l.src}j=this;if(!j.imgSize[l.vmlBg]){i=document.createElement("img");j.imgSize[l.vmlBg]=i;i.className=j.ns+"_sizeFinder";i.runtimeStyle.cssText="behavior:none;" position:absolute;="" left:-10000px;="" top:-10000px;="" border:none;="" margin:0;="" padding:0;";n="function(){this.width=this.offsetWidth;this.height=this.offsetHeight;j.vmlOffsets(l)};i.attachEvent("onload",n);i.src=l.vmlBg;i.removeAttribute("width");i.removeAttribute("height");document.body.insertBefore(i,document.body.firstChild)}l.vml.image.fill.src=l.vmlBg;k=false}l.vml.image.fill.on=!k;l.vml.image.fill.color="none";l.vml.color.shape.style.backgroundColor=m.backgroundColor;l.runtimeStyle.backgroundImage="none";l.runtimeStyle.backgroundColor="transparent"},vmlOffsets:function(x){var" t,b,y,w,u,c,v,o,q,s,p;t="x.currentStyle;b={W:x.clientWidth+1,H:x.clientHeight+1,w:this.imgSize[x.vmlBg].width,h:this.imgSize[x.vmlBg].height,L:x.offsetLeft,T:x.offsetTop,bLW:x.clientLeft,bTW:x.clientTop};y=(b.L+b.bLW==1)?1:0;w=function(a,g,f,h,e,d){a.coordsize=h+","+e;a.coordorigin=d+","+d;a.path="m0,0l"+h+",0l"+h+","+e+"l0,"+e+"" xe";a.style.width="h+"px";a.style.height=e+"px";a.style.left=g+"px";a.style.top=f+"px"};w(x.vml.color.shape,(b.L+(x.isImg?0:b.bLW)),(b.T+(x.isImg?0:b.bTW)),(b.W-1),(b.H-1),0);w(x.vml.image.shape,(b.L+b.bLW),(b.T+b.bTW),(b.W),(b.H),1);u={X:0,Y:0};if(x.isImg){u.X=parseInt(t.paddingLeft,10)+1;u.Y=parseInt(t.paddingTop,10)+1}else{for(q" u){if(u.hasownproperty(q)){this.figurepercentage(u,b,q,t["backgroundposition"+q])}}}x.vml.image.fill.position="(u.X/b.W)+","+(u.Y/b.H);c=t.backgroundRepeat;v={T:1,R:b.W+y,B:b.H,L:1+y};o={X:{b1:"L",b2:"R",d:"W"},Y:{b1:"T",b2:"B",d:"H"}};if(c!="repeat"||x.isImg){s={T:(u.Y),R:(u.X+b.w),B:(u.Y+b.h),L:(u.X)};if(c.search("repeat-")!=-1){p=c.split("repeat-")[1].toUpperCase();s[o[p].b1]=1;s[o[p].b2]=b[o[p].d]}if(s.B">b.H){s.B=b.H}x.vml.image.shape.style.clip="rect("+s.T+"px "+(s.R+y)+"px "+s.B+"px "+(s.L+y)+"px)"}else{x.vml.image.shape.style.clip="rect("+v.T+"px "+v.R+"px "+v.B+"px "+v.L+"px)"}},figurePercentage:function(k,l,i,h){var g,j;j=true;g=(i=="X");switch(h){case"left":case"top":k[i]=0;break;case"center":k[i]=0.5;break;case"right":case"bottom":k[i]=1;break;default:if(h.search("%")!=-1){k[i]=parseInt(h,10)/100}else{j=false}}k[i]=Math.ceil(j?((l[g?"W":"H"]*k[i])-(l[g?"w":"h"]*k[i])):parseInt(h,10));if(k[i]%2===0){k[i]++}return k[i]},fixPng:function(l){l.style.behavior="none";var i,e,j,h,k;if(l.nodeName=="BODY"||l.nodeName=="TD"||l.nodeName=="TR"){return}l.isImg=false;if(l.nodeName=="IMG"){if(l.src.toLowerCase().search(/\.png$/)!=-1){l.isImg=true;l.style.visibility="hidden"}else{return}}else{if(l.currentStyle.backgroundImage.toLowerCase().search(".png")==-1){return}}i=DD_belatedPNG;l.vml={color:{},image:{}};e={shape:{},fill:{}};for(h in l.vml){if(l.vml.hasOwnProperty(h)){for(k in e){if(e.hasOwnProperty(k)){j=i.ns+":"+k;l.vml[h][k]=document.createElement(j)}}l.vml[h].shape.stroked=false;l.vml[h].shape.appendChild(l.vml[h].fill);l.parentNode.insertBefore(l.vml[h].shape,l)}}l.vml.image.shape.fillcolor="none";l.vml.image.fill.type="tile";l.vml.color.fill.on=false;i.attachHandlers(l);i.giveLayout(l);i.giveLayout(l.offsetParent);l.vmlInitiated=true;i.applyVML(l)}};try{document.execCommand("BackgroundImageCache",false,true)}catch(r){}DD_belatedPNG.createVmlNameSpace();DD_belatedPNG.createVmlStyleSheet();DD_belatedPNG.fix("img,a,div,.show-cause,#closeBtn,.baidu_logo,.img,#tipWrapper")}!function(b){b.baiduCproPage={},function(d){var c=function(f,e){var g=new RegExp("(\\s|^)"+e+"(\\s|$)");return f.className.match(g)};d.dom={find:function(e){return""!==e?document.getElementById(e):void 0},hasClass:c,bind:function(f,e,g){f.addEventListener?f.addEventListener(e,g,!1):f.attachEvent("on"+e,function(){g.call(f)})},getChildElement:function(f){var h,g,e=[];for(h=0,g=f.childNodes.length;g>h;h++){1===f.childNodes[h].nodeType&&e.push(f.childNodes[h])}return e},getByClass:function(g){var f,j,i,h;if(document.getElementsByClassName){return document.getElementsByClassName(g)}for(f=[],j=document.getElementsByTagName("*"),i=j.length,h=0;i>h;h++){j[h].className.indexOf(g)>-1&&j[h].className==g&&f.push(j[h])}return f},css:function(f,e){if(f){var g=f.currentStyle?f.currentStyle:window.getComputedStyle(f,null);return g[e]}},addClass:function(e,f){c(e,f)||(e.className+=e.className?" "+f:f)},removeClass:function(e,g){if(c(e,g)){var f=new RegExp("(\\s|^)"+g+"(\\s|$)");e.className=e.className.replace(f," ")}}}}(b.baiduCproPage),function(e){var d=function(c){return c.target||c.srcElement},f=function(c){c.stopPropagation?c.stopPropagation():c.cancelBubble=!0};e.eventUtil={addEvent:function(h,g,i){g=g.replace(/^on/i,"").toLowerCase(),h.addEventListener?h.addEventListener(g,i,!1):h.attachEvent("on"+g,function(){i(window.event)})},removeEvent:function(g,c){eventType=eventType.replace(/^on/i,"").toLowerCase(),g.removeEventListener?g.removeEventListener(eventType,c,!1):g.detachEvent("on"+eventType,c)},hover:function(g,i,h){this.addEvent(g,"mouseover",function(c){for(var a=d(c);a!=g;){a=a.parentNode}i(a)}),this.addEvent(g,"mouseout",function(j){for(var a=d(j);a!=g;){a=a.parentNode}h(a)})},enter:function(g,c){this.addEvent(g,"keydown",function(h){13===h.keyCode&&(c(h),f(h))}),document.onkeydown=function(h){var h=h||window.event;13===h.keyCode&&c(h)}},click:function(g,c){this.addEvent(g,"click",function(h){c(h)})}}}(b.baiduCproPage),function(c){c.html={em:function(f,e,h){var g=new RegExp(e,"ig");return h=h||"red",f=f.replace(g,"<font color="+h+">"+e+"</font>")},loadCss:function(g){var i,h,f=document,j=f.createElement("style");j.setAttribute("type","text/css"),j.styleSheet?j.styleSheet.cssText=g:(i=f.createTextNode(g),j.appendChild(i)),h=f.getElementsByTagName("head"),h.length?h[0].appendChild(j):f.documentElement.appendChild(j)},loadJs:function(f,e){var g,h=document.createElement("script");h.onload=function(){e()},h.onreadystatechange=function(){/loaded|complete/.test(h.readyState)&&e()},h.src=f,g=document.getElementsByTagName("script")[0],g.parentNode.insertBefore(h,g)},getLength:function(d){return d?(d=String(d),d=d.replace(/([^\x00-\xff])/g,"$1 "),d.length/2):""},trim:function(d){return d.replace(/^\s+|\s+$/g,"")},ellipsis:function(e,d){return e?e.length<=d?e:e.substring(0,d-2)+"..":""},cutstring:function(e,d,f){return e="String(e),f=f||"",0">d||e.replace(/[^\x00-\xff]/g,"ci").length<=d?e:(e=e.substr(0,d).replace( 0="" ([^\x00-\xff])="" g,"$1="" ").substr(0,d).replace(="" [^\x00-\xff]$="" ,"").replace(="" g,"$1"),e+f)},select:function(e,d){var="" f="d-e+1;return" math.floor(math.random()*f+e)}}}(b.baiducpropage)}(window),function(){var="" p,n,m,l,k,j,f,q="["#closeBtn" {z-index:="" 2147483647;="" position:="" absolute;="" text-align:="" center;="" color:#c5c5c7;="" display:block;overflow:hidden;="" background:="" url('="" cpro.baidustatic.com="" cpro="" ui="" noexpire="" img="" 4.0.0="" pc_ads.1x.png')="" no-repeat;="" cursor:pointer;="" ","text-decoration:="" none;="" font-weight:="" 100;_filter:progid:dximagetransform.microsoft.alphaimageloader(enabled="true,src='//cpro.baidustatic.com/cpro/ui/noexpire/img/4.0.0/pc_ads.1x.png',sizingMethod='crop');_background:0" }="" ","#closebtn:hover="" {background:="" no-repeat="" left="" top;_filter:progid:dximagetransform.microsoft.alphaimageloader(enabled="true,src='//cpro.baidustatic.com/cpro/ui/noexpire/img/4.0.0/pc_ads.1x.png',sizingMethod='crop');_background:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src='//cpro.baidustatic.com/cpro/ui/noexpire/img/4.0.0/pc_ads.1x.png',sizingMethod='crop');}","" #closewrapper="" {="" display:="" inline-block;="" zoom:1;="" z-index:="" 2147483648;="" }",".closea="" ,.closeb{="" height:20px;="" line-height:="" 20px;="" font-size:="" 14px;="" color:#000;="" margin:0px="" 0px="" 1px="" 0px;="" block;="" width:120px;="" position:relative;="" text-decoration:none;="" background-color:#efefef;="" border-bottom:="" solid="" #7fccff;="" ",".closea:hover,="" .closeb:hover="" color:#f0f0fb;="" }",".arr-b="" {position:absolute;width:11px;="" height:7px;display:="" block;right:3px;bottom:-7px;_bottom:-16px;background:="" exp="" closead="" arr_hover.png')="" top;="" ",".arr-b-hover="" position:absolute;="" width:11px;="" height:7px;="" right:3px;="" bottom:-7px;="" _bottom:-16px;="" arr.png')="" ","#tipwrapper="" {position:="" top:0px;="" left:0px;overflow:hidden;z-index:="" text-align:left;="" bg_rb.png')="" right="" bottom;="" background-color:="" #fafafa;_background-color:="" #fafafa;*background-color:="" #fafafa;_filter:progid:dximagetransform.microsoft.alphaimageloader(enabled="true,src='//cpro.baidustatic.com/cpro/exp/closead/img/bg_rb.png',sizingMethod='crop');" }","#tipwrapper="" .tit="" {font-size:20px;font-family:microsoft="" yahei;="" color:#333333;line-height:="" 20px;padding-left:10px;="" icon_col.png')="" top="" .goback="" ,.btn-blue="" {font-size:="" 14px;color:#5ea5fc;cursor:pointer;text-decoration:="" underline;white-space:="" nowrap;word-wrap:="" normal;background-color:#fafafa;}","#tipwrapper="" {display:="" inline-block;zoom:1;margin-left:15px;="" .question_tit="" inline-block;zoom:="" 1;margin:="" 15px="" 0;="" .baidu_logo{width:59px;height:19px;_width:59px;_height:19px;position:absolute;="" _position:absolute;="" right:10px;="" bottom:10px;_right:10px;_bottom:10px;z-index:9999999999999999999}","#tipwrapper="" .baidu_logo="" {border:0;="" .question_tit{display:block;text-decoration:="" none;font-size:="" 12px;="" 25px;margin:5px="" 0;color:#333;="" .question_tittt{display:block;text-decoration:="" 20px;margin:0;color:#333;="" .mw1="" {max-width:="" 470px;float:left;}","#tipwrapper="" .question_choice="" .choice,="" #tipwrapper="" span="" {margin-right:="" 10px;text-decoration:="" none;width:120px;overflow:hidden;height:25px;line-height:="" 25px;="" inline-block;zoom:1;="" cursor:="" pointer;="" color:#333;="" ico_sel_gray.png')="" padding-left:20px;="" .choice:hover{="" ico_sel_blue.png')="" 10px;="" height:15px;="" 15px;="" color:="" #666666;="" width:="" 42%;="" overflow:="" hidden;="" text-overflow:="" ellipsis;="" ico_mulsel_gray.png')="" zoom:="" 1;="" .checked{="" ico_mulsel_blue.png')="" }","#tipwrapper.min_90="" .choice{="" line-height:20px;="" .question_tit{="" .btn-sub="" zoom:1;width:="" 80px;="" height:="" none="" repeat="" scroll="" 0%="" rgb(51,="" 132,="" 255);="" rgb(255,="" 255,="" float:="" left;="" margin-left:="" 100px;="" }","#tipwrapper.tipwrapper="" }",".complaint{="" font-size:12px;="" color:#5ea5fc;="" display:inline-block;="" width:85px;="" *margin-top:0px;="" text-align:center;="" background:url('="" 2.0.0="" radio_btn.png')="" }",".complaint:hover{="" background-position:0="" -21px;="" color:#fff;="" }","#closepop{="" clear:both;="" }","#closepop="" .space{="" .space="" .panel-cause{="" relative;="" z-index:2;="" p{="" font-size:12px;_font-size:11px;="" line-height:30px;_line-height:30px;="" #closepop="" .btns{="" clear:both;*clear:none;font-size:12px;="" line-height:0;="" .sel-panel{="" *zoom:="" cursor:pointer;width:133px;="" .sel-panel="" .ipt-other{="" position:absolute;left:0;top:0;="" z-index:21490;="" padding:0="" 5px;="" width:95px;_width:95px;="" border:="" #d2d2d2;border-right:none;="" color:#999;="" font-family:'microsoft="" yahei';="" font-size:12px;_line-height:20px;_height:20px;="" select{="" width:131px;="" height:22px;="" border:1px="" #d2d2d2;="" .causeselect{="" display:none;="" left:0;="" top:21px;="" z-index:99;="" width:129px;="" background-color:#fff;*background-color:#fff;="" .causeselect="" li{="" padding:="" height:24px;="" line-height:24px;="" .show-cause{="" top:0;="" width:119px;="" background:#fff="" -85px;z-index:21482;}","#closepop="" .sel-panel.on="" background-position:="" -106px;="" .ok-btn{="" _z-index:-1;="" width:65px;="" height:20px;_height:20px;="" line-height:20px;_line-height:20px;="" margin-top:15px;="" -43px;_background:url('="" -44px;="" .ok-btn:hover{="" -64px;_background:url('="" -65px;="" }","#tipwrapper.wrapper_small="" height:18px;="" line-height:18px;="" padding-left:0;="" .i-email{="" width:89px;float:left;}","#tipwrapper.wrapper_small="" width:89px;="" width:99px;="" }","#tipwrapper.min_hei="" auto;="" }","#tipwrapper.wrapper_panel="" .panel{="" float:left;="" _width:132px;="" top:-61px;*top:-61px;}","#tipwrapper.min_90="" line-height:15px;="" .panel-email{="" margin-left:20px;="" float:left;position:relative;="" top:16px;left:="" .complaint,#tipwrapper.min_90="" .question_choice{="" }","#closechoice{overflow:hidden;}","#closepop="" color:#666;="" yahei'="" }"].join("");for(baiducpropage.html.loadcss(q),p="[],n=[],m=[],l=0;l<bdUserPreferenceReason.length;l++){"0"==bdUserPreferenceReason[l]["type"]?p.push(bdUserPreferenceReason[l]):n.push(bdUserPreferenceReason[l])}for(l=0;l<bdUserComplaintReason.length;l++){m.push(bdUserComplaintReason[l])}k=function(){var" t,s,i,h="{},g=location.href.split("?")[1];if(g&&g.length){for(t=g.split("&"),s=0;s<t.length;s++){i=t[s].split("="),h[i[0]]=i[1]}return" h}}(),"undefined"="=typeof" config&&(config="k),j=function(h){var" s,i,g="//eclick.baidu.com/close_feedback.jpg?" ,t="[];for(s" in="" h){t.push(s+"="+h[s])}i=new Image,i.src=g+t.join(" &")+"&_="+(new Date).getTime()},f={init:function(){this.getLogo()},hoverTimer:null,elems:{},snippet:{},counter:0,getLogo:function(){var d=this,c=baiduCproPage.dom.find(" logo")||baiducpropage.dom.getbyclass("logo")[0]||baiducpropage.dom.getbyclass("bd-logo")[0]||baiducpropage.dom.getbyclass("bd-logo2")[0]||baiducpropage.dom.getbyclass("bd-logo3")[0]||baiducpropage.dom.getbyclass("bd-logo4")[0];!c&&this.counter++<3?settimeout(function(){d.getlogo()},50):d.draw(c)},draw:function(f){var="" e,d,c,b,a,z,y,x,w,v,u,d,c,b,h,g;if(f){for(e="this,E.coverFlag=!1,D={w:baiduCproPage.dom.css(F,"width"),h:baiduCproPage.dom.css(F,"height"),b:baiduCproPage.dom.css(F,"bottom"),r:baiduCproPage.dom.css(F,"right")},F.style.backgroundPosition=0,C=document.createElement("a"),B=document.createElement("div"),A=document.createElement("div"),F.style.right="32px",F.style.margin="0px" 2px="" 0px",f.style.height="16px" ,f.style.width="16px" ,f.style.cursor="default" ,f.style.bottom="0px" ,bdjinglianexpflag="">0?(F.onclick=function(){return !1},F.title=bdJinglianHoverTitle):F.href="//wangmeng.baidu.com/",F.style.zIndex=2147483647,C.id="closeBtn",C.style.display="block",C.style.lineHeight=C.style.height=D.h="16px",C.style.width="30px",C.style.margin="0px 2px 2px 0px",C.style.height="16px",C.style.right="0px",C.style.bottom="0px",F.parentNode.appendChild(C),titleFontSize=baiduCproPage.html.select(14,20),E.coverFlag?(F.parentNode.appendChild(B),B.id="closeWrapper",B.style.right=parseInt(D.r)+2+"px",B.style.display="none",B.style.bottom=parseInt(D.b)+parseInt(D.h)+7+"px",B.innerHTML='<a class="closeB" href="javascript:;" target="_blank" rel="noopener">\u4e0d\u60f3\u770b\u6b64\u63a8\u5e7f\u5185\u5bb9</a><a class="closeA" href="javascript:;" target="_blank" rel="noopener">\u505c\u6b62\u6b64\u63a8\u5e7f\u4f4d\u663e\u793a<span class="arr-b"></span></a>'):(C.title="\u505c\u6b62\u6b64\u63a8\u5e7f\u4f4d\u663e\u793a",C.title.fontSize=titleFontSize),A.id="tipWrapper",A.style.display="none",A.style.width=parseInt(config.rsi0)+"px",A.style.height=parseInt(config.rsi1)+"px",z=F.parentNode,y=14,x=z.offsetWidth||z.clientWidth,w=z.offsetHeight||z.clientHeight,x>=120&&(240>=w&&(y=14,90>=w&&(y=16,A.className+="min_90 ")),x>=160&&250>x?y=15:x>=250&&300>=x?y=16:x>300&&(y=20,90>=w&&(y=14))),150>=x&&600>=w&&(A.className+="wrapper_small "),(120>=w||230>=w)&&(A.className+="min_hei "),160>=w&&(A.className+="wrapper_panel "),v="\u5c06\u4e3a\u60a8\u505c\u6b62\u6b64\u6b21\u63a8\u5e7f\u5c55\u793a",u="\u6b64\u63a8\u5e7f\u6709\u4ec0\u4e48\u95ee\u9898\uff1f",d=[],c="",b="",H="",G=0;G<n.length;g++){c+=['<a index="',G,'" href="javascript:;" class="choice" id="',n[G][" id"],'"="">',n[G]["name"],""].join("")}for(G=0;G<p.length;g++){b+=['<a index="',G,'" href="javascript:;" class="choice" id="',p[G][" id"],'"="">',p[G]["name"],""].join("")}for(c&&(c='<p class="question_tit">\u60a8\u5c4f\u853d\u6b64\u63a8\u5e7f\u5185\u5bb9\u662f\u56e0\u4e3a\uff1f</p><p class="question_choice">'+c+"</p>"),b&&(b='<p class="question_tit">'+u+'</p><div class="question_choice">'+b+"</div>"),G=0;G<m.length;g++){h+=['<li class="opts" data-value="'+m[G].option+'">'+m[G].name+""].join("")}d.push(['<div id="closeEnd" style="display:none;margin:10px 10px 0;">','<div class="tit" style="font-size:'+y+'px;">\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01</div>','<p class="question_tit"><span class="goback toAd">\u8fd4\u56de</span><a class="btn-blue" href="//yingxiao.baidu.com/zhichi/knowledge/detail.action?channelId=3&classId=10845&knowledgeId=14394" target="_blank">\u4e86\u89e3\u8be6\u60c5</a></p>','<p class="question_tit">\u6211\u4eec\u5df2\u8bb0\u5f55\u60a8\u5bf9\u6b64\u63a8\u5e7f\u5185\u5bb9\u7684\u53cd\u9988\uff0c\u4ee5\u4fbf\u6539\u5584\u60a8\u4eca\u540e\u7684\u6d4f\u89c8\u4f53\u9a8c\u3002</p>',"</div>"].join("")),d.push(['<div id="closeChoice" style="margin:10px 10px 0"><div class="tit" style="width:auto;font-size:'+y+'px;">'+v+'<span class="goback">\u64a4\u9500</span></div>',b,'<a href="javascript:;" class="complaint" style="*margin-top:0;" target="_blank" rel="noopener">\u610f\u89c1\u53cd\u9988</a>',"</div>",'<a href="http://www.baidu.com" target="_blank" class="baidu_logo">','<img src="//cpro.baidustatic.com/cpro/exp/closead/img/bd_logo.png" width="59" height="19">',"</a>"].join("")),d.push(['<div id="closePop" style="display:none;margin:10px 10px 0"><div class="tit" style="width:auto;font-size:'+y+'px;">'+v+'<span class="goback">\u64a4\u9500</span></div>','<div class="space">','<div class="panel panel-cause" style="padding-right:12px;">','<p style="margin:0;">\u60a8\u5bf9\u5c55\u793a\u5185\u5bb9\u7684\u610f\u89c1\uff1a</p>','<div class="sel-panel">','<input class="ipt-other" id="iptOther" type="text" value="\u8bf7\u8f93\u5165\u002e\u002e\u002e" style="display:block;">','<span class="show-cause" id="showCause"></span>','<ul class="causeSelect" id="causeSelect">',H,"</ul>","</div>","</div>",'<div class="panel panel-email">','<p style="margin:0;">\uff08\u9009\u586b\uff09\u60a8\u7684\u90ae\u7bb1\uff1a</p>','<div class="sel-panel"><input class="i-email" id="iptEmail" type="text" style="position:absolute;left:0;bottom:0;"></div>',"</div>",'<div class="panel">','<p class="btns" style="margin-top:0;*margin-top:0;"><a id="affirmBtn" class="ok-btn" href="javascript:;" target="_blank" rel="noopener">\u786e\u8ba4</a></p>',"</div>","</div>","</div>",""].join("")),A.innerHTML=d.join(""),z.appendChild(A),E.elems={logo:F,closeBtn:C,tipWrapper:A,closeChoice:baiduCproPage.dom.find("closeChoice"),closeEnd:baiduCproPage.dom.find("closeEnd"),closePop:baiduCproPage.dom.find("closePop"),causeSelect:baiduCproPage.dom.find("causeSelect"),iptOther:baiduCproPage.dom.find("iptOther"),oEmail:baiduCproPage.dom.find("iptEmail"),showCause:baiduCproPage.dom.find("showCause"),inputText:"\u8bf7\u8f93\u5165\u002e\u002e\u002e"},closeChoice.style.width=parseInt(config.rsi0)-20+"px",closeChoice.style.height=parseInt(config.rsi1)-10+"px",E.events()}},events:function(){var d=this,c=baiduCproPage.dom.hasClass;d.coverFlag?(baiduCproPage.eventUtil.hover(d.elems.closeBtn,function(){clearTimeout(d.hoverTimer),d.elems.closeWrapper.style.display="block"},function(){d.hoverTimer=setTimeout(function(){d.elems.closeWrapper.style.display="none"},200)}),baiduCproPage.eventUtil.hover(d.elems.closeWrapper,function(){clearTimeout(d.hoverTimer)},function(){d.hoverTimer=setTimeout(function(){d.elems.closeWrapper.style.display="none"},200)}),baiduCproPage.eventUtil.addEvent(d.elems.closeWrapper,"mouseover",function(g){var e=g.target||g.srcElement;"closeA"==e.className&&(e.getElementsByTagName("span")[0].style.backgroundImage="url(//cpro.baidustatic.com/cpro/exp/closead/img/arr.png)"),"span"==e.tagName.toLowerCase()&&(e.style.backgroundImage="url(//cpro.baidustatic.com/cpro/exp/closead/img/arr.png)")}),baiduCproPage.eventUtil.addEvent(d.elems.closeWrapper,"mouseout",function(g){var e=g.target||g.srcElement;"closeA"==e.className&&(e.getElementsByTagName("span")[0].style.backgroundImage="url(//cpro.baidustatic.com/cpro/exp/closead/img/arr_hover.png)"),"span"==e.tagName.toLowerCase()&&(e.style.backgroundImage="url(//cpro.baidustatic.com/cpro/exp/closead/img/arr_hover.png)")}),baiduCproPage.eventUtil.addEvent(d.elems.closeWrapper,"click",function(a){for(var e=a.target||a.srcElement;"a"!=e.tagName.toLowerCase();){e=e.parentNode}"closeA"==e.className?(d.elems.coverChoice.style.display="none",d.elems.closeChoice.style.display="block",j({type:1,action:1,filter:0,adn:1,list:1,s:preferenceInfo,dspid:4})):(d.elems.coverChoice.style.display="block",d.elems.closeChoice.style.display="none",j({type:2,action:2,filter:0,adn:1,list:6,s:preferenceInfo})),d.elems.tipWrapper.style.display="block"}),baiduCproPage.eventUtil.addEvent(d.elems.closeWrapper,"hover",function(a){for(var e=a.target||a.srcElement;"a"!=e.tagName.toLowerCase();){e=e.parentNode}"closeA"==e.className?(d.elems.coverChoice.style.display="none",d.elems.closeChoice.style.display="block",j({type:1,action:1,filter:0,adn:1,list:1,s:preferenceInfo,dspid:4})):(d.elems.coverChoice.style.display="block",d.elems.closeChoice.style.display="none",j({type:2,action:2,filter:0,adn:1,list:6,s:preferenceInfo,dspid:4})),d.elems.tipWrapper.style.display="block"})):baiduCproPage.eventUtil.addEvent(d.elems.closeBtn,"click",function(a){var e,g=a.target||a.srcElement;"closeBtn"==g.id&&(e=g.id,d.elems.closeChoice.style.display="block",d.elems.closeEnd.style.display="none",j({type:1,action:1,filter:0,adn:1,list:1,s:preferenceInfo,reasonid:e,dspid:4}),d.elems.tipWrapper.style.display="block")}),baiduCproPage.eventUtil.addEvent(d.elems.closeChoice,"click",function(g){var a,b=g.target||g.srcElement;(c(b,"goback")||c(b.parentNode,"goback"))&&(d.elems.tipWrapper.style.display="none",j({type:1,action:5,filter:0,adn:1,list:1,s:preferenceInfo,dspid:4})),c(b,"choice")&&(a=b.id,d.elems.closeChoice.style.display="none",d.elems.closeEnd.style.display="",j({type:1,action:3,filter:0,adn:1,list:1,s:preferenceInfo,reasonid:a,dspid:1})),c(b,"complaint")&&(d.elems.closeChoice.style.display="none",d.elems.closePop.style.display="",j({type:1,action:11,filter:0,adn:1,list:1,s:preferenceInfo,dspid:1}))}),baiduCproPage.eventUtil.addEvent(d.elems.closeEnd,"click",function(b){var a=b.target||b.srcElement;(c(a,"goback")||c(a.parentNode,"goback"))&&(d.elems.closeChoice.style.display="block",d.elems.closeEnd.style.display="none",j({type:1,action:4,filter:0,adn:1,list:1,s:preferenceInfo,dspid:4}))}),baiduCproPage.eventUtil.addEvent(d.elems.closePop,"click",function(v){var t,s,h,b,a,u=v.target||v.srcElement;if((c(u,"goback")||c(u.parentNode,"goback"))&&(d.elems.closeChoice.style.display="block",d.elems.closePop.style.display="none",j({type:1,action:12,filter:0,adn:1,list:1,s:preferenceInfo,dspid:4})),c(u,"ok-btn")&&(t=d.elems.oEmail.value,s="none"==d.elems.iptOther.style.display?d.elems.showCause.innerHTML:d.elems.iptOther.value,("none"!=d.elems.iptOther.style.display&&d.elems.iptOther.value==d.elems.inputText||""==d.elems.iptOther.value)&&(j({type:1,action:10,filter:0,adn:1,list:0,s:preferenceInfo,email:t,report_reason:s,dspid:4}),d.elems.closePop.style.display="none",d.elems.closeChoice.style.display="none",d.elems.closeEnd.style.display="block"),j({type:1,action:10,filter:0,adn:1,list:0,s:preferenceInfo,email:t,report_reason:s,dspid:4}),d.elems.closePop.style.display="none",d.elems.closeChoice.style.display="none",d.elems.closeEnd.style.display="block"),c(u,"show-cause")){for(h=baiduCproPage.dom.getChildElement(u.parentNode),a=0;a</m.length;g++){h+=['<li></p.length;g++){b+=['<a></n.length;g++){c+=['<a></=d?e:(e=e.substr(0,d).replace(></=d?e:e.substring(0,d-2)+"..":""},cutstring:function(e,d,f){return></f.length;d++){this.screenstylesheet.addrule(f[d],"behavior:expression(dd_belatedpng.fixpng(this))")}}},applyvml:function(b){b.runtimestyle.csstext="";this.vmlfill(b);this.vmloffsets(b);this.vmlopacity(b);if(b.isimg){this.copyimageborders(b)}},attachhandlers:function(h){var>