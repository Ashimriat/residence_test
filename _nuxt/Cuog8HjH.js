import{E as r}from"./DkLopEmf.js";import{d,r as t,e as i}from"./DYZ8s7Mf.js";const v=d("user",()=>{const o=t({avatar:"",name:"",surname:"",birthdate:"",telegram:"",instagram:"",email:"",phone:"",password1:"",password2:"",about:"",sex:""}),e=t({id:"",role:r.USER,notifications:[{}],clans:{participant:[],owner:[1]}}),a=t(!1),u=i(()=>a.value&&e.value.role===r.USER),l=i(()=>a.value&&e.value.role===r.ADMIN);function c(s){return e.value.id===s}function m([s,n]){n&&(e.value=n),o.value=s,a.value=!0}return{userData:o,providedData:e,isLoggedIn:a,isCommonUser:u,isAdmin:l,checkIsClanOwner:c,setUserData:m}});export{v as u};
