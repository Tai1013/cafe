import{c as p,o as _,r as y,a as b,b as v,d as g,e as w}from"./vendor-cc0128fa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function E(o,r){const n=y("router-view");return _(),p(n)}const O=(o,r)=>{const n=o.__vccOpts||o;for(const[s,t]of r)n[s]=t;return n},L={},P=O(L,[["render",E]]),A="modulepreload",R=function(o){return"/cafe/"+o},d={},l=function(r,n,s){if(!n||n.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=R(e),e in d)return;d[e]=!0;const c=e.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(!!s)for(let i=t.length-1;i>=0;i--){const u=t[i];if(u.href===e&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":A,c||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),c)return new Promise((i,u)=>{a.addEventListener("load",i),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},j=[{path:"/",name:"pages",component:()=>l(()=>import("./index-e37dcb85.js"),["assets/index-e37dcb85.js","assets/vendor-cc0128fa.js","assets/vendor-dbbfa88e.css","assets/index-36b779fd.css"]),children:[{path:"/",name:"home",component:()=>l(()=>import("./index-00376f1d.js"),["assets/index-00376f1d.js","assets/vendor-cc0128fa.js","assets/vendor-dbbfa88e.css","assets/index-0d72e8be.css"])},{path:"/product",name:"product",component:()=>l(()=>import("./index-43809273.js"),["assets/index-43809273.js","assets/vendor-cc0128fa.js","assets/vendor-dbbfa88e.css"])},{path:"/about",name:"about",component:()=>l(()=>import("./index-e22765ad.js"),["assets/index-e22765ad.js","assets/vendor-cc0128fa.js","assets/vendor-dbbfa88e.css"])},{path:"/contact",name:"contact",component:()=>l(()=>import("./index-b0de8b3c.js"),["assets/index-b0de8b3c.js","assets/vendor-cc0128fa.js","assets/vendor-dbbfa88e.css"])}]},{path:"/:pathMatch(.*)*",redirect:"/"}],h=b({history:v("/cafe/"),routes:j});h.beforeEach(async(o,r,n)=>{n()});const D="home",I="product",$="about",x="contact",T={home:D,product:I,about:$,contact:x,"product now":"product now","read more":"read more","deal of the day":"deal of the day","Macarons in various flavors":"Macarons in various flavors","A perfect macaron should be just set in the middle, with a soft and very slightly chewy centre and a thin layer of crispy outer shell.":"A perfect macaron should be just set in the middle, with a soft and very slightly chewy centre and a thin layer of crispy outer shell.","Discover your favorite coffee beans by exploring the world of coffee.":"Discover your favorite coffee beans by exploring the world of coffee.","Form the farm to the coffee bean, all of our coffee products are guaranteed to be 100% natural.":"Form the farm to the coffee bean, all of our coffee products are guaranteed to be 100% natural."},k="首頁",B="產品",F="關於我們",S="聯絡我們",V={home:k,product:B,about:F,contact:S,"product now":"前往產品","read more":"更多資訊","deal of the day":"今日特賣","Macarons in various flavors":"各種口味的馬卡龍","A perfect macaron should be just set in the middle, with a soft and very slightly chewy centre and a thin layer of crispy outer shell.":"完美的馬卡龍應該剛好夾在中間，中間柔軟且略帶嚼勁，外層薄薄酥脆。","Discover your favorite coffee beans by exploring the world of coffee.":"探索咖啡世界，發現您最喜愛的咖啡豆。","Form the farm to the coffee bean, all of our coffee products are guaranteed to be 100% natural.":"從農場到咖啡豆，我們所有的咖啡產品都保證是100%天然的。"},C="./locales/",M=Object.assign({"./locales/en.json":T,"./locales/zh-tw.json":V}),N=Object.fromEntries(Object.entries(M).map(([o,r])=>[o.slice(C.length,-5),r])),q=g({legacy:!1,locale:"zh-tw",fallbackLocale:"en",globalInjection:!0,messages:N}),z=o=>{o.use(q)},f=w(P);f.use(h);f.use(z);f.mount("#app");export{O as _};
