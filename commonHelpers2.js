import"./assets/slider-63e5e033.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".shopping-list-container"),o=localStorage.getItem("shoppingList");if(o){const e=JSON.parse(o);c(e,t)}});function c(t,o){t.forEach(e=>{const n=r(e);o.appendChild(n)})}function r(t){const{_id:o,book_image:e,title:n,author:s,description:p}=t,i=document.createElement("div");return i.classList.add("book-item"),i.innerHTML=`
    <img src="${e}" alt="${n}" />
    <h3>${n}</h3>
    <p>${s}</p>
    <p>${p}</p>
    <button onclick="removeBook('${o}')">Remove from Shopping List</button>
  `,i}
//# sourceMappingURL=commonHelpers2.js.map
