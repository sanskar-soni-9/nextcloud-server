"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[1544],{77796:(t,e,r)=>{r.d(e,{K:()=>i});const a=["post","showcase","carousel"],i={type:{type:String,required:!0,validator:t=>"string"==typeof t&&a.includes(t)},id:{type:String,required:!0},date:{type:Number,required:!1,default:void 0},expiryDate:{type:Number,required:!1,default:void 0},headline:{type:Object,required:!1,default:()=>null},link:{type:String,required:!1,default:()=>null}}},74640:(t,e,r)=>{r.d(e,{O:()=>n});var a=r(53334),i=r(85471);const n=t=>{const e=(0,a.Z0)();return(0,i.EW)((()=>null!=t&&t.value?((t,e)=>{var r,a,i;return null!==(r=null!==(a=null!==(i=t[e])&&void 0!==i?i:t[e.split("_")[0]])&&void 0!==a?a:t.en)&&void 0!==r?r:null})(t.value,e):null))}},68578:(t,e,r)=>{r.d(e,{A:()=>o});var a=r(71354),i=r.n(a),n=r(76314),d=r.n(n)()(i());d.push([t.id,".app-discover-post[data-v-050320e2]{max-height:300px;width:100%;background-color:var(--color-primary-element-light);border-radius:var(--border-radius-rounded);display:flex;flex-direction:row;justify-content:start}.app-discover-post--reverse[data-v-050320e2]{flex-direction:row-reverse}.app-discover-post h3[data-v-050320e2],.app-discover-post h4[data-v-050320e2]{font-size:24px;font-weight:600;margin-block:0 1em}.app-discover-post__text[data-v-050320e2]{display:block;width:100%;padding:var(--border-radius-rounded);overflow-y:scroll}.app-discover-post:has(.app-discover-post__media) .app-discover-post__text[data-v-050320e2]{padding-block-end:0}.app-discover-post__media[data-v-050320e2]{display:block;overflow:hidden;max-width:450px;border-radius:var(--border-radius-rounded)}.app-discover-post__media--fullwidth[data-v-050320e2]{max-width:unset;max-height:unset}.app-discover-post__media--end[data-v-050320e2]{border-end-start-radius:0;border-start-start-radius:0}.app-discover-post__media--start[data-v-050320e2]{border-end-end-radius:0;border-start-end-radius:0}.app-discover-post__media img[data-v-050320e2],.app-discover-post__media-element[data-v-050320e2]{height:100%;width:100%;object-fit:cover;object-position:center}.app-discover-post__play-icon[data-v-050320e2]{position:absolute;top:-46px;right:-46px}.app-discover-post__play-icon-wrapper[data-v-050320e2]{position:relative;top:-50%;left:-50%}.app-discover-post--small.app-discover-post[data-v-050320e2]{flex-direction:column;max-height:500px}.app-discover-post--small.app-discover-post--reverse[data-v-050320e2]{flex-direction:column-reverse}.app-discover-post--small .app-discover-post__text[data-v-050320e2]{flex:1 1 50%}.app-discover-post--small .app-discover-post__media[data-v-050320e2]{min-width:100%}.app-discover-post--small .app-discover-post__media--end[data-v-050320e2]{border-radius:var(--border-radius-rounded);border-start-end-radius:0;border-start-start-radius:0}.app-discover-post--small .app-discover-post__media--start[data-v-050320e2]{border-radius:var(--border-radius-rounded);border-end-end-radius:0;border-end-start-radius:0}","",{version:3,sources:["webpack://./apps/settings/src/components/AppStoreDiscover/PostType.vue"],names:[],mappings:"AACA,oCACC,gBAAA,CACA,UAAA,CACA,mDAAA,CACA,0CAAA,CAEA,YAAA,CACA,kBAAA,CACA,qBAAA,CAEA,6CACC,0BAAA,CAGD,8EACC,cAAA,CACA,eAAA,CACA,kBAAA,CAGD,0CACC,aAAA,CACA,UAAA,CACA,oCAAA,CACA,iBAAA,CAID,4FACC,mBAAA,CAGD,2CACC,aAAA,CACA,eAAA,CAEA,eAAA,CACA,0CAAA,CAEA,sDACC,eAAA,CACA,gBAAA,CAGD,gDACC,yBAAA,CACA,2BAAA,CAGD,kDACC,uBAAA,CACA,yBAAA,CAGD,kGACC,WAAA,CACA,UAAA,CACA,gBAAA,CACA,sBAAA,CAIF,+CAOC,iBAAA,CACA,SAAA,CACA,WAAA,CARA,uDACC,iBAAA,CACA,QAAA,CACA,SAAA,CAUF,6DACC,qBAAA,CACA,gBAAA,CAEA,sEACC,6BAAA,CAKD,oEACC,YAAA,CAGD,qEACC,cAAA,CAEA,0EACC,0CAAA,CACA,yBAAA,CACA,2BAAA,CAGD,4EACC,0CAAA,CACA,uBAAA,CACA,yBAAA",sourcesContent:["\n.app-discover-post {\n\tmax-height: 300px;\n\twidth: 100%;\n\tbackground-color: var(--color-primary-element-light);\n\tborder-radius: var(--border-radius-rounded);\n\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: start;\n\n\t&--reverse {\n\t\tflex-direction: row-reverse;\n\t}\n\n\th3, h4 {\n\t\tfont-size: 24px;\n\t\tfont-weight: 600;\n\t\tmargin-block: 0 1em;\n\t}\n\n\t&__text {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tpadding: var(--border-radius-rounded);\n\t\toverflow-y: scroll;\n\t}\n\n\t// If there is media next to the text we do not want a padding on the bottom as this looks weird when scrolling\n\t&:has(&__media) &__text {\n\t\tpadding-block-end: 0;\n\t}\n\n\t&__media {\n\t\tdisplay: block;\n\t\toverflow: hidden;\n\n\t\tmax-width: 450px;\n\t\tborder-radius: var(--border-radius-rounded);\n\n\t\t&--fullwidth {\n\t\t\tmax-width: unset;\n\t\t\tmax-height: unset;\n\t\t}\n\n\t\t&--end {\n\t\t\tborder-end-start-radius: 0;\n\t\t\tborder-start-start-radius: 0;\n\t\t}\n\n\t\t&--start {\n\t\t\tborder-end-end-radius: 0;\n\t\t\tborder-start-end-radius: 0;\n\t\t}\n\n\t\timg, &-element {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\t}\n\n\t&__play-icon {\n\t\t&-wrapper {\n\t\t\tposition: relative;\n\t\t\ttop: -50%;\n\t\t\tleft: -50%;\n\t\t}\n\n\t\tposition: absolute;\n\t\ttop: -46px; // half of the icon height\n\t\tright: -46px; // half of the icon width\n\t}\n}\n\n.app-discover-post--small {\n\t&.app-discover-post {\n\t\tflex-direction: column;\n\t\tmax-height: 500px;\n\n\t\t&--reverse {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n\n\t.app-discover-post {\n\t\t&__text {\n\t\t\tflex: 1 1 50%;\n\t\t}\n\n\t\t&__media {\n\t\t\tmin-width: 100%;\n\n\t\t\t&--end {\n\t\t\t\tborder-radius: var(--border-radius-rounded);\n\t\t\t\tborder-start-end-radius: 0;\n\t\t\t\tborder-start-start-radius: 0;\n\t\t\t}\n\n\t\t\t&--start {\n\t\t\t\tborder-radius: var(--border-radius-rounded);\n\t\t\t\tborder-end-end-radius: 0;\n\t\t\t\tborder-end-start-radius: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const o=d},21544:(t,e,r)=>{r.r(e),r.d(e,{default:()=>I});var a=r(9165),i=r(63814),n=r(13073),d=r(85471),o=r(77796),s=r(74640),l=r(6695),p=r(38613),A=r(40173);const u=Object.fromEntries(Object.entries((0,p.C)("core","apps")).map((t=>{var e;let[r,a]=t;return[null!==(e=a.app)&&void 0!==e?e:r,a.href]}))),c=(0,d.pM)({name:"AppLink",components:{RouterLink:A.Wk},props:{href:{type:String,required:!0}},data:()=>({routerProps:void 0,linkProps:void 0}),watch:{href:{immediate:!0,handler(){var t,e;const r=this.href.match(/^app:\/\/([^/]+)(\/.+)?$/);if(this.routerProps=void 0,this.linkProps=void 0,null===r)return void(this.linkProps={href:this.href,target:"_blank",rel:"noreferrer noopener"});const a=r[1];r[2]?this.linkProps={href:(0,i.Jv)("/apps/".concat(a).concat(r[2]))}:a in u?this.linkProps={href:u[a]}:this.routerProps={to:{name:"apps-details",params:{category:null!==(t=null===(e=this.$route.params)||void 0===e?void 0:e.category)&&void 0!==t?t:"discover",id:a}}}}}}});var v=r(14486);const m=(0,v.A)(c,(function(){var t=this,e=t._self._c;return t._self._setupProxy,t.linkProps?e("a",t._b({},"a",t.linkProps,!1),[t._t("default")],2):t.routerProps?e("RouterLink",t._b({},"RouterLink",t.routerProps,!1),[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,C=(0,d.pM)({components:{AppLink:m,NcIconSvgWrapper:l.A},props:{...o.K,text:{type:Object,required:!1,default:()=>null},media:{type:Object,required:!1,default:()=>null},inline:{type:Boolean,required:!1,default:!1},domId:{type:String,required:!1,default:null}},setup(t){const e=(0,s.O)((0,d.EW)((()=>t.headline))),r=(0,s.O)((0,d.EW)((()=>t.text))),o=(0,s.O)((0,d.EW)((()=>{var e;return null===(e=t.media)||void 0===e?void 0:e.content}))),l=(0,d.EW)((()=>null!==o.value?[o.value.src].flat():void 0)),p=(0,d.EW)((()=>{var t,e;return null!==(t=null===(e=o.value)||void 0===e?void 0:e.alt)&&void 0!==t?t:""})),A=(0,d.EW)((()=>{var t;return!0===(null==l||null===(t=l.value)||void 0===t?void 0:t[0].mime.startsWith("image/"))})),u=(0,d.EW)((()=>!e.value&&!r.value)),c=(0,d.EW)((()=>{var e,r;return null!==(e=null===(r=o.value)||void 0===r?void 0:r.link)&&void 0!==e?e:t.link})),v=(0,d.KR)(!1),m=(0,d.EW)((()=>{var t;return(null===(t=o.value)||void 0===t?void 0:t.link)&&v.value})),C=(0,d.KR)(),{width:h}=(0,n.Lhy)(C),_=(0,d.EW)((()=>h.value<600)),f=(0,d.KR)(),g=(0,n.ITo)(f,{threshold:.3});return(0,d.nT)((()=>{if(!A.value&&f.value){const t=f.value;g.value?(t.muted=!0,t.play()):(t.pause(),t.ended&&(t.currentTime=0,v.value=!1))}})),{mdiPlayCircleOutline:a.Nwy,container:C,translatedText:r,translatedHeadline:e,mediaElement:f,mediaSources:l,mediaAlt:p,mediaLink:c,hasPlaybackEnded:v,showPlayVideo:m,isFullWidth:u,isSmallWidth:_,isImage:A,generatePrivacyUrl:t=>t.startsWith("/")?t:(0,i.Jv)("/settings/api/apps/media?fileName={fileName}",{fileName:t})}}});var h=r(85072),_=r.n(h),f=r(97825),g=r.n(f),b=r(77659),y=r.n(b),x=r(55056),k=r.n(x),w=r(10540),E=r.n(w),P=r(41113),B=r.n(P),W=r(68578),D={};D.styleTagTransform=B(),D.setAttributes=k(),D.insert=y().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=E(),_()(W.A,D),W.A&&W.A.locals&&W.A.locals;const I=(0,v.A)(C,(function(){var t,e,r=this,a=r._self._c;return r._self._setupProxy,a("article",{ref:"container",staticClass:"app-discover-post",class:{"app-discover-post--reverse":r.media&&"start"===r.media.alignment,"app-discover-post--small":r.isSmallWidth},attrs:{id:r.domId}},[r.headline||r.text?a(r.link?"AppLink":"div",{tag:"component",staticClass:"app-discover-post__text",attrs:{href:r.link}},[a(r.inline?"h4":"h3",{tag:"component"},[r._v("\n\t\t\t"+r._s(r.translatedHeadline)+"\n\t\t")]),r._v(" "),a("p",[r._v(r._s(r.translatedText))])],1):r._e(),r._v(" "),r.mediaSources?a(r.mediaLink?"AppLink":"div",{tag:"component",staticClass:"app-discover-post__media",class:{"app-discover-post__media--fullwidth":r.isFullWidth,"app-discover-post__media--start":"start"===(null===(t=r.media)||void 0===t?void 0:t.alignment),"app-discover-post__media--end":"end"===(null===(e=r.media)||void 0===e?void 0:e.alignment)},attrs:{href:r.mediaLink}},[a(r.isImage?"picture":"video",{ref:"mediaElement",tag:"component",staticClass:"app-discover-post__media-element",attrs:{muted:!r.isImage,playsinline:!r.isImage,preload:!r.isImage&&"auto"},on:{ended:function(t){r.hasPlaybackEnded=!0}}},[r._l(r.mediaSources,(function(t){return a("source",{key:t.src,attrs:{src:r.isImage?void 0:r.generatePrivacyUrl(t.src),srcset:r.isImage?r.generatePrivacyUrl(t.src):void 0,type:t.mime}})})),r._v(" "),r.isImage?a("img",{attrs:{src:r.generatePrivacyUrl(r.mediaSources[0].src),alt:r.mediaAlt}}):r._e()],2),r._v(" "),a("div",{staticClass:"app-discover-post__play-icon-wrapper"},[!r.isImage&&r.showPlayVideo?a("NcIconSvgWrapper",{staticClass:"app-discover-post__play-icon",attrs:{path:r.mdiPlayCircleOutline,size:92}}):r._e()],1)],1):r._e()],1)}),[],!1,null,"050320e2",null).exports}}]);
//# sourceMappingURL=1544-1544.js.map?v=acc6fd4ab4b60df8eecb