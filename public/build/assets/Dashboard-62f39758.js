import{j as e,b as t}from"./app-3131a3d4.js";function r({auth:a,page:s}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:" antialiased",children:e.jsx("div",{id:"view",className:"h-full flex flex-row",children:e.jsx("div",{id:"sidebar",className:"bg-base-300 h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out","x-show":"sidenav",children:e.jsxs("div",{className:"space-y-6 md:space-y-10 mt-10",children:[e.jsxs("h1",{className:"font-bold text-4xl text-center md:hidden",children:["D",e.jsx("span",{className:"text-teal-600",children:"."})]}),e.jsxs("h1",{className:"hidden md:block font-bold text-sm md:text-xl text-center",children:["KojiDev",e.jsx("span",{className:"text-primary",children:"."})]}),e.jsxs("div",{id:"profile",className:"space-y-3",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",alt:"Avatar user",className:"w-10 md:w-16 rounded-full mx-auto"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium text-xs md:text-sm text-center text-accent",children:a.user.name}),e.jsx("p",{className:"text-xs text-gray-500 text-center",children:a.user.email})]})]}),e.jsxs("div",{id:"menu",className:"flex flex-col space-y-2",children:[e.jsxs(t,{href:route("admin.dashboard"),className:`text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out ${route().current("admin.dashboard")?"bg-accent text-white text-base":""}`,children:[e.jsx("svg",{className:"w-6 h-6 fill-current inline-block",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),e.jsx("span",{className:"",children:"Dashboard"})]}),e.jsxs(t,{href:route("admin.articles.index"),className:`text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out ${route().current("admin.articles.index")||route().current("admin.articles.create")||route().current("admin.articles.edit")?"bg-accent text-white text-base":""}`,children:[e.jsx("svg",{className:"w-6 h-6 fill-current inline-block",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"})}),e.jsx("span",{className:"",children:"Articles"})]}),e.jsxs("a",{href:"",className:"text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out",children:[e.jsxs("svg",{className:"w-6 h-6 fill-current inline-block",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),e.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"})]}),e.jsx("span",{className:"",children:"Portfolio"})]}),e.jsxs("a",{href:"",className:"text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out",children:[e.jsxs("svg",{className:"w-6 h-6 fill-current inline-block",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),e.jsx("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})]}),e.jsx("span",{className:"",children:"Sertificate"})]}),e.jsxs(t,{href:route("logout"),method:"post",className:"text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out",children:[e.jsx("svg",{className:"w-6 h-6 fill-current inline-block",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3zm14 2H3v12h14V5z",clipRule:"evenodd"})}),e.jsx("span",{className:"ms-2",children:"Logout"})]})]})]})})})})})}function i({children:a,auth:s}){return e.jsx("div",{className:"p-8 sticky mx-4 my-4 rounded-lg bg-base-200",children:a})}function c({title:a,children:s,auth:l}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex h-screen",children:[e.jsx(r,{auth:l}),e.jsxs("div",{className:"flex-1",children:[e.jsx(i,{auth:l,children:e.jsx("h2",{className:"font-bold text-3xl text-primary",children:a})}),e.jsx("div",{className:"p-10",children:s})]})]})})}export{c as D};
