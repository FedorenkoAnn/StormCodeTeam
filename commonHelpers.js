import{a as L,b as S}from"./assets/slider-e33631bd.js";import{a as m,t as _}from"./assets/vendor-da6d1e6a.js";async function $(){return await m.get("https://books-backend.p.goit.global/books/top-books")}async function E(o){return await m.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function C(o){return await m.get(`https://books-backend.p.goit.global/books/${o}`)}const y=document.querySelector(".modal-body"),d=document.querySelector(".backdrop"),T=document.querySelector(".modal-close-btn");let a,r=[];const k="shoppingList",v=localStorage.getItem(k);v&&(r=JSON.parse(v));T.addEventListener("click",g);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await C(e)).data,c={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},l=j(c);M(),q(y,l),a&&a.parentNode&&a.parentNode.removeChild(a),a=document.createElement("button"),a.textContent=r.some(p=>p._id===e)?"Remove from Shopping List":"Add to Shopping List",a.classList.add("add-to-shopping-list-btn"),a.addEventListener("click",()=>{O(c)}),y.appendChild(a),localStorage.setItem(k,JSON.stringify(r))}}catch(t){console.error(t)}});d.addEventListener("click",o=>{o.target===d&&g()});document.addEventListener("keydown",o=>{o.key==="Escape"&&g()});function M(){d.style.display="block"}function g(){d.style.display="none"}function j(o){const{book_image:t,list_name:e,title:n,author:s,description:c}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${s}</p>
      </div>
        <p class="list-descr">${c}</p>
        <div class="list-links">
            <img class="icon-amazon" src="${L}" alt="amazon" />
            <img class="icon-apple" src="${S}" alt="app_books" />
        </div>
      </div>
    </div>
     `}function q(o,t){o.innerHTML=t}function O(o){if(!o||!o._id){console.error("Invalid book:",o);return}const t=r.findIndex(e=>e._id===o._id);t===-1?r.push(o):r.splice(t,1),localStorage.setItem(k,JSON.stringify(r)),a&&(a.textContent=r.some(e=>e._id===o._id)?"Remove from Shopping List":"Add to Shopping List")}const i=window.visualViewport.width,x=document.querySelector(".js-bookslist"),I=document.querySelector(".js-all"),Y=()=>{if(i<768)return 1;if(i>=768&&i<1440)return 3;if(i>1440)return 5},A=o=>`<div/>
    <h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
      ${o.map(t=>`
          <h2 class="books_card-heading js-heading">${t.list_name}</h2>
          <ul class="book_card-list" >
              ${t.books.slice(0,Y()).map(({_id:n,book_image:s,title:c,author:l})=>`<li class="book_card-item js-card" id=${n}>
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
`;f();async function f(){try{const t=(await $()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}x.innerHTML=A(e)}catch(o){console.log(o)}}window.onresize=function(o){const t=document.documentElement.clientWidth;(t<768&&i>=768||t<1440&&i>=1440||t>=768&&i<768||t>=1440&&i<1440)&&location.reload()};I.addEventListener("click",H);function H(o){f()}const N=document.querySelector(".js-list"),U=document.querySelectorAll(".js-category"),z=document.querySelector(".books-list");N.addEventListener("click",R);document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-bookslist").addEventListener("click",D)});async function R(o){try{if(Array.from(U).includes(o.target)){const t=o.target.textContent.trim(),e=await b(t);w(t,e)}}catch(t){console.error(t)}}async function D(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await b(t);w(t,e)}catch(t){console.error(t)}}async function b(o){return(await E(o)).data.map(({_id:e,book_image:n,title:s,author:c})=>({_id:e,book_image:n,title:s,author:c}))}function w(o,t){const e=J(o,t);z.innerHTML=e}function J(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:c,title:l,author:p})=>`<li class="hardcover-item" id=${s}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${c}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${l}</h2>
                        <p class="hardcover-text">${p}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}const u=document.querySelector(".back-to-top");window.addEventListener("scroll",G);u.addEventListener("click",B);function G(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?u.classList.add("back-to-top--show"):u.classList.remove("back-to-top--show")}function B(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(B,0))}const h=document.querySelector(".scroll-up");h.addEventListener("click",K);function K(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",_(V,1e3));function V(o){(window.scrollY||document.documentElement.scrollTop)>300?F():W()}function W(){h.classList.add("is-hidden")}function F(){h.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
