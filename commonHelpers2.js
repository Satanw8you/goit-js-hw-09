import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const l="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("submit",m);e.addEventListener("input",o);r();function m(t){t.preventDefault();const a=e.elements.email.value.trim(),s=e.elements.message.value.trim();a&&s?(console.log({email:a,message:s}),localStorage.removeItem(l),t.currentTarget.reset()):alert("Please fill in all required fields, before sending")}function o(t){const a=e.elements.email.value.trim(),s=e.elements.message.value.trim(),n={email:a,message:s};localStorage.setItem(l,JSON.stringify(n))}function r(){const t=JSON.parse(localStorage.getItem(l))||{};e.elements.email.value=t.email||"",e.elements.message.value=t.message||""}
//# sourceMappingURL=commonHelpers2.js.map
