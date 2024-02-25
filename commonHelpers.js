import{a as g}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".switch input");e.addEventListener("change",function(){e.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")})});var u=document.querySelectorAll(".nav-link");u.forEach(function(e){e.addEventListener("click",function(){u.forEach(function(o){o.classList.remove("is-active")}),e.classList.add("is-active")})});async function y(e){return await g.get(`https://books-backend.p.goit.global/books/category?category=${e}`)}async function d(e){return await g.get(`https://books-backend.p.goit.global/books/${e}`)}const f=document.querySelector(".js-list"),h=document.querySelectorAll(".js-category"),k=document.querySelector(".books-list");f.addEventListener("click",async e=>{try{if(Array.from(h).includes(e.target)){const o=e.target.textContent.trim(),n=(await y(o)).data;console.log(n);const t=n.map(({_id:r,book_image:i,title:a,author:l})=>({book_image:i,title:a,author:l,_id:r})),s=v(o,t);k.innerHTML=s,localStorage.setItem("isButtonHidden","true")}}catch(o){console.error(o)}});function v(e,o){const c=`<h2 class="hardcover-category-title">${e.replace(/(\w+)/g,(t,s,r)=>r===0?t:`<span class="book-categories-span">${t}</span>`)}</h2>`,n=o.map(({_id:t,book_image:s,title:r,author:i})=>`<li class="hardcover-item" id=${t}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${s}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${r}</h2>
                        <p class="hardcover-text">${i}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return c+'<ul class="hardcover-list">'+n+"</ul>"}const b=document.querySelector(".js-shopping-list"),p=document.querySelector(".shopping-list"),L=document.querySelector(".empty-list-text");document.querySelector(".shopping-list-js");document.querySelector(".delete-button");d("643282b1e85766588626a0dc").then(e=>{const o=e.data,{_id:c,book_image:n,title:t,list_name:s,description:r,author:i,buy_links:a}=o,l=a.slice(0,2),m={id:c,book_image:n,title:t,list_name:s,description:r,author:i,selectedLinks:l};localStorage.setItem("bookData",JSON.stringify(m))}).catch(e=>{console.log("Error:",e)});p.addEventListener("click",S);function S(e){e.preventDefault();const o=p.innerText.toLowerCase();o.includes("add")?d():o.includes("remove")&&removeBookFromLS()}b.addEventListener("click",B);function B(e){e.preventDefault(),localStorage.length||(L.textContent="This page is empty, add some books and proceed to order.")}getBookDyId("_id").then(e=>{e.data});function q(e){const{id:o,book_image:c,list_name:n,author:t,description:s}=e;return`<div class="modal-body" data-bookid="${o}">
      <div class="image-container">
        ${c}
      </div>
      <div class="list-container">
        <ul class="list-details">
          <li class="title">${n}</li>
          <li class="list-name">${t}</li>
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
    </div>`}const C=document.querySelector(".modal-body");function E(e,o){e.innerHTML=o}async function $(){try{const e=await d("idBook"),o=q(e);E(C,o)}catch(e){console.error(e)}}$();const x=document.querySelector(".modal-close-btn");document.querySelector(".backdrop");function w(){const e=document.querySelector(".backdrop");e.style.display="none"}x.addEventListener("click",()=>{w()});function M(){const e=document.querySelector(".shopping-list");e.textContent==="Add to shopping list"?e.textContent="Remove from the shopping list":e.textContent="Add to shopping list"}document.querySelector(".shopping-list").addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map