(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var M=Object.prototype.toString,k=Array.isArray||function(e){return M.call(e)==="[object Array]"};function U(n){return typeof n=="function"}function H(n){return k(n)?"array":typeof n}function x(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function I(n,e){return n!=null&&typeof n=="object"&&e in n}function q(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var N=RegExp.prototype.test;function W(n,e){return N.call(n,e)}var F=/\S/;function D(n){return!W(F,n)}var $={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function B(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return $[t]})}var J=/\s*/,K=/\s+/,L=/\s*=/,z=/\s*\}/,G=/#|\^|\/|>|\{|&|=|!/;function Q(n,e){if(!n)return[];var t=!1,r=[],s=[],a=[],i=!1,o=!1,l="",c=0;function p(){if(i&&!o)for(;a.length;)delete s[a.pop()];else a=[];i=!1,o=!1}var g,w,O;function R(y){if(typeof y=="string"&&(y=y.split(K,2)),!k(y)||y.length!==2)throw new Error("Invalid tags: "+y);g=new RegExp(x(y[0])+"\\s*"),w=new RegExp("\\s*"+x(y[1])),O=new RegExp("\\s*"+x("}"+y[1]))}R(e||v.tags);for(var u=new E(n),_,f,d,P,S,b;!u.eos();){if(_=u.pos,d=u.scanUntil(g),d)for(var T=0,j=d.length;T<j;++T)P=d.charAt(T),D(P)?(a.push(s.length),l+=P):(o=!0,t=!0,l+=" "),s.push(["text",P,_,_+1]),_+=1,P===`
`&&(p(),l="",c=0,t=!1);if(!u.scan(g))break;if(i=!0,f=u.scan(G)||"name",u.scan(J),f==="="?(d=u.scanUntil(L),u.scan(L),u.scanUntil(w)):f==="{"?(d=u.scanUntil(O),u.scan(z),u.scanUntil(w),f="&"):d=u.scanUntil(w),!u.scan(w))throw new Error("Unclosed tag at "+u.pos);if(f==">"?S=[f,d,_,u.pos,l,c,t]:S=[f,d,_,u.pos],c++,s.push(S),f==="#"||f==="^")r.push(S);else if(f==="/"){if(b=r.pop(),!b)throw new Error('Unopened section "'+d+'" at '+_);if(b[1]!==d)throw new Error('Unclosed section "'+b[1]+'" at '+_)}else f==="name"||f==="{"||f==="&"?o=!0:f==="="&&R(d)}if(p(),b=r.pop(),b)throw new Error('Unclosed section "'+b[1]+'" at '+u.pos);return X(V(s))}function V(n){for(var e=[],t,r,s=0,a=n.length;s<a;++s)t=n[s],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function X(n){for(var e=[],t=e,r=[],s,a,i=0,o=n.length;i<o;++i)switch(s=n[i],s[0]){case"#":case"^":t.push(s),r.push(s),t=s[4]=[];break;case"/":a=r.pop(),a[5]=s[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(s)}return e}function E(n){this.string=n,this.tail=n,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};E.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function m(n,e){this.view=n,this.cache={".":this.view},this.parent=e}m.prototype.push=function(e){return new m(e,this)};m.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var s=this,a,i,o,l=!1;s;){if(e.indexOf(".")>0)for(a=s.view,i=e.split("."),o=0;a!=null&&o<i.length;)o===i.length-1&&(l=I(a,i[o])||q(a,i[o])),a=a[i[o++]];else a=s.view[e],l=I(s.view,e);if(l){r=a;break}s=s.parent}t[e]=r}return U(r)&&(r=r.call(this.view)),r};function h(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,t){var r=this.templateCache,s=e+":"+(t||v.tags).join(":"),a=typeof r<"u",i=a?r.get(s):void 0;return i==null&&(i=Q(e,t),a&&r.set(s,i)),i};h.prototype.render=function(e,t,r,s){var a=this.getConfigTags(s),i=this.parse(e,a),o=t instanceof m?t:new m(t,void 0);return this.renderTokens(i,o,r,e,s)};h.prototype.renderTokens=function(e,t,r,s,a){for(var i="",o,l,c,p=0,g=e.length;p<g;++p)c=void 0,o=e[p],l=o[0],l==="#"?c=this.renderSection(o,t,r,s,a):l==="^"?c=this.renderInverted(o,t,r,s,a):l===">"?c=this.renderPartial(o,t,r,a):l==="&"?c=this.unescapedValue(o,t):l==="name"?c=this.escapedValue(o,t,a):l==="text"&&(c=this.rawValue(o)),c!==void 0&&(i+=c);return i};h.prototype.renderSection=function(e,t,r,s,a){var i=this,o="",l=t.lookup(e[1]);function c(w){return i.render(w,t,r,a)}if(l){if(k(l))for(var p=0,g=l.length;p<g;++p)o+=this.renderTokens(e[4],t.push(l[p]),r,s,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")o+=this.renderTokens(e[4],t.push(l),r,s,a);else if(U(l)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(t.view,s.slice(e[3],e[5]),c),l!=null&&(o+=l)}else o+=this.renderTokens(e[4],t,r,s,a);return o}};h.prototype.renderInverted=function(e,t,r,s,a){var i=t.lookup(e[1]);if(!i||k(i)&&i.length===0)return this.renderTokens(e[4],t,r,s,a)};h.prototype.indentPartial=function(e,t,r){for(var s=t.replace(/[^ \t]/g,""),a=e.split(`
`),i=0;i<a.length;i++)a[i].length&&(i>0||!r)&&(a[i]=s+a[i]);return a.join(`
`)};h.prototype.renderPartial=function(e,t,r,s){if(r){var a=this.getConfigTags(s),i=U(r)?r(e[1]):r[e[1]];if(i!=null){var o=e[6],l=e[5],c=e[4],p=i;l==0&&c&&(p=this.indentPartial(i,c,o));var g=this.parse(p,a);return this.renderTokens(g,t,r,p,s)}}};h.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};h.prototype.escapedValue=function(e,t,r){var s=this.getConfigEscape(r)||v.escape,a=t.lookup(e[1]);if(a!=null)return typeof a=="number"&&s===v.escape?String(a):s(a)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return k(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!k(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){C.templateCache=n},get templateCache(){return C.templateCache}},C=new h;v.clearCache=function(){return C.clearCache()};v.parse=function(e,t){return C.parse(e,t)};v.render=function(e,t,r,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+H(e)+'" was given as the first argument for mustache#render(template, view, partials)');return C.render(e,t,r,s)};v.escape=B;v.Scanner=E;v.Context=m;v.Writer=h;const Y={baseAssetsUrl:"./"};async function A(n,e={}){return v.render(n,Object.assign(e,Y))}const Z=`<footer class="footer">
    <div class="footer__inner container">
        <div class="footer__main-info-wrapper">
            <div class="footer__links"></div>

            <div class="footer__right-blocks">
                <div class="features">
                    <ul class="features__list">
                        {{#features}}
                            <li class="features__item">
                                <img
                                    class="features__icon"
                                    alt="{{icon.alt}}"
                                    src="{{baseAssetsUrl}}{{icon.url}}"
                                    height="{{icon.height}}"
                                    width="{{icon.width}}"
                                />

                                <p>{{title}}</p>
                            </li>
                        {{/features}}
                    </ul>
                </div>

                <div class="social-links">
                    <ul class="social-links__list">
                        {{#socialLinks}}
                            <li class="social-links__item">
                                <a href="{{url}}" class="social-links__link">
                                    <img
                                         alt="{{icon.alt}}"
                                         src="{{baseAssetsUrl}}{{icon.url}}"
                                         height="{{icon.height}}"
                                         width="{{icon.width}}"
                                    />
                                </a>
                            </li>
                        {{/socialLinks}}
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer__description-wrapper">
            <p class="footer__description">
                2005-2017 © <a class="footer__description-link" href="/" target="_blank">7h35h0p.ru</a> — модный интернет-магазин одежды, обуви и аксессуаров. <br/>
                Все права защищены. Доставка по всей России!
            </p>
        </div>
    </div>
</footer>`,ee={features:[{title:"бесплатная доставка от 4000 ₽",icon:{alt:"delivery",url:"/assets/icons/delivery.svg",height:"45px",width:"40px"}},{title:"пробники в подарок при каждой покупке",icon:{alt:"heart",url:"/assets/icons/heart.svg",height:"24px",width:"26px"}},{title:"акции и подарки за покупку",icon:{alt:"cup",url:"/assets/icons/cup.svg",height:"23px",width:"21px"}}],socialLinks:[{url:"/",icon:{alt:"facebook",url:"/assets/icons/facebook.svg",height:"22px",width:"18px"}},{url:"/",icon:{alt:"twitter",url:"/assets/icons/twitter.svg",height:"30px",width:"35px"}},{url:"/",icon:{alt:"instagram",url:"/assets/icons/instagram.svg",height:"32px",width:"34px"}}]};function te(){return A(Z,ee)}const ne=`<header class="header">
    <div class="header__top">
        <div class="header__top-inner container">
            <div class="header__logo-wrapper">
                <a href="/" class="header__logo-link">
                    <img class="header__logo-icon" src="{{baseAssetsUrl}}/assets/icons/the_shop_logo.svg" width="104px" height="22px"  alt="7h3 5h0p">
                </a>
            </div>

            <div class="header__second-logo-wrapper">
                <img class="header__logo-icon" src="{{baseAssetsUrl}}/assets/icons/oggetto_logo.svg"  width="48px" height="50px" alt="oggetto logo">
            </div>

            <div class="header__contacts-wrapper">
                <a class="header__phone-link" href="tel:+78122128506">+7 (812) 2•12•85•06</a>
            </div>
        </div>
    </div>

    <div class="header__bottom">
        <div class="header__bottom-inner container">
            <div class="header__nav-wrapper">
                <nav class="nav">
                    <ul class="nav__list">
                        {{#navItems}}
                            <li class="nav__item">
                                <a href="{{url}}" class="nav__link  {{#isActive}}nav__link--active{{/isActive}}">{{title}}</a>
                            </li>
                        {{/navItems}}
                    </ul>
                </nav>
            </div>

            <div class="header__search-wrapper">
                <input class="header__search-input" type="search" />
            </div>
        </div>
    </div>
</header>`,re={navItems:[{url:"/",title:"LISP",isActive:!0},{url:"/OCaml",title:"OCaml"},{url:"/JavaScript",title:"JavaScript"},{url:"/Python",title:"Python"},{url:"/PHP",title:"PHP"}]};function se(){return A(ne,re)}const ae=`<main class="main">

</main>`;function ie(){return A(ae)}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("app"),e=t=>{n==null||n.insertAdjacentHTML("beforeend",t)};se().then(e),ie().then(e),te().then(e)});
