!function(){"use strict";!function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(l,t);var e,n,r,f,a=(r=l,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(r);if(f){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this,t)).init(),e}return e=l,(n=[{key:"init",value:function(){this.$("title")[0].innerText="Thanks for chosing this setup for your Shopify Theme."}}])&&o(e.prototype,n),l}(function(){function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.sName=t.name,this.sAttr="data-component-".concat(this.sName),this.sRoot=document.querySelector("["+this.sAttr+"]")}var o,i;return o=r,(i=[{key:"$",value:function(n,r){var o,i=[n.indexOf("."),n.indexOf("#"),n.indexOf("[")].filter((function(t){return-1!=t})),u=!1,c=n,f="",a=this.sRoot;return i.length&&(u=Math.min.apply(Math,function(t){if(Array.isArray(t))return e(t)}(o=i)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=n.slice(0,u),f=n.slice(u)),"object"==t(r)&&(a=r),a.querySelectorAll("["+this.sAttr+"="+c+"]"+f)}}])&&n(o.prototype,i),r}()))({name:"example"}),console.log("Hello world. (from theme layout)")}()}();