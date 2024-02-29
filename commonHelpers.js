import{a as C,b as T}from"./assets/header-5438414b.js";import{a as g,t as q}from"./assets/vendor-da6d1e6a.js";async function M(){return await g.get("https://books-backend.p.goit.global/books/top-books")}async function j(o){return await g.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function x(o){return await g.get(`https://books-backend.p.goit.global/books/${o}`)}const b=document.querySelector(".modal-body"),p=document.querySelector(".backdrop"),O=document.querySelector(".modal-close-btn"),w=document.querySelector(".modal-bottom-text");let a,c=[];const y="shoppingList",L=localStorage.getItem(y);L&&(c=JSON.parse(L));O.addEventListener("click",v);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await x(e)).data,r={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},l=z(r);I(),U(b,l),a&&a.parentNode&&a.parentNode.removeChild(a),a=document.createElement("button"),a.textContent=c.some(u=>u._id===e)?"Remove from Shopping List":"Add to Shopping List",a.classList.add("add-to-shopping-list-btn"),a.addEventListener("click",()=>{Y(r)}),b.appendChild(a),localStorage.setItem(y,JSON.stringify(c))}}catch(t){console.error(t)}});p.addEventListener("click",o=>{o.target===p&&v()});document.addEventListener("keydown",o=>{o.key==="Escape"&&v()});function I(){p.style.display="block"}function v(){p.style.display="none"}function z(o){const{book_image:t,list_name:e,title:n,author:s,description:r}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${s}</p>
      </div>
        <p class="list-descr">${r}</p>
        <div class="list-links">
         <a href="${o.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank"> 
            <img class="icon-amazon" src="${C}" alt="amazon" />
         </a>
         <a href="${o.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank"> 
            <img class="icon-apple" src="${T}" alt="amazon" />
          </a>
        </div>
       
      </div>
     
    
     `}function U(o,t){o.innerHTML=t}function Y(o){if(!o||!o._id){console.error("Invalid book:",o);return}const t=c.findIndex(e=>e._id===o._id);t===-1?(c.push(o),w.style.display="block"):(c.splice(t,1),w.style.display="none"),localStorage.setItem(y,JSON.stringify(c)),a&&(a.textContent=c.some(e=>e._id===o._id)?"Remove from Shopping List":"Add to Shopping List")}const i=window.visualViewport.width,A=document.querySelector(".js-bookslist"),H=document.querySelector(".js-all"),N=()=>{if(i<768)return 1;if(i>=768&&i<1440)return 3;if(i>1440)return 5},D=o=>`<div/>
    <h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
      ${o.map(t=>`
          <h2 class="books_card-heading js-heading">${t.list_name}</h2>
          <ul class="book_card-list" >
              ${t.books.slice(0,N()).map(({_id:n,book_image:s,title:r,author:l})=>`<li class="book_card-item js-card" id=${n}>
                         <div class="overlay-wrapper">
                           <img
                             class="book_card_photo"
                             src=${s}
                             alt= book cover photo ${r}
                           />
                          </div>
                          <h3 class="book_card-title">${r}</h3>
                          <h4 class="book_card_author">${l}</h4>
                        </li>`).join("")}
          </ul>
        <div class="btn_more">
      <button class="btn_see-more" data-category="${t.list_name}">See more</button>
    </div>`).join("")}
  </div>
`;S();async function S(){try{const t=(await M()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}A.innerHTML=D(e)}catch(o){console.log(o)}}window.onresize=function(o){const t=document.documentElement.clientWidth;(t<768&&i>=768||t<1440&&i>=1440||t>=768&&i<768||t>=1440&&i<1440)&&location.reload()};H.addEventListener("click",R);function R(o){S()}const J=document.querySelector(".js-list"),W=document.querySelectorAll(".js-category"),G=document.querySelector(".books-list");let d;function B(o,t){const e=K(o,t.slice(0,d));G.innerHTML=e}function K(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:r,title:l,author:u})=>`<li class="hardcover-item" id=${s}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                <div class ="overlay-wrapper">
                    <img class="hardcover-image" src="${r}"/>
                    </div>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${l}</h2>
                        <p class="hardcover-text">${u}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}async function P(o){try{if(Array.from(W).includes(o.target)){const t=o.target.textContent.trim(),e=await _(t);B(t,e)}}catch(t){console.error(t)}}async function V(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await _(t);B(t,e)}catch(t){console.error(t)}}async function _(o){return(await j(o)).data.map(({_id:e,book_image:n,title:s,author:r})=>({_id:e,book_image:n,title:s,author:r}))}window.addEventListener("resize",()=>{window.innerWidth<=768?d=7:d=15});document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=768?d=7:d=15,document.querySelector(".js-bookslist").addEventListener("click",V),J.addEventListener("click",P)});const $=document.querySelector(".sidebar-swiper-list"),m=document.querySelector(".support-arrow-down"),k=document.querySelector(".support-arrow-up");m.addEventListener("click",function(){$.scrollBy({top:170,behavior:"smooth"}),m.classList.add("visually-hidden"),k.classList.remove("visually-hidden")});k.addEventListener("click",function(){$.scrollBy({top:-170,behavior:"smooth"}),k.classList.add("visually-hidden"),m.classList.remove("visually-hidden")});const F=document.querySelector(".js-list");F.classList.add("scrollable");const h=document.querySelector(".back-to-top");window.addEventListener("scroll",Q);h.addEventListener("click",E);function Q(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?h.classList.add("back-to-top--show"):h.classList.remove("back-to-top--show")}function E(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(E,0))}const f=document.querySelector(".scroll-up");f.addEventListener("click",X);function X(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",q(Z,1e3));function Z(o){(window.scrollY||document.documentElement.scrollTop)>300?to():oo()}function oo(){f.classList.add("is-hidden")}function to(){f.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
