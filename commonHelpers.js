import"./assets/slider-63e5e033.js";import{a as u,t as B}from"./assets/vendor-da6d1e6a.js";async function w(){return await u.get("https://books-backend.p.goit.global/books/top-books")}async function S(o){return await u.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function _(o){return await u.get(`https://books-backend.p.goit.global/books/${o}`)}const k=document.querySelector(".modal-body"),d=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-btn");let a,r=[];const h=localStorage.getItem("shoppingList");h&&(r=JSON.parse(h));$.addEventListener("click",g);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await _(e)).data,c={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},i=E(c);C(),T(k,i),a&&a.parentNode&&a.parentNode.removeChild(a),a=document.createElement("button"),a.textContent=r.includes(e)?"Remove from Shopping List":"Add to Shopping List",a.classList.add("add-to-shopping-list-btn"),a.addEventListener("click",()=>{M(e)}),k.appendChild(a),localStorage.setItem(e,JSON.stringify(c))}}catch(t){console.error(t)}});d.addEventListener("click",o=>{o.target===d&&g()});document.addEventListener("keydown",o=>{o.key==="Escape"&&g()});function C(){d.style.display="block"}function g(){d.style.display="none"}function E(o){const{book_image:t,list_name:e,title:n,author:s,description:c}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${s}</p>
      </div>
        <p class="list-descr">${c}</p>
        <div class="list-links">
            <img class="icon-amazon" src="../img/amazon@1x.png", "../img/amazon@2x.png" alt="amazon" />
            <img class="icon-apple" src="../img/app_books@1x.png", "../img/app_books@2x.png" alt="app_books" />
        </div>
      </div>
    </div>
     `}function T(o,t){o.innerHTML=t}function M(o){if(!o){console.error("Invalid bookId:",o);return}const t=r.indexOf(o);t===-1?r.push(o):(r.splice(t,1),localStorage.removeItem(o)),localStorage.setItem("shoppingList",JSON.stringify(r)),a&&(a.textContent=r.includes(o)?"Remove from Shopping List":"Add to Shopping List")}const l=window.visualViewport.width,x=document.querySelector(".js-bookslist"),q=document.querySelector(".js-all"),j=()=>{if(l<768)return 1;if(l>=768&&l<1440)return 3;if(l>1440)return 5},O=o=>`<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${o.map(t=>`
    <h2 class="books_card-heading js-heading">${t.list_name}</h2>
    <ul class="book_card-list" >
        ${t.books.slice(0,j()).map(({_id:n,book_image:s,title:c,author:i})=>`<li class="book_card-item js-card" id=${n}>
                      <div class="overlay-wrapper">
                       <img
                         class="book_card_photo"
                         src=${s}
                         alt= book cover photo ${c}
                       />
                      </div>
                        <h3 class="book_card-title">${c}</h3>
                        <h4 class="book_card_author">${i}</h4>
                     </li>`)}
      </ul>
        <div class="btn_more">
    <button class="btn_see-more" data-category="${t.list_name}">See more</button>
    </div>`)}
`;y();q.addEventListener("click",H);function H(o){y()}async function y(){try{const t=(await w()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}x.innerHTML=O(e)}catch(o){console.log(o)}}const N=document.querySelector(".js-list"),U=document.querySelectorAll(".js-category"),Y=document.querySelector(".books-list");N.addEventListener("click",z);document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-bookslist").addEventListener("click",A)});async function z(o){try{if(Array.from(U).includes(o.target)){const t=o.target.textContent.trim(),e=await b(t);v(t,e)}}catch(t){console.error(t)}}async function A(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await b(t);v(t,e)}catch(t){console.error(t)}}async function b(o){return(await S(o)).data.map(({_id:e,book_image:n,title:s,author:c})=>({_id:e,book_image:n,title:s,author:c}))}function v(o,t){const e=I(o,t);Y.innerHTML=e}function I(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:c,title:i,author:L})=>`<li class="hardcover-item" id=${s}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${c}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${i}</h2>
                        <p class="hardcover-text">${L}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}const p=document.querySelector(".back-to-top");window.addEventListener("scroll",D);p.addEventListener("click",f);function D(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?p.classList.add("back-to-top--show"):p.classList.remove("back-to-top--show")}function f(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(f,0))}const m=document.querySelector(".scroll-up");m.addEventListener("click",J);function J(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",B(R,1e3));function R(o){(window.scrollY||document.documentElement.scrollTop)>300?V():G()}function G(){m.classList.add("is-hidden")}function V(){m.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
