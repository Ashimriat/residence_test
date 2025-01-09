import{d as C,p as B,q as M,s as _,i as S,v as P,o as v,c as g,t as k,e as a,x as $,a as A,y as F,b as i,n as r,k as b,F as V,g as Z,f as x,z}from"./CNUPeZ-s.js";import{u as E,_ as H}from"./Ce_bGEwY.js";import{P as I}from"./CmTTCuzQ.js";import{a as L}from"./CnpumlCX.js";import"./Ck4UbySV.js";import"./mvpAngx8.js";import"./DTvg5B_Z.js";import"./b0Agh-97.js";import"./BRs_ShAW.js";import"./r0G_DhfE.js";import"./BB5V4WZA.js";import"./CbihGVZO.js";import"./DkLopEmf.js";import"./CmywsH7y.js";const O=c=>{switch(c%4){case 0:return"rate";case 1:return"paymentSuccess";case 2:return"paymentFail";case 3:default:return"social"}},R=c=>{const e=I.Now.instant().toZonedDateTimeISO("Europe/Moscow");switch(c%4){case 0:return e.subtract({minutes:60});case 1:return e.subtract({hours:24});case 2:return e.subtract({hours:48});case 3:default:return e.subtract({hours:72})}},U=c=>Array.from({length:c},(e,n)=>({id:`${n}`,type:O(n),title:"Какой-то заголовок",description:L(),date:R(n)})),q=["datetime"],j=C({__name:"NuxtTime",props:{locale:{},datetime:{},localeMatcher:{},weekday:{},era:{},year:{},month:{},day:{},hour:{},minute:{},second:{},timeZoneName:{},formatMatcher:{},hour12:{type:Boolean,default:void 0},timeZone:{},calendar:{},dayPeriod:{},numberingSystem:{},dateStyle:{},timeStyle:{},hourCycle:{},relative:{type:Boolean}},setup(c){var m;const e=c,n=(m=B())==null?void 0:m.vnode.el,d=n==null?void 0:n.getAttribute("datetime"),p=n==null?void 0:n.getAttribute("data-locale"),y=M(),h=_(()=>{const t=e.datetime;return d&&y.isHydrating?new Date(d):e.datetime?new Date(t):new Date}),o=S(y.isHydrating&&window._nuxtTimeNow?new Date(window._nuxtTimeNow):new Date);if(e.relative){const s=setInterval(()=>{o.value=new Date},1e3);P(()=>clearInterval(s))}const l=_(()=>{const{locale:t,relative:s,...f}=e;return s?new Intl.RelativeTimeFormat(p??t,f):new Intl.DateTimeFormat(p??t,f)}),u=_(()=>{if(e.relative){const t=(h.value.getTime()-o.value.getTime())/1e3,s=[{unit:"second",value:t},{unit:"minute",value:t/60},{unit:"hour",value:t/3600},{unit:"day",value:t/86400},{unit:"month",value:t/2592e3},{unit:"year",value:t/31536e3}],{unit:f,value:D}=s.find(({value:T})=>Math.abs(T)<60)||s[s.length-1];return l.value.format(Math.round(D),f)}return l.value.format(h.value)}),w=_(()=>h.value.toISOString()),N={};return(t,s)=>(v(),g("time",$(N,{datetime:a(w)}),k(a(u)),17,q))}}),G=["onClick"],ce=C({__name:"Notifications",setup(c){const e=S(U(8));function n(l){return{rate:"thumbs-up",paymentSuccess:"credit-card",paymentFail:"times-circle",social:"telegram"}[l]}const{page:d,displayedItems:p}=E(e,6);function y(){e.value.length=0}function h(l){console.log(l),console.log([...e.value]),e.value=e.value.filter(({id:u})=>u!==l)}const o=A("NotificationsPage");return F(()=>{window.Temporal=I}),(l,u)=>{const w=j,N=H;return v(),g("div",{class:r(a(o)())},[i("div",null,[i("div",{class:r(a(o)("titleContainer"))},[u[1]||(u[1]=i("h6",null,"Уведомления",-1)),a(p).length?(v(),g("span",{key:0,class:"pi pi-trash",onClick:y})):b("",!0)],2),a(p).length?(v(),g("div",{key:0,class:r(a(o)("notificationsContainer"))},[(v(!0),g(V,null,Z(a(p),({id:m,type:t,title:s,date:f,description:D})=>(v(),g("div",{key:m,class:r(a(o)("notification"))},[i("div",{class:r(a(o)("data"))},[i("span",{class:r(["pi",`pi-${n(t)}`])},null,2),i("span",null,k(s),1),x(w,{class:r(a(o)("time")),relative:"",datetime:new Date(f.epochMilliseconds)},null,8,["class","datetime"])],2),i("div",{class:r(a(o)("description"))},k(D),3),i("div",{class:r(a(o)("iconContainer"))},[i("span",{class:"pi pi-trash",onClick:T=>h(m)},null,8,G)],2)],2))),128))],2)):b("",!0)]),x(N,{page:a(d),"onUpdate:page":u[0]||(u[0]=m=>z(d)?d.value=m:null),"amount-on-page":6,"items-amount":a(e).length},null,8,["page","items-amount"])],2)}}});export{ce as default};
