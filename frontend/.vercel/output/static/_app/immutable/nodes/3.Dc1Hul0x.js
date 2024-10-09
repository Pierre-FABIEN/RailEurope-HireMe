import{d as F}from"../chunks/index.R8ovVqwX.js";import{s as G,e as v,b as j,t as z,H as J,z as K,c as y,g as h,h as A,d as S,f as B,C as Q,u as M,k as m,j as N,l as O,D as U,m as Z,q as x,w as P}from"../chunks/scheduler.CLCMr1Db.js";import{S as $,i as ee,f as te,h as ne}from"../chunks/index.BwUKX1yu.js";import{t as ie}from"../chunks/index.DrR8Bnw0.js";import{g as T}from"../chunks/index.ZORhgBxb.js";import{S as X}from"../chunks/ScrollTrigger.UBuyFR-r.js";import{o as se}from"../chunks/entry.BsiBusBW.js";const R=(e,s="span",o="line",a="subline")=>{let n=e.getBoundingClientRect().width,t=e.innerText.split(/( )/g),u="";t.forEach(r=>{u+=`<span>${r}</span>`}),e.innerHTML=u;let p=[],c=[],d=0;e.querySelectorAll("span").forEach(r=>{let f=r.getBoundingClientRect().width;d+f<=n-1?(c.push(r.outerHTML),d+=f):(p.push(c),c=[r.outerHTML],d=f)}),c.length&&p.push(c);let i=p.map(r=>`<${s} class="${o}"><${s} class="${a}">${r.join("")}</${s}></${s}>`).join("");e.innerHTML=i},ae=F,oe=!0,be=Object.freeze(Object.defineProperty({__proto__:null,csr:ae,prerender:oe},Symbol.toStringTag,{value:"Module"})),Y=1,re=(e,{pathIn:s,title:o,text:a,link:n})=>{T.registerPlugin(X),s="/";const t=T.timeline({defaults:{duration:Y}});return t.from(e,{opacity:1,x:"100vw",ease:"power2.out"}),t.from(n,{opacity:0,y:100,ease:"power2.out"}),R(o,"span","line","subline"),R(a,"span","line","subline"),T.set(".subline",{y:"200px",opacity:0}),T.to(".subline",{y:"0px",opacity:1,duration:.4,stagger:.04,skewY:0,skewX:0}),{delay:0,duration:t.duration()*1e3,css:()=>""}},le=(e,{pathOut:s,title:o,text:a,link:n})=>{T.registerPlugin(X),s="/";const t=T.timeline({defaults:{duration:Y}});return t.to(e,{opacity:1,x:"100vw",ease:"power2.out"}),t.set(e,{opacity:0,x:"0vw",y:0,ease:"power2.out"}),t.to(n,{opacity:0,y:-100,ease:"power2.in"}),{delay:0,duration:t.duration()*1e3,css:()=>""}};function ue(e){let s,o,a,n,t,u=e[4]("about.title")+"",p,c,d,g,i=e[4]("about.text")+"",r,f,w,H=e[4]("about.link")+"",C,L,E,b;return{c(){s=v("meta"),o=j(),a=v("div"),n=v("div"),t=v("h1"),p=z(u),c=j(),d=v("p"),g=new J(!1),r=j(),f=v("div"),w=v("a"),C=z(H),this.h()},l(l){const _=K("svelte-1ds1qyu",document.head);s=y(_,"META",{name:!0,content:!0}),_.forEach(h),o=A(l),a=y(l,"DIV",{class:!0});var q=S(a);n=y(q,"DIV",{});var k=S(n);t=y(k,"H1",{});var D=S(t);p=B(D,u),D.forEach(h),c=A(k),d=y(k,"P",{});var W=S(d);g=Q(W,!1),W.forEach(h),r=A(k),f=y(k,"DIV",{class:!0});var I=S(f);w=y(I,"A",{href:!0});var V=S(w);C=B(V,H),V.forEach(h),I.forEach(h),k.forEach(h),q.forEach(h),this.h()},h(){document.title="About",M(s,"name","description"),M(s,"content","About this app"),g.a=null,M(w,"href","/"),M(f,"class","linkabout svelte-emycr1"),M(a,"class","about svelte-emycr1")},m(l,_){m(document.head,s),N(l,o,_),N(l,a,_),m(a,n),m(n,t),m(t,p),e[5](t),m(n,c),m(n,d),g.m(i,d),e[6](d),m(n,r),m(n,f),m(f,w),m(w,C),e[7](f),b=!0},p(l,[_]){e=l,(!b||_&16)&&u!==(u=e[4]("about.title")+"")&&O(p,u),(!b||_&16)&&i!==(i=e[4]("about.text")+"")&&g.p(i),(!b||_&16)&&H!==(H=e[4]("about.link")+"")&&O(C,H)},i(l){b||(l&&U(()=>{b&&(E&&E.end(1),L=ne(a,re,{path:e[3],title:e[0],text:e[1],link:e[2]}),L.start())}),b=!0)},o(l){L&&L.invalidate(),l&&(E=te(a,le,{path:e[3],title:e[0],text:e[1],link:e[2]})),b=!1},d(l){l&&(h(o),h(a)),h(s),e[5](null),e[6](null),e[7](null),l&&E&&E.end()}}}function de(e,s,o){let a;Z(e,ie,i=>o(4,a=i));let n,t,u,p;se(i=>{var r;o(3,p=(r=i.to)==null?void 0:r.route.id)}),x(()=>{});function c(i){P[i?"unshift":"push"](()=>{n=i,o(0,n)})}function d(i){P[i?"unshift":"push"](()=>{t=i,o(1,t)})}function g(i){P[i?"unshift":"push"](()=>{u=i,o(2,u)})}return[n,t,u,p,a,c,d,g]}class ve extends ${constructor(s){super(),ee(this,s,de,ue,G,{})}}export{ve as component,be as universal};
