import{I as c}from"./index.5d4d8c49.js";import{R as C}from"./index.d42fae22.js";import{S as _}from"./index.10678e20.js";import{A as t}from"./AppType.d27092a7.js";import{C as S}from"./clipboard.cdcaa811.js";import{d as F}from"./index.8b4f1b33.js";import{u as z,a as b,_ as B,b as I,c as E}from"./index.78c968af.js";import{a as N,b as A}from"./utils.c415320b.js";import{_ as L,r as D,a as k,o as U,f as d,h,q as o,S as l,an as e,M as g,F as x,ak as $,P as s,Q as i,D as T,R as M}from"./vue-router.esm-bundler.eec20f43.js";import"./elements.ad8d78a7.js";import"./shared.8bb6a84d.js";import"./components.82f13bf2.js";import"./index.1166b210.js";/* empty css               */import"./index.ee35e9ad.js";import"./zIndex.e8794d81.js";import"./lock.95ea19af.js";const R=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline","pin","pin-off","pin-outline","pin-off-outline","code-json"],V={iconSize:"\u56FE\u6807\u5C3A\u5BF8",iconColor:"\u56FE\u6807\u989C\u8272",useImage:"\u4F7F\u7528\u56FE\u7247",events:"\u6CE8\u518C\u4E8B\u4EF6",iconAnimation:"\u56FE\u6807\u5207\u6362\u52A8\u753B (\u70B9\u51FB\u5207\u6362)",toggle:"\u5207\u6362",iconList:"\u56FE\u6807\u5217\u8868 (\u70B9\u51FB\u590D\u5236)",copySuccess:"\u590D\u5236\u6210\u529F",clickSuccess:"\u70B9\u51FB\u6210\u529F"},j={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success"},{add:v,use:q,pack:n,packs:me,merge:pe}=z(),P=u=>{E(u),q(u)};b("zh-CN",B);b("en-US",I);v("zh-CN",V);v("en-US",j);const Q={class:"icon-example__icons"},G=["data-clipboard-text"],H={class:"icon-example__icon-name"},J={setup(u){const w=D(R),m=k("information"),f=k("#fff"),y=()=>{m.value=m.value==="information"?"checkbox-marked-circle":"information"};return U(()=>{new S(".icon-example__icon",{text:a=>`<var-icon name="${a.getAttribute("data-clipboard-text")}" />`}).on("success",a=>{_.success(`${a.text}${n.value.copySuccess}!`)})}),N(P),A(F,p=>{f.value=p==="darkTheme"?"#303030":"#fff"}),(p,a)=>(d(),h(x,null,[o(e(t),null,{default:l(()=>[s(i(e(n).iconSize),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",size:26}),o(e(t),null,{default:l(()=>[s(i(e(n).iconColor),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff"}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",size:26}),o(e(t),null,{default:l(()=>[s(i(e(n).useImage),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:32}),o(e(t),null,{default:l(()=>[s(i(e(n).events),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",onClick:a[0]||(a[0]=()=>e(_).success(e(n).clickSuccess))}),o(e(t),null,{default:l(()=>[s(i(e(n).iconAnimation),1)]),_:1}),o(e(c),{class:"icon-example__animation-icon",color:"#2979ff",size:30,transition:300,name:m.value,onClick:y},null,8,["name"]),o(e(t),null,{default:l(()=>[s(i(e(n).iconList),1)]),_:1}),g("div",Q,[(d(!0),h(x,null,$(e(w),r=>T((d(),h("div",{class:"icon-example__icon var-elevation--2",style:M({background:f.value}),"data-clipboard-text":r,key:r},[o(e(c),{name:r},null,8,["name"]),g("div",H,i(r),1)],12,G)),[[e(C)]])),128))])],64))}},de=L(J,[["__scopeId","data-v-b9d57177"]]);export{de as default};
