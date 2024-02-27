import"./assets/header-2a1bccf8.js";import{a as h,t as C}from"./assets/vendor-da6d1e6a.js";async function $(){return await h.get("https://books-backend.p.goit.global/books/top-books")}async function E(o){return await h.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function x(o){return await h.get(`https://books-backend.p.goit.global/books/${o}`)}const p=document.querySelector(".modal-body"),d=document.querySelector(".backdrop"),_=document.querySelector(".modal-close-btn");let s,r=[];const v=localStorage.getItem("shoppingList");v&&(r=JSON.parse(v));_.addEventListener("click",k);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,c=(await x(e)).data,a=M(c);q(),j(p,a);const i=document.createElement("p");i.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",i.classList.add("modal-bottom-text","hidden"),p.appendChild(i),s&&s.parentNode&&s.parentNode.removeChild(s),s=document.createElement("button"),s.textContent=r.includes(e)?"Remove from Shopping List":"Add to Shopping List",s.classList.add("add-to-shopping-list-btn"),r.includes(e)&&(s.textContent="Remove from Shopping List"),s.addEventListener("click",()=>{O(e),T(),s.textContent=r.includes(e)?"Remove from Shopping List":"Add to Shopping List"}),p.appendChild(s)}}catch(t){console.error(t)}});function T(){const o=document.querySelector(".modal-bottom-text");o&&o.classList.toggle("hidden")}d.addEventListener("click",o=>{o.target===d&&k()});document.addEventListener("keydown",o=>{o.key==="Escape"&&k()});function q(){d.style.display="block"}function k(){d.style.display="none"}function M(o){const{book_image:t,list_name:e,title:n,author:c,description:a}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${c}</p>
      </div>
        <p class="list-descr">${a}</p>
        <div class="list-links">
            <img class="icon-amazon" src="../img/amazon@1x.png", "../img/amazon@2x.png" alt="amazon" />
            <img class="icon-apple" src="../img/app_books@1x.png", "../img/app_books@2x.png" alt="app_books" />
        </div>
      </div>
    </div>
     `}function j(o,t){o.innerHTML=t}function O(o){if(!o){console.error("Invalid bookId:",o);return}const t=r.indexOf(o);t===-1?r.push(o):r.splice(t,1),localStorage.setItem("shoppingList",JSON.stringify(r)),s&&(t===-1?s.textContent="Remove from Shopping List":s.textContent="Add to Shopping List")}const l=window.visualViewport.width,R=document.querySelector(".js-bookslist"),U=document.querySelector(".js-all"),Y=()=>{if(l<768)return 1;if(l>=768&&l<1440)return 3;if(l>1440)return 5},A=o=>`<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${o.map(t=>`
    <h2 class="books_card-heading js-heading">${t.list_name}</h2>
    <ul class="book_card-list" >
        ${t.books.slice(0,Y()).map(({_id:n,book_image:c,title:a,author:i})=>`<li class="book_card-item js-card" id=${n}>
                      <div class="overlay-wrapper">
                       <img
                         class="book_card_photo"
                         src=${c}
                         alt= book cover photo ${a}
                       />
                      </div>
                        <h3 class="book_card-title">${a}</h3>
                        <h4 class="book_card_author">${i}</h4>
                     </li>`)}
      </ul>
        <div class="btn_more">
    <button class="btn_see-more" data-category="${t.list_name}">See more</button>
    </div>`)}
`;b();U.addEventListener("click",H);function H(o){b()}async function b(){try{const t=(await $()).data,e=[];let n=0;for(const c of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}R.innerHTML=A(e)}catch(o){console.log(o)}}const z=document.querySelector(".js-list"),I=document.querySelectorAll(".js-category"),N=document.querySelector(".books-list");z.addEventListener("click",D);document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-bookslist").addEventListener("click",J)});async function D(o){try{if(Array.from(I).includes(o.target)){const t=o.target.textContent.trim(),e=await f(t);L(t,e)}}catch(t){console.error(t)}}async function J(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await f(t);L(t,e)}catch(t){console.error(t)}}async function f(o){return(await E(o)).data.map(({_id:e,book_image:n,title:c,author:a})=>({_id:e,book_image:n,title:c,author:a}))}function L(o,t){const e=G(o,t);N.innerHTML=e}function G(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:c,book_image:a,title:i,author:S})=>`<li class="hardcover-item" id=${c}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${a}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${i}</h2>
                        <p class="hardcover-text">${S}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}const w=document.querySelector(".sidebar-swiper-list"),u=document.querySelector(".support-arrow-down"),m=document.querySelector(".support-arrow-up");u.addEventListener("click",function(){w.scrollBy({top:170,behavior:"smooth"}),u.classList.add("visually-hidden"),m.classList.remove("visually-hidden")});m.addEventListener("click",function(){w.scrollBy({top:-170,behavior:"smooth"}),m.classList.add("visually-hidden"),u.classList.remove("visually-hidden")});const V=document.querySelector(".js-list");V.classList.add("scrollable");const g=document.querySelector(".back-to-top");window.addEventListener("scroll",F);g.addEventListener("click",B);function F(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?g.classList.add("back-to-top--show"):g.classList.remove("back-to-top--show")}function B(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(B,0))}const y=document.querySelector(".scroll-up");y.addEventListener("click",K);function K(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",C(P,1e3));function P(o){(window.scrollY||document.documentElement.scrollTop)>2e3?W():Q()}function Q(){y.classList.add("is-hidden")}function W(){y.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
