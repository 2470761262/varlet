import{d as u,a as l,w as p,aC as c,Z as o,n as f,_ as g,f as y,i as h,N as d,R as z,aD as S}from"./vue-router.esm-bundler.eec20f43.js";import{a as k}from"./elements.ad8d78a7.js";import{c as C}from"./components.82f13bf2.js";const U={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}},{n:N,classes:v}=C("icon"),$=u({name:"VarIcon",props:U,setup(n){const e=l(""),a=l(!1);return p(()=>n.name,async(s,i)=>{const{transition:r}=n;if(i==null||o(r)===0){e.value=s;return}a.value=!0,await f(),setTimeout(()=>{i!=null&&(e.value=s),a.value=!1},o(r))},{immediate:!0}),{n:N,classes:v,nextName:e,shrinking:a,isURL:c,toNumber:o,toSizeUnit:k}}});function R(n,e,a,m,s,i){return y(),h(S(n.isURL(n.name)?"img":"i"),{class:d(n.classes(n.n(),`${n.namespace}--set`,[n.isURL(n.name),n.n("image"),`${n.namespace}-${n.nextName}`],[n.shrinking,n.n("--shrinking")])),style:z({color:n.color,transition:`transform ${n.toNumber(n.transition)}ms`,width:n.isURL(n.name)?n.toSizeUnit(n.size):null,height:n.isURL(n.name)?n.toSizeUnit(n.size):null,fontSize:n.toSizeUnit(n.size)}),src:n.isURL(n.name)?n.nextName:null,onClick:n.onClick},null,8,["class","style","src","onClick"])}const t=g($,[["render",R]]);t.install=function(n){n.component(t.name,t)};export{t as I,U as p};