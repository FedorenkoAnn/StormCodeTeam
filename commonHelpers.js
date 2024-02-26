import{a as g,t as E}from"./assets/vendor-da6d1e6a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();async function T(){return await g.get("https://books-backend.p.goit.global/books/top-books")}async function q(o){return await g.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function h(o){return await g.get(`https://books-backend.p.goit.global/books/${o}`)}const y=document.querySelector(".modal-body"),d=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-btn");let i,l=[];const v=localStorage.getItem("shoppingList");v&&(l=JSON.parse(v));$.addEventListener("click",f);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item");if(t){const n=t.id,e=(await h(n)).data,s=C(e);_(),x(y,s),i&&i.parentNode&&i.parentNode.removeChild(i),i=document.createElement("button"),i.textContent="Add to Shopping List",i.classList.add("add-to-shopping-list-btn"),l.includes(n)&&(i.textContent="Remove from Shopping List"),i.addEventListener("click",()=>{O(n)}),y.appendChild(i)}}catch(t){console.error(t)}});d.addEventListener("click",o=>{o.target===d&&f()});document.addEventListener("keydown",o=>{o.key==="Escape"&&f()});function _(){d.style.display="block"}function f(){d.style.display="none"}function C(o){const{book_image:t,list_name:n,title:c,author:e,description:s}=o;return`<div class="image-container">
      <img src="${t}" alt="${n}" />
    </div>
    <div class="list-container">
      <ul class="list-details">
        <li class="title">${c}</li>
        <li class="list-name">${e}</li>
        <li class="list-descr">${s}</li>
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
     `}function x(o,t){o.innerHTML=t}function O(o){if(!o){console.error("Invalid bookId:",o);return}const t=l.indexOf(o);t===-1?l.push(o):l.splice(t,1),localStorage.setItem("shoppingList",JSON.stringify(l)),i&&(t===-1?i.textContent="Remove from Shopping List":i.textContent="Add to Shopping List")}document.addEventListener("DOMContentLoaded",function(){var o=document.querySelector(".switch input");o.addEventListener("change",function(){o.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")})});var b=document.querySelectorAll(".nav-link");b.forEach(function(o){o.addEventListener("click",function(){b.forEach(function(t){t.classList.remove("is-active")}),o.classList.add("is-active")})});const M=o=>`<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${o.map(t=>`
    <h2 class="books_card-heading js-heading">${t.list_name}</h2>
        ${t.books.map(({_id:c,book_image:e,title:s,author:r})=>`<ul class="book_card-list" >
                     <li class="book_card-item js-card" id=${c}>
                       <img
                         class="book_card_photo"
                         src=${e}
                         alt= book cover photo ${s}
                       />
                        <h3 class="book_card-title">${s}</h3>
                        <h4 class="book_card_author">${r}</h4>
                     </li>
                   </ul>`)}
        <div class"btn_more">
    <button class="btn_see-more">See more</button>
    </div>`)}
`,j=document.querySelector(".js-list"),D=document.querySelectorAll(".js-category"),L=document.querySelector(".books-list");j.addEventListener("click",async o=>{try{if(Array.from(D).includes(o.target)){const t=o.target.textContent.trim(),c=(await q(t)).data;console.log(c);const e=c.map(({_id:r,book_image:a,title:u,author:p})=>({book_image:a,title:u,author:p,_id:r})),s=N(t,e);L.innerHTML=s}}catch(t){console.error(t)}});function N(o,t){const n=`<h2 class="hardcover-category-title">${o.replace(/(\w+)/g,(e,s,r)=>r===0?e:`<span class="book-categories-span">${e}</span>`)}</h2>`,c=t.map(({_id:e,book_image:s,title:r,author:a})=>`<li class="hardcover-item" id=${e}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${s}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${r}</h2>
                        <p class="hardcover-text">${a}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return n+'<ul class="hardcover-list">'+c+"</ul>"}async function H(){try{const t=(await T()).data,n=[];let c=0;for(const e of t){if(n.length===4)break;c=Math.round(Math.random()*t.length),n.includes(t[c])||n.push(t[c])}L.innerHTML=M(n)}catch(o){console.log(o)}}H();const I=document.querySelector(".js-shopping-list"),S=document.querySelector(".shopping-list"),A=document.querySelector(".empty-list-text");document.querySelector(".shopping-list-js");document.querySelector(".delete-button");h("643282b1e85766588626a0dc").then(o=>{const t=o.data,{_id:n,book_image:c,title:e,list_name:s,description:r,author:a,buy_links:u}=t,p=u.slice(0,2),B={id:n,book_image:c,title:e,list_name:s,description:r,author:a,selectedLinks:p};localStorage.setItem("bookData",JSON.stringify(B))}).catch(o=>{console.log("Error:",o)});S.addEventListener("click",U);function U(o){o.preventDefault();const t=S.innerText.toLowerCase();t.includes("add")?h():t.includes("remove")&&removeBookFromLS()}I.addEventListener("click",P);function P(o){o.preventDefault(),localStorage.length||(A.textContent="This page is empty, add some books and proceed to order.")}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".sidebar-swiper-list"),t=100;function n(){o.scrollTop-=t,e()}function c(){o.scrollTop+=t,e()}function e(){const s=o.scrollTop,r=o.scrollHeight-o.clientHeight;document.querySelector(".support-arrow-up").classList.toggle("visually-hidden",s===0),document.querySelector(".support-arrow-down").classList.toggle("visually-hidden",s===r)}document.querySelector(".support-arrow-up").addEventListener("click",n),document.querySelector(".support-arrow-down").addEventListener("click",c),e()});const m=document.querySelector(".back-to-top");window.addEventListener("scroll",Y);m.addEventListener("click",w);function Y(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?m.classList.add("back-to-top--show"):m.classList.remove("back-to-top--show")}function w(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(w,0))}const k=document.querySelector(".scroll-up");k.addEventListener("click",z);function z(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",E(J,1e3));function J(o){(window.scrollY||document.documentElement.scrollTop)>2e3?F():R()}function R(){k.classList.add("is-hidden")}function F(){k.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
