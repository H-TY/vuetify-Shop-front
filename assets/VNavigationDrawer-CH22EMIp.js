import{p as j,m as U,aa as ie,f as J,g as K,ab as se,ac as re,h as G,b as T,z as B,c as w,C as ce,I as Q,H as I,J as ee,ad as ve,M as Y,P as de,ae as me,i as fe,af as he,ag as ge,j as ye,K as we,k as be,l as ke,y as Se,x as Ee,q as Me,n as $,t as A,s as Te,a3 as Pe,v as Ve,ah as xe,L as pe,ai as Be,E as Ce,aj as De,N as Re,A as Ie,O as F,V as He,B as Le,ak as Ye,F as Ne,al as _e,am as Oe}from"./index-DopORXQt.js";import{u as te}from"./VList-Bd27ecxc.js";const We=j({scrollable:Boolean,...U(),...ie(),...J({tag:"main"})},"VMain"),Ke=K()({name:"VMain",props:We(),setup(e,r){let{slots:n}=r;const{dimensionStyles:M}=se(e),{mainStyles:t,layoutIsReady:i}=re(),{ssrBootStyles:a}=te();return G(()=>T(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,a.value,M.value,e.style]},{default:()=>{var c,b;return[e.scrollable?T("div",{class:"v-main__scroller"},[(c=n.default)==null?void 0:c.call(n)]):(b=n.default)==null?void 0:b.call(n)]}})),i}});function Xe(e){let{rootEl:r,isSticky:n,layoutItemStyles:M}=e;const t=B(!1),i=B(0),a=w(()=>{const k=typeof t.value=="boolean"?"top":t.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[k]:ce(i.value)}:{top:M.value.top}]});Q(()=>{I(n,k=>{k?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),ee(()=>{window.removeEventListener("scroll",b)});let c=0;function b(){const k=c>window.scrollY?"up":"down",d=r.value.getBoundingClientRect(),m=parseFloat(M.value.top??0),v=window.scrollY-Math.max(0,i.value-m),h=d.height+Math.max(i.value,m)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;d.height<window.innerHeight-m?(t.value="top",i.value=m):k==="up"&&t.value==="bottom"||k==="down"&&t.value==="top"?(i.value=window.scrollY+d.top-y,t.value=!0):k==="down"&&h<=0?(i.value=0,t.value="bottom"):k==="up"&&v<=0&&(y?t.value!=="top"&&(i.value=-v+y+m,t.value="top"):(i.value=d.top+v,t.value="top")),c=window.scrollY}return{isStuck:t,stickyStyles:a}}const ze=100,$e=20;function q(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const M=q(r),t=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);r+=(t-M)*Math.abs(t),n===e.length-1&&(r*=.5)}return q(r)*1e3}function Ae(){const e={};function r(t){Array.from(t.changedTouches).forEach(i=>{(e[i.identifier]??(e[i.identifier]=new ve($e))).push([t.timeStamp,i])})}function n(t){Array.from(t.changedTouches).forEach(i=>{delete e[i.identifier]})}function M(t){var k;const i=(k=e[t])==null?void 0:k.values().reverse();if(!i)throw new Error(`No samples for touch id ${t}`);const a=i[0],c=[],b=[];for(const d of i){if(a[0]-d[0]>ze)break;c.push({t:d[0],d:d[1].clientX}),b.push({t:d[0],d:d[1].clientY})}return{x:Z(c),y:Z(b),get direction(){const{x:d,y:m}=this,[v,h]=[Math.abs(d),Math.abs(m)];return v>h&&d>=0?"right":v>h&&d<=0?"left":h>v&&m>=0?"down":h>v&&m<=0?"up":Fe()}}}return{addMovement:r,endTouch:n,getVelocity:M}}function Fe(){throw new Error}function qe(e){let{el:r,isActive:n,isTemporary:M,width:t,touchless:i,position:a}=e;Q(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",H,{passive:!0})}),ee(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",H)});const c=w(()=>["left","right"].includes(a.value)),{addMovement:b,endTouch:k,getVelocity:d}=Ae();let m=!1;const v=B(!1),h=B(0),y=B(0);let E;function C(o,l){return(a.value==="left"?o:a.value==="right"?document.documentElement.clientWidth-o:a.value==="top"?o:a.value==="bottom"?document.documentElement.clientHeight-o:p())-(l?t.value:0)}function D(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const u=a.value==="left"?(o-y.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-o-y.value)/t.value:a.value==="top"?(o-y.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-o-y.value)/t.value:p();return l?Math.max(0,Math.min(1,u)):u}function V(o){if(i.value)return;const l=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY,s=25,g=a.value==="left"?l<s:a.value==="right"?l>document.documentElement.clientWidth-s:a.value==="top"?u<s:a.value==="bottom"?u>document.documentElement.clientHeight-s:p(),f=n.value&&(a.value==="left"?l<t.value:a.value==="right"?l>document.documentElement.clientWidth-t.value:a.value==="top"?u<t.value:a.value==="bottom"?u>document.documentElement.clientHeight-t.value:p());(g||f||n.value&&M.value)&&(E=[l,u],y.value=C(c.value?l:u,n.value),h.value=D(c.value?l:u),m=y.value>-20&&y.value<80,k(o),b(o))}function P(o){const l=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY;if(m){if(!o.cancelable){m=!1;return}const g=Math.abs(l-E[0]),f=Math.abs(u-E[1]);(c.value?g>f&&g>3:f>g&&f>3)?(v.value=!0,m=!1):(c.value?f:g)>3&&(m=!1)}if(!v.value)return;o.preventDefault(),b(o);const s=D(c.value?l:u,!1);h.value=Math.max(0,Math.min(1,s)),s>1?y.value=C(c.value?l:u,!0):s<0&&(y.value=C(c.value?l:u,!1))}function H(o){if(m=!1,!v.value)return;b(o),v.value=!1;const l=d(o.changedTouches[0].identifier),u=Math.abs(l.x),s=Math.abs(l.y);(c.value?u>s&&u>400:s>u&&s>3)?n.value=l.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||p()):n.value=h.value>.5}const R=w(()=>v.value?{transform:a.value==="left"?`translateX(calc(-100% + ${h.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${h.value*t.value}px))`:a.value==="top"?`translateY(calc(-100% + ${h.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${h.value*t.value}px))`:p(),transition:"none"}:void 0);return Y(v,()=>{var u,s;const o=((u=r.value)==null?void 0:u.style.transform)??null,l=((s=r.value)==null?void 0:s.style.transition)??null;de(()=>{var g,f,x,L;(f=r.value)==null||f.style.setProperty("transform",((g=R.value)==null?void 0:g.transform)||"none"),(L=r.value)==null||L.style.setProperty("transition",((x=R.value)==null?void 0:x.transition)||null)}),me(()=>{var g,f;(g=r.value)==null||g.style.setProperty("transform",o),(f=r.value)==null||f.style.setProperty("transition",l)})}),{isDragging:v,dragProgress:h,dragStyles:R}}function p(){throw new Error}const Ze=["start","end","left","right","top","bottom"],je=j({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ze.includes(e)},sticky:Boolean,...fe(),...U(),...he(),...ge({mobile:null}),...ye(),...we(),...be(),...J({tag:"nav"}),...ke()},"VNavigationDrawer"),Ge=K()({name:"VNavigationDrawer",props:je(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:n,emit:M,slots:t}=r;const{isRtl:i}=Se(),{themeClasses:a}=Ee(e),{borderClasses:c}=Me(e),{backgroundColorClasses:b,backgroundColorStyles:k}=$(A(e,"color")),{elevationClasses:d}=Te(e),{displayClasses:m,mobile:v}=Pe(e),{roundedClasses:h}=Ve(e),y=xe(),E=pe(e,"modelValue",null,S=>!!S),{ssrBootStyles:C}=te(),{scopeId:D}=Be(),V=Ce(),P=B(!1),{runOpenDelay:H,runCloseDelay:R}=_e(e,S=>{P.value=S}),o=w(()=>e.rail&&e.expandOnHover&&P.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),l=w(()=>De(e.location,i.value)),u=w(()=>e.persistent),s=w(()=>!e.permanent&&(v.value||e.temporary)),g=w(()=>e.sticky&&!s.value&&l.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{I(P,S=>M("update:rail",!S))}),Y(()=>!e.disableResizeWatcher,()=>{I(s,S=>!e.permanent&&Oe(()=>E.value=!S))}),Y(()=>!e.disableRouteWatcher&&!!y,()=>{I(y.currentRoute,()=>s.value&&(E.value=!1))}),I(()=>e.permanent,S=>{S&&(E.value=!0)}),e.modelValue==null&&!s.value&&(E.value=e.permanent||!v.value);const{isDragging:f,dragProgress:x}=qe({el:V,isActive:E,isTemporary:s,width:o,touchless:A(e,"touchless"),position:l}),L=w(()=>{const S=s.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):o.value;return f.value?S*x.value:S}),ae=w(()=>["top","bottom"].includes(e.location)?0:o.value),{layoutItemStyles:N,layoutItemScrimStyles:ne,layoutIsReady:oe}=Re({id:e.name,order:w(()=>parseInt(e.order,10)),position:l,layoutSize:L,elementSize:ae,active:w(()=>E.value||f.value),disableTransitions:w(()=>f.value),absolute:w(()=>e.absolute||g.value&&typeof _.value!="string")}),{isStuck:_,stickyStyles:le}=Xe({rootEl:V,isSticky:g,layoutItemStyles:N}),O=$(w(()=>typeof e.scrim=="string"?e.scrim:null)),ue=w(()=>({...f.value?{opacity:x.value*.2,transition:"none"}:void 0,...ne.value}));return Ie({VList:{bgColor:"transparent"}}),G(()=>{const S=t.image||e.image;return T(Ne,null,[T(e.tag,F({ref:V,onMouseenter:H,onMouseleave:R,class:["v-navigation-drawer",`v-navigation-drawer--${l.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":P.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":s.value,"v-navigation-drawer--persistent":u.value,"v-navigation-drawer--active":E.value,"v-navigation-drawer--sticky":g.value},a.value,b.value,c.value,m.value,d.value,h.value,e.class],style:[k.value,N.value,C.value,le.value,e.style,["top","bottom"].includes(l.value)?{height:"auto"}:{}]},D,n),{default:()=>{var W,X,z;return[S&&T("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?T(Le,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):T(He,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(W=t.prepend)==null?void 0:W.call(t)]),T("div",{class:"v-navigation-drawer__content"},[(X=t.default)==null?void 0:X.call(t)]),t.append&&T("div",{class:"v-navigation-drawer__append"},[(z=t.append)==null?void 0:z.call(t)])]}}),T(Ye,{name:"fade-transition"},{default:()=>[s.value&&(f.value||E.value)&&!!e.scrim&&T("div",F({class:["v-navigation-drawer__scrim",O.backgroundColorClasses.value],style:[ue.value,O.backgroundColorStyles.value],onClick:()=>{u.value||(E.value=!1)}},D),null)]})])}),oe.then(()=>({isStuck:_}))}});export{Ge as V,Ke as a};
