(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAATCAYAAADI876sAAAABHNCSVQICAgIfAhkiAAAAbtJREFUWIXFVjtOxDAQHSeWtkBCgnqleEtAHICCKyDRxyeg4iJUHGBX622RuAPiBCtBumxJgSigZqiMRqNx4sTx7qsy9uS9mfH4o4DAGIPUbttWSfN+nNuhMY+qqp6UUrcxGhIknZhYqa/3K7oEjTG4WCxuhAR+qL//lsaozZMO6fYhFGuMr7cLPtm2raLVQ8RnTqaUOhobjOdHxHMpUD/PV5B3mRTrfD4/lTglFJRUas8QQsGFOGaz2TG1d7vdW6xWLLTWn3wsVEhNHQDGtV4Mmqb5BoBoDWlfUgxZJAn/iedKeAx/X9JToHePZ8DZHjR6UTD7K4cIK+z7AN9gcVI7VDP7JIVsCPjVx+9b7gMwbdvzFQdjDPYFMBT84ZHC18U1pDDa/yBVt+sVlgp6i1D+kBZPMGc3HBTr9frDOZftpomqknMO67rOXtHlcnmhtd7y8X1oB+Gcw5wr0KWbg5ef6kH4qvtAEPHFWns9dUCr1eqqLMtXRPy11pZT83uMaiFpFVLa0Tn3CAB3nMvr5Gj1JMK+NkTErbX20tubzeYeER+6/qFJ5jxbJiFN3YeHOLyyCMYU4qAnNQD8AbTuLn36hHRPAAAAAElFTkSuQmCC",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAABHNCSVQICAgIfAhkiAAAAgFJREFUWIXtV0GKGkEUfTWTbZNFNoGBBoVG8AYKGVceQgXF5ADiQhQPIIoL8QIDIip4A5chC3OEVteBbALZlS6mfhZDSVdXW13tTEsgedDQXfV+vde/6ldXA//xAhZHWK/X74UQXwA8ALhPMPYzgB+c86dms/n7KhOr1YoSCFqhUqlE6kU2LpfLNzcgUa1WNU2tYbFYpGZAolarKbrvwgSi1D1oUBzN5/OvRPR4A91tvV4vyoe7YI8Q4pGIEHVxzuG6LhzHieyXl+M4cF0XnHMTrxDUVaYjaio8z0OxWNTaAWA2m53vG42G0lcqlV5eebvFfr83pkXJRNjx8Xi8aEAKE5FmIIhCoYDT6aSNbW0ik8kY30DGxCGbzRpNKNMhhIgdMAzbGBPPuCZsBGwyIYQw8oyZsBWIAxFdnwkbE7Yc60xcs1vaxlxt4q3WRKJMpFUdck0wxkBEYEz9bt40E5Jr3Cf+ioV5qUSn06kWWC6Xkc/nzzG+72Oz2Wi8VqsVW6LK5Ewmk0Tl4XkeDocDcrkcdrtdklC02+2z9qtKVH4dfd9PFBdG2MQ3AJ9eNaIdvgcftDPmeDxO/XzX6XQU3btLxFsi8sg/Go1Sy0a3240/8ksMh8OzEbnTxUHuhJe4vV7P/ucniMFg8IEx9pkx9hEJfwOJ6CcRPfX7/V8J4v5h/AGBWIUp7ZLKjwAAAABJRU5ErkJggg==";document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".switch input");n.addEventListener("change",function(){n.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll("#link-menu");n.forEach(function(o){o.addEventListener("click",function(c){c.preventDefault(),n.forEach(function(s){s.classList.remove("is-active")}),o.classList.add("is-active")})})});function d(n){const o=document.querySelector(".mobile-content"),c=document.querySelector(".burger-btn"),s=document.querySelector(".close-btn");n==="open"?(o.style.display="block",c.style.display="none",s.style.display="block"):(o.style.display="none",c.style.display="block",s.style.display="none")}document.querySelector(".burger-btn").addEventListener("click",function(){d("open")});document.querySelector(".close-btn").addEventListener("click",function(){d("close")});const a=document.querySelector(".sidebar-swiper-list"),i=document.querySelector(".support-arrow-down"),l=document.querySelector(".support-arrow-up");i.addEventListener("click",function(){a.scrollBy({top:170,behavior:"smooth"}),i.classList.add("visually-hidden"),l.classList.remove("visually-hidden")});l.addEventListener("click",function(){a.scrollBy({top:-170,behavior:"smooth"}),l.classList.add("visually-hidden"),i.classList.remove("visually-hidden")});const u=document.querySelector(".js-list");u.classList.add("scrollable");export{A as a,f as b};
//# sourceMappingURL=slider-e33631bd.js.map
