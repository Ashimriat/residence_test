import{_ as b}from"./Ck4UbySV.js";import{i as I,d as H,aa as N,ab as F,s as k,a as X,o as u,h as w,w as B,b as O,f as R,n as p,e as t,E as C,k as L,c as T,g as U,C as J,j as z,t as h,F as V,D as Q,z as W,af as Y,a1 as Z,ag as q}from"./CNUPeZ-s.js";import{K as _}from"./mvpAngx8.js";import{s as x}from"./DTvg5B_Z.js";import{s as ee}from"./BRs_ShAW.js";function te(){const i=I({});function n(l,m){m&&(i.value[l]=m)}return{templateElems:i,setTemplateElemRef:l=>n.bind(null,l)}}const ae=["onDblclick"],G=1,$=5,se=7,ue=H({__name:"BasePagination",props:N({itemsAmount:{}},{page:{required:!0},pageModifiers:{},amountOnPage:{required:!0},amountOnPageModifiers:{}}),emits:["update:page","update:amountOnPage"],setup(i){const n=F(i,"page"),v=F(i,"amountOnPage"),{templateElems:l,setTemplateElemRef:m}=te(),f=I(""),o=k(()=>Math.ceil(i.itemsAmount/v.value)),g=k(()=>{let e=n.value-G,a=n.value+G;const c=o.value<=se,S=n.value<=$-1,y=o.value-n.value<=$-2;S&&(e=1,a=$),y&&(a=o.value,e=o.value-$+1),c&&(e=1,a=o.value);const d=[];(!S||y)&&d.push("start"),y||d.push("end"),c&&(d.length=0);const s=[];for(let E=e;E<=a;E++)s.push(E);return{withFirst:d[0]==="start",withLast:d.at(-1)==="end",pages:s,skipPos:d}}),A=I("");async function K(e){A.value=e,await Y(),l.value.input.focus()}function M(e,a){e!==n.value&&(n.value=e)}function j(){const e=+f.value;D(),!(e>o.value||e===n.value)&&(n.value=e)}function D(){A.value="",f.value="",l.value.input={}}const r=X("BasePagination");return(e,a)=>{const c=Z,S=ee,y=x,d=_;return u(),w(y,{rows:v.value,"onUpdate:rows":a[5]||(a[5]=s=>v.value=s),"total-records":e.itemsAmount,"always-show":!1},{container:B(()=>[O("div",{class:p(t(r)())},[R(c,{class:p(["p-paginator-prev",t(r)("controlButton",("bMod"in e?e.bMod:t(b))("first",{disabled:n.value===0}))]),onClick:a[0]||(a[0]=C(s=>M(n.value-1),["prevent","stop"]))},{default:B(()=>a[6]||(a[6]=[O("span",{class:"pi pi-angle-left"},null,-1)])),_:1},8,["class"]),O("div",{class:p(t(r)("container"))},[t(g).withFirst?(u(),w(c,{key:0,class:p(["p-paginator-page",t(r)("pageButton",("bMod"in e?e.bMod:t(b))("first",{selected:n.value===0}))]),label:"1",onClick:a[1]||(a[1]=C(s=>M(0),["prevent","stop"]))},null,8,["class"])):L("",!0),(u(!0),T(V,null,U(t(g).pages,(s,P)=>(u(),w(c,{class:p(["p-paginator-page",t(r)("pageButton",{selected:n.value===s})]),key:s,style:J(`--order: ${P+2}`),label:`${s}`,onClick:C(E=>M(s),["prevent","stop"])},{default:B(()=>[z(h(s),1)]),_:2},1032,["class","style","label","onClick"]))),128)),t(g).withLast?(u(),w(c,{key:1,class:p(["p-paginator-page",t(r)("pageButton",("bMod"in e?e.bMod:t(b))("last",{selected:n.value===t(o)}))]),label:`${t(o)}`,onClick:a[2]||(a[2]=C(s=>M(t(o)),["prevent","stop"]))},{default:B(()=>[z(h(t(o)),1)]),_:1},8,["label","class"])):L("",!0),(u(!0),T(V,null,U(t(g).skipPos,s=>(u(),T(V,{key:s},[t(A)!==s?(u(),T("span",{key:0,class:p(t(r)("skipper",("bMod"in e?e.bMod:t(b))(s))),onDblclick:P=>K(s)},"...",42,ae)):Q((u(),w(S,{key:1,class:p(t(r)("skipperInput",("bMod"in e?e.bMod:t(b))(s))),ref_for:!0,ref:t(m)("input"),modelValue:t(f),"onUpdate:modelValue":a[3]||(a[3]=P=>W(f)?f.value=P:null),onBlur:D,onConfirm:j},null,8,["class","modelValue"])),[[d,void 0,void 0,{int:!0}]])],64))),128))],2),R(c,{class:p(["p-paginator-next",t(r)("controlButton",("bMod"in e?e.bMod:t(b))("last",{disabled:n.value===t(o)}))]),onClick:a[4]||(a[4]=C(s=>M(n.value+1),["prevent","stop"]))},{default:B(()=>a[7]||(a[7]=[O("span",{class:"pi pi-angle-right"},null,-1)])),_:1},8,["class"])],2)]),_:1},8,["rows","total-records"])}}});function pe(i,n){const v=I(1),l=I(n),m=k(()=>(v.value-1)*l.value),f=k(()=>m.value+l.value),o=k(()=>q(i).length),g=k(()=>q(i).slice(m.value,f.value));return{page:v,itemsPerPage:l,itemsAmount:o,displayedItems:g}}export{ue as _,pe as u};
