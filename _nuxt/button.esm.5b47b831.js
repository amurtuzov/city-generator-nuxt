import v from"./badge.esm.1c6123c5.js";import{s as S}from"./index.esm.5b04be36.js";import{I as h,R as B,K as d,P as I,W as P,k as i,l as u,L as p,v as c,H as l,C as b,z as f,q as $,x as k}from"./entry.8a2bed71.js";import{s as C}from"./basecomponent.esm.83a2e8b7.js";import"./baseicon.esm.b7dc02e7.js";function r(e){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}function a(e,t,o){return t=z(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function z(e){var t=L(e,"string");return r(t)=="symbol"?t:String(t)}function L(e,t){if(r(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(r(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var w={root:function(t){var o=t.instance,n=t.props;return["p-button p-component",a(a(a(a(a(a(a(a({"p-button-icon-only":o.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-disabled":o.$attrs.disabled||o.$attrs.disabled===""||n.loading,"p-button-loading":n.loading,"p-button-loading-label-only":n.loading&&!o.hasIcon&&n.label,"p-button-link":n.link},"p-button-".concat(n.severity),n.severity),"p-button-raised",n.raised),"p-button-rounded",n.rounded),"p-button-text",n.text),"p-button-outlined",n.outlined),"p-button-sm",n.size==="small"),"p-button-lg",n.size==="large"),"p-button-plain",n.plain)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(t){var o=t.props;return["p-button-icon",{"p-button-icon-left":o.iconPos==="left"&&o.label,"p-button-icon-right":o.iconPos==="right"&&o.label,"p-button-icon-top":o.iconPos==="top"&&o.label,"p-button-icon-bottom":o.iconPos==="bottom"&&o.label}]},label:"p-button-label"},O=h.extend({name:"button",classes:w}),T={name:"BaseButton",extends:C,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:O,provide:function(){return{$parentInstance:this}}},A={name:"Button",extends:T,methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:S,Badge:v},directives:{ripple:B}},D=["aria-label","disabled","data-pc-severity"];function N(e,t,o,n,E,s){var y=d("SpinnerIcon"),g=d("Badge"),m=I("ripple");return P((i(),u("button",l({class:e.cx("root"),type:"button","aria-label":s.defaultAriaLabel,disabled:s.disabled},s.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":e.severity}),[p(e.$slots,"default",{},function(){return[e.loading?p(e.$slots,"loadingicon",{key:0,class:c([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(i(),u("span",l({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(i(),b(y,l({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):p(e.$slots,"icon",{key:1,class:c([e.cx("icon")])},function(){return[e.icon?(i(),u("span",l({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):f("",!0)]}),$("span",l({class:e.cx("label")},e.ptm("label")),k(e.label||" "),17),e.badge?(i(),b(g,l({key:2,value:e.badge,class:e.badgeClass,severity:e.badgeSeverity,unstyled:e.unstyled},e.ptm("badge")),null,16,["value","class","severity","unstyled"])):f("",!0)]})],16,D)),[[m]])}A.render=N;export{A as default};
