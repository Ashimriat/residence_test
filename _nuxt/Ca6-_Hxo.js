import{f as t,i as p,o as l,c as n,b as u,L as r,n as s,l as o,q as c}from"./DYZ8s7Mf.js";import{f as i}from"./BhBKweQS.js";const m=t({__name:"PriceTag",props:{value:{},oldValue:{},isLargeFont:{type:Boolean}},setup(d){const a=p("PriceTag");return(e,_)=>(l(),n("div",{class:s(o(a)({large:e.isLargeFont}))},[u("span",{class:s(o(a)(e.oldValue?"oldValue":"value"))},r(`${e.oldValue??e.value}₽`),3),e.oldValue?(l(),n("span",{key:0,class:s(o(a)("value"))},r(`${e.value}₽`),3)):c("",!0)],2))}}),V=i(m,[["__scopeId","data-v-f741f50e"]]);export{V as _};
