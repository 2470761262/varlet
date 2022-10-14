import{S as p}from"./index.10678e20.js";import{B as s}from"./index.ee7ded0f.js";import{S as D}from"./index.77f41f90.js";import{A as C}from"./AppType.d27092a7.js";import{d as U}from"./index.8b4f1b33.js";import{u as E,a as $,_ as A,b as T,c as L}from"./index.78c968af.js";import{a as N,b as z}from"./utils.c415320b.js";import{r as h,aH as M,f as V,h as I,q as n,S as l,an as t,M as H,aI as w,F as R,P as u,Q as a}from"./vue-router.esm-bundler.eec20f43.js";import"./index.ee35e9ad.js";import"./components.82f13bf2.js";import"./elements.ad8d78a7.js";import"./shared.8bb6a84d.js";import"./index.5d4d8c49.js";import"./zIndex.e8794d81.js";import"./index.1166b210.js";import"./lock.95ea19af.js";import"./index.d42fae22.js";/* empty css               */const q={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",type:"Snackbar \u7C7B\u578B",success:"\u6210\u529F",info:"\u6D88\u606F",warning:"\u8B66\u544A",error:"\u9519\u8BEF",loading:"\u52A0\u8F7D",text:"\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01",loaded:"\u52A0\u8F7D\u6210\u529F\uFF01\uFF01",wait:"\u7B49\u5F85\u4E2D...",close:"\u5173\u95ED",basicUsage:"\u57FA\u672C\u4F7F\u7528",multiLine:"\u5782\u76F4\u6392\u5217",bottomDisplay:"\u5E95\u90E8\u663E\u793A",hiddenTime:"\u663E\u793A\u65F6\u957F",forbidClick:"\u7981\u6B62\u7A7F\u900F\u70B9\u51FB",multiple:"\u591A\u4F8B\u6A21\u5F0F"},P={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",forbidClick:"Forbid Click",multiple:"Multiple"},{add:B,use:Q,pack:e,packs:pt,merge:dt}=E(),W=b=>{L(b),Q(b)};$("zh-CN",A);$("en-US",T);B("zh-CN",q);B("en-US",P);const j={class:"snackbar-demo"},mt={setup(b){const v=h({show1:!1,show2:!1,show3:!1,show4:!1,show9:!1}),d=p.Component,{show1:F,show2:k,show3:c,show4:y,show9:g}=M(v),m=r=>{v[r]=!v[r]},f=r=>{const o=r==="loading"?e.value.wait:e.value.text;p[r](o),r==="loading"&&setTimeout(()=>{p.success(e.value.loaded)},2e3)},x=r=>{r==="time"&&p({content:e.value.text,duration:1e3}),r==="position"&&p({content:e.value.text,position:"bottom"}),r||p(e.value.text)},S=()=>{p.allowMultiple(!0);const r=p("Snackbar 1");p.success("Snackbar 2"),setTimeout(()=>{r.clear()},1e3)};return N(W),z(U),(r,o)=>(V(),I(R,null,[n(t(C),null,{default:l(()=>[u(a(t(e).componentCall),1)]),_:1}),n(t(D),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(s),{type:"primary",block:"",onClick:o[0]||(o[0]=i=>m("show1"))},{default:l(()=>[u(a(t(e).basicUsage),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[1]||(o[1]=i=>m("show3"))},{default:l(()=>[u(a(t(e).multiLine),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[2]||(o[2]=i=>m("show2"))},{default:l(()=>[u(a(t(e).bottomDisplay),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[3]||(o[3]=i=>m("show4"))},{default:l(()=>[u(a(t(e).hiddenTime),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[4]||(o[4]=i=>m("show9"))},{default:l(()=>[u(a(t(e).forbidClick),1)]),_:1})]),_:1}),n(t(C),null,{default:l(()=>[u(a(t(e).functionCall),1)]),_:1}),n(t(D),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(s),{type:"warning",block:"",onClick:o[5]||(o[5]=i=>x())},{default:l(()=>[u(a(t(e).basicUsage),1)]),_:1}),n(t(s),{type:"warning",block:"",onClick:o[6]||(o[6]=i=>x("time"))},{default:l(()=>[u(a(t(e).hiddenTime),1)]),_:1}),n(t(s),{type:"warning",block:"",onClick:o[7]||(o[7]=i=>x("position"))},{default:l(()=>[u(a(t(e).bottomDisplay),1)]),_:1})]),_:1}),n(t(C),null,{default:l(()=>[u(a(t(e).type),1)]),_:1}),n(t(D),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(s),{type:"success",block:"",onClick:o[8]||(o[8]=i=>f("success"))},{default:l(()=>[u(a(t(e).success),1)]),_:1}),n(t(s),{type:"warning",block:"",onClick:o[9]||(o[9]=i=>f("warning"))},{default:l(()=>[u(a(t(e).warning),1)]),_:1}),n(t(s),{type:"info",block:"",onClick:o[10]||(o[10]=i=>f("info"))},{default:l(()=>[u(a(t(e).info),1)]),_:1}),n(t(s),{type:"danger",block:"",onClick:o[11]||(o[11]=i=>f("error"))},{default:l(()=>[u(a(t(e).error),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:o[12]||(o[12]=i=>f("loading"))},{default:l(()=>[u(a(t(e).loading),1)]),_:1})]),_:1}),n(t(C),null,{default:l(()=>[u(a(t(e).multiple),1)]),_:1}),n(t(s),{type:"primary",block:"",onClick:S},{default:l(()=>[u(a(t(e).multiple),1)]),_:1}),H("div",j,[n(t(d),{show:t(F),"onUpdate:show":o[13]||(o[13]=i=>w(F)?F.value=i:null)},{default:l(()=>[u(a(t(e).text),1)]),_:1},8,["show"]),n(t(d),{show:t(k),"onUpdate:show":o[15]||(o[15]=i=>w(k)?k.value=i:null),position:"bottom"},{action:l(()=>[n(t(s),{type:"primary",onClick:o[14]||(o[14]=i=>k.value=!1)},{default:l(()=>[u(a(t(e).close),1)]),_:1})]),default:l(()=>[u(a(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(d),{show:t(c),"onUpdate:show":o[17]||(o[17]=i=>w(c)?c.value=i:null),vertical:!0},{action:l(()=>[n(t(s),{type:"primary",onClick:o[16]||(o[16]=i=>c.value=!1)},{default:l(()=>[u(a(t(e).close),1)]),_:1})]),default:l(()=>[u(a(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(d),{show:t(y),"onUpdate:show":o[18]||(o[18]=i=>w(y)?y.value=i:null),duration:1e3},{default:l(()=>[u(a(t(e).text),1)]),_:1},8,["show"]),n(t(d),{show:t(g),"onUpdate:show":o[19]||(o[19]=i=>w(g)?g.value=i:null),"forbid-click":!0},{default:l(()=>[u(a(t(e).text),1)]),_:1},8,["show"])])],64))}};export{mt as default};