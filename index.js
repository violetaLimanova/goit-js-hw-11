import{a as m,S as d,i as n}from"./assets/vendor-BX8YMJUK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="58324539-50fa88a5fc3a10b330f7f018f";async function g(o){return(await m.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:u})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${a}">
        <img class="gallery-img" src="${s}" alt="${e}"/>
        </a>
        <div class="info">
        <p class="info-item"><b>Likes</b>${t}</p>
        <p class="info-item"><b>Views</b>${i}</p>
        <p class="info-item"><b>Comments</b>${f}</p>
        <p class="info-item"><b>Downloads</b>${u}</p>
        </div>
        </li>
        `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();L(),r!==""&&(v(),g(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{n.error({message:"Something went wrong. Please try again!"})}).finally(()=>{w()}))});
//# sourceMappingURL=index.js.map
