import{S as se}from"./index.a05ebc9c.js";import{d as V,a as r,b as _,G as te,_ as X,f as v,i as H,S as b,M as U,O as F,P as T,Q as u,m as oe,aD as ae,w as le,o as Y,e as re,Z as L,V as ie,h as k,F as K,ak as q,N as w,R as P,an as m,q as D}from"./vue-router.esm-bundler.eec20f43.js";import{u as ce,a as de,b as ue,d as fe,c as j,e as O}from"./components.82f13bf2.js";import{e as pe}from"./shared.8bb6a84d.js";import{t as ve,d as M,g as he,e as me,b as ye,c as _e,n as be,r as ke}from"./elements.ad8d78a7.js";import{C as R}from"./index.0fd7f4c5.js";import{d as Ce}from"./index.8b4f1b33.js";import{u as ge,a as G,_ as Ie,b as Te,c as xe}from"./index.78c968af.js";import{a as Ne,b as Be}from"./utils.c415320b.js";import"./index.5d4d8c49.js";const Q=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"),Z=Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");function Ae(){const{bindChildren:e,childProviders:l}=de(Q),{length:s}=ce(Z);return{length:s,indexAnchors:l,bindIndexAnchors:e}}function Ee(){const{parentProvider:e,bindParent:l}=ue(Q),{index:s}=fe(Z);if(!e||!l)throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');return{index:s,indexBar:e,bindIndexBar:l}}const $e={index:{type:[Number,String]}},{n:Se,classes:we}=j("index-anchor"),De=V({name:"VarIndexAnchor",components:{VarSticky:se},inheritAttrs:!1,props:$e,setup(e){const{index:l,indexBar:s,bindIndexBar:d}=Ee(),i=r(0),n=r(!1),a=_(()=>e.index),o=r(null),{active:f,sticky:N,cssMode:B,stickyOffsetTop:y,zIndex:C}=s;return d({index:l,name:a,ownTop:i,setOwnTop:()=>{!o.value||(i.value=o.value.$el?o.value.$el.offsetTop:o.value.offsetTop)},setDisabled:g=>{n.value=g}}),{n:Se,classes:we,name:a,anchorEl:o,active:f,sticky:N,zIndex:C,disabled:n,cssMode:B,stickyOffsetTop:y,Transition:te}}});function Oe(e,l,s,d,i,n){return v(),H(ae(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:b(()=>[U("div",oe({class:e.n()},e.$attrs),[F(e.$slots,"default",{},()=>[T(u(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}const ze=X(De,[["render",Oe]]),Pe={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:[String,Number],default:0},cssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:{type:Function},onChange:{type:Function}},{n:Le,classes:Me}=j("index-bar"),Re=V({name:"VarIndexBar",props:Pe,setup(e){const{length:l,indexAnchors:s,bindIndexAnchors:d}=Ae(),i=r(""),n=r(null),a=r(null),o=r([]),f=r(),N=_(()=>e.sticky),B=_(()=>e.cssMode),y=_(()=>ve(e.stickyOffsetTop)),C=_(()=>e.zIndex);d({active:f,sticky:N,cssMode:B,stickyOffsetTop:y,zIndex:C});const A=t=>{const c=ie(t)?t.name.value:t;c===f.value||c===void 0||(f.value=c,O(e.onChange,c))},E=()=>{const t=me(n.value),c=n.value===window?document.body.scrollHeight:n.value.scrollHeight,{offsetTop:$}=a.value;s.forEach((p,h)=>{const S=p.ownTop.value,I=t-S+y.value-$,ne=h===s.length-1?c:s[h+1].ownTop.value-p.ownTop.value;I>=0&&I<ne&&!i.value&&(h&&!e.cssMode&&s[h-1].setDisabled(!0),p.setDisabled(!1),A(p))})},g=async(t,c)=>{const{offsetTop:$}=a.value;if(c&&O(e.onClick,t),t===f.value)return;const p=s.find(({name:I})=>t===I.value);if(!p)return;const h=p.ownTop.value-y.value+$,S=ye(n.value);i.value=t,A(t),await _e(n.value,{left:S,top:h,animation:pe,duration:L(e.duration)}),be(()=>{i.value=""})},ee=t=>{ke(()=>g(t))};return le(()=>l.value,async()=>{await M(),s.forEach(({name:t,setOwnTop:c})=>{t.value&&o.value.push(t.value),c()})}),Y(async()=>{await M(),n.value=he(a.value),n.value.addEventListener("scroll",E)}),re(()=>{O(n.value.removeEventListener,"scroll",E)}),{n:Le,classes:Me,barEl:a,active:f,zIndex:C,anchorNameList:o,toNumber:L,scrollTo:ee,anchorClick:g}}});const Ve=["onClick"];function Xe(e,l,s,d,i,n){return v(),k("div",{class:w(e.n()),ref:"barEl"},[F(e.$slots,"default"),U("ul",{class:w(e.n("anchor-list")),style:P({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(v(!0),k(K,null,q(e.anchorNameList,a=>(v(),k("li",{key:a,class:w(e.classes(e.n("anchor-item"),[e.active===a,e.n("anchor-item--active")])),style:P({color:e.active===a&&e.highlightColor?e.highlightColor:""}),onClick:o=>e.anchorClick(a,!0)},u(a),15,Ve))),128))],6)],2)}const x=X(Re,[["render",Xe]]);x.install=function(e){e.component(x.name,x)};const He={title:"\u6807\u9898",text:"\u6587\u672C"},Ue={title:"Title",text:"Text"},{add:J,use:Fe,pack:z,packs:sn,merge:tn}=ge(),Ye=e=>{xe(e),Fe(e)};G("zh-CN",Ie);G("en-US",Te);J("zh-CN",He);J("en-US",Ue);const on={setup(e){const l=r([]),s=r("#e7edf7"),d=r("#2e67ba");Y(()=>{for(let n=0;n<26;n++)l.value.push(String.fromCharCode(65+n))});const i=n=>{console.log(n)};return Ne(Ye),Be(Ce,n=>{s.value=n==="darkTheme"?"rgb(41, 42, 45)":"#e7edf7",d.value=n==="darkTheme"?"#3980e8":"#2e67ba"}),(n,a)=>(v(),H(m(x),{onChange:i,duration:"300","sticky-offset-top":"14.4vw"},{default:b(()=>[(v(!0),k(K,null,q(l.value,o=>(v(),k("div",{key:o},[D(ze,{index:o,class:"var-index-anchor__example",style:P({background:s.value,color:d.value})},{default:b(()=>[T(u(m(z).title)+" "+u(o),1)]),_:2},1032,["index","style"]),D(m(R),null,{default:b(()=>[T(u(o)+" "+u(m(z).text),1)]),_:2},1024),D(m(R),null,{default:b(()=>[T(u(o)+" "+u(m(z).text),1)]),_:2},1024)]))),128))]),_:1}))}};export{on as default};
