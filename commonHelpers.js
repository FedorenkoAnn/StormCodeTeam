import{a as S,b as _}from"./assets/slider-bf9ed99e.js";import{a as k,t as $}from"./assets/vendor-da6d1e6a.js";async function E(){return await k.get("https://books-backend.p.goit.global/books/top-books")}async function C(o){return await k.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function T(o){return await k.get(`https://books-backend.p.goit.global/books/${o}`)}const v=document.querySelector(".modal-body"),p=document.querySelector(".backdrop"),M=document.querySelector(".modal-close-btn");let c,i=[];const g="shoppingList",f=localStorage.getItem(g);f&&(i=JSON.parse(f));M.addEventListener("click",h);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await T(e)).data,a={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},l=q(a);j(),O(v,l),c&&c.parentNode&&c.parentNode.removeChild(c),c=document.createElement("button"),c.textContent=i.some(u=>u._id===e)?"Remove from Shopping List":"Add to Shopping List",c.classList.add("add-to-shopping-list-btn"),c.addEventListener("click",()=>{x(a)}),v.appendChild(c),localStorage.setItem(g,JSON.stringify(i))}}catch(t){console.error(t)}});p.addEventListener("click",o=>{o.target===p&&h()});document.addEventListener("keydown",o=>{o.key==="Escape"&&h()});function j(){p.style.display="block"}function h(){p.style.display="none"}function q(o){const{book_image:t,list_name:e,title:n,author:s,description:a}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${s}</p>
      </div>
        <p class="list-descr">${a}</p>
        <div class="list-links">
            <img class="icon-amazon" src="${S}" alt="amazon" />
            <img class="icon-apple" src="${_}" alt="app_books" />
        </div>
      </div>
    </div>
     `}function O(o,t){o.innerHTML=t}function x(o){if(!o||!o._id){console.error("Invalid book:",o);return}const t=i.findIndex(e=>e._id===o._id);t===-1?i.push(o):i.splice(t,1),localStorage.setItem(g,JSON.stringify(i)),c&&(c.textContent=i.some(e=>e._id===o._id)?"Remove from Shopping List":"Add to Shopping List")}const r=window.visualViewport.width,I=document.querySelector(".js-bookslist"),Y=document.querySelector(".js-all"),z=()=>{if(r<768)return 1;if(r>=768&&r<1440)return 3;if(r>1440)return 5},A=o=>`<div/>
    <h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
      ${o.map(t=>`
          <h2 class="books_card-heading js-heading">${t.list_name}</h2>
          <ul class="book_card-list" >
              ${t.books.slice(0,z()).map(({_id:n,book_image:s,title:a,author:l})=>`<li class="book_card-item js-card" id=${n}>
                         <div class="overlay-wrapper">
                           <img
                             class="book_card_photo"
                             src=${s}
                             alt= book cover photo ${a}
                           />
                          </div>
                          <h3 class="book_card-title">${a}</h3>
                          <h4 class="book_card_author">${l}</h4>
                        </li>`).join("")}
          </ul>
        <div class="btn_more">
      <button class="btn_see-more" data-category="${t.list_name}">See more</button>
    </div>`).join("")}
  </div>
`;b();async function b(){try{const t=(await E()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}I.innerHTML=A(e)}catch(o){console.log(o)}}window.onresize=function(o){const t=document.documentElement.clientWidth;(t<768&&r>=768||t<1440&&r>=1440||t>=768&&r<768||t>=1440&&r<1440)&&location.reload()};Y.addEventListener("click",H);function H(o){b()}const N=document.querySelector(".js-list"),U=document.querySelectorAll(".js-category"),R=document.querySelector(".books-list");let d;function w(o,t){const e=D(o,t.slice(0,d));R.innerHTML=e}function D(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:a,title:l,author:u})=>`<li class="hardcover-item" id=${s}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                <div class ="overlay-wrapper">
                    <img class="hardcover-image" src="${a}"/>
                    </div>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${l}</h2>
                        <p class="hardcover-text">${u}</p>
                    </div>
                </div>
            </div>
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}async function J(o){try{if(Array.from(U).includes(o.target)){const t=o.target.textContent.trim(),e=await L(t);w(t,e)}}catch(t){console.error(t)}}async function W(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await L(t);w(t,e)}catch(t){console.error(t)}}async function L(o){return(await C(o)).data.map(({_id:e,book_image:n,title:s,author:a})=>({_id:e,book_image:n,title:s,author:a}))}window.addEventListener("resize",()=>{window.innerWidth<=768?d=7:d=15});document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=768?d=7:d=15,document.querySelector(".js-bookslist").addEventListener("click",W),N.addEventListener("click",J)});const m=document.querySelector(".back-to-top");window.addEventListener("scroll",G);m.addEventListener("click",B);function G(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?m.classList.add("back-to-top--show"):m.classList.remove("back-to-top--show")}function B(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(B,0))}const y=document.querySelector(".scroll-up");y.addEventListener("click",K);function K(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",$(P,1e3));function P(o){(window.scrollY||document.documentElement.scrollTop)>300?F():V()}function V(){y.classList.add("is-hidden")}function F(){y.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
