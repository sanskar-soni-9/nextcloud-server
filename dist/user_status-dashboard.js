/*! For license information please see user_status-dashboard.js.LICENSE.txt */
!function(){var n,s={93365:function(n,t,s){var e={"./af":36026,"./af.js":36026,"./ar":28093,"./ar-dz":41943,"./ar-dz.js":41943,"./ar-kw":23969,"./ar-kw.js":23969,"./ar-ly":40594,"./ar-ly.js":40594,"./ar-ma":18369,"./ar-ma.js":18369,"./ar-sa":32579,"./ar-sa.js":32579,"./ar-tn":76442,"./ar-tn.js":76442,"./ar.js":28093,"./az":86425,"./az.js":86425,"./be":22004,"./be.js":22004,"./bg":42982,"./bg.js":42982,"./bm":21067,"./bm.js":21067,"./bn":8366,"./bn.js":8366,"./bo":95040,"./bo.js":95040,"./br":521,"./br.js":521,"./bs":83242,"./bs.js":83242,"./ca":73046,"./ca.js":73046,"./cs":25794,"./cs.js":25794,"./cv":28231,"./cv.js":28231,"./cy":10927,"./cy.js":10927,"./da":42832,"./da.js":42832,"./de":29415,"./de-at":3331,"./de-at.js":3331,"./de-ch":45524,"./de-ch.js":45524,"./de.js":29415,"./dv":44700,"./dv.js":44700,"./el":88752,"./el.js":88752,"./en-SG":16706,"./en-SG.js":16706,"./en-au":90444,"./en-au.js":90444,"./en-ca":65959,"./en-ca.js":65959,"./en-gb":62762,"./en-gb.js":62762,"./en-ie":40909,"./en-ie.js":40909,"./en-il":79909,"./en-il.js":79909,"./en-nz":75200,"./en-nz.js":75200,"./eo":27447,"./eo.js":27447,"./es":86756,"./es-do":47049,"./es-do.js":47049,"./es-us":57133,"./es-us.js":57133,"./es.js":86756,"./et":72182,"./et.js":72182,"./eu":14419,"./eu.js":14419,"./fa":2916,"./fa.js":2916,"./fi":49964,"./fi.js":49964,"./fo":26094,"./fo.js":26094,"./fr":35833,"./fr-ca":56994,"./fr-ca.js":56994,"./fr-ch":2740,"./fr-ch.js":2740,"./fr.js":35833,"./fy":69542,"./fy.js":69542,"./ga":93264,"./ga.js":93264,"./gd":77457,"./gd.js":77457,"./gl":83043,"./gl.js":83043,"./gom-latn":28379,"./gom-latn.js":28379,"./gu":406,"./gu.js":406,"./he":73219,"./he.js":73219,"./hi":99834,"./hi.js":99834,"./hr":28754,"./hr.js":28754,"./hu":93945,"./hu.js":93945,"./hy-am":81319,"./hy-am.js":81319,"./id":24875,"./id.js":24875,"./is":23724,"./is.js":23724,"./it":79906,"./it-ch":34303,"./it-ch.js":34303,"./it.js":79906,"./ja":77105,"./ja.js":77105,"./jv":15026,"./jv.js":15026,"./ka":67416,"./ka.js":67416,"./kk":79734,"./kk.js":79734,"./km":60757,"./km.js":60757,"./kn":58369,"./kn.js":58369,"./ko":77687,"./ko.js":77687,"./ku":95544,"./ku.js":95544,"./ky":85431,"./ky.js":85431,"./lb":13613,"./lb.js":13613,"./lo":34252,"./lo.js":34252,"./lt":84619,"./lt.js":84619,"./lv":93760,"./lv.js":93760,"./me":93393,"./me.js":93393,"./mi":12369,"./mi.js":12369,"./mk":48664,"./mk.js":48664,"./ml":23099,"./ml.js":23099,"./mn":98539,"./mn.js":98539,"./mr":778,"./mr.js":778,"./ms":39970,"./ms-my":82625,"./ms-my.js":82625,"./ms.js":39970,"./mt":15714,"./mt.js":15714,"./my":53055,"./my.js":53055,"./nb":73945,"./nb.js":73945,"./ne":63645,"./ne.js":63645,"./nl":4829,"./nl-be":12823,"./nl-be.js":12823,"./nl.js":4829,"./nn":23756,"./nn.js":23756,"./pa-in":97877,"./pa-in.js":97877,"./pl":53066,"./pl.js":53066,"./pt":28677,"./pt-br":81592,"./pt-br.js":81592,"./pt.js":28677,"./ro":32722,"./ro.js":32722,"./ru":59138,"./ru.js":59138,"./sd":32568,"./sd.js":32568,"./se":49753,"./se.js":49753,"./si":58024,"./si.js":58024,"./sk":31058,"./sk.js":31058,"./sl":43452,"./sl.js":43452,"./sq":2795,"./sq.js":2795,"./sr":26976,"./sr-cyrl":38819,"./sr-cyrl.js":38819,"./sr.js":26976,"./ss":7467,"./ss.js":7467,"./sv":42787,"./sv.js":42787,"./sw":80298,"./sw.js":80298,"./ta":57532,"./ta.js":57532,"./te":76076,"./te.js":76076,"./tet":40452,"./tet.js":40452,"./tg":64794,"./tg.js":64794,"./th":48245,"./th.js":48245,"./tl-ph":36056,"./tl-ph.js":36056,"./tlh":15249,"./tlh.js":15249,"./tr":22053,"./tr.js":22053,"./tzl":39871,"./tzl.js":39871,"./tzm":39574,"./tzm-latn":19210,"./tzm-latn.js":19210,"./tzm.js":39574,"./ug-cn":91532,"./ug-cn.js":91532,"./uk":11432,"./uk.js":11432,"./ur":88523,"./ur.js":88523,"./uz":54958,"./uz-latn":68735,"./uz-latn.js":68735,"./uz.js":54958,"./vi":83398,"./vi.js":83398,"./x-pseudo":56665,"./x-pseudo.js":56665,"./yo":11642,"./yo.js":11642,"./zh-cn":5462,"./zh-cn.js":5462,"./zh-hk":92530,"./zh-hk.js":92530,"./zh-tw":97333,"./zh-tw.js":97333};function r(n){var t=a(n);return s(t)}function a(n){if(!s.o(e,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e[n]}r.keys=function(){return Object.keys(e)},r.resolve=a,n.exports=r,r.id=93365},70505:function(n,s,e){"use strict";var r=e(20144),a=e(22200),o=e(9944),u=e(66164),i=e(28017),j=e.n(i),l=e(97e3),c=e.n(l),d=e(16453),m=e(80351),f=e.n(m),p={name:"Dashboard",components:{Avatar:j(),DashboardWidget:u.Z,DashboardWidgetItem:u.v,EmptyContent:c()},data:function(){return{statuses:[],loading:!0}},computed:{items:function(){var n=this;return this.statuses.map((function(s){var e=s.icon||"",r=s.message||"";""===r&&("away"===s.status&&(r=t("user_status","Away")),"dnd"===s.status&&(r=t("user_status","Do not disturb")));var a,o=""!==s.icon?"".concat(e," ").concat(r):r;return a=null===s.icon&&""===r&&null===s.timestamp?"":null===s.icon&&""===r&&null!==s.timestamp?f()(s.timestamp,"X").fromNow():null!==s.timestamp?n.t("user_status","{status}, {timestamp}",{status:o,timestamp:f()(s.timestamp,"X").fromNow()},null,{escape:!1,sanitize:!1}):o,{mainText:s.displayName,subText:a,avatarUsername:s.userId}}))}},mounted:function(){try{this.statuses=(0,d.loadState)("user_status","dashboard_data"),this.loading=!1}catch(n){console.error(n)}}},h=e(93379),b=e.n(h),v=e(7795),y=e.n(v),g=e(90569),k=e.n(g),w=e(3565),z=e.n(w),O=e(19216),_=e.n(O),x=e(44589),A=e.n(x),C=e(43973),D={};D.styleTagTransform=A(),D.setAttributes=z(),D.insert=k().bind(null,"head"),D.domAPI=y(),D.insertStyleElement=_(),b()(C.Z,D),C.Z&&C.Z.locals&&C.Z.locals;var T=(0,e(51900).Z)(p,(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("DashboardWidget",{attrs:{id:"user-status_panel",items:n.items,loading:n.loading},scopedSlots:n._u([{key:"default",fn:function(t){var e=t.item;return[s("DashboardWidgetItem",{attrs:{"main-text":e.mainText,"sub-text":e.subText},scopedSlots:n._u([{key:"avatar",fn:function(){return[s("Avatar",{staticClass:"item-avatar",attrs:{size:44,user:e.avatarUsername,"display-name":e.mainText,"show-user-status":!1,"show-user-status-compact":!1}})]},proxy:!0}],null,!0)})]}},{key:"empty-content",fn:function(){return[s("EmptyContent",{attrs:{id:"user_status-widget-empty-content",icon:"icon-user-status"}},[n._v("\n\t\t\t"+n._s(n.t("user_status","No recent status changes"))+"\n\t\t")])]},proxy:!0}])})}),[],!1,null,null,null).exports;e.nc=btoa((0,a.getRequestToken)()),r.default.prototype.t=o.translate,r.default.prototype.n=o.translatePlural,r.default.prototype.OC=OC,r.default.prototype.OCA=OCA,document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard.register("user_status",(function(n){new(r.default.extend(T))({propsData:{}}).$mount(n)}))}))},43973:function(n,t,s){"use strict";var e=s(94015),r=s.n(e),a=s(23645),o=s.n(a)()(r());o.push([n.id,"#user_status-widget-empty-content{text-align:center;margin-top:5vh}","",{version:3,sources:["webpack://./apps/user_status/src/views/Dashboard.vue"],names:[],mappings:"AAqHA,kCACC,iBAAA,CACA,cAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#user_status-widget-empty-content {\n\ttext-align: center;\n\tmargin-top: 5vh;\n}\n"],sourceRoot:""}]),t.Z=o}},e={};function r(n){var t=e[n];if(void 0!==t)return t.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return s[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=s,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},n=[],r.O=function(t,s,e,a){if(!s){var o=1/0;for(l=0;l<n.length;l++){s=n[l][0],e=n[l][1],a=n[l][2];for(var u=!0,i=0;i<s.length;i++)(!1&a||o>=a)&&Object.keys(r.O).every((function(n){return r.O[n](s[i])}))?s.splice(i--,1):(u=!1,a<o&&(o=a));if(u){n.splice(l--,1);var j=e();void 0!==j&&(t=j)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[s,e,a]},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,{a:t}),t},r.d=function(n,t){for(var s in t)r.o(t,s)&&!r.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:t[s]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},r.j=63,function(){var n={63:0};r.O.j=function(t){return 0===n[t]};var t=function(t,s){var e,a,o=s[0],u=s[1],i=s[2],j=0;if(o.some((function(t){return 0!==n[t]}))){for(e in u)r.o(u,e)&&(r.m[e]=u[e]);if(i)var l=i(r)}for(t&&t(s);j<o.length;j++)a=o[j],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return r.O(l)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var a=r.O(void 0,[874],(function(){return r(70505)}));a=r.O(a)}();
//# sourceMappingURL=user_status-dashboard.js.map?v=cbcee86c32f0491bac4e