import"./assets/header-3783665e.js";import{a as g,t as $}from"./assets/vendor-da6d1e6a.js";async function C(){return await g.get("https://books-backend.p.goit.global/books/top-books")}async function E(o){return await g.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function _(o){return await g.get(`https://books-backend.p.goit.global/books/${o}`)}const y=document.querySelector(".modal-body"),l=document.querySelector(".backdrop"),q=document.querySelector(".modal-close-btn");let s,a=[];const v=localStorage.getItem("shoppingList");v&&(a=JSON.parse(v));q.addEventListener("click",k);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,c=(await _(e)).data,r=x(c);T(),M(y,r),s&&s.parentNode&&s.parentNode.removeChild(s),s=document.createElement("button"),s.textContent="Add to Shopping List",s.classList.add("add-to-shopping-list-btn"),a.includes(e)&&(s.textContent="Remove from Shopping List"),s.addEventListener("click",()=>{j(e)}),y.appendChild(s)}}catch(t){console.error(t)}});l.addEventListener("click",o=>{o.target===l&&k()});document.addEventListener("keydown",o=>{o.key==="Escape"&&k()});function T(){l.style.display="block"}function k(){l.style.display="none"}function x(o){const{book_image:t,list_name:e,title:n,author:c,description:r}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${c}</p>
      </div>
        <p class="list-descr">${r}</p>
        <div class="list-links">
            <img class="icon-amazon" src="../img/amazon@1x.png", "../img/amazon@2x.png" alt="amazon" />
            <img class="icon-apple" src="../img/app_books@1x.png", "../img/app_books@2x.png" alt="app_books" />
        </div>
      </div>
    </div>
     `}function M(o,t){o.innerHTML=t}function j(o){if(!o){console.error("Invalid bookId:",o);return}const t=a.indexOf(o);t===-1?a.push(o):a.splice(t,1),localStorage.setItem("shoppingList",JSON.stringify(a)),s&&(t===-1?s.textContent="Remove from Shopping List":s.textContent="Add to Shopping List")}const i=window.visualViewport.width,O=document.querySelector(".js-bookslist"),U=document.querySelector(".js-all"),H=()=>{if(i<768)return 1;if(i>=768&&i<1440)return 3;if(i>1440)return 5},Y=o=>`<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${o.map(t=>`
    <h2 class="books_card-heading js-heading">${t.list_name}</h2>
    <ul class="book_card-list" >
        ${t.books.slice(0,H()).map(({_id:n,book_image:c,title:r,author:d})=>`<li class="book_card-item js-card" id=${n}>
                      <div class="overlay-wrapper">
                       <img
                         class="book_card_photo"
                         src=${c}
                         alt= book cover photo ${r}
                       />
                      </div>
                        <h3 class="book_card-title">${r}</h3>
                        <h4 class="book_card_author">${d}</h4>
                     </li>`)}
      </ul>
        <div class="btn_more">
    <button class="btn_see-more" data-category="${t.list_name}">See more</button>
    </div>`)}
`;b();U.addEventListener("click",z);function z(o){b()}async function b(){try{const t=(await C()).data,e=[];let n=0;for(const c of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}O.innerHTML=Y(e)}catch(o){console.log(o)}}const A=document.querySelector(".js-list"),I=document.querySelectorAll(".js-category"),N=document.querySelector(".books-list");A.addEventListener("click",D);document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-bookslist").addEventListener("click",R)});async function D(o){try{if(Array.from(I).includes(o.target)){const t=o.target.textContent.trim(),e=await f(t);L(t,e)}}catch(t){console.error(t)}}async function R(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await f(t);L(t,e)}catch(t){console.error(t)}}async function f(o){return(await E(o)).data.map(({_id:e,book_image:n,title:c,author:r})=>({_id:e,book_image:n,title:c,author:r}))}function L(o,t){const e=J(o,t);N.innerHTML=e}function J(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:c,book_image:r,title:d,author:S})=>`<li class="hardcover-item" id=${c}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${r}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${d}</h2>
                        <p class="hardcover-text">${S}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}const w=document.querySelector(".sidebar-swiper-list"),p=document.querySelector(".support-arrow-down"),u=document.querySelector(".support-arrow-up");p.addEventListener("click",function(){w.scrollBy({top:170,behavior:"smooth"}),p.classList.add("visually-hidden"),u.classList.remove("visually-hidden")});u.addEventListener("click",function(){w.scrollBy({top:-170,behavior:"smooth"}),u.classList.add("visually-hidden"),p.classList.remove("visually-hidden")});const G=document.querySelector(".js-list");G.classList.add("scrollable");const m=document.querySelector(".back-to-top");window.addEventListener("scroll",V);m.addEventListener("click",B);function V(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?m.classList.add("back-to-top--show"):m.classList.remove("back-to-top--show")}function B(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(B,0))}const h=document.querySelector(".scroll-up");h.addEventListener("click",F);function F(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",$(K,1e3));function K(o){(window.scrollY||document.documentElement.scrollTop)>2e3?Q():P()}function P(){h.classList.add("is-hidden")}function Q(){h.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
