(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var B=Object.prototype.toString,k=Array.isArray||function(e){return B.call(e)==="[object Array]"};function x(r){return typeof r=="function"}function q(r){return k(r)?"array":typeof r}function C(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function O(r,e){return r!=null&&typeof r=="object"&&e in r}function M(r,e){return r!=null&&typeof r!="object"&&r.hasOwnProperty&&r.hasOwnProperty(e)}var F=RegExp.prototype.test;function $(r,e){return F.call(r,e)}var D=/\S/;function H(r){return!$(D,r)}var N={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function W(r){return String(r).replace(/[&<>"'`=\/]/g,function(t){return N[t]})}var z=/\s*/,J=/\s+/,I=/\s*=/,K=/\s*\}/,V=/#|\^|\/|>|\{|&|=|!/;function G(r,e){if(!r)return[];var t=!1,n=[],s=[],i=[],a=!1,l=!1,o="",c=0;function p(){if(a&&!l)for(;i.length;)delete s[i.pop()];else i=[];a=!1,l=!1}var _,b,U;function R(g){if(typeof g=="string"&&(g=g.split(J,2)),!k(g)||g.length!==2)throw new Error("Invalid tags: "+g);_=new RegExp(C(g[0])+"\\s*"),b=new RegExp("\\s*"+C(g[1])),U=new RegExp("\\s*"+C("}"+g[1]))}R(e||v.tags);for(var u=new A(r),y,h,f,S,P,w;!u.eos();){if(y=u.pos,f=u.scanUntil(_),f)for(var T=0,j=f.length;T<j;++T)S=f.charAt(T),H(S)?(i.push(s.length),o+=S):(l=!0,t=!0,o+=" "),s.push(["text",S,y,y+1]),y+=1,S===`
`&&(p(),o="",c=0,t=!1);if(!u.scan(_))break;if(a=!0,h=u.scan(V)||"name",u.scan(z),h==="="?(f=u.scanUntil(I),u.scan(I),u.scanUntil(b)):h==="{"?(f=u.scanUntil(U),u.scan(K),u.scanUntil(b),h="&"):f=u.scanUntil(b),!u.scan(b))throw new Error("Unclosed tag at "+u.pos);if(h==">"?P=[h,f,y,u.pos,o,c,t]:P=[h,f,y,u.pos],c++,s.push(P),h==="#"||h==="^")n.push(P);else if(h==="/"){if(w=n.pop(),!w)throw new Error('Unopened section "'+f+'" at '+y);if(w[1]!==f)throw new Error('Unclosed section "'+w[1]+'" at '+y)}else h==="name"||h==="{"||h==="&"?l=!0:h==="="&&R(f)}if(p(),w=n.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+u.pos);return X(Q(s))}function Q(r){for(var e=[],t,n,s=0,i=r.length;s<i;++s)t=r[s],t&&(t[0]==="text"&&n&&n[0]==="text"?(n[1]+=t[1],n[3]=t[3]):(e.push(t),n=t));return e}function X(r){for(var e=[],t=e,n=[],s,i,a=0,l=r.length;a<l;++a)switch(s=r[a],s[0]){case"#":case"^":t.push(s),n.push(s),t=s[4]=[];break;case"/":i=n.pop(),i[5]=s[2],t=n.length>0?n[n.length-1][4]:e;break;default:t.push(s)}return e}function A(r){this.string=r,this.tail=r,this.pos=0}A.prototype.eos=function(){return this.tail===""};A.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};A.prototype.scanUntil=function(e){var t=this.tail.search(e),n;switch(t){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=n.length,n};function m(r,e){this.view=r,this.cache={".":this.view},this.parent=e}m.prototype.push=function(e){return new m(e,this)};m.prototype.lookup=function(e){var t=this.cache,n;if(t.hasOwnProperty(e))n=t[e];else{for(var s=this,i,a,l,o=!1;s;){if(e.indexOf(".")>0)for(i=s.view,a=e.split("."),l=0;i!=null&&l<a.length;)l===a.length-1&&(o=O(i,a[l])||M(i,a[l])),i=i[a[l++]];else i=s.view[e],o=O(s.view,e);if(o){n=i;break}s=s.parent}t[e]=n}return x(n)&&(n=n.call(this.view)),n};function d(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};d.prototype.parse=function(e,t){var n=this.templateCache,s=e+":"+(t||v.tags).join(":"),i=typeof n<"u",a=i?n.get(s):void 0;return a==null&&(a=G(e,t),i&&n.set(s,a)),a};d.prototype.render=function(e,t,n,s){var i=this.getConfigTags(s),a=this.parse(e,i),l=t instanceof m?t:new m(t,void 0);return this.renderTokens(a,l,n,e,s)};d.prototype.renderTokens=function(e,t,n,s,i){for(var a="",l,o,c,p=0,_=e.length;p<_;++p)c=void 0,l=e[p],o=l[0],o==="#"?c=this.renderSection(l,t,n,s,i):o==="^"?c=this.renderInverted(l,t,n,s,i):o===">"?c=this.renderPartial(l,t,n,i):o==="&"?c=this.unescapedValue(l,t):o==="name"?c=this.escapedValue(l,t,i):o==="text"&&(c=this.rawValue(l)),c!==void 0&&(a+=c);return a};d.prototype.renderSection=function(e,t,n,s,i){var a=this,l="",o=t.lookup(e[1]);function c(b){return a.render(b,t,n,i)}if(o){if(k(o))for(var p=0,_=o.length;p<_;++p)l+=this.renderTokens(e[4],t.push(o[p]),n,s,i);else if(typeof o=="object"||typeof o=="string"||typeof o=="number")l+=this.renderTokens(e[4],t.push(o),n,s,i);else if(x(o)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");o=o.call(t.view,s.slice(e[3],e[5]),c),o!=null&&(l+=o)}else l+=this.renderTokens(e[4],t,n,s,i);return l}};d.prototype.renderInverted=function(e,t,n,s,i){var a=t.lookup(e[1]);if(!a||k(a)&&a.length===0)return this.renderTokens(e[4],t,n,s,i)};d.prototype.indentPartial=function(e,t,n){for(var s=t.replace(/[^ \t]/g,""),i=e.split(`
`),a=0;a<i.length;a++)i[a].length&&(a>0||!n)&&(i[a]=s+i[a]);return i.join(`
`)};d.prototype.renderPartial=function(e,t,n,s){if(n){var i=this.getConfigTags(s),a=x(n)?n(e[1]):n[e[1]];if(a!=null){var l=e[6],o=e[5],c=e[4],p=a;o==0&&c&&(p=this.indentPartial(a,c,l));var _=this.parse(p,i);return this.renderTokens(_,t,n,p,s)}}};d.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(n!=null)return n};d.prototype.escapedValue=function(e,t,n){var s=this.getConfigEscape(n)||v.escape,i=t.lookup(e[1]);if(i!=null)return typeof i=="number"&&s===v.escape?String(i):s(i)};d.prototype.rawValue=function(e){return e[1]};d.prototype.getConfigTags=function(e){return k(e)?e:e&&typeof e=="object"?e.tags:void 0};d.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!k(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(r){E.templateCache=r},get templateCache(){return E.templateCache}},E=new d;v.clearCache=function(){return E.clearCache()};v.parse=function(e,t){return E.parse(e,t)};v.render=function(e,t,n,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+q(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,t,n,s)};v.escape=W;v.Scanner=A;v.Context=m;v.Writer=d;const Y={baseAssetsUrl:"./"};function L(r,e={}){const t=document.getElementById("app"),n=Object.assign(e,Y),s=v.render(r,n);return t==null||t.insertAdjacentHTML("beforeend",s),n}const Z=`<footer class="footer">
    <div class="footer__inner container">
        <div class="footer__main-info-wrapper">
            <div class="footer__links">
                {{#linksBlocks}}
                    <div class="linksBlock">
                        <h2 class="linksBlock__title">{{blockTitle}}</h2>

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
                <div class="footer__features features">
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

                                <p class="features__text">{{title}}</p>
                            </li>
                        {{/features}}
                    </ul>
                </div>

                <div class="footer__social-links social-links">
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
</footer>`,ee={linksBlocks:[{blockTitle:"Сервис и поддержка",links:[{url:"/",title:"Как сделать заказ"},{url:"/",title:"Способы оплаты"},{url:"/",title:"Возврат товара"},{url:"/",title:"Правила продажи"},{url:"/",title:"Публичная оферта"},{url:"/",title:"Возврат денежных средств"},{url:"/",title:"Доставка"},{url:"/",title:"Вопросы и ответы"}]},{blockTitle:"О компании",links:[{url:"/",title:"О нас"},{url:"/",title:"Сертификаты"},{url:"/",title:"Контакты"},{url:"/",title:"Преимущества"},{url:"/",title:"Вакансии"},{url:"/",title:"Наши скидки"},{url:"/",title:"Партнерам"}]}],features:[{title:"бесплатная доставка от 4000 ₽",icon:{alt:"delivery",url:"/assets/icons/delivery.svg",height:"45px",width:"40px"}},{title:"пробники в подарок при каждой покупке",icon:{alt:"heart",url:"/assets/icons/heart.svg",height:"24px",width:"26px"}},{title:"акции и подарки за покупку",icon:{alt:"cup",url:"/assets/icons/cup.svg",height:"23px",width:"21px"}}],socialLinks:[{url:"/",icon:{alt:"facebook",url:"/assets/icons/facebook.svg",height:"18px",width:"14px"}},{url:"/",icon:{alt:"twitter",url:"/assets/icons/twitter.svg",height:"26px",width:"32px"}},{url:"/",icon:{alt:"instagram",url:"/assets/icons/instagram.svg",height:"32px",width:"32px"}}]};function te(){L(Z,ee)}const ne=`<header class="header">
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
</header>`,re={navItems:[{url:"/",title:"LISP",isActive:!0},{url:"/OCaml",title:"OCaml"},{url:"/JavaScript",title:"JavaScript"},{url:"/Python",title:"Python"},{url:"/PHP",title:"PHP"}]};function se(){L(ne,re)}const ie=`<main class="main">
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

                <form class="product__form">
                    <fieldset class="product__fieldset">
                        <legend class="product__legend">Размер:</legend>
                        <div class="product__radio-wrapper">
                            {{#product.sizes}}
                                <input
                                        class="product__radio-input"
                                        type="radio"
                                        name="size"
                                        value="{{title}}"
                                        id="{{title}}"
                                        {{#isSelected}}checked{{/isSelected}}
                                />
                                <label class="product__radio-label" for="{{title}}">
                                    {{title}}
                                </label>
                            {{/product.sizes}}
                        </div>
                    </fieldset>

                    <fieldset class="product__fieldset">
                        <legend class="product__legend">Цвет:</legend>
                        <div class="product__radio-wrapper color-radio">
                            {{#product.colors}}
                                <input
                                        class="color-radio__input product__radio-input"
                                        type="radio"
                                        name="color"
                                        value="{{value}}"
                                        id="{{value}}"
                                        {{#isSelected}}checked{{/isSelected}}
                                />
                                <label
                                        class="color-radio__label product__radio-label"
                                        for="{{value}}"
                                        style="background-color: {{color}}"
                                >
                                    {{value}}
                                </label>
                            {{/product.colors}}
                        </div>
                    </fieldset>

                    <button class="product__buy-button" type="submit">
                        Купить
                    </button>
                </form>

                <button class="product__postpone-button">
                    Отложить на потом
                </button>
            </div>
        </section>
    </div>
</main>`,ae={breadcrumbs:[{url:"/",title:"LISP"},{url:"/",title:"Одежда"},{url:"/",title:"Футболки",isActive:!0}],product:{sizes:[{title:"S"},{title:"M",isSelected:!0},{title:"L"}],colors:[{color:"#fff9fa",value:"white",isSelected:!0},{color:"#e3d95d",value:"yellow"},{color:"#a5af95",value:"green"}]}},le=({baseAssetsUrl:r})=>{const e=document.querySelector(".main"),t=e==null?void 0:e.querySelector(".product__form");t&&t.addEventListener("change",n=>{if(n.target.classList.contains("color-radio__input")){const i=n.target.value,a=e==null?void 0:e.querySelector(".product__img");a&&(a.src=`${r}/assets/images/tshirt_${i}.jpg`)}})},oe=r=>{le(r)};function ce(){const r=L(ie,ae);oe(r)}document.addEventListener("DOMContentLoaded",()=>{se(),ce(),te()});
