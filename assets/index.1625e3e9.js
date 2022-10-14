import{C as N}from"./index.2fe9f94e.js";import{R as P}from"./index.d42fae22.js";import{u as y,a as T,b as w,d as V,c as g}from"./components.82f13bf2.js";import{d as I,a as B,b as i,w as D,_ as $,p as K,ai as L,D as Y,f as m,h as R,M as C,N as r,R as b,i as U,aj as _,j,O as z,P as A,Q as M}from"./vue-router.esm-bundler.eec20f43.js";const f=Symbol("SELECT_BIND_OPTION_KEY"),h=Symbol("SELECT_COUNT_OPTION_KEY");function oe(){const{bindChildren:e,childProviders:o}=T(f),{length:n}=y(h);return{length:n,options:o,bindOptions:e}}function W(){const{bindParent:e,parentProvider:o}=w(f),{index:n}=V(h);if(!e||!o)throw Error("<var-option/> must in <var-select/>");return{index:n,select:o,bindSelect:e}}const Q={label:{},value:{}},{n:q,classes:F}=g("option"),G=I({name:"VarOption",directives:{Ripple:P},components:{VarCheckbox:N},props:Q,setup(e){const o=B(!1),n=i(()=>o.value),d=i(()=>e.label),u=i(()=>e.value),{select:p,bindSelect:s}=W(),{wrapWidth:t,multiple:l,focusColor:S,onSelect:v}=p,k=()=>{o.value=!o.value,v(a)},O=()=>v(a),a={label:d,value:u,selected:n,sync:E=>{o.value=E}};return D([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),s(a),{n:q,classes:F,optionSelected:o,wrapWidth:t,multiple:l,focusColor:S,handleClick:k,handleSelect:O}}});function H(e,o,n,d,u,p){const s=K("var-checkbox"),t=L("ripple");return Y((m(),R("div",{class:r(e.classes(e.n(),"var--box",[e.optionSelected,e.n("--selected-color")])),style:b({width:e.wrapWidth,color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...l)=>e.handleClick&&e.handleClick(...l))},[C("div",{class:r(e.classes(e.n("cover"),[e.optionSelected,e.n("--selected-background")])),style:b({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(m(),U(s,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=l=>e.optionSelected=l),onClick:o[1]||(o[1]=_(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):j("v-if",!0),C("div",{class:r(e.classes(e.n("text"),"var--ellipsis"))},[z(e.$slots,"default",{},()=>[A(M(e.label),1)])],2)],6)),[[t]])}const c=$(G,[["render",H]]);c.install=function(e){e.component(c.name,c)};export{c as O,oe as u};
