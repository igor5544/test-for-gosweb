(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var B=Object.prototype.toString,m=Array.isArray||function(e){return B.call(e)==="[object Array]"};function x(t){return typeof t=="function"}function M(t){return m(t)?"array":typeof t}function T(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function I(t,e){return t!=null&&typeof t=="object"&&e in t}function H(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var q=RegExp.prototype.test;function N(t,e){return q.call(t,e)}var W=/\S/;function F(t){return!N(W,t)}var $={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function D(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return $[n]})}var J=/\s*/,K=/\s+/,L=/\s*=/,z=/\s*\}/,G=/#|\^|\/|>|\{|&|=|!/;function Q(t,e){if(!t)return[];var n=!1,r=[],s=[],i=[],a=!1,l=!1,c="",o=0;function p(){if(a&&!l)for(;i.length;)delete s[i.pop()];else i=[];a=!1,l=!1}var g,w,O;function R(_){if(typeof _=="string"&&(_=_.split(K,2)),!m(_)||_.length!==2)throw new Error("Invalid tags: "+_);g=new RegExp(T(_[0])+"\\s*"),w=new RegExp("\\s*"+T(_[1])),O=new RegExp("\\s*"+T("}"+_[1]))}R(e||v.tags);for(var u=new C(t),y,d,f,P,E,b;!u.eos();){if(y=u.pos,f=u.scanUntil(g),f)for(var S=0,j=f.length;S<j;++S)P=f.charAt(S),F(P)?(i.push(s.length),c+=P):(l=!0,n=!0,c+=" "),s.push(["text",P,y,y+1]),y+=1,P===`
`&&(p(),c="",o=0,n=!1);if(!u.scan(g))break;if(a=!0,d=u.scan(G)||"name",u.scan(J),d==="="?(f=u.scanUntil(L),u.scan(L),u.scanUntil(w)):d==="{"?(f=u.scanUntil(O),u.scan(z),u.scanUntil(w),d="&"):f=u.scanUntil(w),!u.scan(w))throw new Error("Unclosed tag at "+u.pos);if(d==">"?E=[d,f,y,u.pos,c,o,n]:E=[d,f,y,u.pos],o++,s.push(E),d==="#"||d==="^")r.push(E);else if(d==="/"){if(b=r.pop(),!b)throw new Error('Unopened section "'+f+'" at '+y);if(b[1]!==f)throw new Error('Unclosed section "'+b[1]+'" at '+y)}else d==="name"||d==="{"||d==="&"?l=!0:d==="="&&R(f)}if(p(),b=r.pop(),b)throw new Error('Unclosed section "'+b[1]+'" at '+u.pos);return X(V(s))}function V(t){for(var e=[],n,r,s=0,i=t.length;s<i;++s)n=t[s],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function X(t){for(var e=[],n=e,r=[],s,i,a=0,l=t.length;a<l;++a)switch(s=t[a],s[0]){case"#":case"^":n.push(s),r.push(s),n=s[4]=[];break;case"/":i=r.pop(),i[5]=s[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(s)}return e}function C(t){this.string=t,this.tail=t,this.pos=0}C.prototype.eos=function(){return this.tail===""};C.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};C.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function k(t,e){this.view=t,this.cache={".":this.view},this.parent=e}k.prototype.push=function(e){return new k(e,this)};k.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var s=this,i,a,l,c=!1;s;){if(e.indexOf(".")>0)for(i=s.view,a=e.split("."),l=0;i!=null&&l<a.length;)l===a.length-1&&(c=I(i,a[l])||H(i,a[l])),i=i[a[l++]];else i=s.view[e],c=I(s.view,e);if(c){r=i;break}s=s.parent}n[e]=r}return x(r)&&(r=r.call(this.view)),r};function h(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,n){var r=this.templateCache,s=e+":"+(n||v.tags).join(":"),i=typeof r<"u",a=i?r.get(s):void 0;return a==null&&(a=Q(e,n),i&&r.set(s,a)),a};h.prototype.render=function(e,n,r,s){var i=this.getConfigTags(s),a=this.parse(e,i),l=n instanceof k?n:new k(n,void 0);return this.renderTokens(a,l,r,e,s)};h.prototype.renderTokens=function(e,n,r,s,i){for(var a="",l,c,o,p=0,g=e.length;p<g;++p)o=void 0,l=e[p],c=l[0],c==="#"?o=this.renderSection(l,n,r,s,i):c==="^"?o=this.renderInverted(l,n,r,s,i):c===">"?o=this.renderPartial(l,n,r,i):c==="&"?o=this.unescapedValue(l,n):c==="name"?o=this.escapedValue(l,n,i):c==="text"&&(o=this.rawValue(l)),o!==void 0&&(a+=o);return a};h.prototype.renderSection=function(e,n,r,s,i){var a=this,l="",c=n.lookup(e[1]);function o(w){return a.render(w,n,r,i)}if(c){if(m(c))for(var p=0,g=c.length;p<g;++p)l+=this.renderTokens(e[4],n.push(c[p]),r,s,i);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")l+=this.renderTokens(e[4],n.push(c),r,s,i);else if(x(c)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,s.slice(e[3],e[5]),o),c!=null&&(l+=c)}else l+=this.renderTokens(e[4],n,r,s,i);return l}};h.prototype.renderInverted=function(e,n,r,s,i){var a=n.lookup(e[1]);if(!a||m(a)&&a.length===0)return this.renderTokens(e[4],n,r,s,i)};h.prototype.indentPartial=function(e,n,r){for(var s=n.replace(/[^ \t]/g,""),i=e.split(`
`),a=0;a<i.length;a++)i[a].length&&(a>0||!r)&&(i[a]=s+i[a]);return i.join(`
`)};h.prototype.renderPartial=function(e,n,r,s){if(r){var i=this.getConfigTags(s),a=x(r)?r(e[1]):r[e[1]];if(a!=null){var l=e[6],c=e[5],o=e[4],p=a;c==0&&o&&(p=this.indentPartial(a,o,l));var g=this.parse(p,i);return this.renderTokens(g,n,r,p,s)}}};h.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};h.prototype.escapedValue=function(e,n,r){var s=this.getConfigEscape(r)||v.escape,i=n.lookup(e[1]);if(i!=null)return typeof i=="number"&&s===v.escape?String(i):s(i)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return m(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!m(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){A.templateCache=t},get templateCache(){return A.templateCache}},A=new h;v.clearCache=function(){return A.clearCache()};v.parse=function(e,n){return A.parse(e,n)};v.render=function(e,n,r,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+M(e)+'" was given as the first argument for mustache#render(template, view, partials)');return A.render(e,n,r,s)};v.escape=D;v.Scanner=C;v.Context=k;v.Writer=h;const Y={baseAssetsUrl:"./"};async function U(t,e={}){return v.render(t,Object.assign(e,Y))}const Z=`<footer class="footer">
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
</footer>`,ee={linksBlocks:[{blockTitle:"Сервис и поддержка",links:[{url:"/",title:"Как сделать заказ"},{url:"/",title:"Способы оплаты"},{url:"/",title:"Возврат товара"},{url:"/",title:"Правила продажи"},{url:"/",title:"Публичная оферта"},{url:"/",title:"Возврат денежных средств"},{url:"/",title:"Доставка"},{url:"/",title:"Вопросы и ответы"}]},{blockTitle:"О компании",links:[{url:"/",title:"О нас"},{url:"/",title:"Сертификаты"},{url:"/",title:"Контакты"},{url:"/",title:"Преимущества"},{url:"/",title:"Вакансии"},{url:"/",title:"Наши скидки"},{url:"/",title:"Партнерам"}]}],features:[{title:"бесплатная доставка от 4000 ₽",icon:{alt:"delivery",url:"/assets/icons/delivery.svg",height:"45px",width:"40px"}},{title:"пробники в подарок при каждой покупке",icon:{alt:"heart",url:"/assets/icons/heart.svg",height:"24px",width:"26px"}},{title:"акции и подарки за покупку",icon:{alt:"cup",url:"/assets/icons/cup.svg",height:"23px",width:"21px"}}],socialLinks:[{url:"/",icon:{alt:"facebook",url:"/assets/icons/facebook.svg",height:"22px",width:"18px"}},{url:"/",icon:{alt:"twitter",url:"/assets/icons/twitter.svg",height:"30px",width:"35px"}},{url:"/",icon:{alt:"instagram",url:"/assets/icons/instagram.svg",height:"32px",width:"34px"}}]};function ne(){return U(Z,ee)}const te=`<header class="header">
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
                                <a
                                  href="{{url}}"
                                  class="nav__link {{#isActive}}nav__link--active{{/isActive}}"
                                >
                                    {{title}}
                                </a>
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
</header>`,re={navItems:[{url:"/",title:"LISP",isActive:!0},{url:"/OCaml",title:"OCaml"},{url:"/JavaScript",title:"JavaScript"},{url:"/Python",title:"Python"},{url:"/PHP",title:"PHP"}]};function se(){return U(te,re)}const ie=`<main class="main">
    <div class="main__inner container">
        <div class="breadcrumbs">
            <ul class="breadcrumbs__list">
                {{#breadcrumbs}}
                    <li class="breadcrumbs__item">
                        {{^isActive}}
                            <a
                               href="{{url}}"
                               class="breadcrumbs__link"
                            >
                                {{title}}
                            </a>
                        {{/isActive}}
                        {{#isActive}}
                            <span class="breadcrumbs__current-location">
                                {{title}}
                            </span>
                        {{/isActive}}
                    </li>
                {{/breadcrumbs}}
            </ul>
        </div>

        <section class="product">
            <div class="product__view">
                <img
                    class="product__img"
                    width="700px"
                    height="700px"
                    alt="футболка"
                    src="{{baseAssetsUrl}}/assets/images/tshirt_white.jpg"
                />
            </div>

            <div class="product__data">
                <h1 class="product__title">
                    Футболка Alien technology
                </h1>

                <p class="product__description">
                    Состав: 100% хлопок, динамическая типизация, польская нотация. Производство: Россия.
                </p>

                <span class="product__price">
                    1500₽
                </span>
            </div>
        </section>
    </div>
</main>`,ae={breadcrumbs:[{url:"/",title:"LISP"},{url:"/",title:"Одежда"},{url:"/",title:"Футболки",isActive:!0}]};function le(){return U(ie,ae)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app"),e=n=>{t==null||t.insertAdjacentHTML("beforeend",n)};se().then(e),le().then(e),ne().then(e)});
