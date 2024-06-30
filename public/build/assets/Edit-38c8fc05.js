import{W as u,j as e,Y as p}from"./app-8f797439.js";import{D as j}from"./Dashboard-c101fb88.js";function N({auth:x,sertificate:a}){const{data:s,setData:r,patch:h,errors:t,processing:o,progress:n}=u({name:a.name,organization:a.organization,month_obtained:a.month_obtained,year_obtained:a.year_obtained,month_expired:a.month_expired,year_expired:a.year_expired,url:a.url,description:a.description}),c=()=>{let l=new Date().getFullYear()+10,d=[];for(let i=0;i<20;i++)d.push(l-i);return d},m=l=>{l.preventDefault(),h(route("admin.sertificates.update",a.uuid))};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Edit Sertificate"}),e.jsx(j,{title:"Edit Sertificate",auth:x,children:e.jsx("div",{className:"card bg-base-300",children:e.jsx("div",{className:"card-body",children:e.jsx("form",{onSubmit:m,encType:"multipart/form-data",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-control w-full",htmlFor:"name",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Name"})}),e.jsx("input",{id:"name",type:"text",value:s.name,onChange:l=>r("name",l.target.value),placeholder:"Insert name sertificates",className:"input input-bordered w-full text-xs "})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.name})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-control w-full",htmlFor:"organization",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Organization"})}),e.jsx("input",{id:"organization",type:"text",value:s.organization,onChange:l=>r("organization",l.target.value),placeholder:"Insert organization",className:"input input-bordered w-full text-xs "})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.organization})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-control w-full",htmlFor:"month_obtained",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Month Obtained"})}),e.jsxs("select",{className:"select select-bordered w-full text-xs",value:s.month_obtained,onChange:l=>r("month_obtained",l.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Month"}),e.jsx("option",{value:"January",children:"January"}),e.jsx("option",{value:"February",children:"February"}),e.jsx("option",{value:"March",children:"March"}),e.jsx("option",{value:"April",children:"April"}),e.jsx("option",{value:"May",children:"May"}),e.jsx("option",{value:"June",children:"June"}),e.jsx("option",{value:"July",children:"July"}),e.jsx("option",{value:"August",children:"August"}),e.jsx("option",{value:"September",children:"September"}),e.jsx("option",{value:"October",children:"October"}),e.jsx("option",{value:"November",children:"November"}),e.jsx("option",{value:"December",children:"December"})]})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.month_obtained})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-control w-full",htmlFor:"year_obtained",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Year Obtained"})}),e.jsxs("select",{className:"select select-bordered w-full text-xs",value:s.year_obtained,onChange:l=>r("year_obtained",l.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Year"}),c().map(l=>e.jsx("option",{value:l,children:l},l))]})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.year_obtained})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-control w-full",htmlFor:"month_expired",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Month Expired"})}),e.jsxs("select",{className:"select select-bordered w-full text-xs",value:s.month_expired,onChange:l=>r("month_expired",l.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Month"}),e.jsx("option",{value:"January",children:"January"}),e.jsx("option",{value:"February",children:"February"}),e.jsx("option",{value:"March",children:"March"}),e.jsx("option",{value:"April",children:"April"}),e.jsx("option",{value:"May",children:"May"}),e.jsx("option",{value:"June",children:"June"}),e.jsx("option",{value:"July",children:"July"}),e.jsx("option",{value:"August",children:"August"}),e.jsx("option",{value:"September",children:"September"}),e.jsx("option",{value:"October",children:"October"}),e.jsx("option",{value:"November",children:"November"}),e.jsx("option",{value:"December",children:"December"})]})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.month_expired})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-control w-full",htmlFor:"year_expired",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Year Expired"})}),e.jsxs("select",{className:"select select-bordered w-full text-xs",value:s.year_expired,onChange:l=>r("year_expired",l.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Year"}),c().map(l=>e.jsx("option",{value:l,children:l},l))]})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.year_expired})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-control w-full",htmlFor:"title",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Project Url"})}),e.jsx("input",{id:"title",type:"text",value:s.url,onChange:l=>r("url",l.target.value),placeholder:"Insert sertificate url",className:"input input-bordered w-full  text-xs "})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.url})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsxs("label",{className:"form-control w-full ",htmlFor:"Content",children:[e.jsx("div",{className:"label",children:e.jsx("span",{className:"label-text",children:"Description"})}),e.jsx("textarea",{onChange:l=>r("description",l.target.value),className:"textarea textarea-bordered h-24",placeholder:"Insert description sertificate",value:s.description})]}),e.jsx("p",{className:"text-error text-xs mt-4",children:t.description})]}),e.jsx("div",{className:"col-span-2",children:n&&e.jsx("div",{className:"w-full bg-gray-200 rounded-full dark:bg-gray-700",children:e.jsxs("div",{className:"bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",width:n.percentage,children:[" ",n.percentage,"%"]})})}),e.jsx("div",{className:"col-span-2",children:e.jsx("button",{disabled:o,className:"btn btn-primary w-full",type:"submit",children:o?"Saving...":"Save"})})]})})})})})]})}export{N as default};