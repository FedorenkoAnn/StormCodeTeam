(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".switch input");n.addEventListener("change",function(){n.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll("#link-menu");n.forEach(function(o){o.addEventListener("click",function(r){r.preventDefault(),n.forEach(function(s){s.classList.remove("is-active")}),o.classList.add("is-active")})})});function d(n){const o=document.querySelector(".mobile-content"),r=document.querySelector(".burger-btn"),s=document.querySelector(".close-btn");n==="open"?(o.style.display="block",r.style.display="none",s.style.display="block"):(o.style.display="none",r.style.display="block",s.style.display="none")}document.querySelector(".burger-btn").addEventListener("click",function(){d("open")});document.querySelector(".close-btn").addEventListener("click",function(){d("close")});const u=document.querySelector(".sidebar-swiper-list"),i=document.querySelector(".support-arrow-down"),l=document.querySelector(".support-arrow-up");i.addEventListener("click",function(){u.scrollBy({top:170,behavior:"smooth"}),i.classList.add("visually-hidden"),l.classList.remove("visually-hidden")});l.addEventListener("click",function(){u.scrollBy({top:-170,behavior:"smooth"}),l.classList.add("visually-hidden"),i.classList.remove("visually-hidden")});const a=document.querySelector(".js-list");a.classList.add("scrollable");
//# sourceMappingURL=slider-63e5e033.js.map
