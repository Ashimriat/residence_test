import{m as p}from"./tYd9hRTl.js";import{u,b as _}from"./Cu-_IAfR.js";import{f as d,O as f,i as v,o as a,c as o,F as h,l as k,n as c,p as e,q as A,a as C,v as b}from"./DCJqdLXD.js";const g={title:"Достижение",isObtained:!1,description:p()},F=(r,s=!0)=>Array.from({length:r},()=>({...g,isObtained:s})),B=["onClick"],I=d({__name:"AchievementsList",props:{list:{},itemsInRow:{default:3}},setup(r){f(n=>({"571345e1":n.itemsInRow}));const{seeAchievement:s}=u(),t=v("AchievementsList");return(n,E)=>{const m=_;return a(),o("div",{class:c(e(t)())},[(a(!0),o(h,null,k(n.list,(i,l)=>(a(),o("div",{key:`achievement_${l}`,class:c(e(t)("achievement",{unobtained:!i.isObtained}))},[A(m),C("span",{class:c(e(t)("title")),onClick:L=>e(s)(i)},b(i.title),11,B)],2))),128))],2)}}});export{I as _,F as m};
