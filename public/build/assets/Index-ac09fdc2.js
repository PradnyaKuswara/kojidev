import{j as e,Y as r,b as o}from"./app-8f797439.js";import{D as s}from"./Dashboard-c101fb88.js";import{T as n}from"./Table-e20167a1.js";import"./FroalaEditorView-ac038633.js";function f({auth:t,sertificates:i}){const a=[{title:"No",key:"no"},{title:"organization",key:"organization"},{title:"Month Obtained",key:"month_obtained"},{title:"Year Obtained",key:"year_obtained"},{title:"Month Expired",key:"month_expired"},{title:"Year Expired",key:"year_expired"},{title:"URL",key:"url"},{title:"Description",key:"description"},{title:"Actions",key:"actions"}];return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Sertificates"}),e.jsxs(s,{title:"Sertificates",auth:t,children:[e.jsx(o,{href:route("admin.sertificates.create"),className:"btn btn-accent",children:"+Create Sertificate"}),e.jsx(n,{className:"mt-8 w-full",header:a,datas:i,editRoute:route("admin.sertificates.edit",":id"),deleteRoute:route("admin.sertificates.destroy",":id")})]})]})}export{f as default};