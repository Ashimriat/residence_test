import{m as p}from"./B1SBf1U-.js";import{u,a as _}from"./BhBKweQS.js";import{f as d,N as f,i as v,o as a,c as o,F as h,k,n as c,l as e,p as A,b as C,L as b}from"./DYZ8s7Mf.js";const L={title:"Достижение",isObtained:!1,description:p()},y=(r,s=!0)=>Array.from({length:r},()=>({...L,isObtained:s})),g=["onClick"],F=d({__name:"AchievementsList",props:{list:{},itemsInRow:{default:3}},setup(r){f(n=>({"571345e1":n.itemsInRow}));const{seeAchievement:s}=u(),t=v("AchievementsList");return(n,B)=>{const m=_;return a(),o("div",{class:c(e(t)())},[(a(!0),o(h,null,k(n.list,(i,l)=>(a(),o("div",{key:`achievement_${l}`,class:c(e(t)("achievement",{unobtained:!i.isObtained}))},[A(m),C("span",{class:c(e(t)("title")),onClick:E=>e(s)(i)},b(i.title),11,g)],2))),128))],2)}}});export{F as _,y as m};
