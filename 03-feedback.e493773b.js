!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(O,t),d?p(e):u}function x(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=b();if(x(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&r?p(e):(r=i=void 0,u)}function h(){var e=b(),n=x(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?u:T(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S="feedback-form-state",x={email:"",message:""},O={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};O.form.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(S),x.email=O.email.value,x.message=O.textarea.value,e.currentTarget.reset(),console.log(x)})),O.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(x))}),500)),function(){var e=localStorage.getItem("feedback-form-state");if(e){console.log(e);var t=JSON.parse(e);console.log(t),O.email.value=t.email,O.textarea.value=t.message}}()}();
//# sourceMappingURL=03-feedback.e493773b.js.map
