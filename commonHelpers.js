import{a as $,b as C}from"./assets/header-fa3822ac.js";import{a as g,t as T}from"./assets/vendor-da6d1e6a.js";async function q(){return await g.get("https://books-backend.p.goit.global/books/top-books")}async function M(o){return await g.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function j(o){return await g.get(`https://books-backend.p.goit.global/books/${o}`)}const b=document.querySelector(".modal-body"),p=document.querySelector(".backdrop"),O=document.querySelector(".modal-close-btn");let r,a=[];const y="shoppingList",w=localStorage.getItem(y);w&&(a=JSON.parse(w));O.addEventListener("click",v);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await j(e)).data,c={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},l=I(c);x(),U(b,l),r&&r.parentNode&&r.parentNode.removeChild(r),r=document.createElement("button"),r.textContent=a.some(u=>u._id===e)?"Remove from Shopping List":"Add to Shopping List",r.classList.add("add-to-shopping-list-btn"),r.addEventListener("click",()=>{Y(c)}),b.appendChild(r),localStorage.setItem(y,JSON.stringify(a))}}catch(t){console.error(t)}});p.addEventListener("click",o=>{o.target===p&&v()});document.addEventListener("keydown",o=>{o.key==="Escape"&&v()});function x(){p.style.display="block"}function v(){p.style.display="none"}function I(o){const{book_image:t,list_name:e,title:n,author:s,description:c}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${s}</p>
      </div>
        <p class="list-descr">${c}</p>
        <div class="list-links">
            <img class="icon-amazon" src="${$}" alt="amazon" />
            <img class="icon-apple" src="${C}" alt="app_books" />
        </div>
      </div>
    </div>
     `}function U(o,t){o.innerHTML=t}function Y(o){if(!o||!o._id){console.error("Invalid book:",o);return}const t=a.findIndex(e=>e._id===o._id);t===-1?a.push(o):a.splice(t,1),localStorage.setItem(y,JSON.stringify(a)),r&&(r.textContent=a.some(e=>e._id===o._id)?"Remove from Shopping List":"Add to Shopping List")}const i=window.visualViewport.width,z=document.querySelector(".js-bookslist"),A=document.querySelector(".js-all"),H=()=>{if(i<768)return 1;if(i>=768&&i<1440)return 3;if(i>1440)return 5},N=o=>`<div/>
    <h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
      ${o.map(t=>`
          <h2 class="books_card-heading js-heading">${t.list_name}</h2>
          <ul class="book_card-list" >
              ${t.books.slice(0,H()).map(({_id:n,book_image:s,title:c,author:l})=>`<li class="book_card-item js-card" id=${n}>
                         <div class="overlay-wrapper">
                           <img
                             class="book_card_photo"
                             src=${s}
                             alt= book cover photo ${c}
                           />
                          </div>
                          <h3 class="book_card-title">${c}</h3>
                          <h4 class="book_card_author">${l}</h4>
                        </li>`).join("")}
          </ul>
        <div class="btn_more">
      <button class="btn_see-more" data-category="${t.list_name}">See more</button>
    </div>`).join("")}
  </div>
`;L();async function L(){try{const t=(await q()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}z.innerHTML=N(e)}catch(o){console.log(o)}}window.onresize=function(o){const t=document.documentElement.clientWidth;(t<768&&i>=768||t<1440&&i>=1440||t>=768&&i<768||t>=1440&&i<1440)&&location.reload()};A.addEventListener("click",D);function D(o){L()}const R=document.querySelector(".js-list"),J=document.querySelectorAll(".js-category"),W=document.querySelector(".books-list");let d;function S(o,t){const e=G(o,t.slice(0,d));W.innerHTML=e}function G(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:c,title:l,author:u})=>`<li class="hardcover-item" id=${s}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                <div class ="overlay-wrapper">
                    <img class="hardcover-image" src="${c}"/>
                    </div>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${l}</h2>
                        <p class="hardcover-text">${u}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}async function K(o){try{if(Array.from(J).includes(o.target)){const t=o.target.textContent.trim(),e=await B(t);S(t,e)}}catch(t){console.error(t)}}async function P(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await B(t);S(t,e)}catch(t){console.error(t)}}async function B(o){return(await M(o)).data.map(({_id:e,book_image:n,title:s,author:c})=>({_id:e,book_image:n,title:s,author:c}))}window.addEventListener("resize",()=>{window.innerWidth<=768?d=7:d=15});document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=768?d=7:d=15,document.querySelector(".js-bookslist").addEventListener("click",P),R.addEventListener("click",K)});const _=document.querySelector(".sidebar-swiper-list"),m=document.querySelector(".support-arrow-down"),k=document.querySelector(".support-arrow-up");m.addEventListener("click",function(){_.scrollBy({top:170,behavior:"smooth"}),m.classList.add("visually-hidden"),k.classList.remove("visually-hidden")});k.addEventListener("click",function(){_.scrollBy({top:-170,behavior:"smooth"}),k.classList.add("visually-hidden"),m.classList.remove("visually-hidden")});const V=document.querySelector(".js-list");V.classList.add("scrollable");const h=document.querySelector(".back-to-top");window.addEventListener("scroll",F);h.addEventListener("click",E);function F(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?h.classList.add("back-to-top--show"):h.classList.remove("back-to-top--show")}function E(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(E,0))}const f=document.querySelector(".scroll-up");f.addEventListener("click",Q);function Q(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",T(X,1e3));function X(o){(window.scrollY||document.documentElement.scrollTop)>300?oo():Z()}function Z(){f.classList.add("is-hidden")}function oo(){f.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
