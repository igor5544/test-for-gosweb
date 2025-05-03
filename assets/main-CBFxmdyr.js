(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var j=Object.prototype.toString,m=Array.isArray||function(e){return j.call(e)==="[object Array]"};function U(n){return typeof n=="function"}function M(n){return m(n)?"array":typeof n}function x(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function I(n,e){return n!=null&&typeof n=="object"&&e in n}function H(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var q=RegExp.prototype.test;function N(n,e){return q.call(n,e)}var W=/\S/;function F(n){return!N(W,n)}var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function $(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return D[t]})}var J=/\s*/,K=/\s+/,L=/\s*=/,z=/\s*\}/,G=/#|\^|\/|>|\{|&|=|!/;function Q(n,e){if(!n)return[];var t=!1,r=[],s=[],i=[],a=!1,l=!1,o="",c=0;function f(){if(a&&!l)for(;i.length;)delete s[i.pop()];else i=[];a=!1,l=!1}var g,w,O;function R(_){if(typeof _=="string"&&(_=_.split(K,2)),!m(_)||_.length!==2)throw new Error("Invalid tags: "+_);g=new RegExp(x(_[0])+"\\s*"),w=new RegExp("\\s*"+x(_[1])),O=new RegExp("\\s*"+x("}"+_[1]))}R(e||v.tags);for(var u=new E(n),y,p,d,P,T,k;!u.eos();){if(y=u.pos,d=u.scanUntil(g),d)for(var S=0,B=d.length;S<B;++S)P=d.charAt(S),F(P)?(i.push(s.length),o+=P):(l=!0,t=!0,o+=" "),s.push(["text",P,y,y+1]),y+=1,P===`
`&&(f(),o="",c=0,t=!1);if(!u.scan(g))break;if(a=!0,p=u.scan(G)||"name",u.scan(J),p==="="?(d=u.scanUntil(L),u.scan(L),u.scanUntil(w)):p==="{"?(d=u.scanUntil(O),u.scan(z),u.scanUntil(w),p="&"):d=u.scanUntil(w),!u.scan(w))throw new Error("Unclosed tag at "+u.pos);if(p==">"?T=[p,d,y,u.pos,o,c,t]:T=[p,d,y,u.pos],c++,s.push(T),p==="#"||p==="^")r.push(T);else if(p==="/"){if(k=r.pop(),!k)throw new Error('Unopened section "'+d+'" at '+y);if(k[1]!==d)throw new Error('Unclosed section "'+k[1]+'" at '+y)}else p==="name"||p==="{"||p==="&"?l=!0:p==="="&&R(d)}if(f(),k=r.pop(),k)throw new Error('Unclosed section "'+k[1]+'" at '+u.pos);return X(V(s))}function V(n){for(var e=[],t,r,s=0,i=n.length;s<i;++s)t=n[s],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function X(n){for(var e=[],t=e,r=[],s,i,a=0,l=n.length;a<l;++a)switch(s=n[a],s[0]){case"#":case"^":t.push(s),r.push(s),t=s[4]=[];break;case"/":i=r.pop(),i[5]=s[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(s)}return e}function E(n){this.string=n,this.tail=n,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};E.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function b(n,e){this.view=n,this.cache={".":this.view},this.parent=e}b.prototype.push=function(e){return new b(e,this)};b.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var s=this,i,a,l,o=!1;s;){if(e.indexOf(".")>0)for(i=s.view,a=e.split("."),l=0;i!=null&&l<a.length;)l===a.length-1&&(o=I(i,a[l])||H(i,a[l])),i=i[a[l++]];else i=s.view[e],o=I(s.view,e);if(o){r=i;break}s=s.parent}t[e]=r}return U(r)&&(r=r.call(this.view)),r};function h(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,t){var r=this.templateCache,s=e+":"+(t||v.tags).join(":"),i=typeof r<"u",a=i?r.get(s):void 0;return a==null&&(a=Q(e,t),i&&r.set(s,a)),a};h.prototype.render=function(e,t,r,s){var i=this.getConfigTags(s),a=this.parse(e,i),l=t instanceof b?t:new b(t,void 0);return this.renderTokens(a,l,r,e,s)};h.prototype.renderTokens=function(e,t,r,s,i){for(var a="",l,o,c,f=0,g=e.length;f<g;++f)c=void 0,l=e[f],o=l[0],o==="#"?c=this.renderSection(l,t,r,s,i):o==="^"?c=this.renderInverted(l,t,r,s,i):o===">"?c=this.renderPartial(l,t,r,i):o==="&"?c=this.unescapedValue(l,t):o==="name"?c=this.escapedValue(l,t,i):o==="text"&&(c=this.rawValue(l)),c!==void 0&&(a+=c);return a};h.prototype.renderSection=function(e,t,r,s,i){var a=this,l="",o=t.lookup(e[1]);function c(w){return a.render(w,t,r,i)}if(o){if(m(o))for(var f=0,g=o.length;f<g;++f)l+=this.renderTokens(e[4],t.push(o[f]),r,s,i);else if(typeof o=="object"||typeof o=="string"||typeof o=="number")l+=this.renderTokens(e[4],t.push(o),r,s,i);else if(U(o)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");o=o.call(t.view,s.slice(e[3],e[5]),c),o!=null&&(l+=o)}else l+=this.renderTokens(e[4],t,r,s,i);return l}};h.prototype.renderInverted=function(e,t,r,s,i){var a=t.lookup(e[1]);if(!a||m(a)&&a.length===0)return this.renderTokens(e[4],t,r,s,i)};h.prototype.indentPartial=function(e,t,r){for(var s=t.replace(/[^ \t]/g,""),i=e.split(`
`),a=0;a<i.length;a++)i[a].length&&(a>0||!r)&&(i[a]=s+i[a]);return i.join(`
`)};h.prototype.renderPartial=function(e,t,r,s){if(r){var i=this.getConfigTags(s),a=U(r)?r(e[1]):r[e[1]];if(a!=null){var l=e[6],o=e[5],c=e[4],f=a;o==0&&c&&(f=this.indentPartial(a,c,l));var g=this.parse(f,i);return this.renderTokens(g,t,r,f,s)}}};h.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};h.prototype.escapedValue=function(e,t,r){var s=this.getConfigEscape(r)||v.escape,i=t.lookup(e[1]);if(i!=null)return typeof i=="number"&&s===v.escape?String(i):s(i)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return m(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!m(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){C.templateCache=n},get templateCache(){return C.templateCache}},C=new h;v.clearCache=function(){return C.clearCache()};v.parse=function(e,t){return C.parse(e,t)};v.render=function(e,t,r,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+M(e)+'" was given as the first argument for mustache#render(template, view, partials)');return C.render(e,t,r,s)};v.escape=$;v.Scanner=E;v.Context=b;v.Writer=h;const Y={baseAssetsUrl:"./"};async function A(n,e={}){return v.render(n,Object.assign(e,Y))}const Z=`<footer class="footer">
    <div class="footer__inner container">
        <div class="footer__main-info-wrapper">
            <div class="footer__links">
                {{#linksBlocks}}
                    <div class="linksBlock">
                        <h2>{{blockTitle}}</h2>

                        <ul class="linksBlock__list">
                            {{#links}}
                                <li class="linksBlock__item">
                                    <a href="{{url}}" class="linksBlock__link">{{title}}</a>
                                </li>
                            {{/links}}
                        </ul>
                    </div>
                {{/linksBlocks}}
            </div>

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
</footer>`,ee={linksBlocks:[{blockTitle:"Сервис и поддержка",links:[{url:"/",title:"Как сделать заказ"},{url:"/",title:"Способы оплаты"},{url:"/",title:"Возврат товара"},{url:"/",title:"Правила продажи"},{url:"/",title:"Публичная оферта"},{url:"/",title:"Возврат денежных средств"},{url:"/",title:"Доставка"},{url:"/",title:"Вопросы и ответы"}]},{blockTitle:"О компании",links:[{url:"/",title:"О нас"},{url:"/",title:"Сертификаты"},{url:"/",title:"Контакты"},{url:"/",title:"Преимущества"},{url:"/",title:"Вакансии"},{url:"/",title:"Наши скидки"},{url:"/",title:"Партнерам"}]}],features:[{title:"бесплатная доставка от 4000 ₽",icon:{alt:"delivery",url:"/assets/icons/delivery.svg",height:"45px",width:"40px"}},{title:"пробники в подарок при каждой покупке",icon:{alt:"heart",url:"/assets/icons/heart.svg",height:"24px",width:"26px"}},{title:"акции и подарки за покупку",icon:{alt:"cup",url:"/assets/icons/cup.svg",height:"23px",width:"21px"}}],socialLinks:[{url:"/",icon:{alt:"facebook",url:"/assets/icons/facebook.svg",height:"22px",width:"18px"}},{url:"/",icon:{alt:"twitter",url:"/assets/icons/twitter.svg",height:"30px",width:"35px"}},{url:"/",icon:{alt:"instagram",url:"/assets/icons/instagram.svg",height:"32px",width:"34px"}}]};function te(){return A(Z,ee)}const ne=`<header class="header">
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
</header>`,re={navItems:[{url:"/",title:"LISP",isActive:!0},{url:"/OCaml",title:"OCaml"},{url:"/JavaScript",title:"JavaScript"},{url:"/Python",title:"Python"},{url:"/PHP",title:"PHP"}]};function se(){return A(ne,re)}const ie=`<main class="main">

</main>`;function ae(){return A(ie)}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("app"),e=t=>{n==null||n.insertAdjacentHTML("beforeend",t)};se().then(e),ae().then(e),te().then(e)});
