import{a as l}from"./assets/vendor-0cb09735.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function d(o){return await l.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}const i=document.querySelector(".test-button"),u=document.querySelector(".books-list");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("isButtonHidden")==="true"&&(i.style.display="none")});i.addEventListener("click",async()=>{try{const o="Hardcover Fiction",n=(await d(o)).data;console.log(n);const c=n.map(({book_image:t,title:r,author:a})=>({book_image:t,title:r,author:a})),e=p(o,c);u.innerHTML=e,localStorage.setItem("isButtonHidden","true"),i.style.display="none"}catch(o){console.error(o)}});function p(o,s){const n=`<h2 class="hardcover-category-title">${o.replace(/(\w+)/g,(e,t,r)=>r===0?e:`<span class="book-categories-span">${e}</span>`)}</h2>`,c=s.map(({book_image:e,title:t,author:r})=>`<li class="hardcover-item">         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${e}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${t}</h2>
                        <p class="hardcover-text">${r}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return n+'<ul class="hardcover-list">'+c+"</ul>"}function g(){const o=document.querySelector(".shopping-list");o.textContent==="Add to shopping list"?o.textContent="Remove from the shopping list":o.textContent="Add to shopping list"}document.querySelector(".shopping-list").addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
