(()=>{"use strict";var t,e={1107:(t,e,n)=>{var i=n(92457),r=n(53529),o=n(53334),s=(n(43627),n(71089),n(63814));n(44719),n(36117);const a=null===(u=(0,i.HW)())?(0,r.YK)().setApp("files").build():(0,r.YK)().setApp("files").setUid(u.uid).build();var u,l=(t=>(t.DEFAULT="default",t.HIDDEN="hidden",t))(l||{});(0,s.dC)("dav");var c={};!function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n="["+e+"]["+e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",i=new RegExp("^"+n+"$");t.isExist=function(t){return typeof t<"u"},t.isEmptyObject=function(t){return 0===Object.keys(t).length},t.merge=function(t,e,n){if(e){const i=Object.keys(e),r=i.length;for(let o=0;o<r;o++)t[i[o]]="strict"===n?[e[i[o]]]:e[i[o]]}},t.getValue=function(e){return t.isExist(e)?e:""},t.isName=function(t){const e=i.exec(t);return!(null===e||typeof e>"u")},t.getAllMatches=function(t,e){const n=[];let i=e.exec(t);for(;i;){const r=[];r.startIndex=e.lastIndex-i[0].length;const o=i.length;for(let t=0;t<o;t++)r.push(i[t]);n.push(r),i=e.exec(t)}return n},t.nameRegexp=n}(c);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var d={};const p={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t}};d.buildOptions=function(t){return Object.assign({},p,t)},d.defaultOptions=p,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat),new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var h={};function f(t,e,n){let i;const r={};for(let o=0;o<t.length;o++){const s=t[o],a=g(s);let u="";if(u=void 0===n?a:n+"."+a,a===e.textNodeName)void 0===i?i=s[a]:i+=""+s[a];else{if(void 0===a)continue;if(s[a]){let t=f(s[a],e,u);const n=b(t,e);s[":@"]?m(t,s[":@"],u,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==r[a]&&r.hasOwnProperty(a)?(Array.isArray(r[a])||(r[a]=[r[a]]),r[a].push(t)):e.isArray(a,u,n)?r[a]=[t]:r[a]=t}}}return"string"==typeof i?i.length>0&&(r[e.textNodeName]=i):void 0!==i&&(r[e.textNodeName]=i),r}function g(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function m(t,e,n,i){if(e){const r=Object.keys(e),o=r.length;for(let s=0;s<o;s++){const o=r[s];i.isArray(o,n+"."+o,!0,!0)?t[o]=[e[o]]:t[o]=e[o]}}}function b(t,e){const{textNodeName:n}=e,i=Object.keys(t).length;return!(0!==i&&(1!==i||!t[n]&&"boolean"!=typeof t[n]&&0!==t[n]))}h.prettify=function(t,e){return f(t,e)};const{buildOptions:N}=d,{prettify:x}=h;function y(t,e,n,i){let r="",o=!1;for(let s=0;s<t.length;s++){const a=t[s],u=w(a);if(void 0===u)continue;let l="";if(l=0===n.length?u:`${n}.${u}`,u===e.textNodeName){let t=a[u];O(l,e)||(t=e.tagValueProcessor(u,t),t=E(t,e)),o&&(r+=i),r+=t,o=!1;continue}if(u===e.cdataPropName){o&&(r+=i),r+=`<![CDATA[${a[u][0][e.textNodeName]}]]>`,o=!1;continue}if(u===e.commentPropName){r+=i+`\x3c!--${a[u][0][e.textNodeName]}--\x3e`,o=!0;continue}if("?"===u[0]){const t=v(a[":@"],e),n="?xml"===u?"":i;let s=a[u][0][e.textNodeName];s=0!==s.length?" "+s:"",r+=n+`<${u}${s}${t}?>`,o=!0;continue}let c=i;""!==c&&(c+=e.indentBy);const d=i+`<${u}${v(a[":@"],e)}`,p=y(a[u],e,l,c);-1!==e.unpairedTags.indexOf(u)?e.suppressUnpairedNode?r+=d+">":r+=d+"/>":p&&0!==p.length||!e.suppressEmptyNode?p&&p.endsWith(">")?r+=d+`>${p}${i}</${u}>`:(r+=d+">",p&&""!==i&&(p.includes("/>")||p.includes("</"))?r+=i+e.indentBy+p+i:r+=p,r+=`</${u}>`):r+=d+"/>",o=!0}return r}function w(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const i=e[n];if(t.hasOwnProperty(i)&&":@"!==i)return i}}function v(t,e){let n="";if(t&&!e.ignoreAttributes)for(let i in t){if(!t.hasOwnProperty(i))continue;let r=e.attributeValueProcessor(i,t[i]);r=E(r,e),!0===r&&e.suppressBooleanAttributes?n+=` ${i.substr(e.attributeNamePrefix.length)}`:n+=` ${i.substr(e.attributeNamePrefix.length)}="${r}"`}return n}function O(t,e){let n=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let i in e.stopNodes)if(e.stopNodes[i]===t||e.stopNodes[i]==="*."+n)return!0;return!1}function E(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const i=e.entities[n];t=t.replace(i.regex,i.val)}return t}const A=function(t,e){let n="";return e.format&&e.indentBy.length>0&&(n="\n"),y(t,e,"",n)},P={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function j(t){this.options=Object.assign({},P,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=V),this.processTextOrObjNode=F,this.options.format?(this.indentate=I,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function F(t,e,n){const i=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,i.attrStr,n):this.buildObjectNode(i.val,e,i.attrStr,n)}function I(t){return this.options.indentBy.repeat(t)}function V(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}j.prototype.build=function(t){return this.options.preserveOrder?A(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},j.prototype.j2x=function(t,e){let n="",i="";for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r))if(typeof t[r]>"u")this.isAttribute(r)&&(i+="");else if(null===t[r])this.isAttribute(r)?i+="":"?"===r[0]?i+=this.indentate(e)+"<"+r+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+r+"/"+this.tagEndChar;else if(t[r]instanceof Date)i+=this.buildTextValNode(t[r],r,"",e);else if("object"!=typeof t[r]){const o=this.isAttribute(r);if(o)n+=this.buildAttrPairStr(o,""+t[r]);else if(r===this.options.textNodeName){let e=this.options.tagValueProcessor(r,""+t[r]);i+=this.replaceEntitiesValue(e)}else i+=this.buildTextValNode(t[r],r,"",e)}else if(Array.isArray(t[r])){const n=t[r].length;let o="";for(let s=0;s<n;s++){const n=t[r][s];typeof n>"u"||(null===n?"?"===r[0]?i+=this.indentate(e)+"<"+r+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+r+"/"+this.tagEndChar:"object"==typeof n?this.options.oneListGroup?o+=this.j2x(n,e+1).val:o+=this.processTextOrObjNode(n,r,e):o+=this.buildTextValNode(n,r,"",e))}this.options.oneListGroup&&(o=this.buildObjectNode(o,r,"",e)),i+=o}else if(this.options.attributesGroupName&&r===this.options.attributesGroupName){const e=Object.keys(t[r]),i=e.length;for(let o=0;o<i;o++)n+=this.buildAttrPairStr(e[o],""+t[r][e[o]])}else i+=this.processTextOrObjNode(t[r],r,e);return{attrStr:n,val:i}},j.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},j.prototype.buildObjectNode=function(t,e,n,i){if(""===t)return"?"===e[0]?this.indentate(i)+"<"+e+n+"?"+this.tagEndChar:this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let r="</"+e+this.tagEndChar,o="";return"?"===e[0]&&(o="?",r=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===o.length?this.indentate(i)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(i)+"<"+e+n+o+this.tagEndChar+t+this.indentate(i)+r:this.indentate(i)+"<"+e+n+o+">"+t+r}},j.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},j.prototype.buildTextValNode=function(t,e,n,i){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(i)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(i)+"<"+e+n+"?"+this.tagEndChar;{let r=this.options.tagValueProcessor(e,t);return r=this.replaceEntitiesValue(r),""===r?this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(i)+"<"+e+n+">"+r+"</"+e+this.tagEndChar}},j.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t};const T=(0,r.YK)().setApp("comments").detectUser().build();!function(t){typeof window._nc_fileactions>"u"&&(window._nc_fileactions=[],a.debug("FileActions initialized")),window._nc_fileactions.find((e=>e.id===t.id))?a.error(`FileAction ${t.id} already registered`,{action:t}):window._nc_fileactions.push(t)}(new class{_action;constructor(t){this.validateAction(t),this._action=t}get id(){return this._action.id}get displayName(){return this._action.displayName}get title(){return this._action.title}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get parent(){return this._action.parent}get default(){return this._action.default}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(t){if(!t.id||"string"!=typeof t.id)throw new Error("Invalid id");if(!t.displayName||"function"!=typeof t.displayName)throw new Error("Invalid displayName function");if("title"in t&&"function"!=typeof t.title)throw new Error("Invalid title function");if(!t.iconSvgInline||"function"!=typeof t.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!t.exec||"function"!=typeof t.exec)throw new Error("Invalid exec function");if("enabled"in t&&"function"!=typeof t.enabled)throw new Error("Invalid enabled function");if("execBatch"in t&&"function"!=typeof t.execBatch)throw new Error("Invalid execBatch function");if("order"in t&&"number"!=typeof t.order)throw new Error("Invalid order");if("parent"in t&&"string"!=typeof t.parent)throw new Error("Invalid parent");if(t.default&&!Object.values(l).includes(t.default))throw new Error("Invalid default");if("inline"in t&&"function"!=typeof t.inline)throw new Error("Invalid inline function");if("renderInline"in t&&"function"!=typeof t.renderInline)throw new Error("Invalid renderInline function")}}({id:"comments-unread",title(t){const e=t[0].attributes["comments-unread"];return e>=0?(0,o.zw)("comments","1 new comment","{unread} new comments",e,{unread:e}):(0,o.Tl)("comments","Comment")},displayName:()=>"",iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-comment-processing" viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M17,11V9H15V11H17M13,11V9H11V11H13M9,11V9H7V11H9Z" /></svg>',enabled(t){const e=t[0].attributes["comments-unread"];return"number"==typeof e&&e>0},async exec(t){try{return window.OCA.Files.Sidebar.setActiveTab("comments"),await window.OCA.Files.Sidebar.open(t.path),null}catch(t){return T.error("Error while opening sidebar",{error:t}),!1}},inline:()=>!0,order:-140}))}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,t=[],i.O=(e,n,r,o)=>{if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],o=t[c][2];for(var a=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(i.O).every((t=>i.O[t](n[u])))?n.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,r,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=3260,(()=>{i.b=document.baseURI||self.location.href;var t={3260:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,s=n[0],a=n[1],u=n[2],l=0;if(s.some((e=>0!==t[e]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var c=u(i)}for(e&&e(n);l<s.length;l++)o=s[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0;var r=i.O(void 0,[4208],(()=>i(1107)));r=i.O(r)})();
//# sourceMappingURL=comments-init.js.map?v=3113606f214df11de093