import{m as _}from"./CnpumlCX.js";import{u as p,_ as u}from"./DrBlcXD5.js";import{d,m as f,a as v,o as i,c as o,F as h,g as k,n as c,e,f as A,b,t as C}from"./CNUPeZ-s.js";const g={title:"Достижение",isObtained:!1,description:_()},F=(r,s=!0)=>Array.from({length:r},()=>({...g,isObtained:s})),B=["onClick"],I=d({__name:"AchievementsList",props:{list:{},itemsInRow:{default:3}},setup(r){f(n=>({"3ec1ba6a":n.itemsInRow}));const{seeAchievement:s}=p(),t=v("AchievementsList");return(n,L)=>{const m=u;return i(),o("div",{class:c(e(t)())},[(i(!0),o(h,null,k(n.list,(a,l)=>(i(),o("div",{key:`achievement_${l}`,class:c(e(t)("achievement",{unobtained:!a.isObtained}))},[A(m),b("span",{class:c(e(t)("title")),onClick:V=>e(s)(a)},C(a.title),11,B)],2))),128))],2)}}});export{I as _,F as m};
