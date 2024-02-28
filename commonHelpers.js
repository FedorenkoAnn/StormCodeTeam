import"./assets/slider-3b6421e5.js";import{a as k,t as L}from"./assets/vendor-da6d1e6a.js";async function S(){return await k.get("https://books-backend.p.goit.global/books/top-books")}async function E(o){return await k.get(`https://books-backend.p.goit.global/books/category?category=${o}`)}async function C(o){return await k.get(`https://books-backend.p.goit.global/books/${o}`)}const T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAATCAYAAADI876sAAAABHNCSVQICAgIfAhkiAAAAbtJREFUWIXFVjtOxDAQHSeWtkBCgnqleEtAHICCKyDRxyeg4iJUHGBX622RuAPiBCtBumxJgSigZqiMRqNx4sTx7qsy9uS9mfH4o4DAGIPUbttWSfN+nNuhMY+qqp6UUrcxGhIknZhYqa/3K7oEjTG4WCxuhAR+qL//lsaozZMO6fYhFGuMr7cLPtm2raLVQ8RnTqaUOhobjOdHxHMpUD/PV5B3mRTrfD4/lTglFJRUas8QQsGFOGaz2TG1d7vdW6xWLLTWn3wsVEhNHQDGtV4Mmqb5BoBoDWlfUgxZJAn/iedKeAx/X9JToHePZ8DZHjR6UTD7K4cIK+z7AN9gcVI7VDP7JIVsCPjVx+9b7gMwbdvzFQdjDPYFMBT84ZHC18U1pDDa/yBVt+sVlgp6i1D+kBZPMGc3HBTr9frDOZftpomqknMO67rOXtHlcnmhtd7y8X1oB+Gcw5wr0KWbg5ef6kH4qvtAEPHFWns9dUCr1eqqLMtXRPy11pZT83uMaiFpFVLa0Tn3CAB3nMvr5Gj1JMK+NkTErbX20tubzeYeER+6/qFJ5jxbJiFN3YeHOLyyCMYU4qAnNQD8AbTuLn36hHRPAAAAAElFTkSuQmCC",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAABHNCSVQICAgIfAhkiAAAAgFJREFUWIXtV0GKGkEUfTWTbZNFNoGBBoVG8AYKGVceQgXF5ADiQhQPIIoL8QIDIip4A5chC3OEVteBbALZlS6mfhZDSVdXW13tTEsgedDQXfV+vde/6ldXA//xAhZHWK/X74UQXwA8ALhPMPYzgB+c86dms/n7KhOr1YoSCFqhUqlE6kU2LpfLNzcgUa1WNU2tYbFYpGZAolarKbrvwgSi1D1oUBzN5/OvRPR4A91tvV4vyoe7YI8Q4pGIEHVxzuG6LhzHieyXl+M4cF0XnHMTrxDUVaYjaio8z0OxWNTaAWA2m53vG42G0lcqlV5eebvFfr83pkXJRNjx8Xi8aEAKE5FmIIhCoYDT6aSNbW0ik8kY30DGxCGbzRpNKNMhhIgdMAzbGBPPuCZsBGwyIYQw8oyZsBWIAxFdnwkbE7Yc60xcs1vaxlxt4q3WRKJMpFUdck0wxkBEYEz9bt40E5Jr3Cf+ioV5qUSn06kWWC6Xkc/nzzG+72Oz2Wi8VqsVW6LK5Ewmk0Tl4XkeDocDcrkcdrtdklC02+2z9qtKVH4dfd9PFBdG2MQ3AJ9eNaIdvgcftDPmeDxO/XzX6XQU3btLxFsi8sg/Go1Sy0a3240/8ksMh8OzEbnTxUHuhJe4vV7P/ucniMFg8IEx9pkx9hEJfwOJ6CcRPfX7/V8J4v5h/AGBWIUp7ZLKjwAAAABJRU5ErkJggg==",b=document.querySelector(".modal-body"),p=document.querySelector(".backdrop"),M=document.querySelector(".modal-close-btn");let a,i=[];const h="shoppingList",f=localStorage.getItem(h);f&&(i=JSON.parse(f));M.addEventListener("click",m);document.addEventListener("click",async o=>{try{const t=o.target.closest(".hardcover-item")||o.target.closest(".js-card");if(t){const e=t.id,s=(await C(e)).data,c={_id:s._id,book_image:s.book_image,title:s.title,list_name:s.list_name,description:s.description,author:s.author,buy_links:s.buy_links.slice(0,2)},l=_(c);U(),I(b,l),a&&a.parentNode&&a.parentNode.removeChild(a),a=document.createElement("button"),a.textContent=i.some(u=>u._id===e)?"Remove from Shopping List":"Add to Shopping List",a.classList.add("add-to-shopping-list-btn"),a.addEventListener("click",()=>{q(c)}),b.appendChild(a),localStorage.setItem(h,JSON.stringify(i))}}catch(t){console.error(t)}});p.addEventListener("click",o=>{o.target===p&&m()});document.addEventListener("keydown",o=>{o.key==="Escape"&&m()});function U(){p.style.display="block"}function m(){p.style.display="none"}function _(o){const{book_image:t,list_name:e,title:n,author:s,description:c}=o;return`<div class="image-container">
      <img src="${t}" alt="${e}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${n}</h2>
        <p class="list-name">${s}</p>
      </div>
        <p class="list-descr">${c}</p>
        <div class="list-links">
            <img class="icon-amazon" src="${T}" alt="amazon" />
            <img class="icon-apple" src="${x}" alt="app_books" />
        </div>
      </div>
    </div>
     `}function I(o,t){o.innerHTML=t}function q(o){if(!o||!o._id){console.error("Invalid book:",o);return}const t=i.findIndex(e=>e._id===o._id);t===-1?i.push(o):i.splice(t,1),localStorage.setItem(h,JSON.stringify(i)),a&&(a.textContent=i.some(e=>e._id===o._id)?"Remove from Shopping List":"Add to Shopping List")}const r=window.visualViewport.width,G=document.querySelector(".js-bookslist"),D=document.querySelector(".js-all"),V=()=>{if(r<768)return 1;if(r>=768&&r<1440)return 3;if(r>1440)return 5},H=o=>`<div/>
    <h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
      ${o.map(t=>`
          <h2 class="books_card-heading js-heading">${t.list_name}</h2>
          <ul class="book_card-list" >
              ${t.books.slice(0,V()).map(({_id:n,book_image:s,title:c,author:l})=>`<li class="book_card-item js-card" id=${n}>
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
`;v();async function v(){try{const t=(await S()).data,e=[];let n=0;for(const s of t){if(e.length===4)break;n=Math.round(Math.random()*t.length),e.includes(t[n])||e.push(t[n])}G.innerHTML=H(e)}catch(o){console.log(o)}}window.onresize=function(o){const t=document.documentElement.clientWidth;(t<768&&r>=768||t<1440&&r>=1440||t>=768&&r<768||t>=1440&&r<1440)&&location.reload()};D.addEventListener("click",N);function N(o){v()}const O=document.querySelector(".js-list"),W=document.querySelectorAll(".js-category"),F=document.querySelector(".books-list");let d;function y(o,t){const e=Y(o,t.slice(0,d));F.innerHTML=e}function Y(o,t){const e=`<h2 class="hardcover-category-title">${o.replace(/(\w+)\s*$/,'<span class="book-categories-span">$1</span>')}</h2>`,n=t.map(({_id:s,book_image:c,title:l,author:u})=>`<li class="hardcover-item" id=${s}>         
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
        </li>`).join("");return e+'<ul class="hardcover-list">'+n+"</ul>"}async function R(o){try{if(Array.from(W).includes(o.target)){const t=o.target.textContent.trim(),e=await B(t);y(t,e)}}catch(t){console.error(t)}}async function z(o){if(o.target.classList.contains("btn_see-more"))try{const t=o.target.dataset.category.trim(),e=await B(t);y(t,e)}catch(t){console.error(t)}}async function B(o){return(await E(o)).data.map(({_id:e,book_image:n,title:s,author:c})=>({_id:e,book_image:n,title:s,author:c}))}window.addEventListener("resize",()=>{window.innerWidth<=768?d=7:d=15});document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=768?d=7:d=15,document.querySelector(".js-bookslist").addEventListener("click",z),O.addEventListener("click",R)});const g=document.querySelector(".back-to-top");window.addEventListener("scroll",$);g.addEventListener("click",w);function $(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?g.classList.add("back-to-top--show"):g.classList.remove("back-to-top--show")}function w(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(w,0))}const A=document.querySelector(".scroll-up");A.addEventListener("click",J);function J(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",L(P,1e3));function P(o){(window.scrollY||document.documentElement.scrollTop)>300?j():X()}function X(){A.classList.add("is-hidden")}function j(){A.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
