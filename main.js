(()=>{"use strict";const n="https://restcountries.eu/rest/v2/",a=async a=>{const t=a?`${n}name/${a}`:`${n}all`;try{const n=await fetch(t);return await n.json()}catch{console.log("Fetch Error",error)}},t=()=>'\n   <div class="Error404">\n      <h2>Error 404</h2>\n   </div>\n   ',e=()=>window.location.hash.slice(1).split("/")[1]||"/",s={"/":async()=>{const n=await a();return console.log(n),`\n\n<div class="Countries">\n    ${n.map((n=>`\n    <article class="Countries__country">\n        <a href="#/${n.name}">\n            <img src="${n.flag}" class="country-flag" alt="${n.name}">\n            <h3 class="country-name">${n.name}</h3>\n            <ul class="country-information">\n                <h4><span>Population:</span> ${n.population}</h4>\n                <h4><span>Region:</span> ${n.region}</h4>\n                <h4><span>Capital:</span> ${n.capital}</h4>\n            </ul>\n        </a>\n    </article>\n    `)).join("")}\n</div>\n`},"/name/:name":async()=>{const n=e(),t=(await a(n))[0];return console.log(t),`\n<a href="https://sergiorod21.github.io/Countries/" class="backbtn">\n    \x3c!-- <img src="/public/assets/left-arrow.png" class="back-arrow" alt="left-arrow"> --\x3e\n    <p>Back</p>\n</a>\n<div class="Country">\n    <img src="${t.flag}" alt="bandera">\n    <article class="Country__description">\n        <h2>${t.name}</h2>\n        <h3><span>Native name:</span> ${t.nativeName}</h3>\n        <h3><span>Languages:</span> ${t.languages[0].name}</h3>\n        <h3><span>Capital:</span> ${t.capital}</h3>\n        <h3><span>Region:</span> ${t.region}</h3>\n        <h3><span>Population:</span> ${t.population}</h3>\n</div>\n</article>\n</div>\n`},"/Contact":"Contact"},o=async()=>{const n=document.getElementById("Header"),a=document.getElementById("Home");n.innerHTML=await'\n<div class="Header">\n    <a class="Header__logo" href="/#">\n        Where in the world?\n    </a>\n    \x3c!-- <a href="/about" class="about" id="about">About</a> --\x3e\n</div>\n';let o=e(),r=await(n=>n?"/"===n?n:"/name/:name":`/${n}`)(o),i=s[r]?s[r]:t;a.innerHTML=await i()};window.addEventListener("load",o),window.addEventListener("hashchange",o)})();