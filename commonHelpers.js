import"./assets/slider-63e5e033.js";import{a as m,t as B}from"./assets/vendor-da6d1e6a.js";async function S(){return await m.get("https://books-backend.p.goit.global/books/top-books")}async function w(o){return await m.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function C(o){return await m.get(`https://books-backend.p.goit.global/books/${o}`)}const p=document.querySelector(".modal-body"),d=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-btn");let s,r=[];const k=localStorage.getItem("shoppingList");k&&(r=JSON.parse(k));$.addEventListener("click",g);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,c=(await C(e)).data,a=_(c);E(),T(p,a);const i=document.createElement("p");i.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",i.classList.add("modal-bottom-text","hidden"),p.appendChild(i),s&&s.parentNode&&s.parentNode.removeChild(s),s=document.createElement("button"),s.textContent=r.includes(e)?"Remove from Shopping List":"Add to Shopping List",s.classList.add("add-to-shopping-list-btn"),r.includes(e)&&(s.textContent="Remove from Shopping List"),s.addEventListener("click",()=>{M(e),x(),s.textContent=r.includes(e)?"Remove from Shopping List":"Add to Shopping List"}),p.appendChild(s)}}catch(t){console.error(t)}});function x(){const o=document.querySelector(".modal-bottom-text");o&&o.classList.toggle("hidden")}d.addEventListener("click",o=>{o.target===d&&g()});document.addEventListener("keydown",o=>{o.key==="Escape"&&g()});function E(){d.style.display="block"}function g(){d.style.display="none"}function _(o){const{book_image:t,list_name:e,title:n,author:c,description:a}=o;return`<div class="image-container">
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
     `}function T(o,t){o.innerHTML=t}function M(o){if(!o){console.error("Invalid bookId:",o);return}const t=r.indexOf(o);t===-1?r.push(o):r.splice(t,1),localStorage.setItem("shoppingList",JSON.stringify(r)),s&&(t===-1?s.textContent="Remove from Shopping List":s.textContent="Add to Shopping List")}const l=window.visualViewport.width,q=document.querySelector(".js-bookslist"),j=document.querySelector(".js-all"),O=()=>{if(l<768)return 1;if(l>=768&&l<1440)return 3;if(l>1440)return 5},R=o=>`<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${o.map(t=>`
    <h2 class="books_card-heading js-heading">${t.list_name}</h2>
    <ul class="book_card-list" >
        ${t.books.slice(0,O()).map(({_id:n,book_image:c,title:a,author:i})=>`<li class="book_card-item js-card" id=${n}>
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
`;y();j.addEventListener("click",Y);function Y(o){y()}async function y(){try{const t=(await S()).data,e=[];let n=0;for(const c of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}q.innerHTML=R(e)}catch(o){console.log(o)}}const A=document.querySelector(".js-list"),H=document.querySelectorAll(".js-category"),U=document.querySelector(".books-list");A.addEventListener("click",z);document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-bookslist").addEventListener("click",I)});async function z(o){try{if(Array.from(H).includes(o.target)){const t=o.target.textContent.trim(),e=await v(t);b(t,e)}}catch(t){console.error(t)}}async function I(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await v(t);b(t,e)}catch(t){console.error(t)}}async function v(o){return(await w(o)).data.map(({_id:e,book_image:n,title:c,author:a})=>({_id:e,book_image:n,title:c,author:a}))}function b(o,t){const e=N(o,t);U.innerHTML=e}function N(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:c,book_image:a,title:i,author:L})=>`<li class="hardcover-item" id=${c}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${a}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${i}</h2>
                        <p class="hardcover-text">${L}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}const u=document.querySelector(".back-to-top");window.addEventListener("scroll",D);u.addEventListener("click",f);function D(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?u.classList.add("back-to-top--show"):u.classList.remove("back-to-top--show")}function f(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(f,0))}const h=document.querySelector(".scroll-up");h.addEventListener("click",J);function J(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",B(G,1e3));function G(o){(window.scrollY||document.documentElement.scrollTop)>300?F():V()}function V(){h.classList.add("is-hidden")}function F(){h.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
