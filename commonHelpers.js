import{a as g,S as m}from"./assets/vendor-346b15b4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".switch input");e.addEventListener("change",function(){e.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")})});var p=document.querySelectorAll(".nav-link");p.forEach(function(e){e.addEventListener("click",function(){p.forEach(function(t){t.classList.remove("is-active")}),e.classList.add("is-active")})});async function v(e){return await g.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function u(e){return await g.get(`https://books-backend.p.goit.global/books/${e}`)}const k=document.querySelector(".js-list"),b=document.querySelectorAll(".js-category"),L=document.querySelector(".books-list");k.addEventListener("click",async e=>{try{if(Array.from(b).includes(e.target)){const t=e.target.textContent.trim(),n=(await v(t)).data;console.log(n);const o=n.map(({_id:r,book_image:i,title:a,author:l})=>({book_image:i,title:a,author:l,_id:r})),s=w(t,o);L.innerHTML=s}}catch(t){console.error(t)}});function w(e,t){const c=`<h2 class="hardcover-category-title">${e.replace(/(\w+)/g,(o,s,r)=>r===0?o:`<span class="book-categories-span">${o}</span>`)}</h2>`,n=t.map(({_id:o,book_image:s,title:r,author:i})=>`<li class="hardcover-item" id=${o}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${s}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${r}</h2>
                        <p class="hardcover-text">${i}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return c+'<ul class="hardcover-list">'+n+"</ul>"}const S=document.querySelector(".js-shopping-list"),y=document.querySelector(".shopping-list"),B=document.querySelector(".empty-list-text");document.querySelector(".shopping-list-js");document.querySelector(".delete-button");u("643282b1e85766588626a0dc").then(e=>{const t=e.data,{_id:c,book_image:n,title:o,list_name:s,description:r,author:i,buy_links:a}=t,l=a.slice(0,2),h={id:c,book_image:n,title:o,list_name:s,description:r,author:i,selectedLinks:l};localStorage.setItem("bookData",JSON.stringify(h))}).catch(e=>{console.log("Error:",e)});y.addEventListener("click",q);function q(e){e.preventDefault();const t=y.innerText.toLowerCase();t.includes("add")?u():t.includes("remove")&&removeBookFromLS()}S.addEventListener("click",E);function E(e){e.preventDefault(),localStorage.length||(B.textContent="This page is empty, add some books and proceed to order.")}getBookDyId("_id").then(e=>{e.data});function x(e){const{id:t,book_image:c,list_name:n,author:o,description:s}=e;return`<div class="modal-body" data-bookid="${t}">
      <div class="image-container">
        ${c}
      </div>
      <div class="list-container">
        <ul class="list-details">
          <li class="title">${n}</li>
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
    </div>`}const C=document.querySelector(".modal-body");function $(e,t){e.innerHTML=t}async function O(){try{const e=await u("idBook"),t=x(e);$(C,t)}catch(e){console.error(e)}}O();const T=document.querySelector(".modal-close-btn");document.querySelector(".backdrop");function M(){const e=document.querySelector(".backdrop");e.style.display="none"}T.addEventListener("click",()=>{M()});function _(){const e=document.querySelector(".shopping-list");e.textContent==="Add to shopping list"?e.textContent="Remove from the shopping list":e.textContent="Add to shopping list"}document.querySelector(".shopping-list").addEventListener("click",_);new m(".swiper-scrollbar",{scrollbar:{el:".swiper-scrollbar",draggable:!0}});new m(".swiper-container",{slidesPerView:6,spaceBetween:20,direction:"vertical",speed:400,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const d=document.querySelector(".back-to-top");window.addEventListener("scroll",A);d.addEventListener("click",f);function A(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?d.classList.add("back-to-top--show"):d.classList.remove("back-to-top--show")}function f(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(f,0))}
//# sourceMappingURL=commonHelpers.js.map
