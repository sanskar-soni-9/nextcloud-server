/*! For license information please see files-sidebar.js.LICENSE.txt */
!function(){var e,n={2784:function(e,n,i){"use strict";var r=i(20144),o=i(9944),s=i(65358),a=i(19755),l=i.n(a),c=i(4820),u=i(74854),d=i(80351),f=i.n(d),p=i(41922),h=i(10250),m=i.n(h),b=i(45400),v=i.n(b),g=i(93455),y=i.n(g);function j(e,t,n,i,r,o,s){try{var a=e[o](s),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(i,r)}function w(e){return A.apply(this,arguments)}function A(){var e;return e=regeneratorRuntime.mark((function e(t){var n,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.default)({method:"PROPFIND",url:t,data:'<?xml version="1.0"?>\n\t\t\t<d:propfind  xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t<d:prop>\n\t\t\t\t<d:getlastmodified />\n\t\t\t\t<d:getetag />\n\t\t\t\t<d:getcontenttype />\n\t\t\t\t<d:resourcetype />\n\t\t\t\t<oc:fileid />\n\t\t\t\t<oc:permissions />\n\t\t\t\t<oc:size />\n\t\t\t\t<d:getcontentlength />\n\t\t\t\t<nc:has-preview />\n\t\t\t\t<nc:mount-type />\n\t\t\t\t<nc:is-encrypted />\n\t\t\t\t<ocs:share-permissions />\n\t\t\t\t<nc:share-attributes />\n\t\t\t\t<oc:tags />\n\t\t\t\t<oc:favorite />\n\t\t\t\t<oc:comments-unread />\n\t\t\t\t<oc:owner-id />\n\t\t\t\t<oc:owner-display-name />\n\t\t\t\t<oc:share-types />\n\t\t\t</d:prop>\n\t\t\t</d:propfind>'});case 2:return n=e.sent,i=OCA.Files.App.fileList.filesClient._client.parseMultiStatus(n.data),(r=OCA.Files.App.fileList.filesClient._parseFileInfo(i[0])).get=function(e){return r[e]},r.isDirectory=function(){return"httpd/unix-directory"===r.mimetype},e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})),A=function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function s(e){j(o,i,r,s,a,"next",e)}function a(e){j(o,i,r,s,a,"throw",e)}s(void 0)}))},A.apply(this,arguments)}var O=i(62574);function _(e,t,n,i,r,o,s){try{var a=e[o](s),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(i,r)}function C(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function s(e){_(o,i,r,s,a,"next",e)}function a(e){_(o,i,r,s,a,"throw",e)}s(void 0)}))}}var k={name:"SidebarTab",components:{NcAppSidebarTab:i.n(O)(),NcEmptyContent:y()},props:{fileInfo:{type:Object,default:function(){},required:!0},id:{type:String,required:!0},name:{type:String,required:!0},icon:{type:String,required:!0},onMount:{type:Function,required:!0},onUpdate:{type:Function,required:!0},onDestroy:{type:Function,required:!0},onScrollBottomReached:{type:Function,default:function(){}}},data:function(){return{loading:!0}},computed:{activeTab:function(){return this.$parent.activeTab}},watch:{fileInfo:function(e,t){var n=this;return C(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e.id===t.id){i.next=5;break}return n.loading=!0,i.next=4,n.onUpdate(n.fileInfo);case 4:n.loading=!1;case 5:case"end":return i.stop()}}),i)})))()}},mounted:function(){var e=this;return C(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.onMount(e.$refs.mount,e.fileInfo,e.$refs.tab);case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){var e=this;return C(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onDestroy();case 2:case"end":return t.stop()}}),t)})))()}},T=i(51900),S=(0,T.Z)(k,(function(){var e=this,t=e._self._c;return t("NcAppSidebarTab",{ref:"tab",attrs:{id:e.id,name:e.name,icon:e.icon},on:{bottomReached:e.onScrollBottomReached}},[e.loading?t("NcEmptyContent",{attrs:{icon:"icon-loading"}}):e._e(),e._v(" "),t("div",{ref:"mount"})],1)}),[],!1,null,null,null).exports,x={name:"LegacyView",props:{component:{type:Object,required:!0},fileInfo:{type:Object,default:function(){},required:!0}},watch:{fileInfo:function(e){this.setFileInfo(e)}},mounted:function(){this.component.$el.replaceAll(this.$el),this.setFileInfo(this.fileInfo)},methods:{setFileInfo:function(e){this.component.setFileInfo(new OCA.Files.FileInfoModel(e))}}},I=(0,T.Z)(x,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null).exports,F=i(25108);function z(e,t,n,i,r,o,s){try{var a=e[o](s),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(i,r)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function s(e){z(o,i,r,s,a,"next",e)}function a(e){z(o,i,r,s,a,"throw",e)}s(void 0)}))}}var L={name:"Sidebar",components:{NcActionButton:v(),NcAppSidebar:m(),NcEmptyContent:y(),LegacyView:I,SidebarTab:S},data:function(){return{Sidebar:OCA.Files.Sidebar.state,error:null,loading:!0,fileInfo:null,starLoading:!1,isFullScreen:!1,hasLowHeight:!1}},computed:{file:function(){return this.Sidebar.file},tabs:function(){return this.Sidebar.tabs},views:function(){return this.Sidebar.views},davPath:function(){var e=OC.getCurrentUser().uid;return OC.linkToRemote("dav/files/".concat(e).concat((0,s.Ec)(this.file)))},activeTab:function(){return this.Sidebar.activeTab},subtitle:function(){return"".concat(this.size,", ").concat(this.time)},time:function(){return OC.Util.relativeModifiedDate(this.fileInfo.mtime)},fullTime:function(){return f()(this.fileInfo.mtime).format("LLL")},size:function(){return OC.Util.humanFileSize(this.fileInfo.size)},background:function(){return this.getPreviewIfAny(this.fileInfo)},appSidebar:function(){return this.fileInfo?{"data-mimetype":this.fileInfo.mimetype,"star-loading":this.starLoading,active:this.activeTab,background:this.background,class:{"app-sidebar--has-preview":this.fileInfo.hasPreview&&!this.isFullScreen,"app-sidebar--full":this.isFullScreen},compact:this.hasLowHeight||!this.fileInfo.hasPreview||this.isFullScreen,loading:this.loading,starred:this.fileInfo.isFavourited,subtitle:this.subtitle,subtitleTooltip:this.fullTime,title:this.fileInfo.name,titleTooltip:this.fileInfo.name}:this.error?{key:"error",subtitle:"",title:""}:{loading:this.loading,subtitle:"",title:""}},defaultAction:function(){return this.fileInfo&&OCA.Files&&OCA.Files.App&&OCA.Files.App.fileList&&OCA.Files.App.fileList.fileActions&&OCA.Files.App.fileList.fileActions.getDefaultFileAction&&OCA.Files.App.fileList.fileActions.getDefaultFileAction(this.fileInfo.mimetype,this.fileInfo.type,OC.PERMISSION_READ)},defaultActionListener:function(){return this.defaultAction?"figure-click":null},isSystemTagsEnabled:function(){return OCA&&"SystemTags"in OCA}},methods:{canDisplay:function(e){return e.enabled(this.fileInfo)},resetData:function(){var e=this;this.error=null,this.fileInfo=null,this.$nextTick((function(){e.$refs.tabs&&e.$refs.tabs.updateTabs()}))},getPreviewIfAny:function(e){return e.hasPreview&&!this.isFullScreen?OC.generateUrl("/core/preview?fileId=".concat(e.id,"&x=").concat(screen.width,"&y=").concat(screen.height,"&a=true")):this.getIconUrl(e)},getIconUrl:function(e){var t=e.mimetype||"application/octet-stream";return"httpd/unix-directory"===t?"shared"===e.mountType||"shared-root"===e.mountType?OC.MimeType.getIconUrl("dir-shared"):"external-root"===e.mountType?OC.MimeType.getIconUrl("dir-external"):void 0!==e.mountType&&""!==e.mountType?OC.MimeType.getIconUrl("dir-"+e.mountType):e.shareTypes&&(e.shareTypes.indexOf(p.D.SHARE_TYPE_LINK)>-1||e.shareTypes.indexOf(p.D.SHARE_TYPE_EMAIL)>-1)?OC.MimeType.getIconUrl("dir-public"):e.shareTypes&&e.shareTypes.length>0?OC.MimeType.getIconUrl("dir-shared"):OC.MimeType.getIconUrl("dir"):OC.MimeType.getIconUrl(t)},setActiveTab:function(e){OCA.Files.Sidebar.setActiveTab(e)},toggleStarred:function(e){var n=this;return E(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,n.starLoading=!0,i.next=4,(0,c.default)({method:"PROPPATCH",url:n.davPath,data:'<?xml version="1.0"?>\n\t\t\t\t\t\t<d:propertyupdate xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t\t\t\t\t\t'.concat(e?"<d:set>":"<d:remove>","\n\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t<oc:favorite>1</oc:favorite>\n\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t").concat(e?"</d:set>":"</d:remove>","\n\t\t\t\t\t\t</d:propertyupdate>")});case 4:OCA.Files&&OCA.Files.App&&OCA.Files.App.fileList&&OCA.Files.App.fileList.fileActions&&OCA.Files.App.fileList.fileActions.triggerAction("Favorite",OCA.Files.App.fileList.getModelForFile(n.fileInfo.name),OCA.Files.App.fileList),i.next=11;break;case 7:i.prev=7,i.t0=i.catch(0),OC.Notification.showTemporary(t("files","Unable to change the favourite state of the file")),F.error("Unable to change favourite state",i.t0);case 11:n.starLoading=!1;case 12:case"end":return i.stop()}}),i,null,[[0,7]])})))()},onDefaultAction:function(){this.defaultAction&&this.defaultAction.action(this.fileInfo.name,{fileInfo:this.fileInfo,dir:this.fileInfo.dir,fileList:OCA.Files.App.fileList,$file:l()("body")})},toggleTags:function(){OCA.SystemTags&&OCA.SystemTags.View&&OCA.SystemTags.View.toggle()},open:function(e){var n=this;return E(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(n.Sidebar.file=e,!e||""===e.trim()){i.next=21;break}return n.error=null,n.loading=!0,i.prev=4,i.next=7,w(n.davPath);case 7:n.fileInfo=i.sent,n.fileInfo.dir=n.file.split("/").slice(0,-1).join("/"),n.views.forEach((function(e){e.setFileInfo(n.fileInfo)})),n.$nextTick((function(){n.$refs.tabs&&n.$refs.tabs.updateTabs()})),i.next=18;break;case 13:throw i.prev=13,i.t0=i.catch(4),n.error=t("files","Error while loading the file data"),F.error("Error while loading the file data",i.t0),new Error(i.t0);case 18:return i.prev=18,n.loading=!1,i.finish(18);case 21:case"end":return i.stop()}}),i,null,[[4,13,18,21]])})))()},close:function(){this.Sidebar.file="",this.resetData()},setFullScreenMode:function(e){var t,n,i,r;this.isFullScreen=e,e?(null===(t=document.querySelector("#content"))||void 0===t?void 0:t.classList.add("with-sidebar--full"))||null===(n=document.querySelector("#content-vue"))||void 0===n||n.classList.add("with-sidebar--full"):(null===(i=document.querySelector("#content"))||void 0===i?void 0:i.classList.remove("with-sidebar--full"))||null===(r=document.querySelector("#content-vue"))||void 0===r||r.classList.remove("with-sidebar--full")},handleOpening:function(){(0,u.j8)("files:sidebar:opening")},handleOpened:function(){(0,u.j8)("files:sidebar:opened")},handleClosing:function(){(0,u.j8)("files:sidebar:closing")},handleClosed:function(){(0,u.j8)("files:sidebar:closed")},handleWindowResize:function(){this.hasLowHeight=document.documentElement.clientHeight<1024}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)}},P=i(93379),R=i.n(P),D=i(7795),M=i.n(D),U=i(90569),q=i.n(U),B=i(3565),N=i.n(B),$=i(19216),Z=i.n($),H=i(44589),V=i.n(H),W=i(69162),K={};K.styleTagTransform=V(),K.setAttributes=N(),K.insert=q().bind(null,"head"),K.domAPI=M(),K.insertStyleElement=Z(),R()(W.Z,K),W.Z&&W.Z.locals&&W.Z.locals;var Y=(0,T.Z)(L,(function(){var e=this,t=e._self._c;return e.file?t("NcAppSidebar",e._b({ref:"sidebar",attrs:{"force-menu":!0,tabindex:"0"},on:e._d({close:e.close,"update:active":e.setActiveTab,"update:starred":e.toggleStarred,opening:e.handleOpening,opened:e.handleOpened,closing:e.handleClosing,closed:e.handleClosed},[e.defaultActionListener,function(t){return t.stopPropagation(),t.preventDefault(),e.onDefaultAction.apply(null,arguments)}]),scopedSlots:e._u([e.fileInfo?{key:"description",fn:function(){return e._l(e.views,(function(n){return t("LegacyView",{key:n.cid,attrs:{component:n,"file-info":e.fileInfo}})}))},proxy:!0}:null,e.fileInfo?{key:"secondary-actions",fn:function(){return[e.isSystemTagsEnabled?t("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-tag"},on:{click:e.toggleTags}},[e._v("\n\t\t\t"+e._s(e.t("files","Tags"))+"\n\t\t")]):e._e()]},proxy:!0}:null],null,!0)},"NcAppSidebar",e.appSidebar,!1),[e._v(" "),e._v(" "),e.error?t("NcEmptyContent",{attrs:{icon:"icon-error"}},[e._v("\n\t\t"+e._s(e.error)+"\n\t")]):e.fileInfo?e._l(e.tabs,(function(n){return[n.enabled(e.fileInfo)?t("SidebarTab",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],key:n.id,attrs:{id:n.id,name:n.name,icon:n.icon,"on-mount":n.mount,"on-update":n.update,"on-destroy":n.destroy,"on-scroll-bottom-reached":n.scrollBottomReached,"file-info":e.fileInfo}}):e._e()]})):e._e()],2):e._e()}),[],!1,null,"692d1c00",null),G=Y.exports,J=i(25108);function Q(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var X=function(){function e(){var t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=void 0,(t="_state")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n,this._state={},this._state.tabs=[],this._state.views=[],this._state.file="",this._state.activeTab="",J.debug("OCA.Files.Sidebar initialized")}var t,n;return t=e,(n=[{key:"state",get:function(){return this._state}},{key:"registerTab",value:function(e){return this._state.tabs.findIndex((function(t){return t.id===e.id}))>-1?(J.error("An tab with the same id ".concat(e.id," already exists"),e),!1):(this._state.tabs.push(e),!0)}},{key:"registerSecondaryView",value:function(e){return this._state.views.findIndex((function(t){return t.id===e.id}))>-1?(J.error("A similar view already exists",e),!1):(this._state.views.push(e),!0)}},{key:"file",get:function(){return this._state.file}},{key:"setActiveTab",value:function(e){this._state.activeTab=e}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ee(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,i=t.name,r=t.icon,o=t.mount,s=t.update,a=t.destroy,l=t.enabled,c=t.scrollBottomReached;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),te(this,"_id",void 0),te(this,"_name",void 0),te(this,"_icon",void 0),te(this,"_mount",void 0),te(this,"_update",void 0),te(this,"_destroy",void 0),te(this,"_enabled",void 0),te(this,"_scrollBottomReached",void 0),void 0===l&&(l=function(){return!0}),void 0===c&&(c=function(){}),"string"!=typeof n||""===n.trim())throw new Error("The id argument is not a valid string");if("string"!=typeof i||""===i.trim())throw new Error("The name argument is not a valid string");if("string"!=typeof r||""===r.trim())throw new Error("The icon argument is not a valid string");if("function"!=typeof o)throw new Error("The mount argument should be a function");if("function"!=typeof s)throw new Error("The update argument should be a function");if("function"!=typeof a)throw new Error("The destroy argument should be a function");if("function"!=typeof l)throw new Error("The enabled argument should be a function");if("function"!=typeof c)throw new Error("The scrollBottomReached argument should be a function");this._id=n,this._name=i,this._icon=r,this._mount=o,this._update=s,this._destroy=a,this._enabled=l,this._scrollBottomReached=c}var t,n;return t=e,(n=[{key:"id",get:function(){return this._id}},{key:"name",get:function(){return this._name}},{key:"icon",get:function(){return this._icon}},{key:"mount",get:function(){return this._mount}},{key:"update",get:function(){return this._update}},{key:"destroy",get:function(){return this._destroy}},{key:"enabled",get:function(){return this._enabled}},{key:"scrollBottomReached",get:function(){return this._scrollBottomReached}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ie=i(25108);r.ZP.prototype.t=o.translate,window.OCA.Files||(window.OCA.Files={}),Object.assign(window.OCA.Files,{Sidebar:new X}),Object.assign(window.OCA.Files.Sidebar,{Tab:ne}),ie.debug("OCA.Files.Sidebar initialized"),window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("body > .content")||document.querySelector("body > #content");if(e&&!document.getElementById("app-sidebar")){var t=document.createElement("div");t.id="app-sidebar",e.appendChild(t)}var n=new(r.ZP.extend(G))({name:"SidebarRoot"});n.$mount("#app-sidebar"),window.OCA.Files.Sidebar.open=n.open,window.OCA.Files.Sidebar.close=n.close,window.OCA.Files.Sidebar.setFullScreenMode=n.setFullScreenMode}))},69162:function(e,t,n){"use strict";var i=n(87537),r=n.n(i),o=n(23645),s=n.n(o)()(r());s.push([e.id,'.app-sidebar--has-preview[data-v-692d1c00] .app-sidebar-header__figure{background-size:cover}.app-sidebar--has-preview[data-v-692d1c00][data-mimetype="text/plain"] .app-sidebar-header__figure,.app-sidebar--has-preview[data-v-692d1c00][data-mimetype="text/markdown"] .app-sidebar-header__figure{background-size:contain}.app-sidebar--full[data-v-692d1c00]{position:fixed !important;z-index:2025 !important;top:0 !important;height:100% !important}',"",{version:3,sources:["webpack://./apps/files/src/views/Sidebar.vue"],names:[],mappings:"AAGE,uEACC,qBAAA,CAKA,yMACC,uBAAA,CAKH,oCACC,yBAAA,CACA,uBAAA,CACA,gBAAA,CACA,sBAAA",sourcesContent:['\n.app-sidebar {\n\t&--has-preview::v-deep {\n\t\t.app-sidebar-header__figure {\n\t\t\tbackground-size: cover;\n\t\t}\n\n\t\t&[data-mimetype="text/plain"],\n\t\t&[data-mimetype="text/markdown"] {\n\t\t\t.app-sidebar-header__figure {\n\t\t\t\tbackground-size: contain;\n\t\t\t}\n\t\t}\n\t}\n\n\t&--full {\n\t\tposition: fixed !important;\n\t\tz-index: 2025 !important;\n\t\ttop: 0 !important;\n\t\theight: 100% !important;\n\t}\n}\n'],sourceRoot:""}]),t.Z=s},46700:function(e,t,n){var i={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=46700}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=n,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=function(t,n,i,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.j=4092,function(){r.b=document.baseURI||self.location.href;var e={4092:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,s=n[0],a=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(l)var u=l(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.nc=void 0;var o=r.O(void 0,[7874],(function(){return r(2784)}));o=r.O(o)}();
//# sourceMappingURL=files-sidebar.js.map?v=fd0943397e38886b839f