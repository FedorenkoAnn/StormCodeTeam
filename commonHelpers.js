import{a as g}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".switch input");e.addEventListener("change",function(){e.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")})});var p=document.querySelectorAll(".nav-link");p.forEach(function(e){e.addEventListener("click",function(){p.forEach(function(t){t.classList.remove("is-active")}),e.classList.add("is-active")})});async function h(e){return await g.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function u(e){return await g.get(`https://books-backend.p.goit.global/books/${e}`)}const k=document.querySelector(".js-list"),v=document.querySelectorAll(".js-category"),b=document.querySelector(".books-list");k.addEventListener("click",async e=>{try{if(Array.from(v).includes(e.target)){const t=e.target.textContent.trim(),c=(await h(t)).data;console.log(c);const o=c.map(({_id:n,book_image:i,title:l,author:a})=>({book_image:i,title:l,author:a,_id:n})),s=L(t,o);b.innerHTML=s}}catch(t){console.error(t)}});function L(e,t){const r=`<h2 class="hardcover-category-title">${e.replace(/(\w+)/g,(o,s,n)=>n===0?o:`<span class="book-categories-span">${o}</span>`)}</h2>`,c=t.map(({_id:o,book_image:s,title:n,author:i})=>`<li class="hardcover-item" id=${o}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${s}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${n}</h2>
                        <p class="hardcover-text">${i}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return r+'<ul class="hardcover-list">'+c+"</ul>"}const S=document.querySelector(".js-shopping-list"),m=document.querySelector(".shopping-list"),w=document.querySelector(".empty-list-text");document.querySelector(".shopping-list-js");document.querySelector(".delete-button");u("643282b1e85766588626a0dc").then(e=>{const t=e.data,{_id:r,book_image:c,title:o,list_name:s,description:n,author:i,buy_links:l}=t,a=l.slice(0,2),f={id:r,book_image:c,title:o,list_name:s,description:n,author:i,selectedLinks:a};localStorage.setItem("bookData",JSON.stringify(f))}).catch(e=>{console.log("Error:",e)});m.addEventListener("click",B);function B(e){e.preventDefault();const t=m.innerText.toLowerCase();t.includes("add")?u():t.includes("remove")&&removeBookFromLS()}S.addEventListener("click",q);function q(e){e.preventDefault(),localStorage.length||(w.textContent="This page is empty, add some books and proceed to order.")}getBookDyId("_id").then(e=>{e.data});function E(e){const{id:t,book_image:r,list_name:c,author:o,description:s}=e;return`<div class="modal-body" data-bookid="${t}">
      <div class="image-container">
        ${r}
      </div>
      <div class="list-container">
        <ul class="list-details">
          <li class="title">${c}</li>
          <li class="list-name">${o}</li>
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
    </div>`}const C=document.querySelector(".modal-body");function T(e,t){e.innerHTML=t}async function x(){try{const e=await u("idBook"),t=E(e);T(C,t)}catch(e){console.error(e)}}x();const $=document.querySelector(".modal-close-btn");document.querySelector(".backdrop");function O(){const e=document.querySelector(".backdrop");e.style.display="none"}$.addEventListener("click",()=>{O()});function M(){const e=document.querySelector(".shopping-list");e.textContent==="Add to shopping list"?e.textContent="Remove from the shopping list":e.textContent="Add to shopping list"}document.querySelector(".shopping-list").addEventListener("click",M);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".sidebar-swiper-list"),t=100;function r(){e.scrollTop-=t,o()}function c(){e.scrollTop+=t,o()}function o(){const s=e.scrollTop,n=e.scrollHeight-e.clientHeight;document.querySelector(".support-arrow-up").classList.toggle("visually-hidden",s===0),document.querySelector(".support-arrow-down").classList.toggle("visually-hidden",s===n)}document.querySelector(".support-arrow-up").addEventListener("click",r),document.querySelector(".support-arrow-down").addEventListener("click",c),o()});const d=document.querySelector(".back-to-top");window.addEventListener("scroll",D);d.addEventListener("click",y);function D(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?d.classList.add("back-to-top--show"):d.classList.remove("back-to-top--show")}function y(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(y,0))}
//# sourceMappingURL=commonHelpers.js.map
