function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register("kyEFX",(function(t,o){var n,r;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"f9XUG":"index.ec7fe8b7.js","kfaKj":"cactus.bb421734.png"}'));var s;s=new URL(r("kyEFX").resolve("kfaKj"),import.meta.url).toString();(()=>{let e,t=null;const o=document.querySelector(".dino__stage"),n={dino:{isJumping:!1,isTouchingCactus:!1,dom:document.querySelector(".dino__dino")},ground:{width:481,offsets:[],dom:Array.from(document.querySelectorAll(".dino__ground *"))},cactuses:{dom:document.querySelector(".dino__cactuses"),width:33,clones:[]}};n.ground.dom.forEach(((e,t)=>{e.style.left=0===t?n.ground.width+"px":"0px",n.ground.offsets.push(parseFloat(e.style.left))}));const r=e=>{const t="Space"===e.code||"ArrowUp"===e.code,{dino:r}=n;if(("keydown"===e.type&&t||"mousedown"===e.type)&&!r.isJumping){const{dom:{style:t}}=r;e.preventDefault(),r.isJumping=!0,t.bottom="80%",setTimeout((()=>{t.bottom="",o.addEventListener("transitionend",(()=>r.isJumping=!1))}),400)}};o.addEventListener("focus",(()=>{o.addEventListener("keydown",r),o.addEventListener("mousedown",r),o.classList.add("dino__stage-focus")})),o.addEventListener("blur",(()=>{o.removeEventListener("keydown",r),o.removeEventListener("mousedown",r),o.classList.remove("dino__stage-focus")}));const d=function(){const{ground:r,cactuses:d}=n,c=()=>{if(r.offsets=r.offsets.map((e=>e-3)),r.dom.forEach(((e,t)=>{const o=r.offsets[t];e.style.left=`${o}px`,o<=-r.width&&(r.offsets[t]=r.width*(r.dom.length-1))})),d.clones.forEach(((e,t)=>{e.offset-=3,e.dom.style.left=`${e.offset}px`,e.offset<=-d.width&&(d.dom.removeChild(e.dom),d.clones.splice(t,1))})),0===d.clones.length||d.clones[d.clones.length-1].offset<r.width-(Math.floor(300*Math.random())+150)){let e=document.createElement("img");e.src=new URL(s),e.classList.add("dino__sprite","dino__onground"),e.style.width=Math.floor(15*Math.random())+10+"px",e.alt="cactus",d.clones.push({id:d.clones.length,offset:r.width+Math.random()*(r.width/8),dom:e}),d.dom.appendChild(e)}e++,o.querySelector(".dino__score span").textContent=e,t=requestAnimationFrame(c),(()=>{const{dino:e,cactuses:t}=n,o=e.dom.getBoundingClientRect();for(const e of t.clones){const t=e.dom.getBoundingClientRect();if(!(o.bottom<t.top||o.top>t.bottom||o.right<t.left||o.left>t.right))return n.dino.isTouchingCactus=!0,!0}return n.dino.isTouchingCactus=!1,!1})()&&(o.querySelector(".dino__end").style.display="",i())};c()},i=()=>{t&&(cancelAnimationFrame(t),t=null,o.removeEventListener("keydown",r),o.removeEventListener("mousedown",r))},c=()=>{i(),o.querySelector(".dino__play").style.display="none",o.querySelector(".dino__end").style.display="none",n.dino.isJumping=!1,n.dino.isTouchingCactus=!1,document.querySelector(".dino__cactuses").textContent="",n.cactuses.clones=[],e=0,n.ground.dom.forEach(((e,t)=>{e.style.left=0===t?n.ground.width+"px":"0px",n.ground.offsets[t]=parseFloat(e.style.left)})),o.setAttribute("tabindex","0"),o.focus(),d()};window.addEventListener("beforeunload",i),o.querySelector(".dino__play .btn").addEventListener("click",c),o.querySelector(".dino__end .btn").addEventListener("click",c),o.querySelector(".dino__end").style.display="none"})();
//# sourceMappingURL=index.ec7fe8b7.js.map
