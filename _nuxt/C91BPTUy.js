import{_ as R}from"./1wHB3SfI.js";import{g as O,_ as P}from"./CHGakyfO.js";import{s as Q}from"./x4RQqsOl.js";import{f as V,r as I,j as z,i as D,c as p,F as B,l as N,p as e,q as h,n as t,o as u,aa as w,a as l,v as g,k as F,ab as K,ac as T,ad as W}from"./DCJqdLXD.js";import{L as G}from"./CBaVXKJc.js";import{E as $}from"./Dz1hIP-c.js";import{E as J}from"./CaxO1kRQ.js";import{SECTIONS as A}from"./CZT1M1e5.js";import"./1ftJymz-.js";import"./DcQaJqAL.js";import"./-x1MEmf8.js";const X=["onClick"],Y=["onClick"],ue=V({__name:"FAQ",setup(Z){const f=I(A.reduce((o,{type:a,contents:i})=>{o[a]=!1;for(let r=0;r<i.length;r+=1)o[`${a}_${r}`]=!1;return o},{})),m=I({}),_={};function U(){}function v(o,a){_[o]||(_[o]=a)}function S(o){f.value[o]=!f.value[o]}z(()=>{O(_).forEach(o=>{const a=_[o],i=getComputedStyle(a).height,r=getComputedStyle(a.childNodes[0]).height;m.value[o]={full:i,partial:r}})});const s=D("PageFAQ");return(o,a)=>{const i=R,r=Q,x=P;return u(),p("div",{class:t(e(s)())},[(u(!0),p(B,null,N(e(A),({type:n,title:y,contents:L},C)=>{var k,q;return u(),p("section",{key:`faqSection_${C}`,ref_for:!0,ref:d=>v(n,d),class:t(e(s)("section",{open:e(f)[n]})),style:w({"--fullHeight":(k=e(m)[n])==null?void 0:k.full,"--partialHeight":(q=e(m)[n])==null?void 0:q.partial})},[l("div",{class:t(e(s)("upperContainer")),onClick:d=>S(n)},[l("h3",{class:t(e(s)("title"))},g(y),3),h(i,{type:e($).CHEVRON,class:t(e(s)("sectionArrow",{facingUp:e(f)[n]}))},null,8,["type","class"])],10,X),l("div",{class:t(e(s)("questionsWrapper")),onClick:a[0]||(a[0]=T(()=>{},["stop"]))},[(u(!0),p(B,null,N(L,({question:d,answer:M},c)=>{var E,b;return u(),p("div",{key:`faqSection_${C}_question_${c}`,ref_for:!0,ref:H=>v(`${n}_${c}`,H),class:t(e(s)("questionContent",{open:e(f)[`${n}_${c}`]})),style:w({"--fullHeight":(E=e(m)[`${n}_${c}`])==null?void 0:E.full,"--partialHeight":(b=e(m)[`${n}_${c}`])==null?void 0:b.partial})},[l("div",{class:t(e(s)("questionContainer")),onClick:H=>S(`${n}_${c}`)},[l("div",{class:t(e(s)("question"))},[l("span",null,g(d),1),e(f)[`${n}_${c}`]?(u(),F(i,{key:0,type:e($).MINUS,class:t(e(s)("questionIcon"))},null,8,["type","class"])):(u(),F(i,{key:1,type:e($).PLUS,class:t(e(s)("questionIcon"))},null,8,["type","class"]))],2),h(r,{shape:"circle",label:"UI",class:t(e(s)("avatar"))},null,8,["class"])],10,Y),l("div",{class:t(e(s)("answerContainer"))},[l("div",{class:t(e(s)("logoContainer"))},[K(h(e(G),null,null,512),[[W,!1]])],2),l("div",{class:t(e(s)("answer"))},g(M),3)],2)],6)}),128))],2)],6)}),128)),h(x,{title:"Не нашли, что искали?",subtext:"Если все еще остались вопросы, оставьте заявку – мы напишем!","request-text-placeholder":"Кратко опишите вопрос","button-type":e(J).ASK_QUESTION,onSubmit:U},null,8,["button-type"])],2)}}});export{ue as default};
