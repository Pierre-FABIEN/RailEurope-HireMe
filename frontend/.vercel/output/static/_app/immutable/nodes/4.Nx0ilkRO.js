import{d as q}from"../chunks/index.R8ovVqwX.js";import{s as x,e as m,b,z as P,c as p,g as _,h as A,d as C,A as S,u as c,B as j,v as D,k as u,j as T,n as y,q as H,w as E}from"../chunks/scheduler.CLCMr1Db.js";import{S as L,i as N}from"../chunks/index.BwUKX1yu.js";import{g as O}from"../chunks/index.ZORhgBxb.js";import"../chunks/index.DrR8Bnw0.js";const V=q,z=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,csr:V,prerender:z},Symbol.toStringTag,{value:"Module"}));function w(d){let a,l,e,t,n,v="Transition avec l'utilisation de API",s,o,I='<a class="linkabout-link" href="/transitionAPI/cible">LIEN ANIMATION</a>',g,i,k;return{c(){a=m("meta"),l=b(),e=m("div"),t=m("div"),n=m("h1"),n.textContent=v,s=b(),o=m("div"),o.innerHTML=I,g=b(),i=m("img"),this.h()},l(r){const f=P("svelte-1ds1qyu",document.head);a=p(f,"META",{name:!0,content:!0}),f.forEach(_),l=A(r),e=p(r,"DIV",{class:!0});var M=C(e);t=p(M,"DIV",{});var h=C(t);n=p(h,"H1",{"data-svelte-h":!0}),S(n)!=="svelte-pbya89"&&(n.textContent=v),s=A(h),o=p(h,"DIV",{class:!0,"data-svelte-h":!0}),S(o)!=="svelte-1uhn8yf"&&(o.innerHTML=I),g=A(h),i=p(h,"IMG",{class:!0,src:!0,alt:!0}),h.forEach(_),M.forEach(_),this.h()},h(){document.title="About",c(a,"name","description"),c(a,"content","About this app"),c(o,"class","linkabout svelte-1ebgdni"),c(i,"class","logo"),j(i.src,k="logo.svg")||c(i,"src",k),c(i,"alt",""),D(i,"--logo","logo"),c(e,"class","about svelte-1ebgdni")},m(r,f){u(document.head,a),T(r,l,f),T(r,e,f),u(e,t),u(t,n),d[2](n),u(t,s),u(t,o),d[3](o),u(t,g),u(t,i)},p:y,i:y,o:y,d(r){r&&(_(l),_(e)),_(a),d[2](null),d[3](null)}}}function B(d,a,l){let e,t;H(()=>{O.timeline().from(e,{duration:.7,autoAlpha:0,y:-30,ease:"back.out(1.7)"}).from(t,{duration:.7,autoAlpha:0,x:-30,ease:"back.out(1.7)"},"-=0.5")});function n(s){E[s?"unshift":"push"](()=>{e=s,l(0,e)})}function v(s){E[s?"unshift":"push"](()=>{t=s,l(1,t)})}return[e,t,n,v]}class R extends L{constructor(a){super(),N(this,a,B,w,x,{})}}export{R as component,Q as universal};
