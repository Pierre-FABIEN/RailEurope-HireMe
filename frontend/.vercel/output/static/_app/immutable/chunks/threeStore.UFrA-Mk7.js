var qh=Object.defineProperty;var Yh=(i,e,t)=>e in i?qh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var rs=(i,e,t)=>(Yh(i,typeof e!="symbol"?e+"":e,t),t);import{w as jh}from"./index.OX3ycj_O.js";var Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $h(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xl={exports:{}};(function(i,e){(function(t,n){n(e)})(Kh,function(t){function n(B,g){for(var R=0;R<g.length;R++){var M=g[R];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(B,M.key,M)}}function r(B,g,R){return g&&n(B.prototype,g),R&&n(B,R),B}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var s,o,a,l,c,u,d,f,m,_,v,p,h,w=function(){return s||typeof window<"u"&&(s=window.gsap)&&s.registerPlugin&&s},S=1,D=[],U=[],C=[],L=Date.now,se=function(g,R){return R},b=function(){var g=m.core,R=g.bridge||{},M=g._scrollers,E=g._proxies;M.push.apply(M,U),E.push.apply(E,C),U=M,C=E,se=function(Y,k){return R[Y](k)}},A=function(g,R){return~C.indexOf(g)&&C[C.indexOf(g)+1][R]},K=function(g){return!!~_.indexOf(g)},te=function(g,R,M,E,I){return g.addEventListener(R,M,{passive:E!==!1,capture:!!I})},fe=function(g,R,M,E){return g.removeEventListener(R,M,!!E)},F="scrollLeft",q="scrollTop",Q=function(){return v&&v.isPressed||U.cache++},ae=function(g,R){var M=function E(I){if(I||I===0){S&&(a.history.scrollRestoration="manual");var Y=v&&v.isPressed;I=E.v=Math.round(I)||(v&&v.iOS?1:0),g(I),E.cacheID=U.cache,Y&&se("ss",I)}else(R||U.cache!==E.cacheID||se("ref"))&&(E.cacheID=U.cache,E.v=g());return E.v+E.offset};return M.offset=0,g&&M},J={s:F,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ae(function(B){return arguments.length?a.scrollTo(B,j.sc()):a.pageXOffset||l[F]||c[F]||u[F]||0})},j={s:q,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:J,sc:ae(function(B){return arguments.length?a.scrollTo(J.sc(),B):a.pageYOffset||l[q]||c[q]||u[q]||0})},ie=function(g,R){return(R&&R._ctx&&R._ctx.selector||s.utils.toArray)(g)[0]||(typeof g=="string"&&s.config().nullTargetWarn!==!1?console.warn("Element not found:",g):null)},ce=function(g,R){var M=R.s,E=R.sc;K(g)&&(g=l.scrollingElement||c);var I=U.indexOf(g),Y=E===j.sc?1:2;!~I&&(I=U.push(g)-1),U[I+Y]||te(g,"scroll",Q);var k=U[I+Y],Se=k||(U[I+Y]=ae(A(g,M),!0)||(K(g)?E:ae(function(Je){return arguments.length?g[M]=Je:g[M]})));return Se.target=g,k||(Se.smooth=s.getProperty(g,"scrollBehavior")==="smooth"),Se},Te=function(g,R,M){var E=g,I=g,Y=L(),k=Y,Se=R||50,Je=Math.max(500,Se*3),Lt=function(He,Yt){var zt=L();Yt||zt-Y>Se?(I=E,E=He,k=Y,Y=zt):M?E+=He:E=I+(He-I)/(zt-k)*(Y-k)},xt=function(){I=E=M?0:E,k=Y=0},Fe=function(He){var Yt=k,zt=I,un=L();return(He||He===0)&&He!==E&&Lt(He),Y===k||un-k>Je?0:(E+(M?zt:-zt))/((M?un:Y)-Yt)*1e3};return{update:Lt,reset:xt,getVelocity:Fe}},$=function(g,R){return R&&!g._gsapAllow&&g.preventDefault(),g.changedTouches?g.changedTouches[0]:g},le=function(g){var R=Math.max.apply(Math,g),M=Math.min.apply(Math,g);return Math.abs(R)>=Math.abs(M)?R:M},ye=function(){m=s.core.globals().ScrollTrigger,m&&m.core&&b()},Ie=function(g){return s=g||w(),!o&&s&&typeof document<"u"&&document.body&&(a=window,l=document,c=l.documentElement,u=l.body,_=[a,l,c,u],s.utils.clamp,h=s.core.context||function(){},f="onpointerenter"in u?"pointer":"mouse",d=xe.isTouch=a.matchMedia&&a.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in a||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,p=xe.eventTypes=("ontouchstart"in c?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in c?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return S=0},500),ye(),o=1),o};J.op=j,U.cache=0;var xe=function(){function B(R){this.init(R)}var g=B.prototype;return g.init=function(M){o||Ie(s)||console.warn("Please gsap.registerPlugin(Observer)"),m||ye();var E=M.tolerance,I=M.dragMinimum,Y=M.type,k=M.target,Se=M.lineHeight,Je=M.debounce,Lt=M.preventDefault,xt=M.onStop,Fe=M.onStopDelay,oe=M.ignore,He=M.wheelSpeed,Yt=M.event,zt=M.onDragStart,un=M.onDragEnd,Wt=M.onDrag,An=M.onPress,lt=M.onRelease,ci=M.onRight,Vt=M.onLeft,Qe=M.onUp,Gn=M.onDown,Jn=M.onChangeX,Ne=M.onChangeY,wn=M.onChange,$e=M.onToggleX,Hi=M.onToggleY,hn=M.onHover,Wn=M.onHoverEnd,Xn=M.onMove,Nt=M.ignoreCheck,tn=M.isNormalizer,nn=M.onGestureStart,z=M.onGestureEnd,fn=M.onWheel,Lr=M.onEnable,ar=M.onDisable,ui=M.onClick,ki=M.scrollSpeed,qn=M.capture,rn=M.allowClicks,Yn=M.lockAxis,In=M.onLockAxis;this.target=k=ie(k)||c,this.vars=M,oe&&(oe=s.utils.toArray(oe)),E=E||1e-9,I=I||0,He=He||1,ki=ki||1,Y=Y||"wheel,touch,pointer",Je=Je!==!1,Se||(Se=parseFloat(a.getComputedStyle(u).lineHeight)||22);var or,jn,vi,Et,Zt,Qn,ni,Z=this,ii=0,Vi=0,lr=M.passive||!Lt,sn=ce(k,J),cr=ce(k,j),Dr=sn(),es=cr(),Mn=~Y.indexOf("touch")&&!~Y.indexOf("pointer")&&p[0]==="pointerdown",ur=K(k),Jt=k.ownerDocument||l,xi=[0,0,0],hi=[0,0,0],Gi=0,Ws=function(){return Gi=L()},an=function(We,Tt){return(Z.event=We)&&oe&&~oe.indexOf(We.target)||Tt&&Mn&&We.pointerType!=="touch"||Nt&&Nt(We,Tt)},Ra=function(){Z._vx.reset(),Z._vy.reset(),jn.pause(),xt&&xt(Z)},hr=function(){var We=Z.deltaX=le(xi),Tt=Z.deltaY=le(hi),Me=Math.abs(We)>=E,at=Math.abs(Tt)>=E;wn&&(Me||at)&&wn(Z,We,Tt,xi,hi),Me&&(ci&&Z.deltaX>0&&ci(Z),Vt&&Z.deltaX<0&&Vt(Z),Jn&&Jn(Z),$e&&Z.deltaX<0!=ii<0&&$e(Z),ii=Z.deltaX,xi[0]=xi[1]=xi[2]=0),at&&(Gn&&Z.deltaY>0&&Gn(Z),Qe&&Z.deltaY<0&&Qe(Z),Ne&&Ne(Z),Hi&&Z.deltaY<0!=Vi<0&&Hi(Z),Vi=Z.deltaY,hi[0]=hi[1]=hi[2]=0),(Et||vi)&&(Xn&&Xn(Z),vi&&(Wt(Z),vi=!1),Et=!1),Qn&&!(Qn=!1)&&In&&In(Z),Zt&&(fn(Z),Zt=!1),or=0},ts=function(We,Tt,Me){xi[Me]+=We,hi[Me]+=Tt,Z._vx.update(We),Z._vy.update(Tt),Je?or||(or=requestAnimationFrame(hr)):hr()},ns=function(We,Tt){Yn&&!ni&&(Z.axis=ni=Math.abs(We)>Math.abs(Tt)?"x":"y",Qn=!0),ni!=="y"&&(xi[2]+=We,Z._vx.update(We,!0)),ni!=="x"&&(hi[2]+=Tt,Z._vy.update(Tt,!0)),Je?or||(or=requestAnimationFrame(hr)):hr()},fr=function(We){if(!an(We,1)){We=$(We,Lt);var Tt=We.clientX,Me=We.clientY,at=Tt-Z.x,ke=Me-Z.y,it=Z.isDragging;Z.x=Tt,Z.y=Me,(it||Math.abs(Z.startX-Tt)>=I||Math.abs(Z.startY-Me)>=I)&&(Wt&&(vi=!0),it||(Z.isDragging=!0),ns(at,ke),it||zt&&zt(Z))}},Ur=Z.onPress=function(st){an(st,1)||st&&st.button||(Z.axis=ni=null,jn.pause(),Z.isPressed=!0,st=$(st),ii=Vi=0,Z.startX=Z.x=st.clientX,Z.startY=Z.y=st.clientY,Z._vx.reset(),Z._vy.reset(),te(tn?k:Jt,p[1],fr,lr,!0),Z.deltaX=Z.deltaY=0,An&&An(Z))},mt=Z.onRelease=function(st){if(!an(st,1)){fe(tn?k:Jt,p[1],fr,!0);var We=!isNaN(Z.y-Z.startY),Tt=Z.isDragging,Me=Tt&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),at=$(st);!Me&&We&&(Z._vx.reset(),Z._vy.reset(),Lt&&rn&&s.delayedCall(.08,function(){if(L()-Gi>300&&!st.defaultPrevented){if(st.target.click)st.target.click();else if(Jt.createEvent){var ke=Jt.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,a,1,at.screenX,at.screenY,at.clientX,at.clientY,!1,!1,!1,!1,0,null),st.target.dispatchEvent(ke)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,xt&&Tt&&!tn&&jn.restart(!0),un&&Tt&&un(Z),lt&&lt(Z,Me)}},Ir=function(We){return We.touches&&We.touches.length>1&&(Z.isGesturing=!0)&&nn(We,Z.isDragging)},Mi=function(){return(Z.isGesturing=!1)||z(Z)},Si=function(We){if(!an(We)){var Tt=sn(),Me=cr();ts((Tt-Dr)*ki,(Me-es)*ki,1),Dr=Tt,es=Me,xt&&jn.restart(!0)}},yi=function(We){if(!an(We)){We=$(We,Lt),fn&&(Zt=!0);var Tt=(We.deltaMode===1?Se:We.deltaMode===2?a.innerHeight:1)*He;ts(We.deltaX*Tt,We.deltaY*Tt,0),xt&&!tn&&jn.restart(!0)}},Nr=function(We){if(!an(We)){var Tt=We.clientX,Me=We.clientY,at=Tt-Z.x,ke=Me-Z.y;Z.x=Tt,Z.y=Me,Et=!0,xt&&jn.restart(!0),(at||ke)&&ns(at,ke)}},is=function(We){Z.event=We,hn(Z)},Wi=function(We){Z.event=We,Wn(Z)},Xs=function(We){return an(We)||$(We,Lt)&&ui(Z)};jn=Z._dc=s.delayedCall(Fe||.25,Ra).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Te(0,50,!0),Z._vy=Te(0,50,!0),Z.scrollX=sn,Z.scrollY=cr,Z.isDragging=Z.isGesturing=Z.isPressed=!1,h(this),Z.enable=function(st){return Z.isEnabled||(te(ur?Jt:k,"scroll",Q),Y.indexOf("scroll")>=0&&te(ur?Jt:k,"scroll",Si,lr,qn),Y.indexOf("wheel")>=0&&te(k,"wheel",yi,lr,qn),(Y.indexOf("touch")>=0&&d||Y.indexOf("pointer")>=0)&&(te(k,p[0],Ur,lr,qn),te(Jt,p[2],mt),te(Jt,p[3],mt),rn&&te(k,"click",Ws,!0,!0),ui&&te(k,"click",Xs),nn&&te(Jt,"gesturestart",Ir),z&&te(Jt,"gestureend",Mi),hn&&te(k,f+"enter",is),Wn&&te(k,f+"leave",Wi),Xn&&te(k,f+"move",Nr)),Z.isEnabled=!0,st&&st.type&&Ur(st),Lr&&Lr(Z)),Z},Z.disable=function(){Z.isEnabled&&(D.filter(function(st){return st!==Z&&K(st.target)}).length||fe(ur?Jt:k,"scroll",Q),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),fe(tn?k:Jt,p[1],fr,!0)),fe(ur?Jt:k,"scroll",Si,qn),fe(k,"wheel",yi,qn),fe(k,p[0],Ur,qn),fe(Jt,p[2],mt),fe(Jt,p[3],mt),fe(k,"click",Ws,!0),fe(k,"click",Xs),fe(Jt,"gesturestart",Ir),fe(Jt,"gestureend",Mi),fe(k,f+"enter",is),fe(k,f+"leave",Wi),fe(k,f+"move",Nr),Z.isEnabled=Z.isPressed=Z.isDragging=!1,ar&&ar(Z))},Z.kill=Z.revert=function(){Z.disable();var st=D.indexOf(Z);st>=0&&D.splice(st,1),v===Z&&(v=0)},D.push(Z),tn&&K(k)&&(v=Z),Z.enable(Yt)},r(B,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),B}();xe.version="3.12.5",xe.create=function(B){return new xe(B)},xe.register=Ie,xe.getAll=function(){return D.slice()},xe.getById=function(B){return D.filter(function(g){return g.vars.id===B})[0]},w()&&s.registerPlugin(xe);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var re,qe,me,Ue,H,ot,Oe,Ye,we,bt,Ze,T,x,G,ue,ne,he,De,_e,Ae,Be,rt,ee,St,ct,je,Pe,be,et,gt,Bt,tt,pe,P,ve=1,de=Date.now,Ve=de(),Re=0,yt=0,At=function(g,R,M){var E=y(g)&&(g.substr(0,6)==="clamp("||g.indexOf("max")>-1);return M["_"+R+"Clamp"]=E,E?g.substr(6,g.length-7):g},Kt=function(g,R){return R&&(!y(g)||g.substr(0,6)!=="clamp(")?"clamp("+g+")":g},Tn=function B(){return yt&&requestAnimationFrame(B)},wt=function(){return G=1},gn=function(){return G=0},$t=function(g){return g},rr=function(g){return Math.round(g*1e5)/1e5||0},fa=function(){return typeof window<"u"},br=function(){return re||fa()&&(re=window.gsap)&&re.registerPlugin&&re},Di=function(g){return!!~Oe.indexOf(g)},Ar=function(g){return(g==="Height"?Bt:me["inner"+g])||H["client"+g]||ot["client"+g]},Os=function(g){return A(g,"getBoundingClientRect")||(Di(g)?function(){return ba.width=me.innerWidth,ba.height=Bt,ba}:function(){return bn(g)})},da=function(g,R,M){var E=M.d,I=M.d2,Y=M.a;return(Y=A(g,"getBoundingClientRect"))?function(){return Y()[E]}:function(){return(R?Ar(I):g["client"+I])||0}},bo=function(g,R){return!R||~C.indexOf(g)?Os(g):function(){return ba}},li=function(g,R){var M=R.s,E=R.d2,I=R.d,Y=R.a;return Math.max(0,(M="scroll"+E)&&(Y=A(g,M))?Y()-Os(g)()[I]:Di(g)?(H[M]||ot[M])-Ar(E):g[M]-g["offset"+E])},Zr=function(g,R){for(var M=0;M<_e.length;M+=3)(!R||~R.indexOf(_e[M+1]))&&g(_e[M],_e[M+1],_e[M+2])},y=function(g){return typeof g=="string"},N=function(g){return typeof g=="function"},W=function(g){return typeof g=="number"},X=function(g){return typeof g=="object"},V=function(g,R,M){return g&&g.progress(R?0:1)&&M&&g.pause()},Ee=function(g,R){if(g.enabled){var M=g._ctx?g._ctx.add(function(){return R(g)}):R(g);M&&M.totalTime&&(g.callbackAnimation=M)}},Ce=Math.abs,ze="left",Xe="top",nt="right",Ke="bottom",Ge="width",Rt="height",ln="Right",kt="Left",Hn="Top",Ct="Bottom",Le="padding",Un="margin",Pt="Width",_i="Height",qt="px",_n=function(g){return me.getComputedStyle(g)},Bs=function(g){var R=_n(g).position;g.style.position=R==="absolute"||R==="fixed"?R:"relative"},cn=function(g,R){for(var M in R)M in g||(g[M]=R[M]);return g},bn=function(g,R){var M=R&&_n(g)[ue]!=="matrix(1, 0, 0, 1, 0, 0)"&&re.to(g,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),E=g.getBoundingClientRect();return M&&M.progress(0).kill(),E},sr=function(g,R){var M=R.d2;return g["offset"+M]||g["client"+M]||0},kn=function(g){var R=[],M=g.labels,E=g.duration(),I;for(I in M)R.push(M[I]/E);return R},zs=function(g){return function(R){return re.utils.snap(kn(g),R)}},Hs=function(g){var R=re.utils.snap(g),M=Array.isArray(g)&&g.slice(0).sort(function(E,I){return E-I});return M?function(E,I,Y){Y===void 0&&(Y=.001);var k;if(!I)return R(E);if(I>0){for(E-=Y,k=0;k<M.length;k++)if(M[k]>=E)return M[k];return M[k-1]}else for(k=M.length,E+=Y;k--;)if(M[k]<=E)return M[k];return M[0]}:function(E,I,Y){Y===void 0&&(Y=.001);var k=R(E);return!I||Math.abs(k-E)<Y||k-E<0==I<0?k:R(I<0?E-g:E+g)}},pa=function(g){return function(R,M){return Hs(kn(g))(R,M.direction)}},ma=function(g,R,M,E){return M.split(",").forEach(function(I){return g(R,I,E)})},vn=function(g,R,M,E,I){return g.addEventListener(R,M,{passive:!E,capture:!!I})},xn=function(g,R,M,E){return g.removeEventListener(R,M,!!E)},ga=function(g,R,M){M=M&&M.wheelHandler,M&&(g(R,"wheel",M),g(R,"touchmove",M))},Vl={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_a={toggleActions:"play",anticipatePin:0},va={top:0,left:0,center:.5,bottom:1,right:1},xa=function(g,R){if(y(g)){var M=g.indexOf("="),E=~M?+(g.charAt(M-1)+1)*parseFloat(g.substr(M+1)):0;~M&&(g.indexOf("%")>M&&(E*=R/100),g=g.substr(0,M-1)),g=E+(g in va?va[g]*R:~g.indexOf("%")?parseFloat(g)*R/100:parseFloat(g)||0)}return g},Ma=function(g,R,M,E,I,Y,k,Se){var Je=I.startColor,Lt=I.endColor,xt=I.fontSize,Fe=I.indent,oe=I.fontWeight,He=Ue.createElement("div"),Yt=Di(M)||A(M,"pinType")==="fixed",zt=g.indexOf("scroller")!==-1,un=Yt?ot:M,Wt=g.indexOf("start")!==-1,An=Wt?Je:Lt,lt="border-color:"+An+";font-size:"+xt+";color:"+An+";font-weight:"+oe+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return lt+="position:"+((zt||Se)&&Yt?"fixed;":"absolute;"),(zt||Se||!Yt)&&(lt+=(E===j?nt:Ke)+":"+(Y+parseFloat(Fe))+"px;"),k&&(lt+="box-sizing:border-box;text-align:left;width:"+k.offsetWidth+"px;"),He._isStart=Wt,He.setAttribute("class","gsap-marker-"+g+(R?" marker-"+R:"")),He.style.cssText=lt,He.innerText=R||R===0?g+"-"+R:g,un.children[0]?un.insertBefore(He,un.children[0]):un.appendChild(He),He._offset=He["offset"+E.op.d2],Sa(He,0,E,Wt),He},Sa=function(g,R,M,E){var I={display:"block"},Y=M[E?"os2":"p2"],k=M[E?"p2":"os2"];g._isFlipped=E,I[M.a+"Percent"]=E?-100:0,I[M.a]=E?"1px":0,I["border"+Y+Pt]=1,I["border"+k+Pt]=0,I[M.p]=R+"px",re.set(g,I)},ft=[],Ao={},ks,Gl=function(){return de()-Re>34&&(ks||(ks=requestAnimationFrame(zi)))},Jr=function(){(!ee||!ee.isPressed||ee.startX>ot.clientWidth)&&(U.cache++,ee?ks||(ks=requestAnimationFrame(zi)):zi(),Re||Rr("scrollStart"),Re=de())},wo=function(){je=me.innerWidth,ct=me.innerHeight},Vs=function(){U.cache++,!x&&!rt&&!Ue.fullscreenElement&&!Ue.webkitFullscreenElement&&(!St||je!==me.innerWidth||Math.abs(me.innerHeight-ct)>me.innerHeight*.25)&&Ye.restart(!0)},wr={},Oh=[],Wl=function B(){return xn(pt,"scrollEnd",B)||Pr(!0)},Rr=function(g){return wr[g]&&wr[g].map(function(R){return R()})||Oh},ti=[],Xl=function(g){for(var R=0;R<ti.length;R+=5)(!g||ti[R+4]&&ti[R+4].query===g)&&(ti[R].style.cssText=ti[R+1],ti[R].getBBox&&ti[R].setAttribute("transform",ti[R+2]||""),ti[R+3].uncache=1)},Ro=function(g,R){var M;for(ne=0;ne<ft.length;ne++)M=ft[ne],M&&(!R||M._ctx===R)&&(g?M.kill(1):M.revert(!0,!0));tt=!0,R&&Xl(R),R||Rr("revert")},ql=function(g,R){U.cache++,(R||!Vn)&&U.forEach(function(M){return N(M)&&M.cacheID++&&(M.rec=0)}),y(g)&&(me.history.scrollRestoration=et=g)},Vn,Cr=0,Yl,Bh=function(){if(Yl!==Cr){var g=Yl=Cr;requestAnimationFrame(function(){return g===Cr&&Pr(!0)})}},jl=function(){ot.appendChild(gt),Bt=!ee&&gt.offsetHeight||me.innerHeight,ot.removeChild(gt)},Kl=function(g){return we(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(R){return R.style.display=g?"none":"block"})},Pr=function(g,R){if(Re&&!g&&!tt){vn(pt,"scrollEnd",Wl);return}jl(),Vn=pt.isRefreshing=!0,U.forEach(function(E){return N(E)&&++E.cacheID&&(E.rec=E())});var M=Rr("refreshInit");Ae&&pt.sort(),R||Ro(),U.forEach(function(E){N(E)&&(E.smooth&&(E.target.style.scrollBehavior="auto"),E(0))}),ft.slice(0).forEach(function(E){return E.refresh()}),tt=!1,ft.forEach(function(E){if(E._subPinOffset&&E.pin){var I=E.vars.horizontal?"offsetWidth":"offsetHeight",Y=E.pin[I];E.revert(!0,1),E.adjustPinSpacing(E.pin[I]-Y),E.refresh()}}),pe=1,Kl(!0),ft.forEach(function(E){var I=li(E.scroller,E._dir),Y=E.vars.end==="max"||E._endClamp&&E.end>I,k=E._startClamp&&E.start>=I;(Y||k)&&E.setPositions(k?I-1:E.start,Y?Math.max(k?I:E.start+1,I):E.end,!0)}),Kl(!1),pe=0,M.forEach(function(E){return E&&E.render&&E.render(-1)}),U.forEach(function(E){N(E)&&(E.smooth&&requestAnimationFrame(function(){return E.target.style.scrollBehavior="smooth"}),E.rec&&E(E.rec))}),ql(et,1),Ye.pause(),Cr++,Vn=2,zi(2),ft.forEach(function(E){return N(E.vars.onRefresh)&&E.vars.onRefresh(E)}),Vn=pt.isRefreshing=!1,Rr("refresh")},Co=0,ya=1,Gs,zi=function(g){if(g===2||!Vn&&!tt){pt.isUpdating=!0,Gs&&Gs.update(0);var R=ft.length,M=de(),E=M-Ve>=50,I=R&&ft[0].scroll();if(ya=Co>I?-1:1,Vn||(Co=I),E&&(Re&&!G&&M-Re>200&&(Re=0,Rr("scrollEnd")),Ze=Ve,Ve=M),ya<0){for(ne=R;ne-- >0;)ft[ne]&&ft[ne].update(0,E);ya=1}else for(ne=0;ne<R;ne++)ft[ne]&&ft[ne].update(0,E);pt.isUpdating=!1}ks=0},Po=[ze,Xe,Ke,nt,Un+Ct,Un+ln,Un+Hn,Un+kt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ea=Po.concat([Ge,Rt,"boxSizing","max"+Pt,"max"+_i,"position",Un,Le,Le+Hn,Le+ln,Le+Ct,Le+kt]),zh=function(g,R,M){Qr(M);var E=g._gsap;if(E.spacerIsNative)Qr(E.spacerState);else if(g._gsap.swappedIn){var I=R.parentNode;I&&(I.insertBefore(g,R),I.removeChild(R))}g._gsap.swappedIn=!1},Lo=function(g,R,M,E){if(!g._gsap.swappedIn){for(var I=Po.length,Y=R.style,k=g.style,Se;I--;)Se=Po[I],Y[Se]=M[Se];Y.position=M.position==="absolute"?"absolute":"relative",M.display==="inline"&&(Y.display="inline-block"),k[Ke]=k[nt]="auto",Y.flexBasis=M.flexBasis||"auto",Y.overflow="visible",Y.boxSizing="border-box",Y[Ge]=sr(g,J)+qt,Y[Rt]=sr(g,j)+qt,Y[Le]=k[Un]=k[Xe]=k[ze]="0",Qr(E),k[Ge]=k["max"+Pt]=M[Ge],k[Rt]=k["max"+_i]=M[Rt],k[Le]=M[Le],g.parentNode!==R&&(g.parentNode.insertBefore(R,g),R.appendChild(g)),g._gsap.swappedIn=!0}},Hh=/([A-Z])/g,Qr=function(g){if(g){var R=g.t.style,M=g.length,E=0,I,Y;for((g.t._gsap||re.core.getCache(g.t)).uncache=1;E<M;E+=2)Y=g[E+1],I=g[E],Y?R[I]=Y:R[I]&&R.removeProperty(I.replace(Hh,"-$1").toLowerCase())}},Ta=function(g){for(var R=Ea.length,M=g.style,E=[],I=0;I<R;I++)E.push(Ea[I],M[Ea[I]]);return E.t=g,E},kh=function(g,R,M){for(var E=[],I=g.length,Y=M?8:0,k;Y<I;Y+=2)k=g[Y],E.push(k,k in R?R[k]:g[Y+1]);return E.t=g.t,E},ba={left:0,top:0},$l=function(g,R,M,E,I,Y,k,Se,Je,Lt,xt,Fe,oe,He){N(g)&&(g=g(Se)),y(g)&&g.substr(0,3)==="max"&&(g=Fe+(g.charAt(4)==="="?xa("0"+g.substr(3),M):0));var Yt=oe?oe.time():0,zt,un,Wt;if(oe&&oe.seek(0),isNaN(g)||(g=+g),W(g))oe&&(g=re.utils.mapRange(oe.scrollTrigger.start,oe.scrollTrigger.end,0,Fe,g)),k&&Sa(k,M,E,!0);else{N(R)&&(R=R(Se));var An=(g||"0").split(" "),lt,ci,Vt,Qe;Wt=ie(R,Se)||ot,lt=bn(Wt)||{},(!lt||!lt.left&&!lt.top)&&_n(Wt).display==="none"&&(Qe=Wt.style.display,Wt.style.display="block",lt=bn(Wt),Qe?Wt.style.display=Qe:Wt.style.removeProperty("display")),ci=xa(An[0],lt[E.d]),Vt=xa(An[1]||"0",M),g=lt[E.p]-Je[E.p]-Lt+ci+I-Vt,k&&Sa(k,Vt,E,M-Vt<20||k._isStart&&Vt>20),M-=M-Vt}if(He&&(Se[He]=g||-.001,g<0&&(g=0)),Y){var Gn=g+M,Jn=Y._isStart;zt="scroll"+E.d2,Sa(Y,Gn,E,Jn&&Gn>20||!Jn&&(xt?Math.max(ot[zt],H[zt]):Y.parentNode[zt])<=Gn+1),xt&&(Je=bn(k),xt&&(Y.style[E.op.p]=Je[E.op.p]-E.op.m-Y._offset+qt))}return oe&&Wt&&(zt=bn(Wt),oe.seek(Fe),un=bn(Wt),oe._caScrollDist=zt[E.p]-un[E.p],g=g/oe._caScrollDist*Fe),oe&&oe.seek(Yt),oe?g:Math.round(g)},Vh=/(webkit|moz|length|cssText|inset)/i,Zl=function(g,R,M,E){if(g.parentNode!==R){var I=g.style,Y,k;if(R===ot){g._stOrig=I.cssText,k=_n(g);for(Y in k)!+Y&&!Vh.test(Y)&&k[Y]&&typeof I[Y]=="string"&&Y!=="0"&&(I[Y]=k[Y]);I.top=M,I.left=E}else I.cssText=g._stOrig;re.core.getCache(g).uncache=1,R.appendChild(g)}},Jl=function(g,R,M){var E=R,I=E;return function(Y){var k=Math.round(g());return k!==E&&k!==I&&Math.abs(k-E)>3&&Math.abs(k-I)>3&&(Y=k,M&&M()),I=E,E=Y,Y}},Aa=function(g,R,M){var E={};E[R.p]="+="+M,re.set(g,E)},Ql=function(g,R){var M=ce(g,R),E="_scroll"+R.p2,I=function Y(k,Se,Je,Lt,xt){var Fe=Y.tween,oe=Se.onComplete,He={};Je=Je||M();var Yt=Jl(M,Je,function(){Fe.kill(),Y.tween=0});return xt=Lt&&xt||0,Lt=Lt||k-Je,Fe&&Fe.kill(),Se[E]=k,Se.inherit=!1,Se.modifiers=He,He[E]=function(){return Yt(Je+Lt*Fe.ratio+xt*Fe.ratio*Fe.ratio)},Se.onUpdate=function(){U.cache++,Y.tween&&zi()},Se.onComplete=function(){Y.tween=0,oe&&oe.call(Fe)},Fe=Y.tween=re.to(g,Se),Fe};return g[E]=M,M.wheelHandler=function(){return I.tween&&I.tween.kill()&&(I.tween=0)},vn(g,"wheel",M.wheelHandler),pt.isTouch&&vn(g,"touchmove",M.wheelHandler),I},pt=function(){function B(R,M){qe||B.register(re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),be(this),this.init(R,M)}var g=B.prototype;return g.init=function(M,E){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yt){this.update=this.refresh=this.kill=$t;return}M=cn(y(M)||W(M)||M.nodeType?{trigger:M}:M,_a);var I=M,Y=I.onUpdate,k=I.toggleClass,Se=I.id,Je=I.onToggle,Lt=I.onRefresh,xt=I.scrub,Fe=I.trigger,oe=I.pin,He=I.pinSpacing,Yt=I.invalidateOnRefresh,zt=I.anticipatePin,un=I.onScrubComplete,Wt=I.onSnapComplete,An=I.once,lt=I.snap,ci=I.pinReparent,Vt=I.pinSpacer,Qe=I.containerAnimation,Gn=I.fastScrollEnd,Jn=I.preventOverlaps,Ne=M.horizontal||M.containerAnimation&&M.horizontal!==!1?J:j,wn=!xt&&xt!==0,$e=ie(M.scroller||me),Hi=re.core.getCache($e),hn=Di($e),Wn=("pinType"in M?M.pinType:A($e,"pinType")||hn&&"fixed")==="fixed",Xn=[M.onEnter,M.onLeave,M.onEnterBack,M.onLeaveBack],Nt=wn&&M.toggleActions.split(" "),tn="markers"in M?M.markers:_a.markers,nn=hn?0:parseFloat(_n($e)["border"+Ne.p2+Pt])||0,z=this,fn=M.onRefreshInit&&function(){return M.onRefreshInit(z)},Lr=da($e,hn,Ne),ar=bo($e,hn),ui=0,ki=0,qn=0,rn=ce($e,Ne),Yn,In,or,jn,vi,Et,Zt,Qn,ni,Z,ii,Vi,lr,sn,cr,Dr,es,Mn,ur,Jt,xi,hi,Gi,Ws,an,Ra,hr,ts,ns,fr,Ur,mt,Ir,Mi,Si,yi,Nr,is,Wi;if(z._startClamp=z._endClamp=!1,z._dir=Ne,zt*=45,z.scroller=$e,z.scroll=Qe?Qe.time.bind(Qe):rn,jn=rn(),z.vars=M,E=E||M.animation,"refreshPriority"in M&&(Ae=1,M.refreshPriority===-9999&&(Gs=z)),Hi.tweenScroll=Hi.tweenScroll||{top:Ql($e,j),left:Ql($e,J)},z.tweenTo=Yn=Hi.tweenScroll[Ne.p],z.scrubDuration=function(Me){Ir=W(Me)&&Me,Ir?mt?mt.duration(Me):mt=re.to(E,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ir,paused:!0,onComplete:function(){return un&&un(z)}}):(mt&&mt.progress(1).kill(),mt=0)},E&&(E.vars.lazy=!1,E._initted&&!z.isReverted||E.vars.immediateRender!==!1&&M.immediateRender!==!1&&E.duration()&&E.render(0,!0,!0),z.animation=E.pause(),E.scrollTrigger=z,z.scrubDuration(xt),fr=0,Se||(Se=E.vars.id)),lt&&((!X(lt)||lt.push)&&(lt={snapTo:lt}),"scrollBehavior"in ot.style&&re.set(hn?[ot,H]:$e,{scrollBehavior:"auto"}),U.forEach(function(Me){return N(Me)&&Me.target===(hn?Ue.scrollingElement||H:$e)&&(Me.smooth=!1)}),or=N(lt.snapTo)?lt.snapTo:lt.snapTo==="labels"?zs(E):lt.snapTo==="labelsDirectional"?pa(E):lt.directional!==!1?function(Me,at){return Hs(lt.snapTo)(Me,de()-ki<500?0:at.direction)}:re.utils.snap(lt.snapTo),Mi=lt.duration||{min:.1,max:2},Mi=X(Mi)?bt(Mi.min,Mi.max):bt(Mi,Mi),Si=re.delayedCall(lt.delay||Ir/2||.1,function(){var Me=rn(),at=de()-ki<500,ke=Yn.tween;if((at||Math.abs(z.getVelocity())<10)&&!ke&&!G&&ui!==Me){var it=(Me-Et)/sn,Sn=E&&!wn?E.totalProgress():it,_t=at?0:(Sn-Ur)/(de()-Ze)*1e3||0,Qt=re.utils.clamp(-it,1-it,Ce(_t/2)*_t/.185),Nn=it+(lt.inertia===!1?0:Qt),jt,Gt,Ft=lt,Ei=Ft.onStart,Xt=Ft.onInterrupt,ri=Ft.onComplete;if(jt=or(Nn,z),W(jt)||(jt=Nn),Gt=Math.round(Et+jt*sn),Me<=Zt&&Me>=Et&&Gt!==Me){if(ke&&!ke._initted&&ke.data<=Ce(Gt-Me))return;lt.inertia===!1&&(Qt=jt-it),Yn(Gt,{duration:Mi(Ce(Math.max(Ce(Nn-Sn),Ce(jt-Sn))*.185/_t/.05||0)),ease:lt.ease||"power3",data:Ce(Gt-Me),onInterrupt:function(){return Si.restart(!0)&&Xt&&Xt(z)},onComplete:function(){z.update(),ui=rn(),E&&(mt?mt.resetTo("totalProgress",jt,E._tTime/E._tDur):E.progress(jt)),fr=Ur=E&&!wn?E.totalProgress():z.progress,Wt&&Wt(z),ri&&ri(z)}},Me,Qt*sn,Gt-Me-Qt*sn),Ei&&Ei(z,Yn.tween)}}else z.isActive&&ui!==Me&&Si.restart(!0)}).pause()),Se&&(Ao[Se]=z),Fe=z.trigger=ie(Fe||oe!==!0&&oe),Wi=Fe&&Fe._gsap&&Fe._gsap.stRevert,Wi&&(Wi=Wi(z)),oe=oe===!0?Fe:ie(oe),y(k)&&(k={targets:Fe,className:k}),oe&&(He===!1||He===Un||(He=!He&&oe.parentNode&&oe.parentNode.style&&_n(oe.parentNode).display==="flex"?!1:Le),z.pin=oe,In=re.core.getCache(oe),In.spacer?cr=In.pinState:(Vt&&(Vt=ie(Vt),Vt&&!Vt.nodeType&&(Vt=Vt.current||Vt.nativeElement),In.spacerIsNative=!!Vt,Vt&&(In.spacerState=Ta(Vt))),In.spacer=Mn=Vt||Ue.createElement("div"),Mn.classList.add("pin-spacer"),Se&&Mn.classList.add("pin-spacer-"+Se),In.pinState=cr=Ta(oe)),M.force3D!==!1&&re.set(oe,{force3D:!0}),z.spacer=Mn=In.spacer,ns=_n(oe),Ws=ns[He+Ne.os2],Jt=re.getProperty(oe),xi=re.quickSetter(oe,Ne.a,qt),Lo(oe,Mn,ns),es=Ta(oe)),tn){Vi=X(tn)?cn(tn,Vl):Vl,Z=Ma("scroller-start",Se,$e,Ne,Vi,0),ii=Ma("scroller-end",Se,$e,Ne,Vi,0,Z),ur=Z["offset"+Ne.op.d2];var Xs=ie(A($e,"content")||$e);Qn=this.markerStart=Ma("start",Se,Xs,Ne,Vi,ur,0,Qe),ni=this.markerEnd=Ma("end",Se,Xs,Ne,Vi,ur,0,Qe),Qe&&(is=re.quickSetter([Qn,ni],Ne.a,qt)),!Wn&&!(C.length&&A($e,"fixedMarkers")===!0)&&(Bs(hn?ot:$e),re.set([Z,ii],{force3D:!0}),Ra=re.quickSetter(Z,Ne.a,qt),ts=re.quickSetter(ii,Ne.a,qt))}if(Qe){var st=Qe.vars.onUpdate,We=Qe.vars.onUpdateParams;Qe.eventCallback("onUpdate",function(){z.update(0,0,1),st&&st.apply(Qe,We||[])})}if(z.previous=function(){return ft[ft.indexOf(z)-1]},z.next=function(){return ft[ft.indexOf(z)+1]},z.revert=function(Me,at){if(!at)return z.kill(!0);var ke=Me!==!1||!z.enabled,it=x;ke!==z.isReverted&&(ke&&(yi=Math.max(rn(),z.scroll.rec||0),qn=z.progress,Nr=E&&E.progress()),Qn&&[Qn,ni,Z,ii].forEach(function(Sn){return Sn.style.display=ke?"none":"block"}),ke&&(x=z,z.update(ke)),oe&&(!ci||!z.isActive)&&(ke?zh(oe,Mn,cr):Lo(oe,Mn,_n(oe),an)),ke||z.update(ke),x=it,z.isReverted=ke)},z.refresh=function(Me,at,ke,it){if(!((x||!z.enabled)&&!at)){if(oe&&Me&&Re){vn(B,"scrollEnd",Wl);return}!Vn&&fn&&fn(z),x=z,Yn.tween&&!ke&&(Yn.tween.kill(),Yn.tween=0),mt&&mt.pause(),Yt&&E&&E.revert({kill:!1}).invalidate(),z.isReverted||z.revert(!0,!0),z._subPinOffset=!1;var Sn=Lr(),_t=ar(),Qt=Qe?Qe.duration():li($e,Ne),Nn=sn<=.01,jt=0,Gt=it||0,Ft=X(ke)?ke.end:M.end,Ei=M.endTrigger||Fe,Xt=X(ke)?ke.start:M.start||(M.start===0||!Fe?0:oe?"0 0":"0 100%"),ri=z.pinnedContainer=M.pinnedContainer&&ie(M.pinnedContainer,z),Ui=Fe&&Math.max(0,ft.indexOf(z))||0,Rn=Ui,Cn,Fn,Fr,Ca,On,dn,Ii,Uo,rc,qs,Ni,Ys,Pa;for(tn&&X(ke)&&(Ys=re.getProperty(Z,Ne.p),Pa=re.getProperty(ii,Ne.p));Rn--;)dn=ft[Rn],dn.end||dn.refresh(0,1)||(x=z),Ii=dn.pin,Ii&&(Ii===Fe||Ii===oe||Ii===ri)&&!dn.isReverted&&(qs||(qs=[]),qs.unshift(dn),dn.revert(!0,!0)),dn!==ft[Rn]&&(Ui--,Rn--);for(N(Xt)&&(Xt=Xt(z)),Xt=At(Xt,"start",z),Et=$l(Xt,Fe,Sn,Ne,rn(),Qn,Z,z,_t,nn,Wn,Qt,Qe,z._startClamp&&"_startClamp")||(oe?-.001:0),N(Ft)&&(Ft=Ft(z)),y(Ft)&&!Ft.indexOf("+=")&&(~Ft.indexOf(" ")?Ft=(y(Xt)?Xt.split(" ")[0]:"")+Ft:(jt=xa(Ft.substr(2),Sn),Ft=y(Xt)?Xt:(Qe?re.utils.mapRange(0,Qe.duration(),Qe.scrollTrigger.start,Qe.scrollTrigger.end,Et):Et)+jt,Ei=Fe)),Ft=At(Ft,"end",z),Zt=Math.max(Et,$l(Ft||(Ei?"100% 0":Qt),Ei,Sn,Ne,rn()+jt,ni,ii,z,_t,nn,Wn,Qt,Qe,z._endClamp&&"_endClamp"))||-.001,jt=0,Rn=Ui;Rn--;)dn=ft[Rn],Ii=dn.pin,Ii&&dn.start-dn._pinPush<=Et&&!Qe&&dn.end>0&&(Cn=dn.end-(z._startClamp?Math.max(0,dn.start):dn.start),(Ii===Fe&&dn.start-dn._pinPush<Et||Ii===ri)&&isNaN(Xt)&&(jt+=Cn*(1-dn.progress)),Ii===oe&&(Gt+=Cn));if(Et+=jt,Zt+=jt,z._startClamp&&(z._startClamp+=jt),z._endClamp&&!Vn&&(z._endClamp=Zt||-.001,Zt=Math.min(Zt,li($e,Ne))),sn=Zt-Et||(Et-=.01)&&.001,Nn&&(qn=re.utils.clamp(0,1,re.utils.normalize(Et,Zt,yi))),z._pinPush=Gt,Qn&&jt&&(Cn={},Cn[Ne.a]="+="+jt,ri&&(Cn[Ne.p]="-="+rn()),re.set([Qn,ni],Cn)),oe&&!(pe&&z.end>=li($e,Ne)))Cn=_n(oe),Ca=Ne===j,Fr=rn(),hi=parseFloat(Jt(Ne.a))+Gt,!Qt&&Zt>1&&(Ni=(hn?Ue.scrollingElement||H:$e).style,Ni={style:Ni,value:Ni["overflow"+Ne.a.toUpperCase()]},hn&&_n(ot)["overflow"+Ne.a.toUpperCase()]!=="scroll"&&(Ni.style["overflow"+Ne.a.toUpperCase()]="scroll")),Lo(oe,Mn,Cn),es=Ta(oe),Fn=bn(oe,!0),Uo=Wn&&ce($e,Ca?J:j)(),He?(an=[He+Ne.os2,sn+Gt+qt],an.t=Mn,Rn=He===Le?sr(oe,Ne)+sn+Gt:0,Rn&&(an.push(Ne.d,Rn+qt),Mn.style.flexBasis!=="auto"&&(Mn.style.flexBasis=Rn+qt)),Qr(an),ri&&ft.forEach(function(js){js.pin===ri&&js.vars.pinSpacing!==!1&&(js._subPinOffset=!0)}),Wn&&rn(yi)):(Rn=sr(oe,Ne),Rn&&Mn.style.flexBasis!=="auto"&&(Mn.style.flexBasis=Rn+qt)),Wn&&(On={top:Fn.top+(Ca?Fr-Et:Uo)+qt,left:Fn.left+(Ca?Uo:Fr-Et)+qt,boxSizing:"border-box",position:"fixed"},On[Ge]=On["max"+Pt]=Math.ceil(Fn.width)+qt,On[Rt]=On["max"+_i]=Math.ceil(Fn.height)+qt,On[Un]=On[Un+Hn]=On[Un+ln]=On[Un+Ct]=On[Un+kt]="0",On[Le]=Cn[Le],On[Le+Hn]=Cn[Le+Hn],On[Le+ln]=Cn[Le+ln],On[Le+Ct]=Cn[Le+Ct],On[Le+kt]=Cn[Le+kt],Dr=kh(cr,On,ci),Vn&&rn(0)),E?(rc=E._initted,Be(1),E.render(E.duration(),!0,!0),Gi=Jt(Ne.a)-hi+sn+Gt,hr=Math.abs(sn-Gi)>1,Wn&&hr&&Dr.splice(Dr.length-2,2),E.render(0,!0,!0),rc||E.invalidate(!0),E.parent||E.totalTime(E.totalTime()),Be(0)):Gi=sn,Ni&&(Ni.value?Ni.style["overflow"+Ne.a.toUpperCase()]=Ni.value:Ni.style.removeProperty("overflow-"+Ne.a));else if(Fe&&rn()&&!Qe)for(Fn=Fe.parentNode;Fn&&Fn!==ot;)Fn._pinOffset&&(Et-=Fn._pinOffset,Zt-=Fn._pinOffset),Fn=Fn.parentNode;qs&&qs.forEach(function(js){return js.revert(!1,!0)}),z.start=Et,z.end=Zt,jn=vi=Vn?yi:rn(),!Qe&&!Vn&&(jn<yi&&rn(yi),z.scroll.rec=0),z.revert(!1,!0),ki=de(),Si&&(ui=-1,Si.restart(!0)),x=0,E&&wn&&(E._initted||Nr)&&E.progress()!==Nr&&E.progress(Nr||0,!0).render(E.time(),!0,!0),(Nn||qn!==z.progress||Qe||Yt)&&(E&&!wn&&E.totalProgress(Qe&&Et<-.001&&!qn?re.utils.normalize(Et,Zt,0):qn,!0),z.progress=Nn||(jn-Et)/sn===qn?0:qn),oe&&He&&(Mn._pinOffset=Math.round(z.progress*Gi)),mt&&mt.invalidate(),isNaN(Ys)||(Ys-=re.getProperty(Z,Ne.p),Pa-=re.getProperty(ii,Ne.p),Aa(Z,Ne,Ys),Aa(Qn,Ne,Ys-(it||0)),Aa(ii,Ne,Pa),Aa(ni,Ne,Pa-(it||0))),Nn&&!Vn&&z.update(),Lt&&!Vn&&!lr&&(lr=!0,Lt(z),lr=!1)}},z.getVelocity=function(){return(rn()-vi)/(de()-Ze)*1e3||0},z.endAnimation=function(){V(z.callbackAnimation),E&&(mt?mt.progress(1):E.paused()?wn||V(E,z.direction<0,1):V(E,E.reversed()))},z.labelToScroll=function(Me){return E&&E.labels&&(Et||z.refresh()||Et)+E.labels[Me]/E.duration()*sn||0},z.getTrailing=function(Me){var at=ft.indexOf(z),ke=z.direction>0?ft.slice(0,at).reverse():ft.slice(at+1);return(y(Me)?ke.filter(function(it){return it.vars.preventOverlaps===Me}):ke).filter(function(it){return z.direction>0?it.end<=Et:it.start>=Zt})},z.update=function(Me,at,ke){if(!(Qe&&!ke&&!Me)){var it=Vn===!0?yi:z.scroll(),Sn=Me?0:(it-Et)/sn,_t=Sn<0?0:Sn>1?1:Sn||0,Qt=z.progress,Nn,jt,Gt,Ft,Ei,Xt,ri,Ui;if(at&&(vi=jn,jn=Qe?rn():it,lt&&(Ur=fr,fr=E&&!wn?E.totalProgress():_t)),zt&&oe&&!x&&!ve&&Re&&(!_t&&Et<it+(it-vi)/(de()-Ze)*zt?_t=1e-4:_t===1&&Zt>it+(it-vi)/(de()-Ze)*zt&&(_t=.9999)),_t!==Qt&&z.enabled){if(Nn=z.isActive=!!_t&&_t<1,jt=!!Qt&&Qt<1,Xt=Nn!==jt,Ei=Xt||!!_t!=!!Qt,z.direction=_t>Qt?1:-1,z.progress=_t,Ei&&!x&&(Gt=_t&&!Qt?0:_t===1?1:Qt===1?2:3,wn&&(Ft=!Xt&&Nt[Gt+1]!=="none"&&Nt[Gt+1]||Nt[Gt],Ui=E&&(Ft==="complete"||Ft==="reset"||Ft in E))),Jn&&(Xt||Ui)&&(Ui||xt||!E)&&(N(Jn)?Jn(z):z.getTrailing(Jn).forEach(function(Fr){return Fr.endAnimation()})),wn||(mt&&!x&&!ve?(mt._dp._time-mt._start!==mt._time&&mt.render(mt._dp._time-mt._start),mt.resetTo?mt.resetTo("totalProgress",_t,E._tTime/E._tDur):(mt.vars.totalProgress=_t,mt.invalidate().restart())):E&&E.totalProgress(_t,!!(x&&(ki||Me)))),oe){if(Me&&He&&(Mn.style[He+Ne.os2]=Ws),!Wn)xi(rr(hi+Gi*_t));else if(Ei){if(ri=!Me&&_t>Qt&&Zt+1>it&&it+1>=li($e,Ne),ci)if(!Me&&(Nn||ri)){var Rn=bn(oe,!0),Cn=it-Et;Zl(oe,ot,Rn.top+(Ne===j?Cn:0)+qt,Rn.left+(Ne===j?0:Cn)+qt)}else Zl(oe,Mn);Qr(Nn||ri?Dr:es),hr&&_t<1&&Nn||xi(hi+(_t===1&&!ri?Gi:0))}}lt&&!Yn.tween&&!x&&!ve&&Si.restart(!0),k&&(Xt||An&&_t&&(_t<1||!P))&&we(k.targets).forEach(function(Fr){return Fr.classList[Nn||An?"add":"remove"](k.className)}),Y&&!wn&&!Me&&Y(z),Ei&&!x?(wn&&(Ui&&(Ft==="complete"?E.pause().totalProgress(1):Ft==="reset"?E.restart(!0).pause():Ft==="restart"?E.restart(!0):E[Ft]()),Y&&Y(z)),(Xt||!P)&&(Je&&Xt&&Ee(z,Je),Xn[Gt]&&Ee(z,Xn[Gt]),An&&(_t===1?z.kill(!1,1):Xn[Gt]=0),Xt||(Gt=_t===1?1:3,Xn[Gt]&&Ee(z,Xn[Gt]))),Gn&&!Nn&&Math.abs(z.getVelocity())>(W(Gn)?Gn:2500)&&(V(z.callbackAnimation),mt?mt.progress(1):V(E,Ft==="reverse"?1:!_t,1))):wn&&Y&&!x&&Y(z)}if(ts){var Fn=Qe?it/Qe.duration()*(Qe._caScrollDist||0):it;Ra(Fn+(Z._isFlipped?1:0)),ts(Fn)}is&&is(-it/Qe.duration()*(Qe._caScrollDist||0))}},z.enable=function(Me,at){z.enabled||(z.enabled=!0,vn($e,"resize",Vs),hn||vn($e,"scroll",Jr),fn&&vn(B,"refreshInit",fn),Me!==!1&&(z.progress=qn=0,jn=vi=ui=rn()),at!==!1&&z.refresh())},z.getTween=function(Me){return Me&&Yn?Yn.tween:mt},z.setPositions=function(Me,at,ke,it){if(Qe){var Sn=Qe.scrollTrigger,_t=Qe.duration(),Qt=Sn.end-Sn.start;Me=Sn.start+Qt*Me/_t,at=Sn.start+Qt*at/_t}z.refresh(!1,!1,{start:Kt(Me,ke&&!!z._startClamp),end:Kt(at,ke&&!!z._endClamp)},it),z.update()},z.adjustPinSpacing=function(Me){if(an&&Me){var at=an.indexOf(Ne.d)+1;an[at]=parseFloat(an[at])+Me+qt,an[1]=parseFloat(an[1])+Me+qt,Qr(an)}},z.disable=function(Me,at){if(z.enabled&&(Me!==!1&&z.revert(!0,!0),z.enabled=z.isActive=!1,at||mt&&mt.pause(),yi=0,In&&(In.uncache=1),fn&&xn(B,"refreshInit",fn),Si&&(Si.pause(),Yn.tween&&Yn.tween.kill()&&(Yn.tween=0)),!hn)){for(var ke=ft.length;ke--;)if(ft[ke].scroller===$e&&ft[ke]!==z)return;xn($e,"resize",Vs),hn||xn($e,"scroll",Jr)}},z.kill=function(Me,at){z.disable(Me,at),mt&&!at&&mt.kill(),Se&&delete Ao[Se];var ke=ft.indexOf(z);ke>=0&&ft.splice(ke,1),ke===ne&&ya>0&&ne--,ke=0,ft.forEach(function(it){return it.scroller===z.scroller&&(ke=1)}),ke||Vn||(z.scroll.rec=0),E&&(E.scrollTrigger=null,Me&&E.revert({kill:!1}),at||E.kill()),Qn&&[Qn,ni,Z,ii].forEach(function(it){return it.parentNode&&it.parentNode.removeChild(it)}),Gs===z&&(Gs=0),oe&&(In&&(In.uncache=1),ke=0,ft.forEach(function(it){return it.pin===oe&&ke++}),ke||(In.spacer=0)),M.onKill&&M.onKill(z)},ft.push(z),z.enable(!1,!1),Wi&&Wi(z),E&&E.add&&!sn){var Tt=z.update;z.update=function(){z.update=Tt,Et||Zt||z.refresh()},re.delayedCall(.01,z.update),sn=.01,Et=Zt=0}else z.refresh();oe&&Bh()},B.register=function(M){return qe||(re=M||br(),fa()&&window.document&&B.enable(),qe=yt),qe},B.defaults=function(M){if(M)for(var E in M)_a[E]=M[E];return _a},B.disable=function(M,E){yt=0,ft.forEach(function(Y){return Y[E?"kill":"disable"](M)}),xn(me,"wheel",Jr),xn(Ue,"scroll",Jr),clearInterval(T),xn(Ue,"touchcancel",$t),xn(ot,"touchstart",$t),ma(xn,Ue,"pointerdown,touchstart,mousedown",wt),ma(xn,Ue,"pointerup,touchend,mouseup",gn),Ye.kill(),Zr(xn);for(var I=0;I<U.length;I+=3)ga(xn,U[I],U[I+1]),ga(xn,U[I],U[I+2])},B.enable=function(){if(me=window,Ue=document,H=Ue.documentElement,ot=Ue.body,re&&(we=re.utils.toArray,bt=re.utils.clamp,be=re.core.context||$t,Be=re.core.suppressOverwrites||$t,et=me.history.scrollRestoration||"auto",Co=me.pageYOffset,re.core.globals("ScrollTrigger",B),ot)){yt=1,gt=document.createElement("div"),gt.style.height="100vh",gt.style.position="absolute",jl(),Tn(),xe.register(re),B.isTouch=xe.isTouch,Pe=xe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),St=xe.isTouch===1,vn(me,"wheel",Jr),Oe=[me,Ue,H,ot],re.matchMedia?(B.matchMedia=function(Se){var Je=re.matchMedia(),Lt;for(Lt in Se)Je.add(Lt,Se[Lt]);return Je},re.addEventListener("matchMediaInit",function(){return Ro()}),re.addEventListener("matchMediaRevert",function(){return Xl()}),re.addEventListener("matchMedia",function(){Pr(0,1),Rr("matchMedia")}),re.matchMedia("(orientation: portrait)",function(){return wo(),wo})):console.warn("Requires GSAP 3.11.0 or later"),wo(),vn(Ue,"scroll",Jr);var M=ot.style,E=M.borderTopStyle,I=re.core.Animation.prototype,Y,k;for(I.revert||Object.defineProperty(I,"revert",{value:function(){return this.time(-.01,!0)}}),M.borderTopStyle="solid",Y=bn(ot),j.m=Math.round(Y.top+j.sc())||0,J.m=Math.round(Y.left+J.sc())||0,E?M.borderTopStyle=E:M.removeProperty("border-top-style"),T=setInterval(Gl,250),re.delayedCall(.5,function(){return ve=0}),vn(Ue,"touchcancel",$t),vn(ot,"touchstart",$t),ma(vn,Ue,"pointerdown,touchstart,mousedown",wt),ma(vn,Ue,"pointerup,touchend,mouseup",gn),ue=re.utils.checkPrefix("transform"),Ea.push(ue),qe=de(),Ye=re.delayedCall(.2,Pr).pause(),_e=[Ue,"visibilitychange",function(){var Se=me.innerWidth,Je=me.innerHeight;Ue.hidden?(he=Se,De=Je):(he!==Se||De!==Je)&&Vs()},Ue,"DOMContentLoaded",Pr,me,"load",Pr,me,"resize",Vs],Zr(vn),ft.forEach(function(Se){return Se.enable(0,1)}),k=0;k<U.length;k+=3)ga(xn,U[k],U[k+1]),ga(xn,U[k],U[k+2])}},B.config=function(M){"limitCallbacks"in M&&(P=!!M.limitCallbacks);var E=M.syncInterval;E&&clearInterval(T)||(T=E)&&setInterval(Gl,E),"ignoreMobileResize"in M&&(St=B.isTouch===1&&M.ignoreMobileResize),"autoRefreshEvents"in M&&(Zr(xn)||Zr(vn,M.autoRefreshEvents||"none"),rt=(M.autoRefreshEvents+"").indexOf("resize")===-1)},B.scrollerProxy=function(M,E){var I=ie(M),Y=U.indexOf(I),k=Di(I);~Y&&U.splice(Y,k?6:2),E&&(k?C.unshift(me,E,ot,E,H,E):C.unshift(I,E))},B.clearMatchMedia=function(M){ft.forEach(function(E){return E._ctx&&E._ctx.query===M&&E._ctx.kill(!0,!0)})},B.isInViewport=function(M,E,I){var Y=(y(M)?ie(M):M).getBoundingClientRect(),k=Y[I?Ge:Rt]*E||0;return I?Y.right-k>0&&Y.left+k<me.innerWidth:Y.bottom-k>0&&Y.top+k<me.innerHeight},B.positionInViewport=function(M,E,I){y(M)&&(M=ie(M));var Y=M.getBoundingClientRect(),k=Y[I?Ge:Rt],Se=E==null?k/2:E in va?va[E]*k:~E.indexOf("%")?parseFloat(E)*k/100:parseFloat(E)||0;return I?(Y.left+Se)/me.innerWidth:(Y.top+Se)/me.innerHeight},B.killAll=function(M){if(ft.slice(0).forEach(function(I){return I.vars.id!=="ScrollSmoother"&&I.kill()}),M!==!0){var E=wr.killAll||[];wr={},E.forEach(function(I){return I()})}},B}();pt.version="3.12.5",pt.saveStyles=function(B){return B?we(B).forEach(function(g){if(g&&g.style){var R=ti.indexOf(g);R>=0&&ti.splice(R,5),ti.push(g,g.style.cssText,g.getBBox&&g.getAttribute("transform"),re.core.getCache(g),be())}}):ti},pt.revert=function(B,g){return Ro(!B,g)},pt.create=function(B,g){return new pt(B,g)},pt.refresh=function(B){return B?Vs():(qe||pt.register())&&Pr(!0)},pt.update=function(B){return++U.cache&&zi(B===!0?2:0)},pt.clearScrollMemory=ql,pt.maxScroll=function(B,g){return li(B,g?J:j)},pt.getScrollFunc=function(B,g){return ce(ie(B),g?J:j)},pt.getById=function(B){return Ao[B]},pt.getAll=function(){return ft.filter(function(B){return B.vars.id!=="ScrollSmoother"})},pt.isScrolling=function(){return!!Re},pt.snapDirectional=Hs,pt.addEventListener=function(B,g){var R=wr[B]||(wr[B]=[]);~R.indexOf(g)||R.push(g)},pt.removeEventListener=function(B,g){var R=wr[B],M=R&&R.indexOf(g);M>=0&&R.splice(M,1)},pt.batch=function(B,g){var R=[],M={},E=g.interval||.016,I=g.batchMax||1e9,Y=function(Je,Lt){var xt=[],Fe=[],oe=re.delayedCall(E,function(){Lt(xt,Fe),xt=[],Fe=[]}).pause();return function(He){xt.length||oe.restart(!0),xt.push(He.trigger),Fe.push(He),I<=xt.length&&oe.progress(1)}},k;for(k in g)M[k]=k.substr(0,2)==="on"&&N(g[k])&&k!=="onRefreshInit"?Y(k,g[k]):g[k];return N(I)&&(I=I(),vn(pt,"refresh",function(){return I=g.batchMax()})),we(B).forEach(function(Se){var Je={};for(k in M)Je[k]=M[k];Je.trigger=Se,R.push(pt.create(Je))}),R};var ec=function(g,R,M,E){return R>E?g(E):R<0&&g(0),M>E?(E-R)/(M-R):M<0?R/(R-M):1},Do=function B(g,R){R===!0?g.style.removeProperty("touch-action"):g.style.touchAction=R===!0?"auto":R?"pan-"+R+(xe.isTouch?" pinch-zoom":""):"none",g===H&&B(ot,R)},wa={auto:1,scroll:1},Gh=function(g){var R=g.event,M=g.target,E=g.axis,I=(R.changedTouches?R.changedTouches[0]:R).target,Y=I._gsap||re.core.getCache(I),k=de(),Se;if(!Y._isScrollT||k-Y._isScrollT>2e3){for(;I&&I!==ot&&(I.scrollHeight<=I.clientHeight&&I.scrollWidth<=I.clientWidth||!(wa[(Se=_n(I)).overflowY]||wa[Se.overflowX]));)I=I.parentNode;Y._isScroll=I&&I!==M&&!Di(I)&&(wa[(Se=_n(I)).overflowY]||wa[Se.overflowX]),Y._isScrollT=k}(Y._isScroll||E==="x")&&(R.stopPropagation(),R._gsapAllow=!0)},tc=function(g,R,M,E){return xe.create({target:g,capture:!0,debounce:!1,lockAxis:!0,type:R,onWheel:E=E&&Gh,onPress:E,onDrag:E,onScroll:E,onEnable:function(){return M&&vn(Ue,xe.eventTypes[0],ic,!1,!0)},onDisable:function(){return xn(Ue,xe.eventTypes[0],ic,!0)}})},Wh=/(input|label|select|textarea)/i,nc,ic=function(g){var R=Wh.test(g.target.tagName);(R||nc)&&(g._gsapAllow=!0,nc=R)},Xh=function(g){X(g)||(g={}),g.preventDefault=g.isNormalizer=g.allowClicks=!0,g.type||(g.type="wheel,touch"),g.debounce=!!g.debounce,g.id=g.id||"normalizer";var R=g,M=R.normalizeScrollX,E=R.momentum,I=R.allowNestedScroll,Y=R.onRelease,k,Se,Je=ie(g.target)||H,Lt=re.core.globals().ScrollSmoother,xt=Lt&&Lt.get(),Fe=Pe&&(g.content&&ie(g.content)||xt&&g.content!==!1&&!xt.smooth()&&xt.content()),oe=ce(Je,j),He=ce(Je,J),Yt=1,zt=(xe.isTouch&&me.visualViewport?me.visualViewport.scale*me.visualViewport.width:me.outerWidth)/me.innerWidth,un=0,Wt=N(E)?function(){return E(k)}:function(){return E||2.8},An,lt,ci=tc(Je,g.type,!0,I),Vt=function(){return lt=!1},Qe=$t,Gn=$t,Jn=function(){Se=li(Je,j),Gn=bt(Pe?1:0,Se),M&&(Qe=bt(0,li(Je,J))),An=Cr},Ne=function(){Fe._gsap.y=rr(parseFloat(Fe._gsap.y)+oe.offset)+"px",Fe.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(Fe._gsap.y)+", 0, 1)",oe.offset=oe.cacheID=0},wn=function(){if(lt){requestAnimationFrame(Vt);var tn=rr(k.deltaY/2),nn=Gn(oe.v-tn);if(Fe&&nn!==oe.v+oe.offset){oe.offset=nn-oe.v;var z=rr((parseFloat(Fe&&Fe._gsap.y)||0)-oe.offset);Fe.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+z+", 0, 1)",Fe._gsap.y=z+"px",oe.cacheID=U.cache,zi()}return!0}oe.offset&&Ne(),lt=!0},$e,Hi,hn,Wn,Xn=function(){Jn(),$e.isActive()&&$e.vars.scrollY>Se&&(oe()>Se?$e.progress(1)&&oe(Se):$e.resetTo("scrollY",Se))};return Fe&&re.set(Fe,{y:"+=0"}),g.ignoreCheck=function(Nt){return Pe&&Nt.type==="touchmove"&&wn()||Yt>1.05&&Nt.type!=="touchstart"||k.isGesturing||Nt.touches&&Nt.touches.length>1},g.onPress=function(){lt=!1;var Nt=Yt;Yt=rr((me.visualViewport&&me.visualViewport.scale||1)/zt),$e.pause(),Nt!==Yt&&Do(Je,Yt>1.01?!0:M?!1:"x"),Hi=He(),hn=oe(),Jn(),An=Cr},g.onRelease=g.onGestureStart=function(Nt,tn){if(oe.offset&&Ne(),!tn)Wn.restart(!0);else{U.cache++;var nn=Wt(),z,fn;M&&(z=He(),fn=z+nn*.05*-Nt.velocityX/.227,nn*=ec(He,z,fn,li(Je,J)),$e.vars.scrollX=Qe(fn)),z=oe(),fn=z+nn*.05*-Nt.velocityY/.227,nn*=ec(oe,z,fn,li(Je,j)),$e.vars.scrollY=Gn(fn),$e.invalidate().duration(nn).play(.01),(Pe&&$e.vars.scrollY>=Se||z>=Se-1)&&re.to({},{onUpdate:Xn,duration:nn})}Y&&Y(Nt)},g.onWheel=function(){$e._ts&&$e.pause(),de()-un>1e3&&(An=0,un=de())},g.onChange=function(Nt,tn,nn,z,fn){if(Cr!==An&&Jn(),tn&&M&&He(Qe(z[2]===tn?Hi+(Nt.startX-Nt.x):He()+tn-z[1])),nn){oe.offset&&Ne();var Lr=fn[2]===nn,ar=Lr?hn+Nt.startY-Nt.y:oe()+nn-fn[1],ui=Gn(ar);Lr&&ar!==ui&&(hn+=ui-ar),oe(ui)}(nn||tn)&&zi()},g.onEnable=function(){Do(Je,M?!1:"x"),pt.addEventListener("refresh",Xn),vn(me,"resize",Xn),oe.smooth&&(oe.target.style.scrollBehavior="auto",oe.smooth=He.smooth=!1),ci.enable()},g.onDisable=function(){Do(Je,!0),xn(me,"resize",Xn),pt.removeEventListener("refresh",Xn),ci.kill()},g.lockAxis=g.lockAxis!==!1,k=new xe(g),k.iOS=Pe,Pe&&!oe()&&oe(1),Pe&&re.ticker.add($t),Wn=k._dc,$e=re.to(k,{ease:"power4",paused:!0,inherit:!1,scrollX:M?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Jl(oe,oe(),function(){return $e.pause()})},onUpdate:zi,onComplete:Wn.vars.onComplete}),k};pt.sort=function(B){return ft.sort(B||function(g,R){return(g.vars.refreshPriority||0)*-1e6+g.start-(R.start+(R.vars.refreshPriority||0)*-1e6)})},pt.observe=function(B){return new xe(B)},pt.normalizeScroll=function(B){if(typeof B>"u")return ee;if(B===!0&&ee)return ee.enable();if(B===!1){ee&&ee.kill(),ee=B;return}var g=B instanceof xe?B:Xh(B);return ee&&ee.target===g.target&&ee.kill(),Di(g.target)&&(ee=g),g},pt.core={_getVelocityProp:Te,_inputObserver:tc,_scrollers:U,_proxies:C,bridge:{ss:function(){Re||Rr("scrollStart"),Re=de()},ref:function(){return x}}},br()&&re.registerPlugin(pt),t.ScrollTrigger=pt,t.default=pt,typeof window>"u"||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete window.default})})(xl,xl.exports);var Zh=xl.exports;const hv=$h(Zh);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="160",fv={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dv={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jh=0,sc=1,Qh=2,Ku=1,$u=2,Zi=3,Er=0,ei=1,Ji=2,Mr=0,bs=1,ac=2,oc=3,lc=4,ef=5,Gr=100,tf=101,nf=102,cc=103,uc=104,rf=200,sf=201,af=202,of=203,Ml=204,Sl=205,lf=206,cf=207,uf=208,hf=209,ff=210,df=211,pf=212,mf=213,gf=214,_f=0,vf=1,xf=2,oo=3,Mf=4,Sf=5,yf=6,Ef=7,Zu=0,Tf=1,bf=2,Sr=0,Af=1,wf=2,Rf=3,Cf=4,Pf=5,Lf=6,hc="attached",Df="detached",Ju=300,ws=301,Rs=302,yl=303,El=304,vo=306,Tl=1e3,Ri=1001,bl=1002,Pn=1003,fc=1004,Io=1005,di=1006,Uf=1007,aa=1008,yr=1009,If=1010,Nf=1011,Dl=1012,Qu=1013,vr=1014,er=1015,oa=1016,eh=1017,th=1018,Xr=1020,Ff=1021,pi=1023,Of=1024,Bf=1025,qr=1026,Cs=1027,zf=1028,nh=1029,Hf=1030,ih=1031,rh=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,dc=35840,pc=35841,mc=35842,gc=35843,sh=36196,_c=37492,vc=37496,xc=37808,Mc=37809,Sc=37810,yc=37811,Ec=37812,Tc=37813,bc=37814,Ac=37815,wc=37816,Rc=37817,Cc=37818,Pc=37819,Lc=37820,Dc=37821,zo=36492,Uc=36494,Ic=36495,kf=36283,Nc=36284,Fc=36285,Oc=36286,lo=2300,co=2301,Ho=2302,Bc=2400,zc=2401,Hc=2402,Vf=2500,pv=0,mv=1,gv=2,ah=3e3,Yr=3001,Gf=3200,Wf=3201,oh=0,Xf=1,mi="",Ln="srgb",nr="srgb-linear",Ul="display-p3",xo="display-p3-linear",uo="linear",Ht="srgb",ho="rec709",fo="p3",ss=7680,kc=519,qf=512,Yf=513,jf=514,lh=515,Kf=516,$f=517,Zf=518,Jf=519,Al=35044,Vc="300 es",wl=1035,tr=2e3,po=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gc=1234567;const ia=Math.PI/180,Ps=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function En(i,e,t){return Math.max(e,Math.min(t,i))}function Il(i,e){return(i%e+e)%e}function Qf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ed(i,e,t){return i!==e?(t-i)/(e-i):0}function ra(i,e,t){return(1-t)*i+t*e}function td(i,e,t,n){return ra(i,e,1-Math.exp(-t*n))}function nd(i,e=1){return e-Math.abs(Il(i,e*2)-e)}function id(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ad(i,e){return i+Math.random()*(e-i)}function od(i){return i*(.5-Math.random())}function ld(i){i!==void 0&&(Gc=i);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cd(i){return i*ia}function ud(i){return i*Ps}function Rl(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fd(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _v={DEG2RAD:ia,RAD2DEG:Ps,generateUUID:Pi,clamp:En,euclideanModulo:Il,mapLinear:Qf,inverseLerp:ed,lerp:ra,damp:td,pingpong:nd,smoothstep:id,smootherstep:rd,randInt:sd,randFloat:ad,randFloatSpread:od,seededRandom:ld,degToRad:cd,radToDeg:ud,isPowerOfTwo:Rl,ceilPowerOfTwo:hd,floorPowerOfTwo:mo,setQuaternionFromProperEuler:fd,normalize:Dt,denormalize:Oi};class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,r,s,o,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],_=n[8],v=r[0],p=r[3],h=r[6],w=r[1],S=r[4],D=r[7],U=r[2],C=r[5],L=r[8];return s[0]=o*v+a*w+l*U,s[3]=o*p+a*S+l*C,s[6]=o*h+a*D+l*L,s[1]=c*v+u*w+d*U,s[4]=c*p+u*S+d*C,s[7]=c*h+u*D+d*L,s[2]=f*v+m*w+_*U,s[5]=f*p+m*S+_*C,s[8]=f*h+m*D+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*d+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new dt;function ch(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){const i=la("canvas");return i.style.display="block",i}const Wc={};function sa(i){i in Wc||(Wc[i]=!0,console.warn(i))}const Xc=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qc=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[nr]:{transfer:uo,primaries:ho,toReference:i=>i,fromReference:i=>i},[Ln]:{transfer:Ht,primaries:ho,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xo]:{transfer:uo,primaries:fo,toReference:i=>i.applyMatrix3(qc),fromReference:i=>i.applyMatrix3(Xc)},[Ul]:{transfer:Ht,primaries:fo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qc),fromReference:i=>i.applyMatrix3(Xc).convertLinearToSRGB()}},pd=new Set([nr,xo]),It={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!pd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=La[e].toReference,r=La[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return La[i].primaries},getTransfer:function(i){return i===mi?uo:La[i].transfer}};function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class uh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=la("canvas")),as.width=e.width,as.height=e.height;const n=as.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Go(r[o].image)):s.push(Go(r[o]))}else s=Go(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;class Zn extends Ds{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,n=Ri,r=Ri,s=di,o=aa,a=pi,l=yr,c=Zn.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Pi(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yr?Ln:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ln?Yr:ah}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yr?Ln:mi}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Ju;Zn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,D=(m+1)/2,U=(h+1)/2,C=(u+f)/4,L=(d+v)/4,se=(_+p)/4;return S>D&&S>U?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=C/n,s=L/n):D>U?D<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(D),n=C/r,s=se/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=L/s,r=se/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(d-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _d extends Ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yr?Ln:mi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Zn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends _d{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fh extends Zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vd extends Zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==m||u!==_){let p=1-a;const h=l*f+c*m+u*_+d*v,w=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const U=Math.sqrt(S),C=Math.atan2(U,h*w);p=Math.sin(p*C)/U,a=Math.sin(a*C)/U}const D=a*w;if(l=l*p+f*D,c=c*p+m*D,u=u*p+_*D,d=d*p+v*D,p===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*m-c*f,e[t+1]=l*_+u*f+c*d-a*m,e[t+2]=c*_+u*m+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new O,Yc=new Us;class Tr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ti):Ti.fromBufferAttribute(s,o),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Ua.subVectors(this.max,Ks),os.subVectors(e.a,Ks),ls.subVectors(e.b,Ks),cs.subVectors(e.c,Ks),dr.subVectors(ls,os),pr.subVectors(cs,ls),Or.subVectors(os,cs);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Or.z,Or.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Or.z,0,-Or.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Or.y,Or.x,0];return!Xo(t,os,ls,cs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,os,ls,cs,Ua))?!1:(Ia.crossVectors(dr,pr),t=[Ia.x,Ia.y,Ia.z],Xo(t,os,ls,cs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new O,new O,new O,new O,new O,new O,new O,new O],Ti=new O,Da=new Tr,os=new O,ls=new O,cs=new O,dr=new O,pr=new O,Or=new O,Ks=new O,Ua=new O,Ia=new O,Br=new O;function Xo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Br.fromArray(i,s);const a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=t.dot(Br),u=n.dot(Br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xd=new Tr,$s=new O,qo=new O;class ir{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($s,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(qo)),this.expandByPoint($s.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new O,Yo=new O,Na=new O,mr=new O,jo=new O,Fa=new O,Ko=new O;class Mo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yo.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Yo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Na),a=mr.dot(this.direction),l=-mr.dot(Na),c=mr.lengthSq(),u=Math.abs(1-o*o);let d,f,m,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yo).addScaledVector(Na,f),m}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),r=qi.dot(qi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,r,s){jo.subVectors(t,e),Fa.subVectors(n,e),Ko.crossVectors(jo,Fa);let o=this.direction.dot(Ko),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(mr,Fa));if(l<0)return null;const c=a*this.direction.dot(jo.cross(mr));if(c<0||l+c>o)return null;const u=-a*mr.dot(Ko);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,l,c,u,d,f,m,_,v,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,f,m,_,v,p)}set(e,t,n,r,s,o,a,l,c,u,d,f,m,_,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,_=c*u,v=c*d;t[0]=f+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,_=c*u,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=o*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Sd)}lookAt(e,t,n){const r=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),gr.crossVectors(n,si),gr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),gr.crossVectors(n,si)),gr.normalize(),Oa.crossVectors(si,gr),r[0]=gr.x,r[4]=Oa.x,r[8]=si.x,r[1]=gr.y,r[5]=Oa.y,r[9]=si.y,r[2]=gr.z,r[6]=Oa.z,r[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],_=n[2],v=n[6],p=n[10],h=n[14],w=n[3],S=n[7],D=n[11],U=n[15],C=r[0],L=r[4],se=r[8],b=r[12],A=r[1],K=r[5],te=r[9],fe=r[13],F=r[2],q=r[6],Q=r[10],ae=r[14],J=r[3],j=r[7],ie=r[11],ce=r[15];return s[0]=o*C+a*A+l*F+c*J,s[4]=o*L+a*K+l*q+c*j,s[8]=o*se+a*te+l*Q+c*ie,s[12]=o*b+a*fe+l*ae+c*ce,s[1]=u*C+d*A+f*F+m*J,s[5]=u*L+d*K+f*q+m*j,s[9]=u*se+d*te+f*Q+m*ie,s[13]=u*b+d*fe+f*ae+m*ce,s[2]=_*C+v*A+p*F+h*J,s[6]=_*L+v*K+p*q+h*j,s[10]=_*se+v*te+p*Q+h*ie,s[14]=_*b+v*fe+p*ae+h*ce,s[3]=w*C+S*A+D*F+U*J,s[7]=w*L+S*K+D*q+U*j,s[11]=w*se+S*te+D*Q+U*ie,s[15]=w*b+S*fe+D*ae+U*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*m-n*l*m)+v*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*u-n*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],h=e[15],w=d*p*c-v*f*c+v*l*m-a*p*m-d*l*h+a*f*h,S=_*f*c-u*p*c-_*l*m+o*p*m+u*l*h-o*f*h,D=u*v*c-_*d*c+_*a*m-o*v*m-u*a*h+o*d*h,U=_*d*l-u*v*l-_*a*f+o*v*f+u*a*p-o*d*p,C=t*w+n*S+r*D+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=w*L,e[1]=(v*f*s-d*p*s-v*r*m+n*p*m+d*r*h-n*f*h)*L,e[2]=(a*p*s-v*l*s+v*r*c-n*p*c-a*r*h+n*l*h)*L,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*m-n*l*m)*L,e[4]=S*L,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*h+t*f*h)*L,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*h-t*l*h)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*L,e[8]=D*L,e[9]=(_*d*s-u*v*s-_*n*m+t*v*m+u*n*h-t*d*h)*L,e[10]=(o*v*s-_*a*s+_*n*c-t*v*c-o*n*h+t*a*h)*L,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*m-t*a*m)*L,e[12]=U*L,e[13]=(u*v*r-_*d*r+_*n*f-t*v*f-u*n*p+t*d*p)*L,e[14]=(_*a*r-o*v*r-_*n*l+t*v*l+o*n*p-t*a*p)*L,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,_=s*d,v=o*u,p=o*d,h=a*d,w=l*c,S=l*u,D=l*d,U=n.x,C=n.y,L=n.z;return r[0]=(1-(v+h))*U,r[1]=(m+D)*U,r[2]=(_-S)*U,r[3]=0,r[4]=(m-D)*C,r[5]=(1-(f+h))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(_+S)*L,r[9]=(p-w)*L,r[10]=(1-(f+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bi.copy(this);const c=1/s,u=1/o,d=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,t.setFromRotationMatrix(bi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=tr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(a===tr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===po)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=tr){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),f=(t+e)*c,m=(n+r)*u;let _,v;if(a===tr)_=(o+s)*d,v=-2*d;else if(a===po)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new O,bi=new vt,Md=new O(0,0,0),Sd=new O(1,1,1),gr=new O,Oa=new O,si=new O,jc=new vt,Kc=new Us;class So{constructor(e=0,t=0,n=0,r=So.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}So.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yd=0;const $c=new O,hs=new Us,Yi=new vt,Ba=new O,Zs=new O,Ed=new O,Td=new Us,Zc=new O(1,0,0),Jc=new O(0,1,0),Qc=new O(0,0,1),bd={type:"added"},Ad={type:"removed"};class en extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new O,t=new So,n=new Us,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new dt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Zs,Ba,this.up):Yi.lookAt(Ba,Zs,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Yi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ad)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new O,ji=new O,$o=new O,Ki=new O,fs=new O,ds=new O,eu=new O,Zo=new O,Jo=new O,Qo=new O;let za=!1;class wi{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ai.subVectors(e,t),r.cross(Ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ai.subVectors(r,t),ji.subVectors(n,t),$o.subVectors(e,t);const o=Ai.dot(Ai),a=Ai.dot(ji),l=Ai.dot($o),c=ji.dot(ji),u=ji.dot($o),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getUV(e,t,n,r,s,o,a,l){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static isFrontFacing(e,t,n,r){return Ai.subVectors(n,t),ji.subVectors(e,t),Ai.cross(ji).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Ai.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),wi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,n),ds.subVectors(s,n),Zo.subVectors(e,n);const l=fs.dot(Zo),c=ds.dot(Zo);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,r);const u=fs.dot(Jo),d=ds.dot(Jo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fs,o);Qo.subVectors(e,s);const m=fs.dot(Qo),_=ds.dot(Qo);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ds,a);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return eu.subVectors(s,r),a=(d-u)/(d-u+(m-_)),t.copy(r).addScaledVector(eu,a);const h=1/(p+v+f);return o=v*h,a=f*h,t.copy(n).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function el(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=Il(e,1),t=En(t,0,1),n=En(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=el(o,s,e+1/3),this.g=el(o,s,e),this.b=el(o,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=Ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return It.fromWorkingColorSpace(zn.copy(this),e),Math.round(En(zn.r*255,0,255))*65536+Math.round(En(zn.g*255,0,255))*256+Math.round(En(zn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(zn.copy(this),t);const n=zn.r,r=zn.g,s=zn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Ln){It.fromWorkingColorSpace(zn.copy(this),e);const t=zn.r,n=zn.g,r=zn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Ha);const n=ra(_r.h,Ha.h,t),r=ra(_r.s,Ha.s,t),s=ra(_r.l,Ha.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ht;ht.NAMES=ph;let wd=0;class $r extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=bs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Er&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mh extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qi=Rd();function Rd(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Cd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=En(i,-65504,65504),Qi.floatView[0]=i;const e=Qi.uint32View[0],t=e>>23&511;return Qi.baseTable[t]+((e&8388607)>>Qi.shiftTable[t])}function Pd(i){const e=i>>10;return Qi.uint32View[0]=Qi.mantissaTable[Qi.offsetTable[e]+(i&1023)]+Qi.exponentTable[e],Qi.floatView[0]}const vv={toHalfFloat:Cd,fromHalfFloat:Pd},on=new O,ka=new Mt;class gi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class gh extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _h extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class oi extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ld=0;const fi=new vt,tl=new en,ps=new O,ai=new Tr,Js=new Tr,yn=new O;class Li extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?_h:gh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(ai.min,Js.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Js.max),ai.expandByPoint(yn)):(ai.expandByPoint(Js.min),ai.expandByPoint(Js.max))}ai.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)yn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yn.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),yn.add(ps)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new O,u[A]=new O;const d=new O,f=new O,m=new O,_=new Mt,v=new Mt,p=new Mt,h=new O,w=new O;function S(A,K,te){d.fromArray(r,A*3),f.fromArray(r,K*3),m.fromArray(r,te*3),_.fromArray(o,A*2),v.fromArray(o,K*2),p.fromArray(o,te*2),f.sub(d),m.sub(d),v.sub(_),p.sub(_);const fe=1/(v.x*p.y-p.x*v.y);isFinite(fe)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(fe),w.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(fe),c[A].add(h),c[K].add(h),c[te].add(h),u[A].add(w),u[K].add(w),u[te].add(w))}let D=this.groups;D.length===0&&(D=[{start:0,count:n.length}]);for(let A=0,K=D.length;A<K;++A){const te=D[A],fe=te.start,F=te.count;for(let q=fe,Q=fe+F;q<Q;q+=3)S(n[q+0],n[q+1],n[q+2])}const U=new O,C=new O,L=new O,se=new O;function b(A){L.fromArray(s,A*3),se.copy(L);const K=c[A];U.copy(K),U.sub(L.multiplyScalar(L.dot(K))).normalize(),C.crossVectors(se,K);const fe=C.dot(u[A])<0?-1:1;l[A*4]=U.x,l[A*4+1]=U.y,l[A*4+2]=U.z,l[A*4+3]=fe}for(let A=0,K=D.length;A<K;++A){const te=D[A],fe=te.start,F=te.count;for(let q=fe,Q=fe+F;q<Q;q+=3)b(n[q+0]),b(n[q+1]),b(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new gi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Li,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new vt,zr=new Mo,Va=new ir,nu=new O,ms=new O,gs=new O,_s=new O,nl=new O,Ga=new O,Wa=new Mt,Xa=new Mt,qa=new Mt,iu=new O,ru=new O,su=new O,Ya=new O,ja=new O;class Ci extends en{constructor(e=new Li,t=new mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(nl.fromBufferAttribute(d,e),o?Ga.addScaledVector(nl,u):Ga.addScaledVector(nl.sub(t),u))}t.add(Ga)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Va.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Va,nu)===null||zr.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(s).invert(),zr.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],h=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let D=w,U=S;D<U;D+=3){const C=a.getX(D),L=a.getX(D+1),se=a.getX(D+2);r=Ka(this,h,e,n,c,u,d,C,L,se),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const w=a.getX(p),S=a.getX(p+1),D=a.getX(p+2);r=Ka(this,o,e,n,c,u,d,w,S,D),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],h=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let D=w,U=S;D<U;D+=3){const C=D,L=D+1,se=D+2;r=Ka(this,h,e,n,c,u,d,C,L,se),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const w=p,S=p+1,D=p+2;r=Ka(this,o,e,n,c,u,d,w,S,D),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Dd(i,e,t,n,r,s,o,a){let l;if(e.side===ei?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Er,a),l===null)return null;ja.copy(a),ja.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:i}}function Ka(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ms),i.getVertexPosition(l,gs),i.getVertexPosition(c,_s);const u=Dd(i,e,t,n,ms,gs,_s,Ya);if(u){r&&(Wa.fromBufferAttribute(r,a),Xa.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,c),u.uv=wi.getInterpolation(Ya,ms,gs,_s,Wa,Xa,qa,new Mt)),s&&(Wa.fromBufferAttribute(s,a),Xa.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,c),u.uv1=wi.getInterpolation(Ya,ms,gs,_s,Wa,Xa,qa,new Mt),u.uv2=u.uv1),o&&(iu.fromBufferAttribute(o,a),ru.fromBufferAttribute(o,l),su.fromBufferAttribute(o,c),u.normal=wi.getInterpolation(Ya,ms,gs,_s,iu,ru,su,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};wi.getNormal(ms,gs,_s,d.normal),u.face=d}return u}class ca extends Li{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(d,2));function _(v,p,h,w,S,D,U,C,L,se,b){const A=D/L,K=U/se,te=D/2,fe=U/2,F=C/2,q=L+1,Q=se+1;let ae=0,J=0;const j=new O;for(let ie=0;ie<Q;ie++){const ce=ie*K-fe;for(let Te=0;Te<q;Te++){const $=Te*A-te;j[v]=$*w,j[p]=ce*S,j[h]=F,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[h]=C>0?1:-1,u.push(j.x,j.y,j.z),d.push(Te/L),d.push(1-ie/se),ae+=1}}for(let ie=0;ie<se;ie++)for(let ce=0;ce<L;ce++){const Te=f+ce+q*ie,$=f+ce+q*(ie+1),le=f+(ce+1)+q*(ie+1),ye=f+(ce+1)+q*ie;l.push(Te,$,ye),l.push($,le,ye),J+=6}a.addGroup(m,J,b),m+=J,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $n(i){const e={};for(let t=0;t<i.length;t++){const n=Ls(i[t]);for(const r in n)e[r]=n[r]}return e}function Ud(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vh(i){return i.getRenderTarget()===null?i.outputColorSpace:It.workingColorSpace}const Id={clone:Ls,merge:$n};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kr extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xh extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends xh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class Od extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(vs,xs,e,t);r.layers=this.layers,this.add(r);const s=new Dn(vs,xs,e,t);s.layers=this.layers,this.add(s);const o=new Dn(vs,xs,e,t);o.layers=this.layers,this.add(o);const a=new Dn(vs,xs,e,t);a.layers=this.layers,this.add(a);const l=new Dn(vs,xs,e,t);l.layers=this.layers,this.add(l);const c=new Dn(vs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===tr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Mh extends Zn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yr?Ln:mi),this.texture=new Mh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ca(5,5,5),s=new Kr({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:Mr});s.uniforms.tEquirect.value=t;const o=new Ci(r,s),a=t.minFilter;return t.minFilter===aa&&(t.minFilter=di),new Od(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const il=new O,zd=new O,Hd=new dt;class kr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=il.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(il),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hd.getNormalMatrix(e),r=this.coplanarPoint(il).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new ir,$a=new O;class Nl{constructor(e=new kr,t=new kr,n=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tr){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],h=r[12],w=r[13],S=r[14],D=r[15];if(n[0].setComponents(l-s,f-c,p-m,D-h).normalize(),n[1].setComponents(l+s,f+c,p+m,D+h).normalize(),n[2].setComponents(l+o,f+u,p+_,D+w).normalize(),n[3].setComponents(l-o,f-u,p-_,D-w).normalize(),n[4].setComponents(l-a,f-d,p-v,D-S).normalize(),t===tr)n[5].setComponents(l+a,f+d,p+v,D+S).normalize();else if(t===po)n[5].setComponents(a,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($a.x=r.normal.x>0?e.max.x:e.min.x,$a.y=r.normal.y>0?e.max.y:e.min.y,$a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kd(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,d){const f=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&_.length===0&&i.bufferSubData(d,0,f),_.length!==0){for(let v=0,p=_.length;v<p;v++){const h=_[v];t?i.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):i.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Fl extends Li{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],_=[],v=[],p=[];for(let h=0;h<u;h++){const w=h*f-o;for(let S=0;S<c;S++){const D=S*d-s;_.push(D,-w,0),v.push(0,0,1),p.push(S/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const S=w+c*h,D=w+c*(h+1),U=w+1+c*(h+1),C=w+1+c*h;m.push(S,D,C),m.push(D,U,C)}this.setIndex(m),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,im=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Vd,alphahash_pars_fragment:Gd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:qd,alphatest_pars_fragment:Yd,aomap_fragment:jd,aomap_pars_fragment:Kd,batching_pars_vertex:$d,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:ap,color_fragment:op,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:vp,colorspace_pars_fragment:xp,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:yp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Tp,fog_vertex:bp,fog_pars_vertex:Ap,fog_fragment:wp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Up,lights_pars_begin:Ip,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:kp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:jp,map_fragment:Kp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:xm,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:bm,shadowmask_pars_fragment:Am,skinbase_vertex:wm,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Im,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Hm,background_vert:km,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:jm,distanceRGBA_vert:Km,distanceRGBA_frag:$m,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:rg,meshmatcap_vert:sg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:vg,sprite_vert:xg,sprite_frag:Mg},ge={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Fi={basic:{uniforms:$n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:$n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:$n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:$n([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:$n([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:$n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:$n([ge.points,ge.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:$n([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:$n([ge.common,ge.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:$n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:$n([ge.sprite,ge.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:$n([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:$n([ge.lights,ge.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Fi.physical={uniforms:$n([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Za={r:0,b:0,g:0};function Sg(i,e,t,n,r,s,o){const a=new ht(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function _(p,h){let w=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?v(a,l):S&&S.isColor&&(v(S,1),w=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===vo)?(u===void 0&&(u=new Ci(new ca(1,1,1),new Kr({name:"BackgroundCubeMaterial",uniforms:Ls(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=It.getTransfer(S.colorSpace)!==Ht,(d!==S||f!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ci(new Fl(2,2),new Kr({name:"BackgroundMaterial",uniforms:Ls(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=It.getTransfer(S.colorSpace)!==Ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(Za,vh(i)),n.buffers.color.setClear(Za.r,Za.g,Za.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_}}function yg(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(F,q,Q,ae,J){let j=!1;if(o){const ie=v(ae,Q,q);c!==ie&&(c=ie,m(c.object)),j=h(F,ae,Q,J),j&&w(F,ae,Q,J)}else{const ie=q.wireframe===!0;(c.geometry!==ae.id||c.program!==Q.id||c.wireframe!==ie)&&(c.geometry=ae.id,c.program=Q.id,c.wireframe=ie,j=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,se(F,q,Q,ae),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function v(F,q,Q){const ae=Q.wireframe===!0;let J=a[F.id];J===void 0&&(J={},a[F.id]=J);let j=J[q.id];j===void 0&&(j={},J[q.id]=j);let ie=j[ae];return ie===void 0&&(ie=p(f()),j[ae]=ie),ie}function p(F){const q=[],Q=[],ae=[];for(let J=0;J<r;J++)q[J]=0,Q[J]=0,ae[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Q,attributeDivisors:ae,object:F,attributes:{},index:null}}function h(F,q,Q,ae){const J=c.attributes,j=q.attributes;let ie=0;const ce=Q.getAttributes();for(const Te in ce)if(ce[Te].location>=0){const le=J[Te];let ye=j[Te];if(ye===void 0&&(Te==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),Te==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;ie++}return c.attributesNum!==ie||c.index!==ae}function w(F,q,Q,ae){const J={},j=q.attributes;let ie=0;const ce=Q.getAttributes();for(const Te in ce)if(ce[Te].location>=0){let le=j[Te];le===void 0&&(Te==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),Te==="instanceColor"&&F.instanceColor&&(le=F.instanceColor));const ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),J[Te]=ye,ie++}c.attributes=J,c.attributesNum=ie,c.index=ae}function S(){const F=c.newAttributes;for(let q=0,Q=F.length;q<Q;q++)F[q]=0}function D(F){U(F,0)}function U(F,q){const Q=c.newAttributes,ae=c.enabledAttributes,J=c.attributeDivisors;Q[F]=1,ae[F]===0&&(i.enableVertexAttribArray(F),ae[F]=1),J[F]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),J[F]=q)}function C(){const F=c.newAttributes,q=c.enabledAttributes;for(let Q=0,ae=q.length;Q<ae;Q++)q[Q]!==F[Q]&&(i.disableVertexAttribArray(Q),q[Q]=0)}function L(F,q,Q,ae,J,j,ie){ie===!0?i.vertexAttribIPointer(F,q,Q,J,j):i.vertexAttribPointer(F,q,Q,ae,J,j)}function se(F,q,Q,ae){if(n.isWebGL2===!1&&(F.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const J=ae.attributes,j=Q.getAttributes(),ie=q.defaultAttributeValues;for(const ce in j){const Te=j[ce];if(Te.location>=0){let $=J[ce];if($===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),$!==void 0){const le=$.normalized,ye=$.itemSize,Ie=t.get($);if(Ie===void 0)continue;const xe=Ie.buffer,re=Ie.type,qe=Ie.bytesPerElement,me=n.isWebGL2===!0&&(re===i.INT||re===i.UNSIGNED_INT||$.gpuType===Qu);if($.isInterleavedBufferAttribute){const Ue=$.data,H=Ue.stride,ot=$.offset;if(Ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Te.locationSize;Oe++)U(Te.location+Oe,Ue.meshPerAttribute);F.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Oe=0;Oe<Te.locationSize;Oe++)D(Te.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Oe=0;Oe<Te.locationSize;Oe++)L(Te.location+Oe,ye/Te.locationSize,re,le,H*qe,(ot+ye/Te.locationSize*Oe)*qe,me)}else{if($.isInstancedBufferAttribute){for(let Ue=0;Ue<Te.locationSize;Ue++)U(Te.location+Ue,$.meshPerAttribute);F.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ue=0;Ue<Te.locationSize;Ue++)D(Te.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Ue=0;Ue<Te.locationSize;Ue++)L(Te.location+Ue,ye/Te.locationSize,re,le,ye*qe,ye/Te.locationSize*Ue*qe,me)}}else if(ie!==void 0){const le=ie[ce];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Te.location,le);break;case 3:i.vertexAttrib3fv(Te.location,le);break;case 4:i.vertexAttrib4fv(Te.location,le);break;default:i.vertexAttrib1fv(Te.location,le)}}}}C()}function b(){te();for(const F in a){const q=a[F];for(const Q in q){const ae=q[Q];for(const J in ae)_(ae[J].object),delete ae[J];delete q[Q]}delete a[F]}}function A(F){if(a[F.id]===void 0)return;const q=a[F.id];for(const Q in q){const ae=q[Q];for(const J in ae)_(ae[J].object),delete ae[J];delete q[Q]}delete a[F.id]}function K(F){for(const q in a){const Q=a[q];if(Q[F.id]===void 0)continue;const ae=Q[F.id];for(const J in ae)_(ae[J].object),delete ae[J];delete Q[F.id]}}function te(){fe(),u=!0,c!==l&&(c=l,m(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:fe,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:K,initAttributes:S,enableAttribute:D,disableUnusedAttributes:C}}function Eg(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,d){i.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let m,_;if(r)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],d[_]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Tg(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,D=o||e.has("OES_texture_float"),U=S&&D,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:w,vertexTextures:S,floatFragmentTextures:D,floatVertexTextures:U,maxSamples:C}}function bg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new kr,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const w=s?0:n,S=w*4;let D=h.clippingState||null;l.value=D,D=u(_,f,S,m);for(let U=0;U!==S;++U)D[U]=t[U];h.clippingState=D,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const h=m+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,D=m;S!==v;++S,D+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(p,D),p[D+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Ag(i){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=ws:a===El&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bd(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yh extends xh{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,au=[.125,.215,.35,.446,.526,.582],Wr=20,rl=new yh,ou=new ht;let sl=null,al=0,ol=0;const Vr=(1+Math.sqrt(5))/2,Ms=1/Vr,lu=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Vr,Ms),new O(0,Vr,-Ms),new O(Ms,0,Vr),new O(-Ms,0,Vr),new O(Vr,Ms,0),new O(-Vr,Ms,0)];class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){sl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,al,ol),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:di,minFilter:di,generateMipmaps:!1,type:oa,format:pi,colorSpace:nr,depthBuffer:!1},r=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(s)),this._blurMaterial=Rg(s,e,t)}return r}_compileMaterial(e){const t=new Ci(this._lodPlanes[0],e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,n,r){const a=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ou),u.toneMapping=Sr,u.autoClear=!1;const m=new mh({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),_=new Ci(new ca,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(ou),v=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const S=this._cubeSize;Ja(r,w*S,h>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ws||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lu[(r-1)%lu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ci(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wr-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):Wr;p>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wr}`);const h=[];let w=0;for(let L=0;L<Wr;++L){const se=L/v,b=Math.exp(-se*se/2);h.push(b),L===0?w+=b:L<p&&(w+=2*b)}for(let L=0;L<h.length;L++)h[L]=h[L]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const D=this._sizeLods[r],U=3*D*(r>S-Es?r-S+Es:0),C=4*(this._cubeSize-D);Ja(t,U,C,3*D,2*D),l.setRenderTarget(t),l.render(d,rl)}}function wg(i){const e=[],t=[],n=[];let r=i;const s=i-Es+1+au.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Es?l=au[o-i+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,v=3,p=2,h=1,w=new Float32Array(v*_*m),S=new Float32Array(p*_*m),D=new Float32Array(h*_*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,se=C>2?0:-1,b=[L,se,0,L+2/3,se,0,L+2/3,se+1,0,L,se,0,L+2/3,se+1,0,L,se+1,0];w.set(b,v*_*C),S.set(f,p*_*C);const A=[C,C,C,C,C,C];D.set(A,h*_*C)}const U=new Li;U.setAttribute("position",new gi(w,v)),U.setAttribute("uv",new gi(S,p)),U.setAttribute("faceIndex",new gi(D,h)),e.push(U),r>Es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){const n=new jr(i,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Rg(i,e,t){const n=new Float32Array(Wr),r=new O(0,1,0);return new Kr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function hu(){return new Kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function fu(){return new Kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yl||l===El,u=l===ws||l===Rs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new cu(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new cu(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Lg(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,h=v.length;p<h;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let S=0,D=w.length;S<D;S+=3){const U=w[S+0],C=w[S+1],L=w[S+2];f.push(U,C,C,L,L,U)}}else if(_!==void 0){const w=_.array;v=_.version;for(let S=0,D=w.length/3-1;S<D;S+=3){const U=S+0,C=S+1,L=S+2;f.push(U,C,C,L,L,U)}}else return;const p=new(ch(f)?_h:gh)(f,1);p.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Dg(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(s,_,a,m*l),t.update(_,s,1)}function d(m,_,v){if(v===0)return;let p,h;if(r)p=i,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,_,a,m*l,v),t.update(_,s,v)}function f(m,_,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<v;h++)this.render(m[h]/l,_[h]);else{p.multiDrawElementsWEBGL(s,_,0,a,m,0,v);let h=0;for(let w=0;w<v;w++)h+=_[w];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Ug(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ig(i,e){return i[0]-e[0]}function Ng(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Fg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==_){let F=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",F)};v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let se=0;w===!0&&(se=1),S===!0&&(se=2),D===!0&&(se=3);let b=u.attributes.position.count*se,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const K=new Float32Array(b*A*4*_),te=new fh(K,b,A,_);te.type=er,te.needsUpdate=!0;const fe=se*4;for(let q=0;q<_;q++){const Q=U[q],ae=C[q],J=L[q],j=b*A*4*q;for(let ie=0;ie<Q.count;ie++){const ce=ie*fe;w===!0&&(o.fromBufferAttribute(Q,ie),K[j+ce+0]=o.x,K[j+ce+1]=o.y,K[j+ce+2]=o.z,K[j+ce+3]=0),S===!0&&(o.fromBufferAttribute(ae,ie),K[j+ce+4]=o.x,K[j+ce+5]=o.y,K[j+ce+6]=o.z,K[j+ce+7]=0),D===!0&&(o.fromBufferAttribute(J,ie),K[j+ce+8]=o.x,K[j+ce+9]=o.y,K[j+ce+10]=o.z,K[j+ce+11]=J.itemSize===4?o.w:1)}}v={count:_,texture:te,size:new Mt(b,A)},s.set(u,v),u.addEventListener("dispose",F)}let p=0;for(let w=0;w<f.length;w++)p+=f[w];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",h),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let S=0;S<m;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<m;S++){const D=_[S];D[0]=S,D[1]=f[S]}_.sort(Ng);for(let S=0;S<8;S++)S<m&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Ig);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let S=0;S<8;S++){const D=a[S],U=D[0],C=D[1];U!==Number.MAX_SAFE_INTEGER&&C?(v&&u.getAttribute("morphTarget"+S)!==v[U]&&u.setAttribute("morphTarget"+S,v[U]),p&&u.getAttribute("morphNormal"+S)!==p[U]&&u.setAttribute("morphNormal"+S,p[U]),r[S]=C,h+=C):(v&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const w=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Og(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Eh extends Zn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:qr,u!==qr&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qr&&(n=vr),n===void 0&&u===Cs&&(n=Xr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Th=new Zn,bh=new Eh(1,1);bh.compareFunction=lh;const Ah=new fh,wh=new vd,Rh=new Mh,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=du[r];if(s===void 0&&(s=new Float32Array(r),du[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function Vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),mn(t,n)}}function Gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),mn(t,n)}}function Wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),mn(t,n)}}function Xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function Kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function Qg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?bh:Th;t.setTexture2D(e||s,r)}function e_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||wh,r)}function t_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rh,r)}function n_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ah,r)}function i_(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return Hg;case 35666:return kg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return jg;case 5125:return Kg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function r_(i,e){i.uniform1fv(this.addr,e)}function s_(i,e){const t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function a_(i,e){const t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function o_(i,e){const t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function l_(i,e){const t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c_(i,e){const t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u_(i,e){const t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function h_(i,e){i.uniform1iv(this.addr,e)}function f_(i,e){i.uniform2iv(this.addr,e)}function d_(i,e){i.uniform3iv(this.addr,e)}function p_(i,e){i.uniform4iv(this.addr,e)}function m_(i,e){i.uniform1uiv(this.addr,e)}function g_(i,e){i.uniform2uiv(this.addr,e)}function __(i,e){i.uniform3uiv(this.addr,e)}function v_(i,e){i.uniform4uiv(this.addr,e)}function x_(i,e,t){const n=this.cache,r=e.length,s=yo(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Th,s[o])}function M_(i,e,t){const n=this.cache,r=e.length,s=yo(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wh,s[o])}function S_(i,e,t){const n=this.cache,r=e.length,s=yo(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rh,s[o])}function y_(i,e,t){const n=this.cache,r=e.length,s=yo(t,r);pn(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ah,s[o])}function E_(i){switch(i){case 5126:return r_;case 35664:return s_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return u_;case 5124:case 35670:return h_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return y_}}class T_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}}class b_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}}class A_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function vu(i,e){i.seq.push(e),i.map[e.id]=e}function w_(i,e,t){const n=i.name,r=n.length;for(ll.lastIndex=0;;){const s=ll.exec(n),o=ll.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vu(t,c===void 0?new T_(a,i,e):new b_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new A_(a),vu(t,d)),t=d}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);w_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function xu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const R_=37297;let C_=0;function P_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function L_(i){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(i);let n;switch(e===t?n="":e===fo&&t===ho?n="LinearDisplayP3ToLinearSRGB":e===ho&&t===fo&&(n="LinearSRGBToLinearDisplayP3"),i){case nr:case xo:return[n,"LinearTransferOETF"];case Ln:case Ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+P_(i.getShaderSource(e),o)}else return r}function D_(i,e){const t=L_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function U_(i,e){let t;switch(e){case Af:t="Linear";break;case wf:t="Reinhard";break;case Rf:t="OptimizedCineon";break;case Cf:t="ACESFilmic";break;case Lf:t="AgX";break;case Pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function F_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ts(i){return i!==""}function Su(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(B_,H_)}const z_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function H_(i,e){let t=ut[e];if(t===void 0){const n=z_.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const k_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(k_,V_)}function V_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function W_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Rs:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function q_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zu:e="ENVMAP_BLENDING_MULTIPLY";break;case Tf:e="ENVMAP_BLENDING_MIX";break;case bf:e="ENVMAP_BLENDING_ADD";break}return e}function Y_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function j_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=G_(t),c=W_(t),u=X_(t),d=q_(t),f=Y_(t),m=t.isWebGL2?"":I_(t),_=N_(t),v=F_(s),p=r.createProgram();let h,w,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ts).join(`
`),h.length>0&&(h+=`
`),w=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ts).join(`
`),w.length>0&&(w+=`
`)):(h=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),w=[m,Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Sr?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Cl(o),o=Su(o,t),o=yu(o,t),a=Cl(a),a=Su(a,t),a=yu(a,t),o=Eu(o),a=Eu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const D=S+h+o,U=S+w+a,C=xu(r,r.VERTEX_SHADER,D),L=xu(r,r.FRAGMENT_SHADER,U);r.attachShader(p,C),r.attachShader(p,L),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function se(te){if(i.debug.checkShaderErrors){const fe=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(C).trim(),q=r.getShaderInfoLog(L).trim();let Q=!0,ae=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,C,L);else{const J=Mu(r,C,"vertex"),j=Mu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+fe+`
`+J+`
`+j)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(F===""||q==="")&&(ae=!1);ae&&(te.diagnostics={runnable:Q,programLog:fe,vertexShader:{log:F,prefix:h},fragmentShader:{log:q,prefix:w}})}r.deleteShader(C),r.deleteShader(L),b=new ao(r,p),A=O_(r,p)}let b;this.getUniforms=function(){return b===void 0&&se(this),b};let A;this.getAttributes=function(){return A===void 0&&se(this),A};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=r.getProgramParameter(p,R_)),K},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=L,this}let K_=0;class $_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z_(e),t.set(e,n)),n}}class Z_{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}}function J_(i,e,t,n,r,s,o){const a=new dh,l=new $_,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function p(b,A,K,te,fe){const F=te.fog,q=fe.geometry,Q=b.isMeshStandardMaterial?te.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),J=ae&&ae.mapping===vo?ae.image.height:null,j=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=ie!==void 0?ie.length:0;let Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let $,le,ye,Ie;if(j){const Tn=Fi[j];$=Tn.vertexShader,le=Tn.fragmentShader}else $=b.vertexShader,le=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),Ie=l.getFragmentShaderID(b);const xe=i.getRenderTarget(),re=fe.isInstancedMesh===!0,qe=fe.isBatchedMesh===!0,me=!!b.map,Ue=!!b.matcap,H=!!ae,ot=!!b.aoMap,Oe=!!b.lightMap,Ye=!!b.bumpMap,we=!!b.normalMap,bt=!!b.displacementMap,Ze=!!b.emissiveMap,T=!!b.metalnessMap,x=!!b.roughnessMap,G=b.anisotropy>0,ue=b.clearcoat>0,ne=b.iridescence>0,he=b.sheen>0,De=b.transmission>0,_e=G&&!!b.anisotropyMap,Ae=ue&&!!b.clearcoatMap,Be=ue&&!!b.clearcoatNormalMap,rt=ue&&!!b.clearcoatRoughnessMap,ee=ne&&!!b.iridescenceMap,St=ne&&!!b.iridescenceThicknessMap,ct=he&&!!b.sheenColorMap,je=he&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,be=!!b.specularColorMap,et=!!b.specularIntensityMap,gt=De&&!!b.transmissionMap,Bt=De&&!!b.thicknessMap,tt=!!b.gradientMap,pe=!!b.alphaMap,P=b.alphaTest>0,ve=!!b.alphaHash,de=!!b.extensions,Ve=!!q.attributes.uv1,Re=!!q.attributes.uv2,yt=!!q.attributes.uv3;let At=Sr;return b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(At=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:$,fragmentShader:le,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:Ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:qe,instancing:re,instancingColor:re&&fe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:nr,map:me,matcap:Ue,envMap:H,envMapMode:H&&ae.mapping,envMapCubeUVHeight:J,aoMap:ot,lightMap:Oe,bumpMap:Ye,normalMap:we,displacementMap:f&&bt,emissiveMap:Ze,normalMapObjectSpace:we&&b.normalMapType===Xf,normalMapTangentSpace:we&&b.normalMapType===oh,metalnessMap:T,roughnessMap:x,anisotropy:G,anisotropyMap:_e,clearcoat:ue,clearcoatMap:Ae,clearcoatNormalMap:Be,clearcoatRoughnessMap:rt,iridescence:ne,iridescenceMap:ee,iridescenceThicknessMap:St,sheen:he,sheenColorMap:ct,sheenRoughnessMap:je,specularMap:Pe,specularColorMap:be,specularIntensityMap:et,transmission:De,transmissionMap:gt,thicknessMap:Bt,gradientMap:tt,opaque:b.transparent===!1&&b.blending===bs,alphaMap:pe,alphaTest:P,alphaHash:ve,combine:b.combine,mapUv:me&&v(b.map.channel),aoMapUv:ot&&v(b.aoMap.channel),lightMapUv:Oe&&v(b.lightMap.channel),bumpMapUv:Ye&&v(b.bumpMap.channel),normalMapUv:we&&v(b.normalMap.channel),displacementMapUv:bt&&v(b.displacementMap.channel),emissiveMapUv:Ze&&v(b.emissiveMap.channel),metalnessMapUv:T&&v(b.metalnessMap.channel),roughnessMapUv:x&&v(b.roughnessMap.channel),anisotropyMapUv:_e&&v(b.anisotropyMap.channel),clearcoatMapUv:Ae&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Be&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:je&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:be&&v(b.specularColorMap.channel),specularIntensityMapUv:et&&v(b.specularIntensityMap.channel),transmissionMapUv:gt&&v(b.transmissionMap.channel),thicknessMapUv:Bt&&v(b.thicknessMap.channel),alphaMapUv:pe&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(we||G),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:Re,vertexUv3s:yt,pointsUvs:fe.isPoints===!0&&!!q.attributes.uv&&(me||pe),fog:!!F,useFog:b.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:fe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,useLegacyLights:i._useLegacyLights,decodeVideoTexture:me&&b.map.isVideoTexture===!0&&It.getTransfer(b.map.colorSpace)===Ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ji,flipSided:b.side===ei,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:de&&b.extensions.derivatives===!0,extensionFragDepth:de&&b.extensions.fragDepth===!0,extensionDrawBuffers:de&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function h(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)A.push(K),A.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(w(A,b),S(A,b),A.push(i.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function w(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function S(b,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function D(b){const A=_[b.type];let K;if(A){const te=Fi[A];K=Id.clone(te.uniforms)}else K=b.uniforms;return K}function U(b,A){let K;for(let te=0,fe=c.length;te<fe;te++){const F=c[te];if(F.cacheKey===A){K=F,++K.usedTimes;break}}return K===void 0&&(K=new j_(i,A,b,s),c.push(K)),K}function C(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function se(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:D,acquireProgram:U,releaseProgram:C,releaseShaderCache:L,programs:c,dispose:se}}function Q_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function e0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Au(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,_,v,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=p),e++,h}function a(d,f,m,_,v,p){const h=o(d,f,m,_,v,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,_,v,p){const h=o(d,f,m,_,v,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||e0),n.length>1&&n.sort(f||bu),r.length>1&&r.sort(f||bu)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function t0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Au,i.set(n,[o])):r>=s.length?(o=new Au,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function n0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ht};break;case"SpotLight":t={position:new O,direction:new O,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function i0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let r0=0;function s0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a0(i,e){const t=new n0,n=i0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new vt,a=new vt;function l(u,d){let f=0,m=0,_=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let v=0,p=0,h=0,w=0,S=0,D=0,U=0,C=0,L=0,se=0,b=0;u.sort(s0);const A=d===!0?Math.PI:1;for(let te=0,fe=u.length;te<fe;te++){const F=u[te],q=F.color,Q=F.intensity,ae=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=q.r*Q*A,m+=q.g*Q*A,_+=q.b*Q*A;else if(F.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(F.sh.coefficients[j],Q);b++}else if(F.isDirectionalLight){const j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity*A),F.castShadow){const ie=F.shadow,ce=n.get(F);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,r.directionalShadow[v]=ce,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=F.shadow.matrix,D++}r.directional[v]=j,v++}else if(F.isSpotLight){const j=t.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(q).multiplyScalar(Q*A),j.distance=ae,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,r.spot[h]=j;const ie=F.shadow;if(F.map&&(r.spotLightMap[L]=F.map,L++,ie.updateMatrices(F),F.castShadow&&se++),r.spotLightMatrix[h]=ie.matrix,F.castShadow){const ce=n.get(F);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,r.spotShadow[h]=ce,r.spotShadowMap[h]=J,C++}h++}else if(F.isRectAreaLight){const j=t.get(F);j.color.copy(q).multiplyScalar(Q),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),r.rectArea[w]=j,w++}else if(F.isPointLight){const j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity*A),j.distance=F.distance,j.decay=F.decay,F.castShadow){const ie=F.shadow,ce=n.get(F);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,ce.shadowCameraNear=ie.camera.near,ce.shadowCameraFar=ie.camera.far,r.pointShadow[p]=ce,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=F.shadow.matrix,U++}r.point[p]=j,p++}else if(F.isHemisphereLight){const j=t.get(F);j.skyColor.copy(F.color).multiplyScalar(Q*A),j.groundColor.copy(F.groundColor).multiplyScalar(Q*A),r.hemi[S]=j,S++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const K=r.hash;(K.directionalLength!==v||K.pointLength!==p||K.spotLength!==h||K.rectAreaLength!==w||K.hemiLength!==S||K.numDirectionalShadows!==D||K.numPointShadows!==U||K.numSpotShadows!==C||K.numSpotMaps!==L||K.numLightProbes!==b)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=w,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+L-se,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=se,r.numLightProbes=b,K.directionalLength=v,K.pointLength=p,K.spotLength=h,K.rectAreaLength=w,K.hemiLength=S,K.numDirectionalShadows=D,K.numPointShadows=U,K.numSpotShadows=C,K.numSpotMaps=L,K.numLightProbes=b,r.version=r0++)}function c(u,d){let f=0,m=0,_=0,v=0,p=0;const h=d.matrixWorldInverse;for(let w=0,S=u.length;w<S;w++){const D=u[w];if(D.isDirectionalLight){const U=r.directional[f];U.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(h),f++}else if(D.isSpotLight){const U=r.spot[_];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(h),U.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(h),_++}else if(D.isRectAreaLight){const U=r.rectArea[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(h),a.identity(),o.copy(D.matrixWorld),o.premultiply(h),a.extractRotation(o),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),v++}else if(D.isPointLight){const U=r.point[m];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(h),m++}else if(D.isHemisphereLight){const U=r.hemi[p];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function wu(i,e){const t=new a0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o0(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new wu(i,e),t.set(s,[l])):o>=a.length?(l=new wu(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class l0 extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c0 extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const u0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function f0(i,e,t){let n=new Nl;const r=new Mt,s=new Mt,o=new Ot,a=new l0({depthPacking:Wf}),l=new c0,c={},u=t.maxTextureSize,d={[Er]:ei,[ei]:Er,[Ji]:Ji},f=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:u0,fragmentShader:h0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Li;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ci(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let h=this.type;this.render=function(C,L,se){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),A=i.getActiveCubeFace(),K=i.getActiveMipmapLevel(),te=i.state;te.setBlending(Mr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const fe=h!==Zi&&this.type===Zi,F=h===Zi&&this.type!==Zi;for(let q=0,Q=C.length;q<Q;q++){const ae=C[q],J=ae.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const j=J.getFrameExtents();if(r.multiply(j),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,J.mapSize.y=s.y)),J.map===null||fe===!0||F===!0){const ce=this.type!==Zi?{minFilter:Pn,magFilter:Pn}:{};J.map!==null&&J.map.dispose(),J.map=new jr(r.x,r.y,ce),J.map.texture.name=ae.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ie=J.getViewportCount();for(let ce=0;ce<ie;ce++){const Te=J.getViewport(ce);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),te.viewport(o),J.updateMatrices(ae,ce),n=J.getFrustum(),D(L,se,J.camera,ae,this.type)}J.isPointLightShadow!==!0&&this.type===Zi&&w(J,se),J.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(b,A,K)};function w(C,L){const se=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new jr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,se,f,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,se,m,v,null)}function S(C,L,se,b){let A=null;const K=se.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(K!==void 0)A=K;else if(A=se.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const te=A.uuid,fe=L.uuid;let F=c[te];F===void 0&&(F={},c[te]=F);let q=F[fe];q===void 0&&(q=A.clone(),F[fe]=q,L.addEventListener("dispose",U)),A=q}if(A.visible=L.visible,A.wireframe=L.wireframe,b===Zi?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:d[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,se.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const te=i.properties.get(A);te.light=se}return A}function D(C,L,se,b,A){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Zi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld);const fe=e.update(C),F=C.material;if(Array.isArray(F)){const q=fe.groups;for(let Q=0,ae=q.length;Q<ae;Q++){const J=q[Q],j=F[J.materialIndex];if(j&&j.visible){const ie=S(C,j,b,A);C.onBeforeShadow(i,C,L,se,fe,ie,J),i.renderBufferDirect(se,null,fe,ie,C,J),C.onAfterShadow(i,C,L,se,fe,ie,J)}}}else if(F.visible){const q=S(C,F,b,A);C.onBeforeShadow(i,C,L,se,fe,q,null),i.renderBufferDirect(se,null,fe,q,C,null),C.onAfterShadow(i,C,L,se,fe,q,null)}}const te=C.children;for(let fe=0,F=te.length;fe<F;fe++)D(te[fe],L,se,b,A)}function U(C){C.target.removeEventListener("dispose",U);for(const se in c){const b=c[se],A=C.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function d0(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const ve=new Ot;let de=null;const Ve=new Ot(0,0,0,0);return{setMask:function(Re){de!==Re&&!P&&(i.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){P=Re},setClear:function(Re,yt,At,Kt,Tn){Tn===!0&&(Re*=Kt,yt*=Kt,At*=Kt),ve.set(Re,yt,At,Kt),Ve.equals(ve)===!1&&(i.clearColor(Re,yt,At,Kt),Ve.copy(ve))},reset:function(){P=!1,de=null,Ve.set(-1,0,0,0)}}}function s(){let P=!1,ve=null,de=null,Ve=null;return{setTest:function(Re){Re?qe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Re){ve!==Re&&!P&&(i.depthMask(Re),ve=Re)},setFunc:function(Re){if(de!==Re){switch(Re){case _f:i.depthFunc(i.NEVER);break;case vf:i.depthFunc(i.ALWAYS);break;case xf:i.depthFunc(i.LESS);break;case oo:i.depthFunc(i.LEQUAL);break;case Mf:i.depthFunc(i.EQUAL);break;case Sf:i.depthFunc(i.GEQUAL);break;case yf:i.depthFunc(i.GREATER);break;case Ef:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Re}},setLocked:function(Re){P=Re},setClear:function(Re){Ve!==Re&&(i.clearDepth(Re),Ve=Re)},reset:function(){P=!1,ve=null,de=null,Ve=null}}}function o(){let P=!1,ve=null,de=null,Ve=null,Re=null,yt=null,At=null,Kt=null,Tn=null;return{setTest:function(wt){P||(wt?qe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(wt){ve!==wt&&!P&&(i.stencilMask(wt),ve=wt)},setFunc:function(wt,gn,$t){(de!==wt||Ve!==gn||Re!==$t)&&(i.stencilFunc(wt,gn,$t),de=wt,Ve=gn,Re=$t)},setOp:function(wt,gn,$t){(yt!==wt||At!==gn||Kt!==$t)&&(i.stencilOp(wt,gn,$t),yt=wt,At=gn,Kt=$t)},setLocked:function(wt){P=wt},setClear:function(wt){Tn!==wt&&(i.clearStencil(wt),Tn=wt)},reset:function(){P=!1,ve=null,de=null,Ve=null,Re=null,yt=null,At=null,Kt=null,Tn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,h=!1,w=null,S=null,D=null,U=null,C=null,L=null,se=null,b=new ht(0,0,0),A=0,K=!1,te=null,fe=null,F=null,q=null,Q=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=j>=1):ie.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=j>=2);let ce=null,Te={};const $=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),ye=new Ot().fromArray($),Ie=new Ot().fromArray(le);function xe(P,ve,de,Ve){const Re=new Uint8Array(4),yt=i.createTexture();i.bindTexture(P,yt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<de;At++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ve+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return yt}const re={};re[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(re[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),qe(i.DEPTH_TEST),l.setFunc(oo),Ze(!1),T(sc),qe(i.CULL_FACE),we(Mr);function qe(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function me(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Ue(P,ve){return m[P]!==ve?(i.bindFramebuffer(P,ve),m[P]=ve,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ve),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function H(P,ve){let de=v,Ve=!1;if(P)if(de=_.get(ve),de===void 0&&(de=[],_.set(ve,de)),P.isWebGLMultipleRenderTargets){const Re=P.texture;if(de.length!==Re.length||de[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,At=Re.length;yt<At;yt++)de[yt]=i.COLOR_ATTACHMENT0+yt;de.length=Re.length,Ve=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,Ve=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,Ve=!0);Ve&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function ot(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Oe={[Gr]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};if(n)Oe[cc]=i.MIN,Oe[uc]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Oe[cc]=P.MIN_EXT,Oe[uc]=P.MAX_EXT)}const Ye={[rf]:i.ZERO,[sf]:i.ONE,[af]:i.SRC_COLOR,[Ml]:i.SRC_ALPHA,[ff]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[lf]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[cf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[pf]:i.ONE_MINUS_CONSTANT_COLOR,[mf]:i.CONSTANT_ALPHA,[gf]:i.ONE_MINUS_CONSTANT_ALPHA};function we(P,ve,de,Ve,Re,yt,At,Kt,Tn,wt){if(P===Mr){h===!0&&(me(i.BLEND),h=!1);return}if(h===!1&&(qe(i.BLEND),h=!0),P!==ef){if(P!==w||wt!==K){if((S!==Gr||C!==Gr)&&(i.blendEquation(i.FUNC_ADD),S=Gr,C=Gr),wt)switch(P){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}D=null,U=null,L=null,se=null,b.set(0,0,0),A=0,w=P,K=wt}return}Re=Re||ve,yt=yt||de,At=At||Ve,(ve!==S||Re!==C)&&(i.blendEquationSeparate(Oe[ve],Oe[Re]),S=ve,C=Re),(de!==D||Ve!==U||yt!==L||At!==se)&&(i.blendFuncSeparate(Ye[de],Ye[Ve],Ye[yt],Ye[At]),D=de,U=Ve,L=yt,se=At),(Kt.equals(b)===!1||Tn!==A)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Tn),b.copy(Kt),A=Tn),w=P,K=!1}function bt(P,ve){P.side===Ji?me(i.CULL_FACE):qe(i.CULL_FACE);let de=P.side===ei;ve&&(de=!de),Ze(de),P.blending===bs&&P.transparent===!1?we(Mr):we(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ve=P.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),G(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?qe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(P){te!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),te=P)}function T(P){P!==Jh?(qe(i.CULL_FACE),P!==fe&&(P===sc?i.cullFace(i.BACK):P===Qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),fe=P}function x(P){P!==F&&(J&&i.lineWidth(P),F=P)}function G(P,ve,de){P?(qe(i.POLYGON_OFFSET_FILL),(q!==ve||Q!==de)&&(i.polygonOffset(ve,de),q=ve,Q=de)):me(i.POLYGON_OFFSET_FILL)}function ue(P){P?qe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function ne(P){P===void 0&&(P=i.TEXTURE0+ae-1),ce!==P&&(i.activeTexture(P),ce=P)}function he(P,ve,de){de===void 0&&(ce===null?de=i.TEXTURE0+ae-1:de=ce);let Ve=Te[de];Ve===void 0&&(Ve={type:void 0,texture:void 0},Te[de]=Ve),(Ve.type!==P||Ve.texture!==ve)&&(ce!==de&&(i.activeTexture(de),ce=de),i.bindTexture(P,ve||re[P]),Ve.type=P,Ve.texture=ve)}function De(){const P=Te[ce];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(P){ye.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ye.copy(P))}function gt(P){Ie.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ie.copy(P))}function Bt(P,ve){let de=d.get(ve);de===void 0&&(de=new WeakMap,d.set(ve,de));let Ve=de.get(P);Ve===void 0&&(Ve=i.getUniformBlockIndex(ve,P.name),de.set(P,Ve))}function tt(P,ve){const Ve=d.get(ve).get(P);u.get(ve)!==Ve&&(i.uniformBlockBinding(ve,Ve,P.__bindingPointIndex),u.set(ve,Ve))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,Te={},m={},_=new WeakMap,v=[],p=null,h=!1,w=null,S=null,D=null,U=null,C=null,L=null,se=null,b=new ht(0,0,0),A=0,K=!1,te=null,fe=null,F=null,q=null,Q=null,ye.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:qe,disable:me,bindFramebuffer:Ue,drawBuffers:H,useProgram:ot,setBlending:we,setMaterial:bt,setFlipSided:Ze,setCullFace:T,setLineWidth:x,setPolygonOffset:G,setScissorTest:ue,activeTexture:ne,bindTexture:he,unbindTexture:De,compressedTexImage2D:_e,compressedTexImage3D:Ae,texImage2D:Pe,texImage3D:be,updateUBOMapping:Bt,uniformBlockBinding:tt,texStorage2D:ct,texStorage3D:je,texSubImage2D:Be,texSubImage3D:rt,compressedTexSubImage2D:ee,compressedTexSubImage3D:St,scissor:et,viewport:gt,reset:pe}}function p0(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return m?new OffscreenCanvas(T,x):la("canvas")}function v(T,x,G,ue){let ne=1;if((T.width>ue||T.height>ue)&&(ne=ue/Math.max(T.width,T.height)),ne<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const he=x?mo:Math.floor,De=he(ne*T.width),_e=he(ne*T.height);d===void 0&&(d=_(De,_e));const Ae=G?_(De,_e):d;return Ae.width=De,Ae.height=_e,Ae.getContext("2d").drawImage(T,0,0,De,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+De+"x"+_e+")."),Ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Rl(T.width)&&Rl(T.height)}function h(T){return a?!1:T.wrapS!==Ri||T.wrapT!==Ri||T.minFilter!==Pn&&T.minFilter!==di}function w(T,x){return T.generateMipmaps&&x&&T.minFilter!==Pn&&T.minFilter!==di}function S(T){i.generateMipmap(T)}function D(T,x,G,ue,ne=!1){if(a===!1)return x;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=x;if(x===i.RED&&(G===i.FLOAT&&(he=i.R32F),G===i.HALF_FLOAT&&(he=i.R16F),G===i.UNSIGNED_BYTE&&(he=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.R8UI),G===i.UNSIGNED_SHORT&&(he=i.R16UI),G===i.UNSIGNED_INT&&(he=i.R32UI),G===i.BYTE&&(he=i.R8I),G===i.SHORT&&(he=i.R16I),G===i.INT&&(he=i.R32I)),x===i.RG&&(G===i.FLOAT&&(he=i.RG32F),G===i.HALF_FLOAT&&(he=i.RG16F),G===i.UNSIGNED_BYTE&&(he=i.RG8)),x===i.RGBA){const De=ne?uo:It.getTransfer(ue);G===i.FLOAT&&(he=i.RGBA32F),G===i.HALF_FLOAT&&(he=i.RGBA16F),G===i.UNSIGNED_BYTE&&(he=De===Ht?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function U(T,x,G){return w(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==Pn&&T.minFilter!==di?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){return T===Pn||T===fc||T===Io?i.NEAREST:i.LINEAR}function L(T){const x=T.target;x.removeEventListener("dispose",L),b(x),x.isVideoTexture&&u.delete(x)}function se(T){const x=T.target;x.removeEventListener("dispose",se),K(x)}function b(T){const x=n.get(T);if(x.__webglInit===void 0)return;const G=T.source,ue=f.get(G);if(ue){const ne=ue[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(T),Object.keys(ue).length===0&&f.delete(G)}n.remove(T)}function A(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const G=T.source,ue=f.get(G);delete ue[x.__cacheKey],o.memory.textures--}function K(T){const x=T.texture,G=n.get(T),ue=n.get(x);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let he=0;he<G.__webglFramebuffer[ne].length;he++)i.deleteFramebuffer(G.__webglFramebuffer[ne][he]);else i.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)i.deleteFramebuffer(G.__webglFramebuffer[ne]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,he=x.length;ne<he;ne++){const De=n.get(x[ne]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),o.memory.textures--),n.remove(x[ne])}n.remove(x),n.remove(T)}let te=0;function fe(){te=0}function F(){const T=te;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),te+=1,T}function q(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Q(T,x){const G=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const ue=T.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(G,T,x);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function ae(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ye(G,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function J(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ye(G,T,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function j(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Ie(G,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const ie={[Tl]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[bl]:i.MIRRORED_REPEAT},ce={[Pn]:i.NEAREST,[fc]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[di]:i.LINEAR,[Uf]:i.LINEAR_MIPMAP_NEAREST,[aa]:i.LINEAR_MIPMAP_LINEAR},Te={[qf]:i.NEVER,[Jf]:i.ALWAYS,[Yf]:i.LESS,[lh]:i.LEQUAL,[jf]:i.EQUAL,[Zf]:i.GEQUAL,[Kf]:i.GREATER,[$f]:i.NOTEQUAL};function $(T,x,G){if(G?(i.texParameteri(T,i.TEXTURE_WRAP_S,ie[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ie[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ie[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[x.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ri||x.wrapT!==Ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,C(x.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==Pn&&x.minFilter!==di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Pn||x.minFilter!==Io&&x.minFilter!==aa||x.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===oa&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(T,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function le(T,x){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L));const ue=x.source;let ne=f.get(ue);ne===void 0&&(ne={},f.set(ue,ne));const he=q(x);if(he!==T.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[he].usedTimes++;const De=ne[T.__cacheKey];De!==void 0&&(ne[T.__cacheKey].usedTimes--,De.usedTimes===0&&A(x)),T.__cacheKey=he,T.__webglTexture=ne[he].texture}return G}function ye(T,x,G){let ue=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ue=i.TEXTURE_3D);const ne=le(T,x),he=x.source;t.bindTexture(ue,T.__webglTexture,i.TEXTURE0+G);const De=n.get(he);if(he.version!==De.__version||ne===!0){t.activeTexture(i.TEXTURE0+G);const _e=It.getPrimaries(It.workingColorSpace),Ae=x.colorSpace===mi?null:It.getPrimaries(x.colorSpace),Be=x.colorSpace===mi||_e===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const rt=h(x)&&p(x.image)===!1;let ee=v(x.image,rt,!1,r.maxTextureSize);ee=Ze(x,ee);const St=p(ee)||a,ct=s.convert(x.format,x.colorSpace);let je=s.convert(x.type),Pe=D(x.internalFormat,ct,je,x.colorSpace,x.isVideoTexture);$(ue,x,St);let be;const et=x.mipmaps,gt=a&&x.isVideoTexture!==!0&&Pe!==sh,Bt=De.__version===void 0||ne===!0,tt=U(x,ee,St);if(x.isDepthTexture)Pe=i.DEPTH_COMPONENT,a?x.type===er?Pe=i.DEPTH_COMPONENT32F:x.type===vr?Pe=i.DEPTH_COMPONENT24:x.type===Xr?Pe=i.DEPTH24_STENCIL8:Pe=i.DEPTH_COMPONENT16:x.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===qr&&Pe===i.DEPTH_COMPONENT&&x.type!==Dl&&x.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=vr,je=s.convert(x.type)),x.format===Cs&&Pe===i.DEPTH_COMPONENT&&(Pe=i.DEPTH_STENCIL,x.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Xr,je=s.convert(x.type))),Bt&&(gt?t.texStorage2D(i.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ct,je,null));else if(x.isDataTexture)if(et.length>0&&St){gt&&Bt&&t.texStorage2D(i.TEXTURE_2D,tt,Pe,et[0].width,et[0].height);for(let pe=0,P=et.length;pe<P;pe++)be=et[pe],gt?t.texSubImage2D(i.TEXTURE_2D,pe,0,0,be.width,be.height,ct,je,be.data):t.texImage2D(i.TEXTURE_2D,pe,Pe,be.width,be.height,0,ct,je,be.data);x.generateMipmaps=!1}else gt?(Bt&&t.texStorage2D(i.TEXTURE_2D,tt,Pe,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ct,je,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ct,je,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){gt&&Bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Pe,et[0].width,et[0].height,ee.depth);for(let pe=0,P=et.length;pe<P;pe++)be=et[pe],x.format!==pi?ct!==null?gt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,ee.depth,ct,be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Pe,be.width,be.height,ee.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,ee.depth,ct,je,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Pe,be.width,be.height,ee.depth,0,ct,je,be.data)}else{gt&&Bt&&t.texStorage2D(i.TEXTURE_2D,tt,Pe,et[0].width,et[0].height);for(let pe=0,P=et.length;pe<P;pe++)be=et[pe],x.format!==pi?ct!==null?gt?t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,be.width,be.height,ct,be.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(i.TEXTURE_2D,pe,0,0,be.width,be.height,ct,je,be.data):t.texImage2D(i.TEXTURE_2D,pe,Pe,be.width,be.height,0,ct,je,be.data)}else if(x.isDataArrayTexture)gt?(Bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Pe,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ct,je,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,ct,je,ee.data);else if(x.isData3DTexture)gt?(Bt&&t.texStorage3D(i.TEXTURE_3D,tt,Pe,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ct,je,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,ct,je,ee.data);else if(x.isFramebufferTexture){if(Bt)if(gt)t.texStorage2D(i.TEXTURE_2D,tt,Pe,ee.width,ee.height);else{let pe=ee.width,P=ee.height;for(let ve=0;ve<tt;ve++)t.texImage2D(i.TEXTURE_2D,ve,Pe,pe,P,0,ct,je,null),pe>>=1,P>>=1}}else if(et.length>0&&St){gt&&Bt&&t.texStorage2D(i.TEXTURE_2D,tt,Pe,et[0].width,et[0].height);for(let pe=0,P=et.length;pe<P;pe++)be=et[pe],gt?t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ct,je,be):t.texImage2D(i.TEXTURE_2D,pe,Pe,ct,je,be);x.generateMipmaps=!1}else gt?(Bt&&t.texStorage2D(i.TEXTURE_2D,tt,Pe,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,je,ee)):t.texImage2D(i.TEXTURE_2D,0,Pe,ct,je,ee);w(x,St)&&S(ue),De.__version=he.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ie(T,x,G){if(x.image.length!==6)return;const ue=le(T,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const he=n.get(ne);if(ne.version!==he.__version||ue===!0){t.activeTexture(i.TEXTURE0+G);const De=It.getPrimaries(It.workingColorSpace),_e=x.colorSpace===mi?null:It.getPrimaries(x.colorSpace),Ae=x.colorSpace===mi||De===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Be=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let pe=0;pe<6;pe++)!Be&&!rt?ee[pe]=v(x.image[pe],!1,!0,r.maxCubemapSize):ee[pe]=rt?x.image[pe].image:x.image[pe],ee[pe]=Ze(x,ee[pe]);const St=ee[0],ct=p(St)||a,je=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type),be=D(x.internalFormat,je,Pe,x.colorSpace),et=a&&x.isVideoTexture!==!0,gt=he.__version===void 0||ue===!0;let Bt=U(x,St,ct);$(i.TEXTURE_CUBE_MAP,x,ct);let tt;if(Be){et&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,be,St.width,St.height);for(let pe=0;pe<6;pe++){tt=ee[pe].mipmaps;for(let P=0;P<tt.length;P++){const ve=tt[P];x.format!==pi?je!==null?et?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P,0,0,ve.width,ve.height,je,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P,0,0,ve.width,ve.height,je,Pe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P,be,ve.width,ve.height,0,je,Pe,ve.data)}}}else{tt=x.mipmaps,et&&gt&&(tt.length>0&&Bt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,be,ee[0].width,ee[0].height));for(let pe=0;pe<6;pe++)if(rt){et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ee[pe].width,ee[pe].height,je,Pe,ee[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,be,ee[pe].width,ee[pe].height,0,je,Pe,ee[pe].data);for(let P=0;P<tt.length;P++){const de=tt[P].image[pe].image;et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P+1,0,0,de.width,de.height,je,Pe,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P+1,be,de.width,de.height,0,je,Pe,de.data)}}else{et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,Pe,ee[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,be,je,Pe,ee[pe]);for(let P=0;P<tt.length;P++){const ve=tt[P];et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P+1,0,0,je,Pe,ve.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,P+1,be,je,Pe,ve.image[pe])}}}w(x,ct)&&S(i.TEXTURE_CUBE_MAP),he.__version=ne.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xe(T,x,G,ue,ne,he){const De=s.convert(G.format,G.colorSpace),_e=s.convert(G.type),Ae=D(G.internalFormat,De,_e,G.colorSpace);if(!n.get(x).__hasExternalTextures){const rt=Math.max(1,x.width>>he),ee=Math.max(1,x.height>>he);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,Ae,rt,ee,x.depth,0,De,_e,null):t.texImage2D(ne,he,Ae,rt,ee,0,De,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),we(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ne,n.get(G).__webglTexture,0,Ye(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ne,n.get(G).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(T,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let ue=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||we(x)){const ne=x.depthTexture;ne&&ne.isDepthTexture&&(ne.type===er?ue=i.DEPTH_COMPONENT32F:ne.type===vr&&(ue=i.DEPTH_COMPONENT24));const he=Ye(x);we(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ue,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ue,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const ue=Ye(x);G&&we(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,x.width,x.height):we(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const ue=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ne=0;ne<ue.length;ne++){const he=ue[ne],De=s.convert(he.format,he.colorSpace),_e=s.convert(he.type),Ae=D(he.internalFormat,De,_e,he.colorSpace),Be=Ye(x);G&&we(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ae,x.width,x.height):we(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,Ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const ue=n.get(x.depthTexture).__webglTexture,ne=Ye(x);if(x.depthTexture.format===qr)we(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(x.depthTexture.format===Cs)we(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function me(T){const x=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");qe(x.__webglFramebuffer,T)}else if(G){x.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ue]),x.__webglDepthbuffer[ue]=i.createRenderbuffer(),re(x.__webglDepthbuffer[ue],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),re(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(T,x,G){const ue=n.get(T);x!==void 0&&xe(ue.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&me(T)}function H(T){const x=T.texture,G=n.get(T),ue=n.get(x);T.addEventListener("dispose",se),T.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=x.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,De=p(T)||a;if(ne){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)G.__webglFramebuffer[_e][Ae]=i.createFramebuffer()}else G.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)G.__webglFramebuffer[_e]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(he)if(r.drawBuffers){const _e=T.texture;for(let Ae=0,Be=_e.length;Ae<Be;Ae++){const rt=n.get(_e[Ae]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&we(T)===!1){const _e=he?x:[x];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Be=_e[Ae];G.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const rt=s.convert(Be.format,Be.colorSpace),ee=s.convert(Be.type),St=D(Be.internalFormat,rt,ee,Be.colorSpace,T.isXRRenderTarget===!0),ct=Ye(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,St,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),re(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),$(i.TEXTURE_CUBE_MAP,x,De);for(let _e=0;_e<6;_e++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)xe(G.__webglFramebuffer[_e][Ae],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae);else xe(G.__webglFramebuffer[_e],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);w(x,De)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const _e=T.texture;for(let Ae=0,Be=_e.length;Ae<Be;Ae++){const rt=_e[Ae],ee=n.get(rt);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),$(i.TEXTURE_2D,rt,De),xe(G.__webglFramebuffer,T,rt,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),w(rt,De)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?_e=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ue.__webglTexture),$(_e,x,De),a&&x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)xe(G.__webglFramebuffer[Ae],T,x,i.COLOR_ATTACHMENT0,_e,Ae);else xe(G.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,_e,0);w(x,De)&&S(_e),t.unbindTexture()}T.depthBuffer&&me(T)}function ot(T){const x=p(T)||a,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ue=0,ne=G.length;ue<ne;ue++){const he=G[ue];if(w(he,x)){const De=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(he).__webglTexture;t.bindTexture(De,_e),S(De),t.unbindTexture()}}}function Oe(T){if(a&&T.samples>0&&we(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,ue=T.height;let ne=i.COLOR_BUFFER_BIT;const he=[],De=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),Ae=T.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Be=0;Be<x.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Be=0;Be<x.length;Be++){he.push(i.COLOR_ATTACHMENT0+Be),T.depthBuffer&&he.push(De);const rt=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(rt===!1&&(T.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Be]),rt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[De]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[De])),Ae){const ee=n.get(x[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,G,ue,0,0,G,ue,ne,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Be=0;Be<x.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Be]);const rt=n.get(x[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Ye(T){return Math.min(r.maxSamples,T.samples)}function we(T){const x=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Ze(T,x){const G=T.colorSpace,ue=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===wl||G!==nr&&G!==mi&&(It.getTransfer(G)===Ht?a===!1?e.has("EXT_sRGB")===!0&&ue===pi?(T.format=wl,T.minFilter=di,T.generateMipmaps=!1):x=uh.sRGBToLinear(x):(ue!==pi||ne!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}this.allocateTextureUnit=F,this.resetTextureUnits=fe,this.setTexture2D=Q,this.setTexture2DArray=ae,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=we}function m0(i,e,t){const n=t.isWebGL2;function r(s,o=mi){let a;const l=It.getTransfer(o);if(s===yr)return i.UNSIGNED_BYTE;if(s===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===th)return i.UNSIGNED_SHORT_5_5_5_1;if(s===If)return i.BYTE;if(s===Nf)return i.SHORT;if(s===Dl)return i.UNSIGNED_SHORT;if(s===Qu)return i.INT;if(s===vr)return i.UNSIGNED_INT;if(s===er)return i.FLOAT;if(s===oa)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ff)return i.ALPHA;if(s===pi)return i.RGBA;if(s===Of)return i.LUMINANCE;if(s===Bf)return i.LUMINANCE_ALPHA;if(s===qr)return i.DEPTH_COMPONENT;if(s===Cs)return i.DEPTH_STENCIL;if(s===wl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zf)return i.RED;if(s===nh)return i.RED_INTEGER;if(s===Hf)return i.RG;if(s===ih)return i.RG_INTEGER;if(s===rh)return i.RGBA_INTEGER;if(s===No||s===Fo||s===Oo||s===Bo)if(l===Ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===No)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===No)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dc||s===pc||s===mc||s===gc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_c||s===vc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_c)return l===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xc||s===Mc||s===Sc||s===yc||s===Ec||s===Tc||s===bc||s===Ac||s===wc||s===Rc||s===Cc||s===Pc||s===Lc||s===Dc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ec)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ac)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zo||s===Uc||s===Ic)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zo)return l===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ic)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kf||s===Nc||s===Fc||s===Oc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===zo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Nc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Oc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class g0 extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qa extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _0={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class v0 extends Ds{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const v=t.getContextAttributes();let p=null,h=null;const w=[],S=[],D=new Mt;let U=null;const C=new Dn;C.layers.enable(1),C.viewport=new Ot;const L=new Dn;L.layers.enable(2),L.viewport=new Ot;const se=[C,L],b=new g0;b.layers.enable(1),b.layers.enable(2);let A=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=w[$];return le===void 0&&(le=new cl,w[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=w[$];return le===void 0&&(le=new cl,w[$]=le),le.getGripSpace()},this.getHand=function($){let le=w[$];return le===void 0&&(le=new cl,w[$]=le),le.getHandSpace()};function te($){const le=S.indexOf($.inputSource);if(le===-1)return;const ye=w[le];ye!==void 0&&(ye.update($.inputSource,$.frame,c||o),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function fe(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",F);for(let $=0;$<w.length;$++){const le=S[$];le!==null&&(S[$]=null,w[$].disconnect(le))}A=null,K=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new jr(m.framebufferWidth,m.framebufferHeight,{format:pi,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let le=null,ye=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?Cs:qr,ye=v.stencil?Xr:vr);const xe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new jr(f.textureWidth,f.textureHeight,{format:pi,type:yr,depthTexture:new Eh(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const re=e.properties.get(h);re.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F($){for(let le=0;le<$.removed.length;le++){const ye=$.removed[le],Ie=S.indexOf(ye);Ie>=0&&(S[Ie]=null,w[Ie].disconnect(ye))}for(let le=0;le<$.added.length;le++){const ye=$.added[le];let Ie=S.indexOf(ye);if(Ie===-1){for(let re=0;re<w.length;re++)if(re>=S.length){S.push(ye),Ie=re;break}else if(S[re]===null){S[re]=ye,Ie=re;break}if(Ie===-1)break}const xe=w[Ie];xe&&xe.connect(ye)}}const q=new O,Q=new O;function ae($,le,ye){q.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const Ie=q.distanceTo(Q),xe=le.projectionMatrix.elements,re=ye.projectionMatrix.elements,qe=xe[14]/(xe[10]-1),me=xe[14]/(xe[10]+1),Ue=(xe[9]+1)/xe[5],H=(xe[9]-1)/xe[5],ot=(xe[8]-1)/xe[0],Oe=(re[8]+1)/re[0],Ye=qe*ot,we=qe*Oe,bt=Ie/(-ot+Oe),Ze=bt*-ot;le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ze),$.translateZ(bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const T=qe+bt,x=me+bt,G=Ye-Ze,ue=we+(Ie-Ze),ne=Ue*me/x*T,he=H*me/x*T;$.projectionMatrix.makePerspective(G,ue,ne,he,T,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function J($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;b.near=L.near=C.near=$.near,b.far=L.far=C.far=$.far,(A!==b.near||K!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,K=b.far);const le=$.parent,ye=b.cameras;J(b,le);for(let Ie=0;Ie<ye.length;Ie++)J(ye[Ie],le);ye.length===2?ae(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),j($,b,le)};function j($,le,ye){ye===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ps*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)};let ie=null;function ce($,le){if(u=le.getViewerPose(c||o),_=le,u!==null){const ye=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Ie=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,Ie=!0);for(let xe=0;xe<ye.length;xe++){const re=ye[xe];let qe=null;if(m!==null)qe=m.getViewport(re);else{const Ue=d.getViewSubImage(f,re);qe=Ue.viewport,xe===0&&(e.setRenderTargetTextures(h,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(h))}let me=se[xe];me===void 0&&(me=new Dn,me.layers.enable(xe),me.viewport=new Ot,se[xe]=me),me.matrix.fromArray(re.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(re.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(qe.x,qe.y,qe.width,qe.height),xe===0&&(b.matrix.copy(me.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ie===!0&&b.cameras.push(me)}}for(let ye=0;ye<w.length;ye++){const Ie=S[ye],xe=w[ye];Ie!==null&&xe!==void 0&&xe.update(Ie,le,c||o)}ie&&ie($,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const Te=new Sh;Te.setAnimationLoop(ce),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}}function x0(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,vh(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,w,S,D){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,D)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,w,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===ei&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===ei&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const w=e.get(h).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,w,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ei&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const w=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function M0(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,S){const D=S.program;n.uniformBlockBinding(w,D)}function c(w,S){let D=r[w.id];D===void 0&&(_(w),D=u(w),r[w.id]=D,w.addEventListener("dispose",p));const U=S.program;n.updateUBOMapping(w,U);const C=e.render.frame;s[w.id]!==C&&(f(w),s[w.id]=C)}function u(w){const S=d();w.__bindingPointIndex=S;const D=i.createBuffer(),U=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,D),D}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],D=w.uniforms,U=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,L=D.length;C<L;C++){const se=Array.isArray(D[C])?D[C]:[D[C]];for(let b=0,A=se.length;b<A;b++){const K=se[b];if(m(K,C,b,U)===!0){const te=K.__offset,fe=Array.isArray(K.value)?K.value:[K.value];let F=0;for(let q=0;q<fe.length;q++){const Q=fe[q],ae=v(Q);typeof Q=="number"||typeof Q=="boolean"?(K.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,te+F,K.__data)):Q.isMatrix3?(K.__data[0]=Q.elements[0],K.__data[1]=Q.elements[1],K.__data[2]=Q.elements[2],K.__data[3]=0,K.__data[4]=Q.elements[3],K.__data[5]=Q.elements[4],K.__data[6]=Q.elements[5],K.__data[7]=0,K.__data[8]=Q.elements[6],K.__data[9]=Q.elements[7],K.__data[10]=Q.elements[8],K.__data[11]=0):(Q.toArray(K.__data,F),F+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,K.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,D,U){const C=w.value,L=S+"_"+D;if(U[L]===void 0)return typeof C=="number"||typeof C=="boolean"?U[L]=C:U[L]=C.clone(),!0;{const se=U[L];if(typeof C=="number"||typeof C=="boolean"){if(se!==C)return U[L]=C,!0}else if(se.equals(C)===!1)return se.copy(C),!0}return!1}function _(w){const S=w.uniforms;let D=0;const U=16;for(let L=0,se=S.length;L<se;L++){const b=Array.isArray(S[L])?S[L]:[S[L]];for(let A=0,K=b.length;A<K;A++){const te=b[A],fe=Array.isArray(te.value)?te.value:[te.value];for(let F=0,q=fe.length;F<q;F++){const Q=fe[F],ae=v(Q),J=D%U;J!==0&&U-J<ae.boundary&&(D+=U-J),te.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=D,D+=ae.storage}}}const C=D%U;return C>0&&(D+=U-C),w.__size=D,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){const S=w.target;S.removeEventListener("dispose",p);const D=o.indexOf(S.__bindingPointIndex);o.splice(D,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Ch{constructor(e={}){const{canvas:t=dd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this._useLegacyLights=!1,this.toneMapping=Sr,this.toneMappingExposure=1;const S=this;let D=!1,U=0,C=0,L=null,se=-1,b=null;const A=new Ot,K=new Ot;let te=null;const fe=new ht(0);let F=0,q=t.width,Q=t.height,ae=1,J=null,j=null;const ie=new Ot(0,0,q,Q),ce=new Ot(0,0,q,Q);let Te=!1;const $=new Nl;let le=!1,ye=!1,Ie=null;const xe=new vt,re=new Mt,qe=new O,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return L===null?ae:1}let H=n;function ot(y,N){for(let W=0;W<y.length;W++){const X=y[W],V=t.getContext(X,N);if(V!==null)return V}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ve,!1),H===null){const N=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&N.shift(),H=ot(N,y),H===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Oe,Ye,we,bt,Ze,T,x,G,ue,ne,he,De,_e,Ae,Be,rt,ee,St,ct,je,Pe,be,et,gt;function Bt(){Oe=new Pg(H),Ye=new Tg(H,Oe,e),Oe.init(Ye),be=new m0(H,Oe,Ye),we=new d0(H,Oe,Ye),bt=new Ug(H),Ze=new Q_,T=new p0(H,Oe,we,Ze,Ye,be,bt),x=new Ag(S),G=new Cg(S),ue=new kd(H,Ye),et=new yg(H,Oe,ue,Ye),ne=new Lg(H,ue,bt,et),he=new Og(H,ne,ue,bt),ct=new Fg(H,Ye,T),rt=new bg(Ze),De=new J_(S,x,G,Oe,Ye,et,rt),_e=new x0(S,Ze),Ae=new t0,Be=new o0(Oe,Ye),St=new Sg(S,x,G,we,he,f,l),ee=new f0(S,he,Ye),gt=new M0(H,bt,Ye,we),je=new Eg(H,Oe,bt,Ye),Pe=new Dg(H,Oe,bt,Ye),bt.programs=De.programs,S.capabilities=Ye,S.extensions=Oe,S.properties=Ze,S.renderLists=Ae,S.shadowMap=ee,S.state=we,S.info=bt}Bt();const tt=new v0(S,H);this.xr=tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const y=Oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(y){y!==void 0&&(ae=y,this.setSize(q,Q,!1))},this.getSize=function(y){return y.set(q,Q)},this.setSize=function(y,N,W=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Q=N,t.width=Math.floor(y*ae),t.height=Math.floor(N*ae),W===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(q*ae,Q*ae).floor()},this.setDrawingBufferSize=function(y,N,W){q=y,Q=N,ae=W,t.width=Math.floor(y*W),t.height=Math.floor(N*W),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,N,W,X){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,N,W,X),we.viewport(A.copy(ie).multiplyScalar(ae).floor())},this.getScissor=function(y){return y.copy(ce)},this.setScissor=function(y,N,W,X){y.isVector4?ce.set(y.x,y.y,y.z,y.w):ce.set(y,N,W,X),we.scissor(K.copy(ce).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Te},this.setScissorTest=function(y){we.setScissorTest(Te=y)},this.setOpaqueSort=function(y){J=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(y=!0,N=!0,W=!0){let X=0;if(y){let V=!1;if(L!==null){const Ee=L.texture.format;V=Ee===rh||Ee===ih||Ee===nh}if(V){const Ee=L.texture.type,Ce=Ee===yr||Ee===vr||Ee===Dl||Ee===Xr||Ee===eh||Ee===th,ze=St.getClearColor(),Xe=St.getClearAlpha(),nt=ze.r,Ke=ze.g,Ge=ze.b;Ce?(m[0]=nt,m[1]=Ke,m[2]=Ge,m[3]=Xe,H.clearBufferuiv(H.COLOR,0,m)):(_[0]=nt,_[1]=Ke,_[2]=Ge,_[3]=Xe,H.clearBufferiv(H.COLOR,0,_))}else X|=H.COLOR_BUFFER_BIT}N&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ae.dispose(),Be.dispose(),Ze.dispose(),x.dispose(),G.dispose(),he.dispose(),et.dispose(),gt.dispose(),De.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Tn),tt.removeEventListener("sessionend",wt),Ie&&(Ie.dispose(),Ie=null),gn.stop()};function pe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=bt.autoReset,N=ee.enabled,W=ee.autoUpdate,X=ee.needsUpdate,V=ee.type;Bt(),bt.autoReset=y,ee.enabled=N,ee.autoUpdate=W,ee.needsUpdate=X,ee.type=V}function ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function de(y){const N=y.target;N.removeEventListener("dispose",de),Ve(N)}function Ve(y){Re(y),Ze.remove(y)}function Re(y){const N=Ze.get(y).programs;N!==void 0&&(N.forEach(function(W){De.releaseProgram(W)}),y.isShaderMaterial&&De.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,W,X,V,Ee){N===null&&(N=me);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,ze=bo(y,N,W,X,V);we.setMaterial(X,Ce);let Xe=W.index,nt=1;if(X.wireframe===!0){if(Xe=ne.getWireframeAttribute(W),Xe===void 0)return;nt=2}const Ke=W.drawRange,Ge=W.attributes.position;let Rt=Ke.start*nt,ln=(Ke.start+Ke.count)*nt;Ee!==null&&(Rt=Math.max(Rt,Ee.start*nt),ln=Math.min(ln,(Ee.start+Ee.count)*nt)),Xe!==null?(Rt=Math.max(Rt,0),ln=Math.min(ln,Xe.count)):Ge!=null&&(Rt=Math.max(Rt,0),ln=Math.min(ln,Ge.count));const kt=ln-Rt;if(kt<0||kt===1/0)return;et.setup(V,X,ze,W,Xe);let Hn,Ct=je;if(Xe!==null&&(Hn=ue.get(Xe),Ct=Pe,Ct.setIndex(Hn)),V.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Ue()),Ct.setMode(H.LINES)):Ct.setMode(H.TRIANGLES);else if(V.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),we.setLineWidth(Le*Ue()),V.isLineSegments?Ct.setMode(H.LINES):V.isLineLoop?Ct.setMode(H.LINE_LOOP):Ct.setMode(H.LINE_STRIP)}else V.isPoints?Ct.setMode(H.POINTS):V.isSprite&&Ct.setMode(H.TRIANGLES);if(V.isBatchedMesh)Ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Ct.renderInstances(Rt,kt,V.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Un=Math.min(W.instanceCount,Le);Ct.renderInstances(Rt,kt,Un)}else Ct.render(Rt,kt)};function yt(y,N,W){y.transparent===!0&&y.side===Ji&&y.forceSinglePass===!1?(y.side=ei,y.needsUpdate=!0,Ar(y,N,W),y.side=Er,y.needsUpdate=!0,Ar(y,N,W),y.side=Ji):Ar(y,N,W)}this.compile=function(y,N,W=null){W===null&&(W=y),p=Be.get(W),p.init(),w.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),y!==W&&y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(S._useLegacyLights);const X=new Set;return y.traverse(function(V){const Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const ze=Ee[Ce];yt(ze,W,V),X.add(ze)}else yt(Ee,W,V),X.add(Ee)}),w.pop(),p=null,X},this.compileAsync=function(y,N,W=null){const X=this.compile(y,N,W);return new Promise(V=>{function Ee(){if(X.forEach(function(Ce){Ze.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){V(y);return}setTimeout(Ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let At=null;function Kt(y){At&&At(y)}function Tn(){gn.stop()}function wt(){gn.start()}const gn=new Sh;gn.setAnimationLoop(Kt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(y){At=y,tt.setAnimationLoop(y),y===null?gn.stop():gn.start()},tt.addEventListener("sessionstart",Tn),tt.addEventListener("sessionend",wt),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(N),N=tt.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,L),p=Be.get(y,w.length),p.init(),w.push(p),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(xe),ye=this.localClippingEnabled,le=rt.init(this.clippingPlanes,ye),v=Ae.get(y,h.length),v.init(),h.push(v),$t(y,N,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(J,j),this.info.render.frame++,le===!0&&rt.beginShadows();const W=p.state.shadowsArray;if(ee.render(W,y,N),le===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),St.render(v,y),p.setupLights(S._useLegacyLights),N.isArrayCamera){const X=N.cameras;for(let V=0,Ee=X.length;V<Ee;V++){const Ce=X[V];rr(v,y,Ce,Ce.viewport)}}else rr(v,y,N);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(S,y,N),et.resetDefaultState(),se=-1,b=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function $t(y,N,W,X){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){X&&qe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xe);const Ce=he.update(y),ze=y.material;ze.visible&&v.push(y,Ce,ze,W,qe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const Ce=he.update(y),ze=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),qe.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),qe.copy(Ce.boundingSphere.center)),qe.applyMatrix4(y.matrixWorld).applyMatrix4(xe)),Array.isArray(ze)){const Xe=Ce.groups;for(let nt=0,Ke=Xe.length;nt<Ke;nt++){const Ge=Xe[nt],Rt=ze[Ge.materialIndex];Rt&&Rt.visible&&v.push(y,Ce,Rt,W,qe.z,Ge)}}else ze.visible&&v.push(y,Ce,ze,W,qe.z,null)}}const Ee=y.children;for(let Ce=0,ze=Ee.length;Ce<ze;Ce++)$t(Ee[Ce],N,W,X)}function rr(y,N,W,X){const V=y.opaque,Ee=y.transmissive,Ce=y.transparent;p.setupLightsView(W),le===!0&&rt.setGlobalState(S.clippingPlanes,W),Ee.length>0&&fa(V,Ee,N,W),X&&we.viewport(A.copy(X)),V.length>0&&br(V,N,W),Ee.length>0&&br(Ee,N,W),Ce.length>0&&br(Ce,N,W),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function fa(y,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Ee=Ye.isWebGL2;Ie===null&&(Ie=new jr(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")?oa:yr,minFilter:aa,samples:Ee?4:0})),S.getDrawingBufferSize(re),Ee?Ie.setSize(re.x,re.y):Ie.setSize(mo(re.x),mo(re.y));const Ce=S.getRenderTarget();S.setRenderTarget(Ie),S.getClearColor(fe),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear();const ze=S.toneMapping;S.toneMapping=Sr,br(y,W,X),T.updateMultisampleRenderTarget(Ie),T.updateRenderTargetMipmap(Ie);let Xe=!1;for(let nt=0,Ke=N.length;nt<Ke;nt++){const Ge=N[nt],Rt=Ge.object,ln=Ge.geometry,kt=Ge.material,Hn=Ge.group;if(kt.side===Ji&&Rt.layers.test(X.layers)){const Ct=kt.side;kt.side=ei,kt.needsUpdate=!0,Di(Rt,W,X,ln,kt,Hn),kt.side=Ct,kt.needsUpdate=!0,Xe=!0}}Xe===!0&&(T.updateMultisampleRenderTarget(Ie),T.updateRenderTargetMipmap(Ie)),S.setRenderTarget(Ce),S.setClearColor(fe,F),S.toneMapping=ze}function br(y,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let V=0,Ee=y.length;V<Ee;V++){const Ce=y[V],ze=Ce.object,Xe=Ce.geometry,nt=X===null?Ce.material:X,Ke=Ce.group;ze.layers.test(W.layers)&&Di(ze,N,W,Xe,nt,Ke)}}function Di(y,N,W,X,V,Ee){y.onBeforeRender(S,N,W,X,V,Ee),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(S,N,W,X,y,Ee),V.transparent===!0&&V.side===Ji&&V.forceSinglePass===!1?(V.side=ei,V.needsUpdate=!0,S.renderBufferDirect(W,N,X,V,y,Ee),V.side=Er,V.needsUpdate=!0,S.renderBufferDirect(W,N,X,V,y,Ee),V.side=Ji):S.renderBufferDirect(W,N,X,V,y,Ee),y.onAfterRender(S,N,W,X,V,Ee)}function Ar(y,N,W){N.isScene!==!0&&(N=me);const X=Ze.get(y),V=p.state.lights,Ee=p.state.shadowsArray,Ce=V.state.version,ze=De.getParameters(y,V.state,Ee,N,W),Xe=De.getProgramCacheKey(ze);let nt=X.programs;X.environment=y.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(y.isMeshStandardMaterial?G:x).get(y.envMap||X.environment),nt===void 0&&(y.addEventListener("dispose",de),nt=new Map,X.programs=nt);let Ke=nt.get(Xe);if(Ke!==void 0){if(X.currentProgram===Ke&&X.lightsStateVersion===Ce)return da(y,ze),Ke}else ze.uniforms=De.getUniforms(y),y.onBuild(W,ze,S),y.onBeforeCompile(ze,S),Ke=De.acquireProgram(ze,Xe),nt.set(Xe,Ke),X.uniforms=ze.uniforms;const Ge=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ge.clippingPlanes=rt.uniform),da(y,ze),X.needsLights=Zr(y),X.lightsStateVersion=Ce,X.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMap.value=V.state.directionalShadowMap,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotShadowMap.value=V.state.spotShadowMap,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMap.value=V.state.pointShadowMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ke,X.uniformsList=null,Ke}function Os(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=ao.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function da(y,N){const W=Ze.get(y);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function bo(y,N,W,X,V){N.isScene!==!0&&(N=me),T.resetTextureUnits();const Ee=N.fog,Ce=X.isMeshStandardMaterial?N.environment:null,ze=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:nr,Xe=(X.isMeshStandardMaterial?G:x).get(X.envMap||Ce),nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ge=!!W.morphAttributes.position,Rt=!!W.morphAttributes.normal,ln=!!W.morphAttributes.color;let kt=Sr;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(kt=S.toneMapping);const Hn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ct=Hn!==void 0?Hn.length:0,Le=Ze.get(X),Un=p.state.lights;if(le===!0&&(ye===!0||y!==b)){const kn=y===b&&X.id===se;rt.setState(X,y,kn)}let Pt=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Un.state.version||Le.outputColorSpace!==ze||V.isBatchedMesh&&Le.batching===!1||!V.isBatchedMesh&&Le.batching===!0||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||V.isInstancedMesh&&Le.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Le.instancingColor===!1&&V.instanceColor!==null||Le.envMap!==Xe||X.fog===!0&&Le.fog!==Ee||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==rt.numPlanes||Le.numIntersection!==rt.numIntersection)||Le.vertexAlphas!==nt||Le.vertexTangents!==Ke||Le.morphTargets!==Ge||Le.morphNormals!==Rt||Le.morphColors!==ln||Le.toneMapping!==kt||Ye.isWebGL2===!0&&Le.morphTargetsCount!==Ct)&&(Pt=!0):(Pt=!0,Le.__version=X.version);let _i=Le.currentProgram;Pt===!0&&(_i=Ar(X,N,V));let qt=!1,_n=!1,Bs=!1;const cn=_i.getUniforms(),bn=Le.uniforms;if(we.useProgram(_i.program)&&(qt=!0,_n=!0,Bs=!0),X.id!==se&&(se=X.id,_n=!0),qt||b!==y){cn.setValue(H,"projectionMatrix",y.projectionMatrix),cn.setValue(H,"viewMatrix",y.matrixWorldInverse);const kn=cn.map.cameraPosition;kn!==void 0&&kn.setValue(H,qe.setFromMatrixPosition(y.matrixWorld)),Ye.logarithmicDepthBuffer&&cn.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&cn.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,_n=!0,Bs=!0)}if(V.isSkinnedMesh){cn.setOptional(H,V,"bindMatrix"),cn.setOptional(H,V,"bindMatrixInverse");const kn=V.skeleton;kn&&(Ye.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),cn.setValue(H,"boneTexture",kn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(cn.setOptional(H,V,"batchingTexture"),cn.setValue(H,"batchingTexture",V._matricesTexture,T));const sr=W.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0&&Ye.isWebGL2===!0)&&ct.update(V,W,_i),(_n||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,cn.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bn.envMap.value=Xe,bn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),_n&&(cn.setValue(H,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&li(bn,Bs),Ee&&X.fog===!0&&_e.refreshFogUniforms(bn,Ee),_e.refreshMaterialUniforms(bn,X,ae,Q,Ie),ao.upload(H,Os(Le),bn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ao.upload(H,Os(Le),bn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&cn.setValue(H,"center",V.center),cn.setValue(H,"modelViewMatrix",V.modelViewMatrix),cn.setValue(H,"normalMatrix",V.normalMatrix),cn.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const kn=X.uniformsGroups;for(let zs=0,Hs=kn.length;zs<Hs;zs++)if(Ye.isWebGL2){const pa=kn[zs];gt.update(pa,_i),gt.bind(pa,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function li(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Zr(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,W){Ze.get(y.texture).__webglTexture=N,Ze.get(y.depthTexture).__webglTexture=W;const X=Ze.get(y);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,N){const W=Ze.get(y);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,W=0){L=y,U=N,C=W;let X=!0,V=null,Ee=!1,Ce=!1;if(y){const Xe=Ze.get(y);Xe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Xe.__webglFramebuffer===void 0?T.setupRenderTarget(y):Xe.__hasExternalTextures&&T.rebindTextures(y,Ze.get(y.texture).__webglTexture,Ze.get(y.depthTexture).__webglTexture);const nt=y.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const Ke=Ze.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ke[N])?V=Ke[N][W]:V=Ke[N],Ee=!0):Ye.isWebGL2&&y.samples>0&&T.useMultisampledRTT(y)===!1?V=Ze.get(y).__webglMultisampledFramebuffer:Array.isArray(Ke)?V=Ke[W]:V=Ke,A.copy(y.viewport),K.copy(y.scissor),te=y.scissorTest}else A.copy(ie).multiplyScalar(ae).floor(),K.copy(ce).multiplyScalar(ae).floor(),te=Te;if(we.bindFramebuffer(H.FRAMEBUFFER,V)&&Ye.drawBuffers&&X&&we.drawBuffers(y,V),we.viewport(A),we.scissor(K),we.setScissorTest(te),Ee){const Xe=Ze.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+N,Xe.__webglTexture,W)}else if(Ce){const Xe=Ze.get(y.texture),nt=N||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.__webglTexture,W||0,nt)}se=-1},this.readRenderTargetPixels=function(y,N,W,X,V,Ee,Ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ze.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(ze=ze[Ce]),ze){we.bindFramebuffer(H.FRAMEBUFFER,ze);try{const Xe=y.texture,nt=Xe.format,Ke=Xe.type;if(nt!==pi&&be.convert(nt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ke===oa&&(Oe.has("EXT_color_buffer_half_float")||Ye.isWebGL2&&Oe.has("EXT_color_buffer_float"));if(Ke!==yr&&be.convert(Ke)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===er&&(Ye.isWebGL2||Oe.has("OES_texture_float")||Oe.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-X&&W>=0&&W<=y.height-V&&H.readPixels(N,W,X,V,be.convert(nt),be.convert(Ke),Ee)}finally{const Xe=L!==null?Ze.get(L).__webglFramebuffer:null;we.bindFramebuffer(H.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(y,N,W=0){const X=Math.pow(2,-W),V=Math.floor(N.image.width*X),Ee=Math.floor(N.image.height*X);T.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,y.x,y.y,V,Ee),we.unbindTexture()},this.copyTextureToTexture=function(y,N,W,X=0){const V=N.image.width,Ee=N.image.height,Ce=be.convert(W.format),ze=be.convert(W.type);T.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,y.x,y.y,V,Ee,Ce,ze,N.image.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,y.x,y.y,N.mipmaps[0].width,N.mipmaps[0].height,Ce,N.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,y.x,y.y,Ce,ze,N.image),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(y,N,W,X,V=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=y.max.x-y.min.x+1,Ce=y.max.y-y.min.y+1,ze=y.max.z-y.min.z+1,Xe=be.convert(X.format),nt=be.convert(X.type);let Ke;if(X.isData3DTexture)T.setTexture3D(X,0),Ke=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),Ke=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Ge=H.getParameter(H.UNPACK_ROW_LENGTH),Rt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ln=H.getParameter(H.UNPACK_SKIP_PIXELS),kt=H.getParameter(H.UNPACK_SKIP_ROWS),Hn=H.getParameter(H.UNPACK_SKIP_IMAGES),Ct=W.isCompressedTexture?W.mipmaps[V]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Ct.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ct.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,y.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,y.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Ke,V,N.x,N.y,N.z,Ee,Ce,ze,Xe,nt,Ct.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ke,V,N.x,N.y,N.z,Ee,Ce,ze,Xe,Ct.data)):H.texSubImage3D(Ke,V,N.x,N.y,N.z,Ee,Ce,ze,Xe,nt,Ct),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ln),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Hn),V===0&&X.generateMipmaps&&H.generateMipmap(Ke),we.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){U=0,C=0,L=null,we.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ul?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ln?Yr:ah}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yr?Ln:nr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class S0 extends Ch{}S0.prototype.isWebGL1Renderer=!0;class Ph extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kn=new O;class Lh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ru=new O,Cu=new Ot,Pu=new Ot,y0=new O,Lu=new vt,eo=new O,ul=new ir,Du=new vt,hl=new Mo;class Mv extends Ci{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hc,this.bindMatrix=new vt,this.bindMatrixInverse=new vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ir),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(r),e.ray.intersectsSphere(ul)!==!1&&(Du.copy(r).invert(),hl.copy(e.ray).applyMatrix4(Du),!(this.boundingBox!==null&&hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Df?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Cu.fromBufferAttribute(r.attributes.skinIndex,e),Pu.fromBufferAttribute(r.attributes.skinWeight,e),Ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Pu.getComponent(s);if(o!==0){const a=Cu.getComponent(s);Lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(y0.copy(Ru).applyMatrix4(Lu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class E0 extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class T0 extends Zn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Pn,u=Pn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uu=new vt,b0=new vt;class Dh{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new vt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new vt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:b0;Uu.multiplyMatrices(a,t[s]),Uu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new T0(t,e,e,pi,er);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new E0),this.bones.push(o),this.boneInverses.push(new vt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Iu extends gi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new vt,Nu=new vt,to=[],Fu=new Tr,A0=new vt,Qs=new Ci,ea=new ir;class Sv extends Ci{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Iu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,A0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Fu.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),ea.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),e.ray.intersectsSphere(ea)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),Nu.multiplyMatrices(n,Ss),Qs.matrixWorld=Nu,Qs.raycast(e,to);for(let o=0,a=to.length;o<a;o++){const l=to[o];l.instanceId=s,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Iu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Bl extends $r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ou=new O,Bu=new O,zu=new vt,fl=new Mo,no=new ir;class Uh extends en{constructor(e=new Li,t=new Bl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ou.fromBufferAttribute(t,r-1),Bu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ou.distanceTo(Bu);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;zu.copy(r).invert(),fl.copy(e.ray).applyMatrix4(zu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,d=new O,f=new O,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const h=Math.max(0,o.start),w=Math.min(_.count,o.start+o.count);for(let S=h,D=w-1;S<D;S+=m){const U=_.getX(S),C=_.getX(S+1);if(c.fromBufferAttribute(p,U),u.fromBufferAttribute(p,C),fl.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const se=e.ray.origin.distanceTo(f);se<e.near||se>e.far||t.push({distance:se,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let S=h,D=w-1;S<D;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),fl.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Hu=new O,ku=new O;class Ih extends Uh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Hu.fromBufferAttribute(t,r),ku.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Hu.distanceTo(ku);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yv extends Uh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class w0 extends $r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new vt,Pl=new Mo,io=new ir,ro=new O;class Ev extends en{constructor(e=new Li,t=new w0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;Vu.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(Vu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,v=m;_<v;_++){const p=c.getX(_);ro.fromBufferAttribute(d,p),Gu(ro,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,v=m;_<v;_++)ro.fromBufferAttribute(d,_),Gu(ro,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gu(i,e,t,n,r,s,o){const a=Pl.distanceSqToPoint(i);if(a<t){const l=new O;Pl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class R0 extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tv extends R0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function so(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function C0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function P0(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Wu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Nh(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Eo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class L0 extends Eo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case zc:s=e,a=2*t-n;break;case Hc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:o=e,l=2*n-t;break;case Hc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-t)/(r-t),v=_*_,p=v*_,h=-f*p+2*f*v-f*_,w=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*_+1,S=(-1-m)*p+(1.5+m)*v+.5*_,D=m*p-m*v;for(let U=0;U!==a;++U)s[U]=h*o[u+U]+w*o[c+U]+S*o[l+U]+D*o[d+U];return s}}class D0 extends Eo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class U0 extends Eo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new U0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new D0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new L0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lo:t=this.InterpolantFactoryMethodDiscrete;break;case co:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&C0(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ho,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){const v=t[d+_];if(v!==t[f+_]||v!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=co;class Ns extends Bi{}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=lo;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Fh extends Bi{}Fh.prototype.ValueTypeName="color";class go extends Bi{}go.prototype.ValueTypeName="number";class I0 extends Eo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Us.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ua extends Bi{InterpolantFactoryMethodLinear(e){return new I0(this.times,this.values,this.getValueSize(),e)}}ua.prototype.ValueTypeName="quaternion";ua.prototype.DefaultInterpolation=co;ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Bi{}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=lo;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends Bi{}_o.prototype.ValueTypeName="vector";class bv{constructor(e,t=-1,n,r=Vf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(F0(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Bi.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=P0(l);l=Wu(l,1,u),c=Wu(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new go(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,m,_,v){if(m.length!==0){const p=[],h=[];Nh(m,p,h,_),p.length!==0&&v.push(new d(f,p,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)m[f[_].morphTargets[v]]=-1;for(const v in m){const p=[],h=[];for(let w=0;w!==f[_].morphTargets.length;++w){const S=f[_];p.push(S.time),h.push(S.morphTarget===v?1:0)}r.push(new go(".morphTargetInfluence["+v+"]",p,h))}l=m.length*o}else{const m=".bones["+t[d].name+"]";n(_o,m+".position",f,"pos",r),n(ua,m+".quaternion",f,"rot",r),n(_o,m+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function N0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return go;case"vector":case"vector2":case"vector3":case"vector4":return _o;case"color":return Fh;case"quaternion":return ua;case"bool":case"boolean":return Ns;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function F0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=N0(i.type);if(i.times===void 0){const t=[],n=[];Nh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const xr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class O0{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const B0=new O0;class ha{constructor(e){this.manager=e!==void 0?e:B0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ha.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class z0 extends Error{constructor(e,t){super(e),this.response=t}}class Av extends ha{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:n,onError:r});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$i[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(h){w();function w(){d.read().then(({done:S,value:D})=>{if(S)h.close();else{v+=D.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let C=0,L=u.length;C<L;C++){const se=u[C];se.onProgress&&se.onProgress(U)}h.enqueue(D),w()}})}}});return new Response(p)}else throw new z0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{xr.add(e,c);const u=$i[e];delete $i[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=$i[e];if(u===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class H0 extends ha{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=la("img");function l(){u(),xr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class wv extends ha{constructor(e){super(e)}load(e,t,n,r){const s=new Zn,o=new H0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class To extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const dl=new vt,Xu=new O,qu=new O;class zl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k0 extends zl{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rv extends To{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new k0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yu=new vt,ta=new O,pl=new O;class V0 extends zl{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(ta),pl.copy(n.position),pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pl),n.updateMatrixWorld(),r.makeTranslation(-ta.x,-ta.y,-ta.z),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu)}}class Cv extends To{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new V0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class G0 extends zl{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pv extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new G0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lv extends To{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Dv{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Uv extends ha{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return xr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),xr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});xr.add(e,l),s.manager.itemStart(e)}}const Hl="\\[\\]\\.:\\/",W0=new RegExp("["+Hl+"]","g"),kl="[^"+Hl+"]",X0="[^"+Hl.replace("\\.","")+"]",q0=/((?:WC+[\/:])*)/.source.replace("WC",kl),Y0=/(WCOD+)?/.source.replace("WCOD",X0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),$0=new RegExp("^"+q0+Y0+j0+K0+"$"),Z0=["material","materials","bones","map"];class J0{constructor(e,t,n){const r=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ut{constructor(e,t,n){this.path=t,this.parsedPath=n||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,n):new Ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W0,"")}static parseTrackName(e){const t=$0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Z0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=J0;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Iv{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(En(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q0 extends Ih{constructor(e=10,t=10,n=4473924,r=8947848){n=new ht(n),r=new ht(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===s?n:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Li;u.setAttribute("position",new oi(l,3)),u.setAttribute("color",new oi(c,3));const d=new Bl({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ev extends Ih{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Li;r.setAttribute("position",new oi(t,3)),r.setAttribute("color",new oi(n,3));const s=new Bl({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new ht,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);class tv{constructor(){rs(this,"animations",[])}add(e){this.animations.push(e)}remove(e){const t=this.animations.indexOf(e);t>-1&&this.animations.splice(t,1)}animate(){this.animations.forEach(e=>e())}}const ml=new tv;class nv{constructor(){rs(this,"camera",null)}initCamera(){if(typeof window<"u"){const e=window.innerWidth/window.innerHeight;this.camera=new Dn(75,e,.1,1e3),this.camera.position.set(-10,15,0)}else this.camera=new Dn(75,1,.1,1e3)}adjustAspectRatio(){if(this.camera&&typeof window<"u"){const e=window.innerWidth/window.innerHeight;this.camera.aspect=e,this.camera.updateProjectionMatrix()}}}const ju=new nv;class iv{constructor(){rs(this,"eventCallbacks",{})}on(e,t){this.eventCallbacks[e]||(this.eventCallbacks[e]=[]),this.eventCallbacks[e].push(t)}off(e,t){const n=this.eventCallbacks[e];if(!n)return;const r=n.indexOf(t);r>-1&&n.splice(r,1)}trigger(e,t){const n=this.eventCallbacks[e];n&&n.forEach(r=>r(t))}}const gl=new iv;class rv{addGrid(e){const r=new Q0(10,10);e.add(r)}addAxes(e){const t=new ev(5);e.add(t)}}const _l=new rv;class sv{constructor(){rs(this,"renderer",null)}initRenderer(){typeof window<"u"&&(this.renderer=new Ch({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=$u,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1)))}getRenderer(){return this.renderer}render(e,t){this.renderer&&this.renderer.render(e,t)}}const ys=new sv;class av{constructor(){rs(this,"scene");this.scene=new Ph}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}}const vl=new av,ov=5;let na=[];function lv(){const{subscribe:i,set:e,update:t}=jh({renderer:null,scene:vl.scene,camera:null,animationService:ml,eventService:gl,helperService:_l,renderService:ys});function n(s){if(na.length>=ov){const o=na.shift();r(o)}na.push(s)}function r(s){s&&(s.dispose(),s.forceContextLoss&&s.forceContextLoss())}return{subscribe:i,initialize:()=>(ju.initCamera(),ys.initRenderer(),n(ys.getRenderer()),e({renderer:ys.getRenderer(),scene:vl.scene,camera:ju.camera,animationService:ml,eventService:gl,helperService:_l,renderService:ys}),vl.scene),dispose:()=>{t(s=>{na.forEach(r),na=[];let o;return typeof window<"u"?o=new Dn(75,window.innerWidth/window.innerHeight,.1,1e3):o=new Dn(75,1,.1,1e3),{renderer:null,scene:new Ph,camera:o,animationService:ml,eventService:gl,helperService:_l,renderService:ys}})}}}const Nv=lv();export{Us as $,Ci as A,gi as B,ht as C,Pv as D,Ih as E,Av as F,Uh as G,yv as H,Sv as I,Ev as J,Qa as K,ha as L,mh as M,Dn as N,en as O,Cv as P,_v as Q,Tl as R,Zh as S,pv as T,yh as U,O as V,Dh as W,bv as X,E0 as Y,co as Z,It as _,hv as a,Pn as a0,fc as a1,Uf as a2,Io as a3,Ri as a4,bl as a5,lo as a6,Er as a7,Lh as a8,Zn as a9,_o as aa,go as ab,ua as ac,Tr as ad,ir as ae,Eo as af,Mo as ag,kr as ah,Ds as ai,fv as aj,dv as ak,Iv as al,T0 as am,pi as an,er as ao,Ju as ap,ge as aq,vv as ar,oa as as,oi as at,ei as au,Lv as av,gv as b,Kh as c,mv as d,Dv as e,nr as f,Rv as g,Ln as h,Tv as i,Mt as j,vt as k,Iu as l,wv as m,Uv as n,xv as o,di as p,aa as q,w0 as r,$r as s,Nv as t,Bl as u,R0 as v,Ji as w,Ut as x,Li as y,Mv as z};
