import{a as Y,r as C,s as U,t as $,o as W,b as O,w as K,u as q,c as Q,d as l,g as Z,e as J,f as R,h as S,i as X,j as ee,k as h,l as g,m as f,n as z,p as I,q as n,v as B,x as V,F as te,y as oe,z as P,A as ae,B as se,C as ne,D as v,_ as b,E as ie,G as le}from"./entry.d5a01ba9.js";import{_ as re}from"./_plugin-vue_export-helper.c27b6911.js";function ce(...o){var E;const x=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(x);let[s,_,a={}]=o;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof _!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=q(),p=()=>null,L=()=>e.isHydrating?e.payload.data[s]:e.static.data[s];a.server=a.server??!0,a.default=a.default??p,a.getCachedData=a.getCachedData??L,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??Y.deep;const k=()=>![null,void 0].includes(a.getCachedData(s));if(!e._asyncData[s]||!a.immediate){(E=e.payload._errors)[s]??(E[s]=null);const c=a.deep?C:U;e._asyncData[s]={data:c(a.getCachedData(s)??a.default()),pending:C(!k()),error:$(e.payload._errors,s),status:C("idle")}}const i={...e._asyncData[s]};i.refresh=i.execute=(c={})=>{if(e._asyncDataPromises[s]){if(c.dedupe===!1)return e._asyncDataPromises[s];e._asyncDataPromises[s].cancelled=!0}if((c._initial||e.isHydrating&&c._initial!==!1)&&k())return Promise.resolve(a.getCachedData(s));i.pending.value=!0,i.status.value="pending";const r=new Promise((t,u)=>{try{t(_(e))}catch(T){u(T)}}).then(t=>{if(r.cancelled)return e._asyncDataPromises[s];let u=t;a.transform&&(u=a.transform(t)),a.pick&&(u=de(u,a.pick)),e.payload.data[s]=u,i.data.value=u,i.error.value=null,i.status.value="success"}).catch(t=>{if(r.cancelled)return e._asyncDataPromises[s];i.error.value=Q(t),i.data.value=l(a.default()),i.status.value="error"}).finally(()=>{r.cancelled||(i.pending.value=!1,delete e._asyncDataPromises[s])});return e._asyncDataPromises[s]=r,e._asyncDataPromises[s]};const y=()=>i.refresh({_initial:!0}),m=a.server!==!1&&e.payload.serverRendered;{const c=Z();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const t=c._nuxtOnBeforeMountCbs;c&&(W(()=>{t.forEach(u=>{u()}),t.splice(0,t.length)}),O(()=>t.splice(0,t.length)))}m&&e.isHydrating&&(i.error.value||k())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):c&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(y):a.immediate&&y(),a.watch&&K(a.watch,()=>i.refresh());const r=e.hook("app:data:refresh",async t=>{(!t||t.includes(s))&&await i.refresh()});c&&O(r)}const D=Promise.resolve(e._asyncDataPromises[s]).then(()=>i);return Object.assign(D,i),D}function de(o,x){const s={};for(const _ of x)s[_]=o[_];return s}const ue=v(()=>b(()=>import("./button.esm.784092bf.js"),["./button.esm.784092bf.js","./badge.esm.05afabd8.js","./entry.d5a01ba9.js","./entry.b337cc9c.css","./basecomponent.esm.a1e4b442.js","./index.esm.a7ac6c50.js","./baseicon.esm.b3a12257.js"],import.meta.url).then(o=>o.default||o)),pe=v(()=>b(()=>import("./confirmdialog.esm.22e48114.js"),["./confirmdialog.esm.22e48114.js","./button.esm.784092bf.js","./badge.esm.05afabd8.js","./entry.d5a01ba9.js","./entry.b337cc9c.css","./basecomponent.esm.a1e4b442.js","./index.esm.a7ac6c50.js","./baseicon.esm.b3a12257.js","./dialog.esm.5171e006.js","./portal.esm.27eeee76.js"],import.meta.url).then(o=>o.default||o)),fe=v(()=>b(()=>import("./dropdown.esm.a5d7faad.js"),["./dropdown.esm.a5d7faad.js","./entry.d5a01ba9.js","./entry.b337cc9c.css","./baseicon.esm.b3a12257.js","./basecomponent.esm.a1e4b442.js","./index.esm.a7ac6c50.js","./portal.esm.27eeee76.js","./overlayeventbus.esm.1e513b0b.js"],import.meta.url).then(o=>o.default||o)),_e=v(()=>b(()=>import("./inputtext.esm.05212417.js"),["./inputtext.esm.05212417.js","./basecomponent.esm.a1e4b442.js","./entry.d5a01ba9.js","./entry.b337cc9c.css"],import.meta.url).then(o=>o.default||o)),me=v(()=>b(()=>import("./textarea.esm.25b0ac4b.js"),["./textarea.esm.25b0ac4b.js","./basecomponent.esm.a1e4b442.js","./entry.d5a01ba9.js","./entry.b337cc9c.css"],import.meta.url).then(o=>o.default||o)),he=v(()=>b(()=>import("./FavoritesToggler.ff0a12a9.js"),["./FavoritesToggler.ff0a12a9.js","./entry.d5a01ba9.js","./entry.b337cc9c.css","./favorites.aeccb86c.js"],import.meta.url).then(o=>o.default||o)),ye=v(()=>b(()=>import("./ListItem.ef104a90.js"),["./ListItem.ef104a90.js","./entry.d5a01ba9.js","./entry.b337cc9c.css","./favorites.aeccb86c.js"],import.meta.url).then(o=>o.default||o)),w=o=>(ie("data-v-9782cf17"),o=o(),le(),o),ge={class:"home pt-8 pb-8 w-full p-5 grid grid-nogutter"},ve={class:"bg-white flex flex-column gap-5 p-3 pt-4 border-round"},be={class:"text-center text-gray-900"},we={class:"flex align-items-center justify-content-end gap-2"},xe=w(()=>n("h1",{class:"text-center text-gray-900 font-bold mt-0 mb-5 md:mb-6 xl:mb-7 text-6xl md:text-7xl col-12"}," Blog Post Titles ",-1)),ke=w(()=>n("div",{class:"text-center text-gray-900 text-xl md:text-2xl col-10 col-offset-1 mb-6 md:mb-8 xl:mb-10"}," This tool creates powerful and catchy titles for articles and blogs. Enter the word in the field below and click the Generate button. ",-1)),De={class:"home__form w-full grid grid-nogutter col-12 justify-content-center mb-8"},Ee={class:"home__form-wrapper w-full flex flex-column gap-3"},Pe={class:"flex flex-column gap-6 lg:flex-row lg:justify-content-between mb-4"},Ce={class:"p-float-label lg:w-6"},Le=w(()=>n("label",{for:"sizes"},"Size or Significance",-1)),Te={class:"p-float-label lg:w-6"},ze=w(()=>n("label",{for:"terrain"},"Terrain Type",-1)),Ie={class:"flex gap-3 flex-column w-full"},Ve={class:"w-full"},Ae={class:"p-float-label"},Oe=w(()=>n("label",{for:"keywords"},"Inspiration Keywords",-1)),Re={class:"p-error"},Se={class:"w-full"},Be={class:"p-float-label"},Me=w(()=>n("label",{for:"description"},"Short Description",-1)),je={class:"p-error"},Ne={key:0,class:"pi pi-spin pi-spinner"},Fe={key:1,class:"px-3 font-bold"},Ge={class:"flex align-items-center justify-content-between gap-2"},He=w(()=>n("div",{class:"text-sm lg:text-lg font-bold"},[n("span",{class:"text-primary"},"10000+ "),n("span",null,"items in our database")],-1)),Ye={class:"flex flex-column gap-3"},Ue={key:0,class:"pi pi-spin pi-spinner"},$e={key:1,class:"px-3 font-bold"},We=ae('<div class="home__how text-gray-900 grid grid-nogutter m-auto text-lg line-height-3 pt-8 border-top-1 border-primary" data-v-9782cf17><div class="text-primary font-bold text-4xl mb-5 col-12" data-v-9782cf17> How it works </div><div class="col-12 lg:col-6" data-v-9782cf17><p class="lg:p-2 mb-5" data-v-9782cf17> When writing a blog, the title or headline is the most important aspect. This is what’s going to entice readers to read or share your post. If the title isn’t good, your article isn’t going anywhere. If you need help crafting a great blog title, our title generator service is what you need! </p><p class="lg:p-2 mb-5" data-v-9782cf17> This tool will not only help you title an existing blog post but can also help you generate ideas for future posts. This could be an invaluable tool for people who make their living writing on the internet. </p><p class="lg:p-2 mb-5" data-v-9782cf17> If you are worried about cost, don’t be: our tool is completely free to use as much as you like. The title ideas it produces don’t cost anything and are free from any royalty restrictions. Plus, you don’t need to give us your email or any other information. </p><p class="font-bold lg:p-2 mb-5" data-v-9782cf17> Blog title generator: How does it work? </p><p class="lg:p-2 mb-5" data-v-9782cf17> This page has a text box. In this box, you’ll want to put the main keyword for your blog post. Similarly, if you haven’t written a post yet, using a keyword related to the topic you want to write about would be a great idea. </p></div><div class="col-12 lg:col-6" data-v-9782cf17><p class="lg:p-2 mb-5" data-v-9782cf17> Keep in mind, however, that you must use only Latin characters and cannot use spaces. Once you’ve entered a good keyword, hit the GENERATE button. Our server will then generate thousands of blog title ideas for you related to that keyword. You’ll see a relatively small list at first, but if you scroll down and hit the GENERATE MORE button, you’ll get additional ideas. </p><p class="lg:p-2 mb-5" data-v-9782cf17> Next to each title idea will be two buttons: a COPY button and a STAR button. The COPY button will copy that title idea so you can paste it somewhere. Meanwhile, the STAR button will save that title to a list. You can access the list by hitting the SAVED IDEAS button. </p><p class="lg:p-2 mb-5" data-v-9782cf17> You don’t need to worry about losing your saved ideas if you hit the GENERATE MORE button again or even do another keyword search. Feel free to jump around! </p><p class="lg:p-2 mb-5" data-v-9782cf17> When you have compiled a good list, hit the SAVED IDEAS button and then the DOWNLOAD button. You’ll receive a text file with all your saved ideas. Hit the DELETE ALL button to clear your list and start the process again. </p></div></div>',1),Ke=J({__name:"index",setup(o){const x=["Small Town","Medium Town","Large City","Metropolis","Capital City"],s=["Coastal","Riverine","Mountainous","Forested","Desert","Plains"],_=C(),a=C([]),e=R({size:"",terrain:"",keywords:"",description:""}),p=R({description:"",keywords:""}),L=S(()=>(!!e.keywords||!!e.description)&&!p.keywords&&!p.description),{execute:k,status:i,data:y}=ce(async()=>await $fetch("https://namegenerator.com/ai/generate/city-names",{method:"POST",body:e}),{server:!1,immediate:!1},"$pqtWcjQkdb"),m=S(()=>i.value==="pending");function D(r){const t=/^[A-Za-z0-9\s,.!?:;‘'-]+$/;e[r]!==""&&!t.test(e[r])?p[r]="Please use Latin letters":p[r]=""}async function E(){var r;try{await k(),y.value&&y.value.result&&y.value.result.length&&(a.value=y.value.result),await se(),(r=_.value)==null||r.scrollIntoView({behavior:"smooth"})}catch(t){console.error(t)}}function c(r){r.target.classList.contains("p-dialog-mask")&&(r.stopImmediatePropagation(),r.stopPropagation())}return X(()=>{document.addEventListener("click",c)}),ee(()=>{document.removeEventListener("click",c)}),(r,t)=>{const u=ue,T=pe,A=fe,M=_e,j=me,N=he,F=ye;return h(),g("div",ge,[f(T,{group:"headless",style:{width:"300px"},onClick:t[0]||(t[0]=I(()=>{},["stop"]))},{container:z(({message:d,acceptCallback:G,rejectCallback:H})=>[n("div",ve,[n("span",be,V(d==null?void 0:d.message),1),n("div",we,[f(u,{outlined:"",label:"No",onClick:I(H,["stop"])},null,8,["onClick"]),f(u,{label:"Yes",onClick:I(G,["stop"])},null,8,["onClick"])])])]),_:1}),xe,ke,n("div",De,[n("div",Ee,[n("div",Pe,[n("div",Ce,[f(A,{modelValue:l(e).size,"onUpdate:modelValue":t[1]||(t[1]=d=>l(e).size=d),options:x,"input-id":"sizes",class:"align-items-center w-full h-4rem"},null,8,["modelValue"]),Le]),n("div",Te,[f(A,{modelValue:l(e).terrain,"onUpdate:modelValue":t[2]||(t[2]=d=>l(e).terrain=d),options:s,"input-id":"terrain",class:"align-items-center w-full h-4rem"},null,8,["modelValue"]),ze])]),n("div",Ie,[n("div",Ve,[n("div",Ae,[f(M,{modelValue:l(e).keywords,"onUpdate:modelValue":t[3]||(t[3]=d=>l(e).keywords=d),class:B(["flex align-items-center h-4rem w-full mb-1",{"p-invalid":l(p).keywords}]),"input-id":"keywords",onInput:t[4]||(t[4]=d=>D("keywords"))},null,8,["modelValue","class"]),Oe]),n("small",Re,V(l(p).keywords||" "),1)]),n("div",Se,[n("div",Be,[f(j,{modelValue:l(e).description,"onUpdate:modelValue":t[5]||(t[5]=d=>l(e).description=d),"auto-resize":"",class:B(["flex align-items-center w-full mb-1",{"p-invalid":l(p).description}]),rows:"5","input-id":"description",onInput:t[6]||(t[6]=d=>D("description"))},null,8,["modelValue","class"]),Me]),n("small",je,V(l(p).description||" "),1)])]),f(u,{class:"p-button-lg w-full flex align-items-center justify-content-center h-4rem",disabled:l(m)||!l(L),onClick:E},{default:z(()=>[l(m)?(h(),g("i",Ne)):P("",!0),l(m)?P("",!0):(h(),g("span",Fe,"Generate"))]),_:1},8,["disabled"])])]),l(a).length?(h(),g("div",{key:0,ref_key:"generatedItemsListRef",ref:_,class:"home__list m-auto pb-8 flex flex-column gap-5 col-12"},[n("div",Ge,[He,f(N)]),n("div",Ye,[(h(!0),g(te,null,oe(l(a),d=>(h(),ne(F,{key:d,item:d},null,8,["item"]))),128))]),f(u,{class:"p-button-lg flex align-items-center justify-content-center h-3rem m-auto mt-2",disabled:l(m),pt:{root:{style:{width:"280px"}}},onClick:E},{default:z(()=>[l(m)?(h(),g("i",Ue)):P("",!0),l(m)?P("",!0):(h(),g("span",$e,"Generate more"))]),_:1},8,["disabled"])],512)):P("",!0),We])}}});const Ze=re(Ke,[["__scopeId","data-v-9782cf17"]]);export{Ze as default};