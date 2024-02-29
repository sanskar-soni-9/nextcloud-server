/*! For license information please see user_status-menu.js.LICENSE.txt */
(()=>{var s,e,a,r={25810:(s,e,a)=>{"use strict";var r=a(20144),n=a(77958),o=a(69183),u=a(54572),i=a(35153),c=a(20296),l=a.n(c),d=a(93664),m=a(79753),p=a(84387),g=a(25108);const h={name:"UserStatus",components:{NcButton:u.Z,NcUserStatusIcon:i.Z,SetStatusModal:()=>Promise.all([a.e(7874),a.e(8299)]).then(a.bind(a,48689))},mixins:[p.Z],props:{inline:{type:Boolean,default:!1}},data:()=>({heartbeatInterval:null,isAway:!1,isModalOpen:!1,mouseMoveListener:null,setAwayTimeout:null}),mounted(){this.$store.dispatch("loadStatusFromInitialState"),OC.config.session_keepalive&&(this.heartbeatInterval=setInterval(this._backgroundHeartbeat.bind(this),3e5),this.setAwayTimeout=()=>{this.isAway=!0},this.mouseMoveListener=l()((()=>{const t=this.isAway;this.isAway=!1,clearTimeout(this.setAwayTimeout),setTimeout(this.setAwayTimeout,12e4),t&&this._backgroundHeartbeat()}),2e3,!0),window.addEventListener("mousemove",this.mouseMoveListener,{capture:!0,passive:!0}),this._backgroundHeartbeat()),(0,o.Ld)("user_status:status.updated",this.handleUserStatusUpdated)},beforeDestroy(){window.removeEventListener("mouseMove",this.mouseMoveListener),clearInterval(this.heartbeatInterval),(0,o.r1)("user_status:status.updated",this.handleUserStatusUpdated)},methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},async _backgroundHeartbeat(){try{const t=await(async t=>{const s=(0,m.generateOcsUrl)("apps/user_status/api/v1/heartbeat?format=json");return(await d.Z.put(s,{status:t?"away":"online"})).data.ocs.data})(this.isAway);t?.userId?this.$store.dispatch("setStatusFromHeartbeat",t):await this.$store.dispatch("reFetchStatusFromServer")}catch(t){g.debug("Failed sending heartbeat, got: "+t.response?.status)}},handleUserStatusUpdated(t){OC.getCurrentUser().uid===t.userId&&this.$store.dispatch("setStatusFromObject",{status:t.status,icon:t.icon,message:t.message})}}};var v=a(93379),j=a.n(v),f=a(7795),A=a.n(f),b=a(90569),y=a.n(b),k=a(3565),w=a.n(k),S=a(19216),C=a.n(S),I=a(44589),_=a.n(I),x=a(68163),O={};O.styleTagTransform=_(),O.setAttributes=w(),O.insert=y().bind(null,"head"),O.domAPI=A(),O.insertStyleElement=C(),j()(x.Z,O),x.Z&&x.Z.locals&&x.Z.locals;const M=(0,a(51900).Z)(h,(function(){var t=this,s=t._self._c;return s(t.inline?"div":"li",{tag:"component"},[t.inline?s("NcButton",{on:{click:function(s){return s.stopPropagation(),t.openModal.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[s("NcUserStatusIcon",{staticClass:"user-status-icon",attrs:{status:t.statusType,"aria-hidden":"true"}})]},proxy:!0}])},[t._v("\n\t\t"+t._s(t.visibleMessage)+"\n\t")]):s("button",{staticClass:"user-status-menu-item",on:{click:function(s){return s.stopPropagation(),t.openModal.apply(null,arguments)}}},[s("NcUserStatusIcon",{staticClass:"user-status-icon",attrs:{status:t.statusType,"aria-hidden":"true"}}),t._v("\n\t\t"+t._s(t.visibleMessage)+"\n\t")],1),t._v(" "),t.isModalOpen?s("SetStatusModal",{attrs:{inline:t.inline},on:{close:t.closeModal}}):t._e()],1)}),[],!1,null,"2c5c2586",null).exports;var U=a(20629);const P={state:{predefinedStatuses:[]},mutations:{addPredefinedStatus(t,s){t.predefinedStatuses=[...t.predefinedStatuses,s]}},getters:{statusesHaveLoaded:t=>t.predefinedStatuses.length>0},actions:{async loadAllPredefinedStatuses(t){let{state:s,commit:e}=t;if(s.predefinedStatuses.length>0)return;const a=await(async()=>{const t=(0,m.generateOcsUrl)("apps/user_status/api/v1/predefined_statuses?format=json");return(await d.Z.get(t)).data.ocs.data})();for(const t of a)e("addPredefinedStatus",t)}}};var z=a(43554),T=a(64039),F=a(80351),Z=a.n(F);const D=t=>{if(null===t)return null;const s=(0,T.n)();if("period"===t.type)return s.setSeconds(s.getSeconds()+t.time),Math.floor(s.getTime()/1e3);if("end-of"===t.type)switch(t.time){case"day":case"week":return Number(Z()(s).endOf(t.time).format("X"))}return"_time"===t.type?t.time:null},E={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{setStatus(t,s){let{statusType:e}=s;t.status=e,t.statusIsUserDefined=!0},setPredefinedMessage(t,s){let{messageId:e,clearAt:a,message:r,icon:n}=s;t.messageId=e,t.messageIsPredefined=!0,t.message=r,t.icon=n,t.clearAt=a},setCustomMessage(t,s){let{message:e,icon:a,clearAt:r}=s;t.messageId=null,t.messageIsPredefined=!1,t.message=e,t.icon=a,t.clearAt=r},clearMessage(t){t.messageId=null,t.messageIsPredefined=!1,t.message=null,t.icon=null,t.clearAt=null},loadStatusFromServer(t,s){let{status:e,statusIsUserDefined:a,message:r,icon:n,clearAt:o,messageIsPredefined:u,messageId:i}=s;t.status=e,t.message=r,t.icon=n,void 0!==a&&(t.statusIsUserDefined=a),void 0!==o&&(t.clearAt=o),void 0!==u&&(t.messageIsPredefined=u),void 0!==i&&(t.messageId=i)}},getters:{},actions:{async setStatus(t,s){let{commit:e,state:a}=t,{statusType:r}=s;await(async t=>{const s=(0,m.generateOcsUrl)("apps/user_status/api/v1/user_status/status");await d.Z.put(s,{statusType:t})})(r),e("setStatus",{statusType:r}),(0,o.j8)("user_status:status.updated",{status:a.status,message:a.message,icon:a.icon,clearAt:a.clearAt,userId:(0,n.ts)()?.uid})},async setStatusFromObject(t,s){let{commit:e,state:a}=t;e("loadStatusFromServer",s)},async setPredefinedMessage(t,s){let{commit:e,rootState:a,state:r}=t,{messageId:u,clearAt:i}=s;const c=D(i);await async function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const e=(0,m.generateOcsUrl)("apps/user_status/api/v1/user_status/message/predefined?format=json");await d.Z.put(e,{messageId:t,clearAt:s})}(u,c);const l=a.predefinedStatuses.predefinedStatuses.find((t=>t.id===u)),{message:p,icon:g}=l;e("setPredefinedMessage",{messageId:u,clearAt:c,message:p,icon:g}),(0,o.j8)("user_status:status.updated",{status:r.status,message:r.message,icon:r.icon,clearAt:r.clearAt,userId:(0,n.ts)()?.uid})},async setCustomMessage(t,s){let{commit:e,state:a}=t,{message:r,icon:u,clearAt:i}=s;const c=D(i);await async function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const a=(0,m.generateOcsUrl)("apps/user_status/api/v1/user_status/message/custom?format=json");await d.Z.put(a,{message:t,statusIcon:s,clearAt:e})}(r,u,c),e("setCustomMessage",{message:r,icon:u,clearAt:c}),(0,o.j8)("user_status:status.updated",{status:a.status,message:a.message,icon:a.icon,clearAt:a.clearAt,userId:(0,n.ts)()?.uid})},async clearMessage(t){let{commit:s,state:e}=t;await(async()=>{const t=(0,m.generateOcsUrl)("apps/user_status/api/v1/user_status/message?format=json");await d.Z.delete(t)})(),s("clearMessage"),(0,o.j8)("user_status:status.updated",{status:e.status,message:e.message,icon:e.icon,clearAt:e.clearAt,userId:(0,n.ts)()?.uid})},async reFetchStatusFromServer(t){let{commit:s}=t;s("loadStatusFromServer",await(async()=>{const t=(0,m.generateOcsUrl)("apps/user_status/api/v1/user_status");return(await d.Z.get(t)).data.ocs.data})())},async setStatusFromHeartbeat(t,s){let{commit:e}=t;e("loadStatusFromServer",s)},loadStatusFromInitialState(t){let{commit:s}=t;s("loadStatusFromServer",(0,z.j)("user_status","status"))}}},$={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{loadBackupStatusFromServer(t,s){let{status:e,statusIsUserDefined:a,message:r,icon:n,clearAt:o,messageIsPredefined:u,messageId:i}=s;t.status=e,t.message=r,t.icon=n,void 0!==a&&(t.statusIsUserDefined=a),void 0!==o&&(t.clearAt=o),void 0!==u&&(t.messageIsPredefined=u),void 0!==i&&(t.messageId=i)}},getters:{},actions:{async fetchBackupFromServer(t){let{commit:s}=t;try{s("loadBackupStatusFromServer",await(async t=>{const s=(0,m.generateOcsUrl)("apps/user_status/api/v1/statuses/{userId}",{userId:"_"+t});return(await d.Z.get(s)).data.ocs.data})((0,n.ts)()?.uid))}catch(t){}},async revertBackupFromServer(t,s){let{commit:e}=t,{messageId:a}=s;const r=await(async t=>{const s=(0,m.generateOcsUrl)("apps/user_status/api/v1/user_status/revert/{messageId}",{messageId:t});return(await d.Z.delete(s)).data.ocs.data})(a);r&&(e("loadBackupStatusFromServer",{}),e("loadStatusFromServer",r),(0,o.j8)("user_status:status.updated",{status:r.status,message:r.message,icon:r.icon,clearAt:r.clearAt,userId:(0,n.ts)()?.uid}))}}};r.ZP.use(U.ZP);const B=new U.yh({modules:{predefinedStatuses:P,userStatus:E,userBackupStatus:$},strict:!0});a.nc=btoa((0,n.IH)()),r.ZP.prototype.t=t,r.ZP.prototype.$t=t;const L=()=>{const t=document.getElementById("user_status-menu-entry");new r.ZP({el:t,render:t=>t(M),store:B})};document.getElementById("user_status-menu-entry")?L():(0,o.Ld)("core:user-menu:mounted",L),document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard&&OCA.Dashboard.registerStatus("status",(t=>new(r.ZP.extend(M))({propsData:{inline:!0},store:B}).$mount(t)))}))},84387:(t,s,e)=>{"use strict";e.d(s,{Z:()=>o});var a=e(20629),r=e(64024),n=e(25108);const o={computed:{...(0,a.rn)({statusType:t=>t.userStatus.status,statusIsUserDefined:t=>t.userStatus.statusIsUserDefined,customIcon:t=>t.userStatus.icon,customMessage:t=>t.userStatus.message}),visibleMessage(){if(this.customIcon&&this.customMessage)return`${this.customIcon} ${this.customMessage}`;if(this.customMessage)return this.customMessage;if(this.statusIsUserDefined)switch(this.statusType){case"online":return this.$t("user_status","Online");case"away":case"busy":return this.$t("user_status","Away");case"dnd":return this.$t("user_status","Do not disturb");case"invisible":return this.$t("user_status","Invisible");case"offline":return this.$t("user_status","Offline")}return this.$t("user_status","Set status")}},methods:{async changeStatus(t){try{await this.$store.dispatch("setStatus",{statusType:t})}catch(t){(0,r.x2)(this.$t("user_status","There was an error saving the new status")),n.debug(t)}}}}},64039:(t,s,e)=>{"use strict";e.d(s,{n:()=>a});const a=()=>new Date},68163:(t,s,e)=>{"use strict";e.d(s,{Z:()=>u});var a=e(87537),r=e.n(a),n=e(23645),o=e.n(n)()(r());o.push([t.id,".user-status-menu-item[data-v-2c5c2586]{--color-text-maxcontrast: var(--color-text-maxcontrast-background-blur, var(--color-main-text));width:auto;min-width:44px;height:44px;margin:0;border:0;border-radius:var(--border-radius-pill);background-color:var(--color-main-background-blur);font-size:inherit;font-weight:normal;-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur)}.user-status-menu-item[data-v-2c5c2586]:active,.user-status-menu-item[data-v-2c5c2586]:hover,.user-status-menu-item[data-v-2c5c2586]:focus-visible{background-color:var(--color-background-hover)}.user-status-menu-item[data-v-2c5c2586]:focus-visible{box-shadow:0 0 0 4px var(--color-main-background) !important;outline:2px solid var(--color-main-text) !important}.user-status-icon[data-v-2c5c2586]{width:16px;height:16px;margin-right:10px;opacity:1 !important;background-size:16px;vertical-align:middle !important}","",{version:3,sources:["webpack://./apps/user_status/src/UserStatus.vue"],names:[],mappings:"AACA,wCAEC,+FAAA,CAEA,UAAA,CACA,cAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,uCAAA,CACA,kDAAA,CACA,iBAAA,CACA,kBAAA,CAEA,8CAAA,CACA,sCAAA,CAEA,mJAGC,8CAAA,CAED,sDACC,4DAAA,CACA,mDAAA,CAIF,mCACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,oBAAA,CACA,oBAAA,CACA,gCAAA",sourcesContent:["\n.user-status-menu-item {\n\t// Ensure the maxcontrast color is set for the background\n\t--color-text-maxcontrast: var(--color-text-maxcontrast-background-blur, var(--color-main-text));\n\n\twidth: auto;\n\tmin-width: 44px;\n\theight: 44px;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: var(--border-radius-pill);\n\tbackground-color: var(--color-main-background-blur);\n\tfont-size: inherit;\n\tfont-weight: normal;\n\n\t-webkit-backdrop-filter: var(--background-blur);\n\tbackdrop-filter: var(--background-blur);\n\n\t&:active,\n\t&:hover,\n\t&:focus-visible {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\t&:focus-visible {\n\t\tbox-shadow: 0 0 0 4px var(--color-main-background) !important;\n\t\toutline: 2px solid var(--color-main-text) !important;\n\t}\n}\n\n.user-status-icon {\n\twidth: 16px;\n\theight: 16px;\n\tmargin-right: 10px;\n\topacity: 1 !important;\n\tbackground-size: 16px;\n\tvertical-align: middle !important;\n}\n"],sourceRoot:""}]);const u=o},46700:(t,s,e)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=46700},35153:(t,s,e)=>{"use strict";e.d(s,{Z:()=>a.N});var a=e(56371)}},n={};function o(t){var s=n[t];if(void 0!==s)return s.exports;var e=n[t]={id:t,loaded:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}o.m=r,s=[],o.O=(t,e,a,r)=>{if(!e){var n=1/0;for(l=0;l<s.length;l++){e=s[l][0],a=s[l][1],r=s[l][2];for(var u=!0,i=0;i<e.length;i++)(!1&r||n>=r)&&Object.keys(o.O).every((t=>o.O[t](e[i])))?e.splice(i--,1):(u=!1,r<n&&(n=r));if(u){s.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=s.length;l>0&&s[l-1][2]>r;l--)s[l]=s[l-1];s[l]=[e,a,r]},o.n=t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return o.d(s,{a:s}),s},o.d=(t,s)=>{for(var e in s)o.o(s,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((s,e)=>(o.f[e](t,s),s)),[])),o.u=t=>(8299===t?"user-status-modal":t)+"-"+t+".js?v="+{430:"77fc3fbf1e72551ad8b1",5951:"fa4bc963ebe32f314cf1",8299:"bc4385303c86d4628e89"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),e={},a="nextcloud:",o.l=(t,s,r,n)=>{if(e[t])e[t].push(s);else{var u,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==a+r){u=d;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",a+r),u.src=t),e[t]=[s];var m=(s,a)=>{u.onerror=u.onload=null,clearTimeout(p);var r=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((t=>t(a))),s)return s(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),i&&document.head.appendChild(u)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=2613,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var s=o.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var e=s.getElementsByTagName("script");if(e.length)for(var a=e.length-1;a>-1&&!t;)t=e[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={2613:0};o.f.j=(s,e)=>{var a=o.o(t,s)?t[s]:void 0;if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(((e,r)=>a=t[s]=[e,r]));e.push(a[2]=r);var n=o.p+o.u(s),u=new Error;o.l(n,(e=>{if(o.o(t,s)&&(0!==(a=t[s])&&(t[s]=void 0),a)){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+s+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}}),"chunk-"+s,s)}},o.O.j=s=>0===t[s];var s=(s,e)=>{var a,r,n=e[0],u=e[1],i=e[2],c=0;if(n.some((s=>0!==t[s]))){for(a in u)o.o(u,a)&&(o.m[a]=u[a]);if(i)var l=i(o)}for(s&&s(e);c<n.length;c++)r=n[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(l)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))})(),o.nc=void 0;var u=o.O(void 0,[7874],(()=>o(25810)));u=o.O(u)})();
//# sourceMappingURL=user_status-menu.js.map?v=13e53749abe23b99f49a