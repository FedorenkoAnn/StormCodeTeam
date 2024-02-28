import"./assets/slider-63e5e033.js";import{a as u,t as L}from"./assets/vendor-da6d1e6a.js";async function B(){return await u.get("https://books-backend.p.goit.global/books/top-books")}async function S(o){return await u.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function _(o){return await u.get(`https://books-backend.p.goit.global/books/${o}`)}const k=document.querySelector(".modal-body"),d=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-btn");let a,i=[];const h=localStorage.getItem("shoppingList");h&&(i=JSON.parse(h));$.addEventListener("click",m);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await _(e)).data,c={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},l=E(c);C(),T(k,l),a&&a.parentNode&&a.parentNode.removeChild(a),a=document.createElement("button"),a.textContent=i.includes(e)?"Remove from Shopping List":"Add to Shopping List",a.classList.add("add-to-shopping-list-btn"),a.addEventListener("click",()=>{M(e)}),k.appendChild(a),localStorage.setItem(e,JSON.stringify(c))}}catch(t){console.error(t)}});d.addEventListener("click",o=>{o.target===d&&m()});document.addEventListener("keydown",o=>{o.key==="Escape"&&m()});function C(){d.style.display="block"}function m(){d.style.display="none"}function E(o){const{book_image:t,list_name:e,title:n,author:s,description:c}=o;return`<div class="image-container">
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
     `}function T(o,t){o.innerHTML=t}function M(o){if(!o){console.error("Invalid bookId:",o);return}const t=i.indexOf(o);t===-1?i.push(o):(i.splice(t,1),localStorage.removeItem(o)),localStorage.setItem("shoppingList",JSON.stringify(i)),a&&(a.textContent=i.includes(o)?"Remove from Shopping List":"Add to Shopping List")}const r=window.visualViewport.width,x=document.querySelector(".js-bookslist"),q=document.querySelector(".js-all"),j=()=>{if(r<768)return 1;if(r>=768&&r<1440)return 3;if(r>1440)return 5},O=o=>`<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${o.map(t=>`
    <h2 class="books_card-heading js-heading">${t.list_name}</h2>
    <ul class="book_card-list" >
        ${t.books.slice(0,j()).map(({_id:n,book_image:s,title:c,author:l})=>`<li class="book_card-item js-card" id=${n}>
                      <div class="overlay-wrapper">
                       <img
                         class="book_card_photo"
                         src=${s}
                         alt= book cover photo ${c}
                       />
                      </div>
                        <h3 class="book_card-title">${c}</h3>
                        <h4 class="book_card_author">${l}</h4>
                     </li>`)}
      </ul>
        <div class="btn_more">
    <button class="btn_see-more" data-category="${t.list_name}">See more</button>
    </div>`)}
`;y();async function y(){try{const t=(await B()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}x.innerHTML=O(e)}catch(o){console.log(o)}}window.onresize=function(o){const t=document.documentElement.clientWidth;(t<768&&r>=768||t<1440&&r>=1440||t>=768&&r<768||t>=1440&&r<1440)&&location.reload()};q.addEventListener("click",z);function z(o){y()}const H=document.querySelector(".js-list"),N=document.querySelectorAll(".js-category"),U=document.querySelector(".books-list");H.addEventListener("click",Y);document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-bookslist").addEventListener("click",A)});async function Y(o){try{if(Array.from(N).includes(o.target)){const t=o.target.textContent.trim(),e=await v(t);f(t,e)}}catch(t){console.error(t)}}async function A(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await v(t);f(t,e)}catch(t){console.error(t)}}async function v(o){return(await S(o)).data.map(({_id:e,book_image:n,title:s,author:c})=>({_id:e,book_image:n,title:s,author:c}))}function f(o,t){const e=I(o,t);U.innerHTML=e}function I(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:c,title:l,author:w})=>`<li class="hardcover-item" id=${s}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${c}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${l}</h2>
                        <p class="hardcover-text">${w}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}const p=document.querySelector(".back-to-top");window.addEventListener("scroll",D);p.addEventListener("click",b);function D(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?p.classList.add("back-to-top--show"):p.classList.remove("back-to-top--show")}function b(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(b,0))}const g=document.querySelector(".scroll-up");g.addEventListener("click",J);function J(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",L(R,1e3));function R(o){(window.scrollY||document.documentElement.scrollTop)>300?V():G()}function G(){g.classList.add("is-hidden")}function V(){g.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
