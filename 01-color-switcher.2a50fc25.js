const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){const n=setInterval((()=>{t.disabled=!0,console.log(o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`)}),1e3);e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}))}));
//# sourceMappingURL=01-color-switcher.2a50fc25.js.map
