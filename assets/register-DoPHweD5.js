import{a4 as C,a5 as M,w as l,au as S,an as k,o as B,b as r,aO as F,d as e,aM as n,at as b,R as U,a7 as q}from"./index-DopORXQt.js";import{c as A,a as u,f as N,u as R,e as m,V as $}from"./vee-validate.esm-DgolqPTP.js";import{v}from"./index-1N_3R8jC.js";import{V as E}from"./VContainer-BmlcxDl8.js";import{V as f}from"./VCol-xc1L-hAV.js";import{V as O}from"./VDivider-mKvl7ZId.js";import{V as P}from"./VRow-ClInLLr2.js";const T=b("h1",{class:"text-center"},"註冊",-1),D={class:"text-center"},Q={__name:"register",setup(j){const{api:w}=S(),x=k(),g=C(),h=A({account:u().required("使用者帳號必填").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符").test("isAlphanumeric","使用者帳號格式錯誤",o=>v.isAlphanumeric(o)),email:u().required("使用者信箱必填").test("isEmail","使用者信箱格式錯誤",o=>v.isEmail(o)),password:u().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符"),passwordConfirm:u().oneOf([N("password")],"密碼不一致")}),{handleSubmit:_,isSubmitting:V}=R({validationSchema:h}),i=m("account"),d=m("email"),c=m("password"),p=m("passwordConfirm"),y=_(async o=>{var a,s;try{await w.post("/user",{account:o.account,email:o.email,password:o.password}),g({text:"註冊成功",snackbarProps:{color:"green"}}),x.push("/login")}catch(t){console.log(t),g({text:((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(o,a)=>(B(),M(E,null,{default:l(()=>[r(P,null,{default:l(()=>[r(f,{cols:"12"},{default:l(()=>[T]),_:1}),r(O),r(f,{cols:"12"},{default:l(()=>[r($,{onSubmit:F(e(y),["prevent"]),disabled:e(V)},{default:l(()=>[r(n,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:e(i).value.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e(i).value.value=s),"error-messages":e(i).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"信箱",type:"email",modelValue:e(d).value.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e(d).value.value=s),"error-messages":e(d).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(c).value.value,"onUpdate:modelValue":a[2]||(a[2]=s=>e(c).value.value=s),"error-messages":e(c).errorMessage.value},null,8,["modelValue","error-messages"]),r(n,{label:"確認密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(p).value.value,"onUpdate:modelValue":a[3]||(a[3]=s=>e(p).value.value=s),"error-messages":e(p).errorMessage.value},null,8,["modelValue","error-messages"]),b("div",D,[r(U,{type:"submit",color:"green",loading:e(V)},{default:l(()=>[q("註冊")]),_:1},8,["loading"])])]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1}))}};export{Q as default};