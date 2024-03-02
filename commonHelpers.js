import{a as S,b as $}from"./assets/slider-d52cd3d6.js";import{a as k,t as E}from"./assets/vendor-da6d1e6a.js";async function C(){return await k.get("https://books-backend.p.goit.global/books/top-books")}async function T(o){return await k.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function M(o){return await k.get(`https://books-backend.p.goit.global/books/${o}`)}const f=document.querySelector(".modal-body"),p=document.querySelector(".backdrop"),j=document.querySelector(".modal-close-btn"),v=document.querySelector(".modal-bottom-text");let a,c=[];const g="shoppingList",b=localStorage.getItem(g);b&&(c=JSON.parse(b));j.addEventListener("click",h);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await M(e)).data,r={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},l=x(r);q(),O(f,l),a&&a.parentNode&&a.parentNode.removeChild(a),a=document.createElement("button"),a.textContent=c.some(u=>u._id===e)?"Remove from Shopping List":"Add to Shopping List",a.classList.add("add-to-shopping-list-btn"),a.addEventListener("click",()=>{I(r)}),f.appendChild(a),localStorage.setItem(g,JSON.stringify(c))}}catch(t){console.error(t)}});p.addEventListener("click",o=>{o.target===p&&h()});document.addEventListener("keydown",o=>{o.key==="Escape"&&h()});function q(){p.style.display="block"}function h(){p.style.display="none"}function x(o){const{book_image:t,list_name:e,title:n,author:s,description:r}=o;return`<div class="image-container">
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
            <img class="icon-amazon" src="${S}" alt="amazon" />
         </a>
         <a href="${o.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank"> 
            <img class="icon-apple" src="${$}" alt="amazon" />
          </a>
        </div>
       
      </div>
     
    
     `}function O(o,t){o.innerHTML=t}function I(o){if(!o||!o._id){console.error("Invalid book:",o);return}const t=c.findIndex(e=>e._id===o._id);t===-1?(c.push(o),v.style.display="block"):(c.splice(t,1),v.style.display="none"),localStorage.setItem(g,JSON.stringify(c)),a&&(a.textContent=c.some(e=>e._id===o._id)?"Remove from Shopping List":"Add to Shopping List")}const i=window.visualViewport.width,z=document.querySelector(".js-bookslist"),Y=document.querySelector(".js-all"),A=()=>{if(i<768)return 1;if(i>=768&&i<1440)return 3;if(i>1440)return 5},H=o=>`<div/>
    <h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
      ${o.map(t=>`
          <h2 class="books_card-heading js-heading">${t.list_name}</h2>
          <ul class="book_card-list" >
              ${t.books.slice(0,A()).map(({_id:n,book_image:s,title:r,author:l})=>`<li class="book_card-item js-card" id=${n}>
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
`;w();async function w(){try{const t=(await C()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}z.innerHTML=H(e)}catch(o){console.log(o)}}window.onresize=function(o){const t=document.documentElement.clientWidth;(t<768&&i>=768||t<1440&&i>=1440||t>=768&&i<768||t>=1440&&i<1440)&&location.reload()};Y.addEventListener("click",N);function N(o){w()}const U=document.querySelector(".js-list"),R=document.querySelectorAll(".js-category"),D=document.querySelector(".books-list");let d;function B(o,t){const e=J(o,t.slice(0,d));D.innerHTML=e}function J(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:r,title:l,author:u})=>`<li class="hardcover-item" id=${s}>         
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
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}async function W(o){try{if(Array.from(R).includes(o.target)){const t=o.target.textContent.trim(),e=await L(t);B(t,e)}}catch(t){console.error(t)}}async function G(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await L(t);B(t,e)}catch(t){console.error(t)}}async function L(o){return(await T(o)).data.map(({_id:e,book_image:n,title:s,author:r})=>({_id:e,book_image:n,title:s,author:r}))}window.addEventListener("resize",()=>{window.innerWidth<=768?d=7:d=15});document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=768?d=7:d=15,document.querySelector(".js-bookslist").addEventListener("click",G),U.addEventListener("click",W)});const m=document.querySelector(".back-to-top");window.addEventListener("scroll",K);m.addEventListener("click",_);function K(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?m.classList.add("back-to-top--show"):m.classList.remove("back-to-top--show")}function _(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(_,0))}const y=document.querySelector(".scroll-up");y.addEventListener("click",P);function P(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",E(V,1e3));function V(o){(window.scrollY||document.documentElement.scrollTop)>300?Q():F()}function F(){y.classList.add("is-hidden")}function Q(){y.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
