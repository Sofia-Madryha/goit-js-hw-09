const e=document.querySelector("form");function o(e,o){const t=Math.random()>.3;new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)})).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}document.querySelector("button").addEventListener("sumbit",(function(t){t.preventDefault();const n=Number(e.elements.delay.value),l=Number(e.elements.step.value),s=Number(e.elements.amount.value);for(let e=0;e<s;e++)o(e,n),n+=l}));
//# sourceMappingURL=03-promises.1f9aee1d.js.map