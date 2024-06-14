import{a as E,j as e,b as x,c as y,g as X,Y as xe}from"./app-3131a3d4.js";class C{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const pe=()=>{if(!(typeof localStorage>"u"))return{get:a=>Promise.resolve(localStorage.getItem(a)),set:(a,t)=>Promise.resolve(localStorage.setItem(a,t)),remove:a=>Promise.resolve(localStorage.removeItem(a))}},g={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:pe()},B=a=>a?typeof a=="string"?{publicKey:a}:a.toString()==="[object Object]"?a:{}:{},ve=(a,t="https://api.emailjs.com")=>{if(!a)return;const s=B(a);g.publicKey=s.publicKey,g.blockHeadless=s.blockHeadless,g.storageProvider=s.storageProvider,g.blockList=s.blockList,g.limitRate=s.limitRate,g.origin=s.origin||t},Z=async(a,t,s={})=>{const r=await fetch(g.origin+a,{method:"POST",headers:s,body:t}),i=await r.text(),n=new C(r.status,i);if(r.ok)return n;throw n},ee=(a,t,s)=>{if(!a||typeof a!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},je=a=>{if(a&&a.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ae=a=>a.webdriver||!a.languages||a.languages.length===0,te=()=>new C(451,"Unavailable For Headless Browser"),ye=(a,t)=>{if(!Array.isArray(a))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},we=a=>{var t;return!((t=a.list)!=null&&t.length)||!a.watchVariable},Ne=(a,t)=>a instanceof FormData?a.get(t):a[t],se=(a,t)=>{if(we(a))return!1;ye(a.list,a.watchVariable);const s=Ne(t,a.watchVariable);return typeof s!="string"?!1:a.list.includes(s)},re=()=>new C(403,"Forbidden"),ke=(a,t)=>{if(typeof a!="number"||a<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},Se=async(a,t,s)=>{const r=Number(await s.get(a)||0);return t-Date.now()+r},ie=async(a,t,s)=>{if(!t.throttle||!s)return!1;ke(t.throttle,t.id);const r=t.id||a;return await Se(r,t.throttle,s)>0?!0:(await s.set(r,Date.now().toString()),!1)},ne=()=>new C(429,"Too Many Requests"),Le=async(a,t,s,r)=>{const i=B(r),n=i.publicKey||g.publicKey,c=i.blockHeadless||g.blockHeadless,l=g.storageProvider||i.storageProvider,m={...g.blockList,...i.blockList},d={...g.limitRate,...i.limitRate};return c&&ae(navigator)?Promise.reject(te()):(ee(n,a,t),je(s),s&&se(m,s)?Promise.reject(re()):await ie(location.pathname,d,l)?Promise.reject(ne()):Z("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:n,service_id:a,template_id:t,template_params:s}),{"Content-type":"application/json"}))},Ee=a=>{if(!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Oe=a=>typeof a=="string"?document.querySelector(a):a,Te=async(a,t,s,r)=>{const i=B(r),n=i.publicKey||g.publicKey,c=i.blockHeadless||g.blockHeadless,l=g.storageProvider||i.storageProvider,m={...g.blockList,...i.blockList},d={...g.limitRate,...i.limitRate};if(c&&ae(navigator))return Promise.reject(te());const h=Oe(s);ee(n,a,t),Ee(h);const f=new FormData(h);return se(m,f)?Promise.reject(re()):await ie(location.pathname,d,l)?Promise.reject(ne()):(f.append("lib_version","4.3.3"),f.append("service_id",a),f.append("template_id",t),f.append("user_id",n),Z("/api/v1.0/email/send-form",f))},Pe={init:ve,send:Le,sendForm:Te,EmailJSResponseStatus:C};function Ce({auth:a}){const[t,s]=E.useState(0),r=()=>{const i=window.pageYOffset;s(i)};return E.useEffect(()=>(window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}),[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`navbar fixed p-4 lg:p-2 z-[2]  top-0 shadow-sm flex justify-between  lg:justify-around transition-colors  duration-300 ${t>0?"bg-white text-black":"bg-transparent"}`,children:[e.jsx("div",{className:"flex items-center",children:e.jsx("h1",{className:"text-2xl font-bold",children:"KOJIDEV"})}),e.jsx("div",{className:"flex-col hidden lg:flex",children:e.jsxs("ul",{className:"menu menu-horizontal ",children:[e.jsx("li",{className:"hover:bg-primary hover:text-white hover:rounded-md",children:e.jsx(x,{href:"/#home",children:"Home"})}),e.jsx("li",{className:"hover:bg-primary hover:text-white hover:rounded-md",children:e.jsx(x,{href:"/#about",children:"About"})}),e.jsx("li",{className:"hover:bg-primary hover:text-white hover:rounded-md",children:e.jsx(x,{href:"/#portfolio",children:"Portofolio"})}),e.jsx("li",{className:"hover:bg-primary hover:text-white hover:rounded-md",children:e.jsx(x,{href:"/#news",children:"News"})}),e.jsx("li",{className:"hover:bg-primary hover:text-white hover:rounded-md",children:e.jsx(x,{href:"/#contact",children:"Contact"})})]})}),e.jsx("div",{className:"flex-col hidden lg:flex",children:e.jsx("ul",{className:"menu menu-horizontal ",children:a.user?e.jsxs("div",{className:"flex gap-4",children:[e.jsx(x,{href:route("admin.dashboard"),className:"btn btn-primary btn-outline px-6 btn-sm",children:"Dashboard"}),e.jsx(x,{href:route("logout"),method:"post",className:"btn btn-error px-6 btn-sm",children:"Logout"})]}):e.jsx(x,{href:route("login"),className:"btn btn-primary btn-outline px-6 btn-sm",children:"Login"})})}),e.jsxs("div",{className:"dropdown lg:hidden dropdown-end",children:[e.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),e.jsxs("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52 gap-2",children:[e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("box-icon",{name:"home-alt-2",size:"sm"}),e.jsx(x,{href:"/#home",className:"text-sm",children:"Home"})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("box-icon",{name:"user",size:"sm"}),e.jsx(x,{href:"/#about",className:"text-sm",children:"About"})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("box-icon",{name:"book-content",size:"sm"}),e.jsx("a",{href:"/#portfolio",className:"text-sm",children:"Portfolio"})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("box-icon",{name:"news",size:"sm"}),e.jsx(x,{href:"/#news",className:"text-sm",children:"News"})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("box-icon",{name:"mail-send",size:"sm"}),e.jsx(x,{href:"/#contact",className:"text-sm",children:"Contact"})]})})]})]})]})})}function Ie(){return e.jsx(e.Fragment,{children:e.jsx("div",{className:" border border-t p-4 border-black",children:e.jsx("div",{className:"max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 md:px-8",children:e.jsx("nav",{className:"flex flex-wrap items-center justify-center -mx-5 -my-2",children:e.jsxs("div",{className:"px-5 flex gap-6",children:[e.jsxs("a",{href:"https://www.instagram.com/pkuswara/",className:"text-accent text-xl hover:text-gray-500",target:"_blank",children:[e.jsx("span",{className:"sr-only",children:"Instagram"}),e.jsx("i",{className:"fa-brands fa-instagram"})]}),e.jsxs("a",{href:"https://github.com/PradnyaKuswara",className:"text-accent text-xl hover:text-gray-500",target:"_blank",children:[e.jsx("span",{className:"sr-only",children:"Github"}),e.jsx("i",{className:"fa-brands fa-github"})]}),e.jsxs("a",{href:"https://www.linkedin.com/in/pradnya-kuswara/",className:"text-accent text-xl hover:text-gray-500",target:"_blank",children:[e.jsx("span",{className:"sr-only",children:"Linkedin"}),e.jsx("i",{className:"fa-brands fa-linkedin"})]})]})})})})})}var oe="Expected a function",D=0/0,Me="[object Symbol]",He=/^\s+|\s+$/g,ze=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,Re=parseInt,_e=typeof y=="object"&&y&&y.Object===Object&&y,qe=typeof self=="object"&&self&&self.Object===Object&&self,Fe=_e||qe||Function("return this")(),Be=Object.prototype,De=Be.toString,We=Math.max,Je=Math.min,_=function(){return Fe.Date.now()};function Ke(a,t,s){var r,i,n,c,l,m,d=0,h=!1,f=!1,N=!0;if(typeof a!="function")throw new TypeError(oe);t=W(t)||0,H(s)&&(h=!!s.leading,f="maxWait"in s,n=f?We(W(s.maxWait)||0,t):n,N="trailing"in s?!!s.trailing:N);function k(o){var b=r,p=i;return r=i=void 0,d=o,c=a.apply(p,b),c}function z(o){return d=o,l=setTimeout(v,t),h?k(o):c}function A(o){var b=o-m,p=o-d,P=t-b;return f?Je(P,n-p):P}function O(o){var b=o-m,p=o-d;return m===void 0||b>=t||b<0||f&&p>=n}function v(){var o=_();if(O(o))return T(o);l=setTimeout(v,A(o))}function T(o){return l=void 0,N&&r?k(o):(r=i=void 0,c)}function $(){l!==void 0&&clearTimeout(l),d=0,r=m=i=l=void 0}function R(){return l===void 0?c:T(_())}function S(){var o=_(),b=O(o);if(r=arguments,i=this,m=o,b){if(l===void 0)return z(m);if(f)return l=setTimeout(v,t),k(m)}return l===void 0&&(l=setTimeout(v,t)),c}return S.cancel=$,S.flush=R,S}function Ve(a,t,s){var r=!0,i=!0;if(typeof a!="function")throw new TypeError(oe);return H(s)&&(r="leading"in s?!!s.leading:r,i="trailing"in s?!!s.trailing:i),Ke(a,t,{leading:r,maxWait:t,trailing:i})}function H(a){var t=typeof a;return!!a&&(t=="object"||t=="function")}function Ye(a){return!!a&&typeof a=="object"}function Ue(a){return typeof a=="symbol"||Ye(a)&&De.call(a)==Me}function W(a){if(typeof a=="number")return a;if(Ue(a))return D;if(H(a)){var t=typeof a.valueOf=="function"?a.valueOf():a;a=H(t)?t+"":t}if(typeof a!="string")return a===0?a:+a;a=a.replace(He,"");var s=Ae.test(a);return s||$e.test(a)?Re(a.slice(2),s?2:8):ze.test(a)?D:+a}var Ge=Ve;const Qe=X(Ge);var Xe="Expected a function",J=0/0,Ze="[object Symbol]",ea=/^\s+|\s+$/g,aa=/^[-+]0x[0-9a-f]+$/i,ta=/^0b[01]+$/i,sa=/^0o[0-7]+$/i,ra=parseInt,ia=typeof y=="object"&&y&&y.Object===Object&&y,na=typeof self=="object"&&self&&self.Object===Object&&self,oa=ia||na||Function("return this")(),ca=Object.prototype,la=ca.toString,da=Math.max,ma=Math.min,q=function(){return oa.Date.now()};function ua(a,t,s){var r,i,n,c,l,m,d=0,h=!1,f=!1,N=!0;if(typeof a!="function")throw new TypeError(Xe);t=K(t)||0,F(s)&&(h=!!s.leading,f="maxWait"in s,n=f?da(K(s.maxWait)||0,t):n,N="trailing"in s?!!s.trailing:N);function k(o){var b=r,p=i;return r=i=void 0,d=o,c=a.apply(p,b),c}function z(o){return d=o,l=setTimeout(v,t),h?k(o):c}function A(o){var b=o-m,p=o-d,P=t-b;return f?ma(P,n-p):P}function O(o){var b=o-m,p=o-d;return m===void 0||b>=t||b<0||f&&p>=n}function v(){var o=q();if(O(o))return T(o);l=setTimeout(v,A(o))}function T(o){return l=void 0,N&&r?k(o):(r=i=void 0,c)}function $(){l!==void 0&&clearTimeout(l),d=0,r=m=i=l=void 0}function R(){return l===void 0?c:T(q())}function S(){var o=q(),b=O(o);if(r=arguments,i=this,m=o,b){if(l===void 0)return z(m);if(f)return l=setTimeout(v,t),k(m)}return l===void 0&&(l=setTimeout(v,t)),c}return S.cancel=$,S.flush=R,S}function F(a){var t=typeof a;return!!a&&(t=="object"||t=="function")}function ha(a){return!!a&&typeof a=="object"}function fa(a){return typeof a=="symbol"||ha(a)&&la.call(a)==Ze}function K(a){if(typeof a=="number")return a;if(fa(a))return J;if(F(a)){var t=typeof a.valueOf=="function"?a.valueOf():a;a=F(t)?t+"":t}if(typeof a!="string")return a===0?a:+a;a=a.replace(ea,"");var s=ta.test(a);return s||sa.test(a)?ra(a.slice(2),s?2:8):aa.test(a)?J:+a}var ba=ua;const V=X(ba);var ce=function(){};function le(a){var t=void 0,s=void 0,r=void 0;for(t=0;t<a.length;t+=1)if(s=a[t],s.dataset&&s.dataset.aos||(r=s.children&&le(s.children),r))return!0;return!1}function ga(a){a&&a.forEach(function(t){var s=Array.prototype.slice.call(t.addedNodes),r=Array.prototype.slice.call(t.removedNodes),i=s.concat(r);if(le(i))return ce()})}function de(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function xa(){return!!de()}function pa(a,t){var s=window.document,r=de(),i=new r(ga);ce=t,i.observe(s.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var Y={isSupported:xa,ready:pa},va=function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")},ja=function(){function a(t,s){for(var r=0;r<s.length;r++){var i=s[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,s,r){return s&&a(t.prototype,s),r&&a(t,r),t}}(),ya=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},wa=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Na=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,ka=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Sa=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function U(){return navigator.userAgent||navigator.vendor||window.opera||""}var La=function(){function a(){va(this,a)}return ja(a,[{key:"phone",value:function(){var s=U();return!!(wa.test(s)||Na.test(s.substr(0,4)))}},{key:"mobile",value:function(){var s=U();return!!(ka.test(s)||Sa.test(s.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),a}(),M=new La,Ea=function(t,s){return s&&s.forEach(function(r){return t.classList.add(r)})},Oa=function(t,s){return s&&s.forEach(function(r){return t.classList.remove(r)})},I=function(t,s){var r=void 0;return M.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,!0,!0,{detail:s})):r=new CustomEvent(t,{detail:s}),document.dispatchEvent(r)},Ta=function(t,s){var r=t.options,i=t.position,n=t.node;t.data;var c=function(){t.animated&&(Oa(n,r.animatedClassNames),I("aos:out",n),t.options.id&&I("aos:in:"+t.options.id,n),t.animated=!1)},l=function(){t.animated||(Ea(n,r.animatedClassNames),I("aos:in",n),t.options.id&&I("aos:in:"+t.options.id,n),t.animated=!0)};r.mirror&&s>=i.out&&!r.once?c():s>=i.in?l():t.animated&&!r.once&&c()},G=function(t){return t.forEach(function(s,r){return Ta(s,window.pageYOffset)})},me=function(t){for(var s=0,r=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)s+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),r+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:r,left:s}},w=function(a,t,s){var r=a.getAttribute("data-aos-"+t);if(typeof r<"u"){if(r==="true")return!0;if(r==="false")return!1}return r||s},Pa=function(t,s,r){var i=window.innerHeight,n=w(t,"anchor"),c=w(t,"anchor-placement"),l=Number(w(t,"offset",c?0:s)),m=c||r,d=t;n&&document.querySelectorAll(n)&&(d=document.querySelectorAll(n)[0]);var h=me(d).top-i;switch(m){case"top-bottom":break;case"center-bottom":h+=d.offsetHeight/2;break;case"bottom-bottom":h+=d.offsetHeight;break;case"top-center":h+=i/2;break;case"center-center":h+=i/2+d.offsetHeight/2;break;case"bottom-center":h+=i/2+d.offsetHeight;break;case"top-top":h+=i;break;case"bottom-top":h+=i+d.offsetHeight;break;case"center-top":h+=i+d.offsetHeight/2;break}return h+l},Ca=function(t,s){var r=w(t,"anchor"),i=w(t,"offset",s),n=t;r&&document.querySelectorAll(r)&&(n=document.querySelectorAll(r)[0]);var c=me(n).top;return c+n.offsetHeight-i},Ia=function(t,s){return t.forEach(function(r,i){var n=w(r.node,"mirror",s.mirror),c=w(r.node,"once",s.once),l=w(r.node,"id"),m=s.useClassNames&&r.node.getAttribute("data-aos"),d=[s.animatedClassName].concat(m?m.split(" "):[]).filter(function(h){return typeof h=="string"});s.initClassName&&r.node.classList.add(s.initClassName),r.position={in:Pa(r.node,s.offset,s.anchorPlacement),out:n&&Ca(r.node,s.offset)},r.options={once:c,mirror:n,animatedClassNames:d,id:l}}),t},ue=function(){var a=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(a,function(t){return{node:t}})},j=[],Q=!1,u={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},he=function(){return document.all&&!window.atob},Ma=function(){return j=Ia(j,u),G(j),window.addEventListener("scroll",Qe(function(){G(j,u.once)},u.throttleDelay)),j},L=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;t&&(Q=!0),Q&&Ma()},fe=function(){if(j=ue(),ge(u.disable)||he())return be();L()},be=function(){j.forEach(function(t,s){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),u.initClassName&&t.node.classList.remove(u.initClassName),u.animatedClassName&&t.node.classList.remove(u.animatedClassName)})},ge=function(t){return t===!0||t==="mobile"&&M.mobile()||t==="phone"&&M.phone()||t==="tablet"&&M.tablet()||typeof t=="function"&&t()===!0},Ha=function(t){return u=ya(u,t),j=ue(),!u.disableMutationObserver&&!Y.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),u.disableMutationObserver=!0),u.disableMutationObserver||Y.ready("[data-aos]",fe),ge(u.disable)||he()?be():(document.querySelector("body").setAttribute("data-aos-easing",u.easing),document.querySelector("body").setAttribute("data-aos-duration",u.duration),document.querySelector("body").setAttribute("data-aos-delay",u.delay),["DOMContentLoaded","load"].indexOf(u.startEvent)===-1?document.addEventListener(u.startEvent,function(){L(!0)}):window.addEventListener("load",function(){L(!0)}),u.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&L(!0),window.addEventListener("resize",V(L,u.debounceDelay,!0)),window.addEventListener("orientationchange",V(L,u.debounceDelay,!0)),j)},za={init:Ha,refresh:L,refreshHard:fe};function Aa({children:a,auth:t}){return E.useEffect(()=>{za.init({duration:1e3})},[]),e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx(Ce,{auth:t})}),e.jsx("main",{className:"min-h-screen",children:a}),e.jsx("footer",{children:e.jsx(Ie,{})})]})}const $a=({text:a,delay:t,infinite:s,backspace:r})=>{const[i,n]=E.useState(""),[c,l]=E.useState(0);return E.useEffect(()=>{let m;return c<=a.length?m=setTimeout(()=>{n(d=>d+a[c]),l(d=>d+1)},t):s?(l(0),n("")):c==a.length&&(m=setTimeout(()=>{n(d=>d.slice(0,-1)),l(d=>d-1)},t)),()=>clearTimeout(m)},[c,t,s,a,r]),e.jsx("span",{children:i})},Ra="/build/assets/kuswara-952cc130.jpg",_a="/build/assets/hero-63418416.jpg";function Fa({auth:a,articles:t}){const s=E.useRef();let r="";const i=n=>{n.preventDefault(),Pe.sendForm("service_pknd9zj","template_m816vxd",s.current,"NSWAg7yOYEU8rai5K").then(c=>{r=c.text},c=>{r=c.text}),n.target.reset()};return e.jsxs(Aa,{auth:a,children:[e.jsx(xe,{title:"Home"}),e.jsx("div",{className:"w-full mx-auto lg:min-h-screen lg:my-0 my-20 ",id:"home",children:e.jsxs("div",{className:"flex flex-wrap justify-center items-center lg:flex-nowrap flex-row-reverse ",children:[e.jsx("div",{className:"w-full mb-10",children:e.jsxs("div",{className:"container mx-auto h-full sm:p-10 ",children:[e.jsx("nav",{className:"flex px-4 justify-between items-center "}),e.jsx("header",{className:"container px-4 lg:flex mt-10 items-center h-full lg:mt-0 ",children:e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"animate-fade-right",children:[e.jsx("h1",{className:"text-4xl lg:text-6xl font-bold",children:"Hi! I Am"}),e.jsx("h1",{className:"text-accent text-4xl lg:text-6xl font-bold",children:"Pradnya Kuswara"}),e.jsx("div",{className:"w-20 h-2 bg-primary my-4"}),e.jsx("h1",{children:e.jsx($a,{text:"Web Developer | Laravel, React Js, Node Js",delay:100,infinite:!0})})]})})})]})}),e.jsx("img",{src:Ra,alt:"User",className:"w-full h-48 object-cover object- sm:h-screen sm:w-4/12 rounded-md  "})]})}),e.jsx("div",{className:"max-w-screen-lg lg:mx-auto  lg:my-36",id:"about",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid md:grid-cols-2 place-items-center gap-10",children:[e.jsx("div",{className:"col-span-1 order-2","data-aos":"fade-up",children:e.jsx("img",{src:_a,alt:"About",className:"w-full h-96 object-cover rounded-md"})}),e.jsxs("div",{className:"col-span-1 flex flex-col gap-3 order-1 mx-4","data-aos":"fade-right",children:[e.jsx("div",{className:"badge badge-primary badge-outline",children:"About me"}),e.jsx("h1",{className:"text-4xl",children:"Web Developer based in Indonesia, Bali"}),e.jsx("p",{className:"text-gray-500 mt-4 leading-7 text-justify",children:"Motivated and enthusiastic Informatics student with a passion for technology. Dedicated to expanding knowledge and skills in programming languages and software development methodologies. Have basic knowledge of the PHP programming language, Laravel framework, React Js, Node Js, and MySQL database."}),e.jsx("div",{className:"flex gap-4 mt-8",children:e.jsx(x,{href:"#",className:"btn btn-primary btn-outline",children:"Download CV"})})]})]})})}),e.jsxs("div",{className:"w-full bg-base-200 p-10",id:"portfolio",children:[e.jsxs("div",{className:"max-w-screen-xl mx-auto",children:[e.jsx("div",{className:"badge badge-accent badge-outline",children:"Portofolio"}),e.jsx("div",{className:"flex gap-4 mt-2",children:e.jsx("h1",{className:"text-2xl font-bold",children:"Creative Portfolio"})}),e.jsxs("div",{className:"grid lg:grid-cols-3 gap-4 mt-8",children:[e.jsx("div",{className:"col-span-1","data-aos":"fade-up","data-aos-delay":"100",children:e.jsxs("div",{className:"card w-72 lg:w-96 bg-base-100 shadow-xl",children:[e.jsx("figure",{className:"",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes",className:"rounded-xl"})}),e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Shoes!"}),e.jsx("p",{children:"If a dog chews shoes whose shoes does he choose?"}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",children:"Buy Now"})})]})]})}),e.jsx("div",{className:"col-span-1","data-aos":"fade-up","data-aos-delay":"200",children:e.jsxs("div",{className:"card w-72 lg:w-96 bg-base-100 shadow-xl",children:[e.jsx("figure",{className:"",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes",className:"rounded-xl"})}),e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Shoes!"}),e.jsx("p",{children:"If a dog chews shoes whose shoes does he choose?"}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",children:"Buy Now"})})]})]})}),e.jsx("div",{className:"col-span-1","data-aos":"fade-up","data-aos-delay":"300",children:e.jsxs("div",{className:"card w-72 lg:w-96 bg-base-100 shadow-xl",children:[e.jsx("figure",{className:"",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes",className:"rounded-xl"})}),e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Shoes!"}),e.jsx("p",{children:"If a dog chews shoes whose shoes does he choose?"}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",children:"Buy Now"})})]})]})})]})]}),e.jsxs("div",{className:"max-w-screen-xl mx-auto mt-8",children:[e.jsx("div",{className:"badge badge-accent badge-outline",children:"Sertificate"}),e.jsx("div",{className:"flex gap-4 mt-2",children:e.jsx("h1",{className:"text-2xl font-bold",children:"My Sertificate"})}),e.jsxs("div",{className:"grid lg:grid-cols-3 gap-4 mt-8",children:[e.jsx("div",{className:"col-span-1","data-aos":"fade-up","data-aos-delay":"400",children:e.jsxs("div",{className:"card w-72 lg:w-96 bg-base-100 shadow-xl",children:[e.jsx("figure",{className:"",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes",className:"rounded-xl"})}),e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Shoes!"}),e.jsx("p",{children:"If a dog chews shoes whose shoes does he choose?"}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",children:"Buy Now"})})]})]})}),e.jsx("div",{className:"col-span-1","data-aos":"fade-up","data-aos-delay":"500",children:e.jsxs("div",{className:"card w-72 lg:w-96 bg-base-100 shadow-xl",children:[e.jsx("figure",{className:"",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes",className:"rounded-xl"})}),e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Shoes!"}),e.jsx("p",{children:"If a dog chews shoes whose shoes does he choose?"}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",children:"Buy Now"})})]})]})}),e.jsx("div",{className:"col-span-1","data-aos":"fade-up","data-aos-delay":"600",children:e.jsxs("div",{className:"card w-72 lg:w-96 bg-base-100 shadow-xl",children:[e.jsx("figure",{className:"",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes",className:"rounded-xl"})}),e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Shoes!"}),e.jsx("p",{children:"If a dog chews shoes whose shoes does he choose?"}),e.jsx("div",{className:"card-actions",children:e.jsx("button",{className:"btn btn-primary",children:"Buy Now"})})]})]})})]})]})]}),e.jsx("div",{className:"max-w-screen-xl mx-auto py-12 px-8 lg:p-24",id:"skills",children:e.jsx("div",{className:"max-w-screen-lg lg:mx-auto",children:e.jsxs("div",{className:"grid lg:grid-cols-2 lg:gap-8 ",children:[e.jsxs("div",{className:"col-span-1","data-aos":"fade-right",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"I have skills in developing and programming"}),e.jsx("p",{className:"text-gray-500 text-xs md:text-base mt-4 leading-7 text-justify",children:"I have basic knowledge of the PHP programming language, Laravel framework, React Js, Node Js, and MySQL database. I also have knowledge of HTML, CSS, and JavaScript. I am currently learning the Vue Js framework and the Nuxt Js framework."})]}),e.jsx("div",{className:"col-span-1","data-aos":"fade-left",children:e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-title",children:"Laravel"}),e.jsx("div",{className:"stat-value",children:"75%"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-title",children:"React Js"}),e.jsx("div",{className:"stat-value",children:"65%"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-title",children:"Node Js"}),e.jsx("div",{className:"stat-value",children:"50%"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-title",children:"MySQL"}),e.jsx("div",{className:"stat-value",children:"80%"})]})]})})]})})}),e.jsx("div",{className:"max-w-screen-lg mx-auto",id:"news","data-aos":"fade-up",children:e.jsxs("div",{className:"container mx-auto p-4",children:[e.jsx("div",{className:"badge badge-primary badge-outline",children:"News"}),e.jsx("div",{className:"flex gap-4 mt-2",children:e.jsx("h1",{className:"text-2xl font-bold",children:"Latest News"})}),e.jsx("div",{className:"grid lg:grid-cols-3 mt-4 gap-4",children:t&&t.map((n,c)=>e.jsx("div",{className:"col-span-1",children:e.jsx(x,{href:route("index"),children:e.jsxs("div",{className:"card w-80 mx-auto bg-base-100 shadow-xl",children:[e.jsx("figure",{children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes"})}),e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"badge badge-secondary",children:"NEW"}),e.jsx("h2",{className:"card-title",children:n.title}),e.jsx("p",{className:"mt-4",children:"If a dog chews shoes whose shoes does he choose?"}),e.jsxs("div",{className:"card-actions justify-end mt-4",children:[e.jsx("div",{className:"badge badge-outline",children:"Fashion"}),e.jsx("div",{className:"badge badge-outline",children:"Products"})]})]})]})})},c))})]})}),e.jsx("div",{className:"max-w-screen-lg mx-auto",id:"contact",children:e.jsxs("div",{"data-aos":"fade-in","data-offset":"200",id:"contact",className:"mt-20 max-w-xs sm:max-w-lg lg:max-w-2xl  mx-auto",children:[e.jsx("h2",{className:"mb-4 text-5xl tracking-tight font-extrabold  ",children:"Contact Me"}),e.jsx("p",{className:"mb-8 lg:mb-16 font-light  sm:text-xl",children:"Love to hear from you, lets get in touch!"}),e.jsxs("form",{ref:s,onSubmit:i,className:"space-y-8",children:[e.jsx("p",{className:"mb-8 text-sm text-primary",children:r}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium ",children:"Your email"}),e.jsx("input",{type:"email",id:"email",name:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Your email",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium ",children:"Subject"}),e.jsx("input",{type:"text",id:"subject",name:"subject",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Your Subject",required:!0})]}),e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium ",children:"Your message"}),e.jsx("textarea",{id:"message",rows:"6",name:"message",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Leave a message...",required:!0})]}),e.jsxs("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center transition ease-in-out delay-150 hover:bg-opacity-75 hover:scale-110 text-white rounded-lg bg-accent border border-teal-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:["Message"," ",e.jsx("i",{className:"ms-1 fas fa-solid fa-arrow-right"})]})]})]})})]})}export{Fa as default};