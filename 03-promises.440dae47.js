!function(){var e=document.querySelector("form");function n(e,n){var o=Math.random()>.3;new Promise((function(t,c){setTimeout((function(){o?t({position:e,delay:n}):c({position:e,delay:n})}),n)})).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}document.querySelector("button").addEventListener("sumbit",(function(o){o.preventDefault();for(var t=Number(e.elements.delay.value),c=Number(e.elements.step.value),i=Number(e.elements.amount.value),a=0;a<i;a++)n(a,t),t+=c}))}();
//# sourceMappingURL=03-promises.440dae47.js.map
