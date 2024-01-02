import{i as g,s as L}from"./assets/vendor-87ec4f81.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v=document.querySelector(".form"),l=document.querySelector("#input"),c=document.querySelector(".gallery"),s=document.querySelector(".loader");s.style.display="none";v.addEventListener("submit",a=>{a.preventDefault();const o=l.value.trim();c.innerHTML="",l.value="",s.style.display="block";const i=new URLSearchParams({key:"41494285-2be0c6d487dc7750955372a82",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(s.style.display="none",!t.ok)throw new Error(t.status);const e=t.headers.get("content-type");if(e&&e.includes("application/json"))return t.json();throw new Error("Invalid server response")}).then(t=>{s.style.display="none",t.hits.length||g.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",messageSize:"16",titleSize:"16",position:"topRight",maxWidth:430});const e=t.hits.reduce((n,{webformatURL:p,largeImageURL:u,tags:d,likes:y,views:m,comments:f,downloads:h})=>n+`<li class="gallery-item">
          <a class="gallery-link" href="${u}">
           <img class="gallery-image"
           src="${p}"
           alt="${d}"
           />
          </a>          
          <div class="description">
          <p>Likes:<span>${y}</span></p>
          <p>Views:<span>${m}</span></p>
          <p>Comments:<span>${f}</span></p>
          <p>Downloads:<span>${h}</span></p>
          </div> 
        </li>`,"");c.innerHTML=e,new L("ul.gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(t=>{s.style.display="none",console.log(t)})});
//# sourceMappingURL=commonHelpers.js.map
