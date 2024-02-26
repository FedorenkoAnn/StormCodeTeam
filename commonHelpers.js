import{a as u}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",function(){var o=document.querySelector(".switch input");o.addEventListener("change",function(){o.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")})});var g=document.querySelectorAll(".nav-link");g.forEach(function(o){o.addEventListener("click",function(){g.forEach(function(t){t.classList.remove("is-active")}),o.classList.add("is-active")})});async function k(){return await u.get("https://books-backend.p.goit.global/books/top-books")}async function f(o){return await u.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function p(o){return await u.get(`https://books-backend.p.goit.global/books/${o}`)}const v=o=>o.map(t=>`<h1 class="card_title-section js-heading">${t.list_name}</h1>
      <ul>
        ${t.books.map(({_id:c,book_image:e,title:s,author:r})=>`<ul class="card-list" >
                     <li class="card-item js-card" id=${c}>
                       <img
                         class="card_photo"
                         src=${e}
                         alt= book cover photo ${s}
                       />
                        <h3 class="card_book-title">${s}</h3>
                        <h4 class="card_author-title">${r}</h4>
                     </li>
                   </ul>`)}
      </ul>
    <btn>See more</btn>
      `),b=document.querySelector(".js-booklist");async function L(){const o=await k().then(t=>{const n=[];let c=0;for(const e of t){if(n.length===4)break;c=Math.round(Math.random()*t.length),n.includes(t[c])||n.push(t[c])}return n}).catch(t=>console.log(t));b.innerHTML=v(o)}L();const S=document.querySelector(".js-list"),w=document.querySelectorAll(".js-category"),B=document.querySelector(".books-list");S.addEventListener("click",async o=>{try{if(Array.from(w).includes(o.target)){const t=o.target.textContent.trim(),c=(await f(t)).data;console.log(c);const e=c.map(({_id:r,book_image:i,title:l,author:a})=>({book_image:i,title:l,author:a,_id:r})),s=q(t,e);B.innerHTML=s}}catch(t){console.error(t)}});function q(o,t){const n=`<h2 class="hardcover-category-title">${o.replace(/(\w+)/g,(e,s,r)=>r===0?e:`<span class="book-categories-span">${e}</span>`)}</h2>`,c=t.map(({_id:e,book_image:s,title:r,author:i})=>`<li class="hardcover-item" id=${e}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${s}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${r}</h2>
                        <p class="hardcover-text">${i}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return n+'<ul class="hardcover-list">'+c+"</ul>"}const $=document.querySelector(".js-shopping-list"),m=document.querySelector(".shopping-list"),E=document.querySelector(".empty-list-text");document.querySelector(".shopping-list-js");document.querySelector(".delete-button");p("643282b1e85766588626a0dc").then(o=>{const t=o.data,{_id:n,book_image:c,title:e,list_name:s,description:r,author:i,buy_links:l}=t,a=l.slice(0,2),y={id:n,book_image:c,title:e,list_name:s,description:r,author:i,selectedLinks:a};localStorage.setItem("bookData",JSON.stringify(y))}).catch(o=>{console.log("Error:",o)});m.addEventListener("click",T);function T(o){o.preventDefault();const t=m.innerText.toLowerCase();t.includes("add")?p():t.includes("remove")&&removeBookFromLS()}$.addEventListener("click",C);function C(o){o.preventDefault(),localStorage.length||(E.textContent="This page is empty, add some books and proceed to order.")}getBookDyId("_id").then(o=>{o.data});function x(o){const{id:t,book_image:n,list_name:c,author:e,description:s}=o;return`<div class="modal-body" data-bookid="${t}">
      <div class="image-container">
        ${n}
      </div>
      <div class="list-container">
        <ul class="list-details">
          <li class="title">${c}</li>
          <li class="list-name">${e}</li>
          <li class="list-descr">
            ${s}
          </li>
          <div class="list-links">
            <li class="list-amazon">
              <img src="./img/amazon.png" alt="amazon" />
            </li>
            <li class="list-google">
              <img src="./img/google.png" alt="google" />
            </li>
          </div>
        </ul>
      </div>
    </div>`}const M=document.querySelector(".modal-body");function _(o,t){o.innerHTML=t}async function O(){try{const o=await p("idBook"),t=x(o);_(M,t)}catch(o){console.error(o)}}O();const j=document.querySelector(".modal-close-btn");document.querySelector(".backdrop");function D(){const o=document.querySelector(".backdrop");o.style.display="none"}j.addEventListener("click",()=>{D()});function H(){const o=document.querySelector(".shopping-list");o.textContent==="Add to shopping list"?o.textContent="Remove from the shopping list":o.textContent="Add to shopping list"}document.querySelector(".shopping-list").addEventListener("click",H);document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".sidebar-swiper-list"),t=100;function n(){o.scrollTop-=t,e()}function c(){o.scrollTop+=t,e()}function e(){const s=o.scrollTop,r=o.scrollHeight-o.clientHeight;document.querySelector(".support-arrow-up").classList.toggle("visually-hidden",s===0),document.querySelector(".support-arrow-down").classList.toggle("visually-hidden",s===r)}document.querySelector(".support-arrow-up").addEventListener("click",n),document.querySelector(".support-arrow-down").addEventListener("click",c),e()});const d=document.querySelector(".back-to-top");window.addEventListener("scroll",A);d.addEventListener("click",h);function A(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?d.classList.add("back-to-top--show"):d.classList.remove("back-to-top--show")}function h(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(h,0))}
//# sourceMappingURL=commonHelpers.js.map
