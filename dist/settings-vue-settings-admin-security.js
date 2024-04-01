/*! For license information please see settings-vue-settings-admin-security.js.LICENSE.txt */
(()=>{var e,n,o,r={35710:(e,n,o)=>{"use strict";var r=o(38613),s=o(85471),a=o(26287),i=o(67607),c=o(9518),d=o(32073),l=o(88837),u=o(73054),p=o.n(u),g=o(63375),h=o.n(g),f=o(38221),m=o.n(f),v=o(63814),A=o(96763);const y={name:"AdminTwoFactor",components:{NcSelect:i.A,NcButton:c.A,NcCheckboxRadioSwitch:d.A,NcSettingsSection:l.A},data:()=>({loading:!1,dirty:!1,groups:[],loadingGroups:!1,twoFactorAdminDoc:(0,r.C)("settings","two-factor-admin-doc")}),computed:{enforced:{get(){return this.$store.state.enforced},set(t){this.dirty=!0,this.$store.commit("setEnforced",t)}},enforcedGroups:{get(){return this.$store.state.enforcedGroups},set(t){this.dirty=!0,this.$store.commit("setEnforcedGroups",t)}},excludedGroups:{get(){return this.$store.state.excludedGroups},set(t){this.dirty=!0,this.$store.commit("setExcludedGroups",t)}}},mounted(){this.groups=p()(h()(this.enforcedGroups.concat(this.excludedGroups))),this.searchGroup("")},methods:{searchGroup:m()((function(t){this.loadingGroups=!0,a.A.get((0,v.KT)("cloud/groups?offset=0&search={query}&limit=20",{query:t})).then((t=>t.data.ocs)).then((t=>t.data.groups)).then((t=>{this.groups=p()(h()(this.groups.concat(t)))})).catch((t=>A.error("could not search groups",t))).then((()=>{this.loadingGroups=!1}))}),500),saveChanges(){this.loading=!0;const t={enforced:this.enforced,enforcedGroups:this.enforcedGroups,excludedGroups:this.excludedGroups};a.A.put((0,v.Jv)("/settings/api/admin/twofactorauth"),t).then((t=>t.data)).then((t=>{this.state=t,this.dirty=!1})).catch((t=>{A.error("could not save changes",t)})).then((()=>{this.loading=!1}))}}};var b=o(85072),w=o.n(b),x=o(97825),C=o.n(x),N=o(77659),_=o.n(N),k=o(55056),G=o.n(k),S=o(10540),E=o.n(S),T=o(41113),B=o.n(T),D=o(41101),O={};O.styleTagTransform=B(),O.setAttributes=G(),O.insert=_().bind(null,"head"),O.domAPI=C(),O.insertStyleElement=E(),w()(D.A,O),D.A&&D.A.locals&&D.A.locals;var M=o(14486);const j=(0,M.A)(y,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Two-Factor Authentication"),description:t.t("settings","Two-factor authentication can be enforced for all accounts and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system."),"doc-url":t.twoFactorAdminDoc}},[t.loading?e("p",[e("span",{staticClass:"icon-loading-small two-factor-loading"}),t._v(" "),e("span",[t._v(t._s(t.t("settings","Enforce two-factor authentication")))])]):e("NcCheckboxRadioSwitch",{attrs:{id:"two-factor-enforced",checked:t.enforced,type:"switch"},on:{"update:checked":function(e){t.enforced=e}}},[t._v("\n\t\t"+t._s(t.t("settings","Enforce two-factor authentication"))+"\n\t")]),t._v(" "),t.enforced?[e("h3",[t._v(t._s(t.t("settings","Limit to groups")))]),t._v("\n\t\t"+t._s(t.t("settings","Enforcement of two-factor authentication can be set for certain groups only."))+"\n\t\t"),e("p",{staticClass:"top-margin"},[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is enforced for all members of the following groups."))+"\n\t\t")]),t._v(" "),e("p",[e("label",{attrs:{for:"enforcedGroups"}},[e("span",[t._v(t._s(t.t("settings","Enforced groups")))])]),t._v(" "),e("NcSelect",{attrs:{"input-id":"enforcedGroups",options:t.groups,disabled:t.loading,multiple:!0,loading:t.loadingGroups,"close-on-select":!1},on:{search:t.searchGroup},model:{value:t.enforcedGroups,callback:function(e){t.enforcedGroups=e},expression:"enforcedGroups"}})],1),t._v(" "),e("p",{staticClass:"top-margin"},[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is not enforced for members of the following groups."))+"\n\t\t")]),t._v(" "),e("p",[e("label",{attrs:{for:"excludedGroups"}},[e("span",[t._v(t._s(t.t("settings","Excluded groups")))])]),t._v(" "),e("NcSelect",{attrs:{"input-id":"excludedGroups",options:t.groups,disabled:t.loading,multiple:!0,loading:t.loadingGroups,"close-on-select":!1},on:{search:t.searchGroup},model:{value:t.excludedGroups,callback:function(e){t.excludedGroups=e},expression:"excludedGroups"}})],1),t._v(" "),e("p",{staticClass:"top-margin"},[e("em",[t._v("\n\t\t\t\t"+t._s(t.t("settings","When groups are selected/excluded, they use the following logic to determine if an account has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If an account is both in a selected and excluded group, the selected takes precedence and 2FA is enforced."))+"\n\t\t\t")])])]:t._e(),t._v(" "),e("p",{staticClass:"top-margin"},[t.dirty?e("NcButton",{attrs:{type:"primary",disabled:t.loading},on:{click:t.saveChanges}},[t._v("\n\t\t\t"+t._s(t.t("settings","Save changes"))+"\n\t\t")]):t._e()],1)],2)}),[],!1,null,"3bcdd6de",null).exports;var F=o(76333),R=o(53529),$=o(56760),q=(o(51257),o(85168));const I=(0,R.YK)().setApp("settings").detectUser().build(),L={name:"Encryption",components:{NcCheckboxRadioSwitch:F.AO,NcSettingsSection:F.rE,NcButton:F.x1},data(){const t=(0,r.C)("settings","encryption-modules");return{encryptionReady:(0,r.C)("settings","encryption-ready"),encryptionEnabled:(0,r.C)("settings","encryption-enabled"),externalBackendsEnabled:(0,r.C)("settings","external-backends-enabled"),encryptionAdminDoc:(0,r.C)("settings","encryption-admin-doc"),encryptionModules:t,shouldDisplayWarning:!1,migrating:!1,defaultCheckedModule:Object.entries(t).find((t=>t[1].default))[0]}},computed:{migrationMessage:()=>t("settings",'You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please enable the "Default encryption module" and run {command}',{command:'"occ encryption:migrate"'})},methods:{displayWarning(){this.encryptionEnabled?(this.encryptionEnabled=!1,this.shouldDisplayWarning=!1):this.shouldDisplayWarning=!this.shouldDisplayWarning},async update(e,n){await(0,$.C)();const o=(0,v.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:e});try{var r;const{data:t}=await a.A.post(o,{value:n});this.handleResponse({status:null===(r=t.ocs)||void 0===r||null===(r=r.meta)||void 0===r?void 0:r.status})}catch(e){this.handleResponse({errorMessage:t("settings","Unable to update server side encryption config"),error:e})}},async checkDefaultModule(){await this.update("default_encryption_module",this.defaultCheckedModule)},async enableEncryption(){this.encryptionEnabled=!0,await this.update("encryption_enabled","yes")},async handleResponse(t){let{status:e,errorMessage:n,error:o}=t;"ok"!==e&&((0,q.Qg)(n),I.error(n,{error:o}))}}};var P=o(94202),W={};W.styleTagTransform=B(),W.setAttributes=G(),W.insert=_().bind(null,"head"),W.domAPI=C(),W.insertStyleElement=E(),w()(P.A,W),P.A&&P.A.locals&&P.A.locals;const U=(0,M.A)(L,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Server-side encryption"),description:t.t("settings","Server-side encryption makes it possible to encrypt files which are uploaded to this server."),"doc-url":t.encryptionAdminDoc}},[e("NcNoteCard",{attrs:{type:"info"}},[e("p",[t._v("This comes with limitations like a performance penalty, so enable this only if needed.")])]),t._v(" "),e("NcNoteCard",{attrs:{type:"warning"}},[e("p",[t._v("Once enabled, server-side encryption cannot be toggled off here. Disabling encryption requires command line access.")])]),t._v(" "),e("NcCheckboxRadioSwitch",{attrs:{checked:t.encryptionEnabled||t.shouldDisplayWarning,disabled:t.encryptionEnabled,type:"switch"},on:{"update:checked":t.displayWarning}},[t._v("\n\t\t"+t._s(t.t("settings","Enable server-side encryption"))+"\n\t")]),t._v(" "),t.shouldDisplayWarning&&!t.encryptionEnabled?e("div",{staticClass:"notecard warning",attrs:{role:"alert"}},[e("p",[t._v(t._s(t.t("settings","Please read carefully before activating server-side encryption:")))]),t._v(" "),e("ul",[e("li",[t._v(t._s(t.t("settings","Once encryption is enabled, all files uploaded to the server from that point forward will be encrypted at rest on the server. It will only be possible to disable encryption at a later date if the active encryption module supports that function, and all pre-conditions (e.g. setting a recover key) are met.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","Encryption alone does not guarantee security of the system. Please see documentation for more information about how the encryption app works, and the supported use cases.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","Be aware that encryption always increases the file size.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","It is always good to create regular backups of your data, in case of encryption make sure to backup the encryption keys along with your data.")))])]),t._v(" "),e("p",{staticClass:"margin-bottom"},[t._v("\n\t\t\t"+t._s(t.t("settings","This is the final warning: Do you really want to enable encryption?"))+"\n\t\t")]),t._v(" "),e("NcButton",{attrs:{type:"primary"},on:{click:function(e){return t.enableEncryption()}}},[t._v("\n\t\t\t"+t._s(t.t("settings","Enable encryption"))+"\n\t\t")])],1):t._e(),t._v(" "),t.encryptionEnabled?e("div",[t.encryptionReady?e("div",[0===t.encryptionModules.length?e("p",[t._v("\n\t\t\t\t"+t._s(t.t("settings","No encryption module loaded, please enable an encryption module in the app menu."))+"\n\t\t\t")]):[e("h3",[t._v(t._s(t.t("settings","Select default encryption module:")))]),t._v(" "),e("fieldset",t._l(t.encryptionModules,(function(n,o){return e("NcCheckboxRadioSwitch",{key:o,attrs:{checked:t.defaultCheckedModule,value:o,type:"radio",name:"default_encryption_module"},on:{"update:checked":[function(e){t.defaultCheckedModule=e},t.checkDefaultModule]}},[t._v("\n\t\t\t\t\t\t"+t._s(n.displayName)+"\n\t\t\t\t\t")])})),1)]],2):t.externalBackendsEnabled?e("div",{domProps:{innerHTML:t._s(t.migrationMessage)}}):t._e()]):t._e()],1)}),[],!1,null,"354ef522",null).exports;var z=o(95353);s.Ay.use(z.Ay);const K={setEnforced(t,e){s.Ay.set(t,"enforced",e)},setEnforcedGroups(t,e){s.Ay.set(t,"enforcedGroups",e)},setExcludedGroups(t,e){s.Ay.set(t,"excludedGroups",e)}},Q=new z.il({strict:!1,state:{enforced:!1,enforcedGroups:[],excludedGroups:[]},mutations:K});o.nc=btoa(OC.requestToken),s.Ay.prototype.t=t,window.OC=window.OC||{},window.OC.Settings=window.OC.Settings||{},Q.replaceState((0,r.C)("settings","mandatory2FAState")),new(s.Ay.extend(j))({store:Q}).$mount("#two-factor-auth-settings"),(new(s.Ay.extend(U))).$mount("#vue-admin-encryption")},94202:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var o=n(71354),r=n.n(o),s=n(76314),a=n.n(s)()(r());a.push([t.id,".notecard.success[data-v-354ef522]{--note-background: rgba(var(--color-success-rgb), 0.2);--note-theme: var(--color-success)}.notecard.error[data-v-354ef522]{--note-background: rgba(var(--color-error-rgb), 0.2);--note-theme: var(--color-error)}.notecard.warning[data-v-354ef522]{--note-background: rgba(var(--color-warning-rgb), 0.2);--note-theme: var(--color-warning)}#body-settings .notecard[data-v-354ef522]{color:var(--color-text-light);background-color:var(--note-background);border:1px solid var(--color-border);border-left:4px solid var(--note-theme);border-radius:var(--border-radius);box-shadow:rgba(43,42,51,.05) 0px 1px 2px 0px;margin:1rem 0;margin-top:1rem;padding:1rem}li[data-v-354ef522]{list-style-type:initial;margin-left:1rem;padding:.25rem 0}.margin-bottom[data-v-354ef522]{margin-bottom:.75rem}","",{version:3,sources:["webpack://./apps/settings/src/components/Encryption.vue"],names:[],mappings:"AAEA,mCACC,sDAAA,CACA,kCAAA,CAGD,iCACC,oDAAA,CACA,gCAAA,CAGD,mCACC,sDAAA,CACA,kCAAA,CAGD,0CACC,6BAAA,CACA,uCAAA,CACA,oCAAA,CACA,uCAAA,CACA,kCAAA,CACA,6CAAA,CACA,aAAA,CACA,eAAA,CACA,YAAA,CAGD,oBACC,uBAAA,CACA,gBAAA,CACA,gBAAA,CAGD,gCACC,oBAAA",sourcesContent:["\n\n.notecard.success {\n\t--note-background: rgba(var(--color-success-rgb), 0.2);\n\t--note-theme: var(--color-success);\n}\n\n.notecard.error {\n\t--note-background: rgba(var(--color-error-rgb), 0.2);\n\t--note-theme: var(--color-error);\n}\n\n.notecard.warning {\n\t--note-background: rgba(var(--color-warning-rgb), 0.2);\n\t--note-theme: var(--color-warning);\n}\n\n#body-settings .notecard {\n\tcolor: var(--color-text-light);\n\tbackground-color: var(--note-background);\n\tborder: 1px solid var(--color-border);\n\tborder-left: 4px solid var(--note-theme);\n\tborder-radius: var(--border-radius);\n\tbox-shadow: rgba(43, 42, 51, 0.05) 0px 1px 2px 0px;\n\tmargin: 1rem 0;\n\tmargin-top: 1rem;\n\tpadding: 1rem;\n}\n\nli {\n\tlist-style-type: initial;\n\tmargin-left: 1rem;\n\tpadding: 0.25rem 0;\n}\n\n.margin-bottom {\n\tmargin-bottom: 0.75rem;\n}\n"],sourceRoot:""}]);const i=a},41101:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var o=n(71354),r=n.n(o),s=n(76314),a=n.n(s)()(r());a.push([t.id,"\n.two-factor-loading[data-v-3bcdd6de] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: -2px;\n\tmargin-right: 1px;\n}\n.top-margin[data-v-3bcdd6de] {\n\tmargin-top: 0.5rem;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/AdminTwoFactor.vue"],names:[],mappings:";AAsLA;CACA,qBAAA;CACA,mBAAA;CACA,iBAAA;CACA,iBAAA;AACA;AAEA;CACA,kBAAA;AACA",sourcesContent:["<template>\n\t<NcSettingsSection :name=\"t('settings', 'Two-Factor Authentication')\"\n\t\t:description=\"t('settings', 'Two-factor authentication can be enforced for all accounts and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system.')\"\n\t\t:doc-url=\"twoFactorAdminDoc\">\n\t\t<p v-if=\"loading\">\n\t\t\t<span class=\"icon-loading-small two-factor-loading\" />\n\t\t\t<span>{{ t('settings', 'Enforce two-factor authentication') }}</span>\n\t\t</p>\n\t\t<NcCheckboxRadioSwitch v-else\n\t\t\tid=\"two-factor-enforced\"\n\t\t\t:checked.sync=\"enforced\"\n\t\t\ttype=\"switch\">\n\t\t\t{{ t('settings', 'Enforce two-factor authentication') }}\n\t\t</NcCheckboxRadioSwitch>\n\t\t<template v-if=\"enforced\">\n\t\t\t<h3>{{ t('settings', 'Limit to groups') }}</h3>\n\t\t\t{{ t('settings', 'Enforcement of two-factor authentication can be set for certain groups only.') }}\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t{{ t('settings', 'Two-factor authentication is enforced for all members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"enforcedGroups\">\n\t\t\t\t\t<span>{{ t('settings', 'Enforced groups') }}</span>\n\t\t\t\t</label>\n\t\t\t\t<NcSelect v-model=\"enforcedGroups\"\n\t\t\t\t\tinput-id=\"enforcedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t{{ t('settings', 'Two-factor authentication is not enforced for members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"excludedGroups\">\n\t\t\t\t\t<span>{{ t('settings', 'Excluded groups') }}</span>\n\t\t\t\t</label>\n\t\t\t\t<NcSelect v-model=\"excludedGroups\"\n\t\t\t\t\tinput-id=\"excludedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t<em>\n\t\t\t\t\t\x3c!-- this text is also found in the documentation. update it there as well if it ever changes --\x3e\n\t\t\t\t\t{{ t('settings', 'When groups are selected/excluded, they use the following logic to determine if an account has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If an account is both in a selected and excluded group, the selected takes precedence and 2FA is enforced.') }}\n\t\t\t\t</em>\n\t\t\t</p>\n\t\t</template>\n\t\t<p class=\"top-margin\">\n\t\t\t<NcButton v-if=\"dirty\"\n\t\t\t\ttype=\"primary\"\n\t\t\t\t:disabled=\"loading\"\n\t\t\t\t@click=\"saveChanges\">\n\t\t\t\t{{ t('settings', 'Save changes') }}\n\t\t\t</NcButton>\n\t\t</p>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport NcSelect from '@nextcloud/vue/dist/Components/NcSelect.js'\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\nimport NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\nimport { loadState } from '@nextcloud/initial-state'\n\nimport sortedUniq from 'lodash/sortedUniq.js'\nimport uniq from 'lodash/uniq.js'\nimport debounce from 'lodash/debounce.js'\nimport { generateUrl, generateOcsUrl } from '@nextcloud/router'\n\nexport default {\n\tname: 'AdminTwoFactor',\n\tcomponents: {\n\t\tNcSelect,\n\t\tNcButton,\n\t\tNcCheckboxRadioSwitch,\n\t\tNcSettingsSection,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tloading: false,\n\t\t\tdirty: false,\n\t\t\tgroups: [],\n\t\t\tloadingGroups: false,\n\t\t\ttwoFactorAdminDoc: loadState('settings', 'two-factor-admin-doc'),\n\t\t}\n\t},\n\tcomputed: {\n\t\tenforced: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforced\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforced', val)\n\t\t\t},\n\t\t},\n\t\tenforcedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforcedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforcedGroups', val)\n\t\t\t},\n\t\t},\n\t\texcludedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.excludedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setExcludedGroups', val)\n\t\t\t},\n\t\t},\n\t},\n\tmounted() {\n\t\t// Groups are loaded dynamically, but the assigned ones *should*\n\t\t// be valid groups, so let's add them as initial state\n\t\tthis.groups = sortedUniq(uniq(this.enforcedGroups.concat(this.excludedGroups)))\n\n\t\t// Populate the groups with a first set so the dropdown is not empty\n\t\t// when opening the page the first time\n\t\tthis.searchGroup('')\n\t},\n\tmethods: {\n\t\tsearchGroup: debounce(function(query) {\n\t\t\tthis.loadingGroups = true\n\t\t\taxios.get(generateOcsUrl('cloud/groups?offset=0&search={query}&limit=20', { query }))\n\t\t\t\t.then(res => res.data.ocs)\n\t\t\t\t.then(ocs => ocs.data.groups)\n\t\t\t\t.then(groups => { this.groups = sortedUniq(uniq(this.groups.concat(groups))) })\n\t\t\t\t.catch(err => console.error('could not search groups', err))\n\t\t\t\t.then(() => { this.loadingGroups = false })\n\t\t}, 500),\n\n\t\tsaveChanges() {\n\t\t\tthis.loading = true\n\n\t\t\tconst data = {\n\t\t\t\tenforced: this.enforced,\n\t\t\t\tenforcedGroups: this.enforcedGroups,\n\t\t\t\texcludedGroups: this.excludedGroups,\n\t\t\t}\n\t\t\taxios.put(generateUrl('/settings/api/admin/twofactorauth'), data)\n\t\t\t\t.then(resp => resp.data)\n\t\t\t\t.then(state => {\n\t\t\t\t\tthis.state = state\n\t\t\t\t\tthis.dirty = false\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('could not save changes', err)\n\t\t\t\t})\n\t\t\t\t.then(() => { this.loading = false })\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.two-factor-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: -2px;\n\t\tmargin-right: 1px;\n\t}\n\n\t.top-margin {\n\t\tmargin-top: 0.5rem;\n\t}\n</style>\n"],sourceRoot:""}]);const i=a},29905:t=>{t.exports=function(t,e,n){for(var o=-1,r=null==t?0:t.length;++o<r;)if(n(e,t[o]))return!0;return!1}},18024:(t,e,n)=>{var o=n(75288);t.exports=function(t,e){for(var n=-1,r=t.length,s=0,a=[];++n<r;){var i=t[n],c=e?e(i):i;if(!n||!o(c,d)){var d=c;a[s++]=0===i?0:i}}return a}},55765:(t,e,n)=>{var o=n(38859),r=n(15325),s=n(29905),a=n(19219),i=n(44517),c=n(84247);t.exports=function(t,e,n){var d=-1,l=r,u=t.length,p=!0,g=[],h=g;if(n)p=!1,l=s;else if(u>=200){var f=e?null:i(t);if(f)return c(f);p=!1,l=a,h=new o}else h=e?[]:g;t:for(;++d<u;){var m=t[d],v=e?e(m):m;if(m=n||0!==m?m:0,p&&v==v){for(var A=h.length;A--;)if(h[A]===v)continue t;e&&h.push(v),g.push(m)}else l(h,v,n)||(h!==g&&h.push(v),g.push(m))}return g}},44517:(t,e,n)=>{var o=n(76545),r=n(63950),s=n(84247),a=o&&1/s(new o([,-0]))[1]==1/0?function(t){return new o(t)}:r;t.exports=a},38221:(t,e,n)=>{var o=n(23805),r=n(10124),s=n(99374),a=Math.max,i=Math.min;t.exports=function(t,e,n){var c,d,l,u,p,g,h=0,f=!1,m=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function A(e){var n=c,o=d;return c=d=void 0,h=e,u=t.apply(o,n)}function y(t){var n=t-g;return void 0===g||n>=e||n<0||m&&t-h>=l}function b(){var t=r();if(y(t))return w(t);p=setTimeout(b,function(t){var n=e-(t-g);return m?i(n,l-(t-h)):n}(t))}function w(t){return p=void 0,v&&c?A(t):(c=d=void 0,u)}function x(){var t=r(),n=y(t);if(c=arguments,d=this,g=t,n){if(void 0===p)return function(t){return h=t,p=setTimeout(b,e),f?A(t):u}(g);if(m)return clearTimeout(p),p=setTimeout(b,e),A(g)}return void 0===p&&(p=setTimeout(b,e)),u}return e=s(e)||0,o(n)&&(f=!!n.leading,l=(m="maxWait"in n)?a(s(n.maxWait)||0,e):l,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==p&&clearTimeout(p),h=0,c=g=d=p=void 0},x.flush=function(){return void 0===p?u:w(r())},x}},10124:(t,e,n)=>{var o=n(9325);t.exports=function(){return o.Date.now()}},73054:(t,e,n)=>{var o=n(18024);t.exports=function(t){return t&&t.length?o(t):[]}},63375:(t,e,n)=>{var o=n(55765);t.exports=function(t){return t&&t.length?o(t):[]}},26734:t=>{"use strict";t.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e"},51338:t=>{"use strict";t.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e"},57818:t=>{"use strict";t.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e"},31926:t=>{"use strict";t.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e"},76333:(t,e,n)=>{"use strict";n.d(e,{AO:()=>j.N,Az:()=>i.N,B6:()=>u.N,EQ:()=>lt.N,K1:()=>V.N,Qz:()=>O.N,R1:()=>D.N,i$:()=>U.N,lT:()=>L.N,rE:()=>ft.N,v:()=>ut.N,x1:()=>M.A,yI:()=>Q.A}),n(97387);var o=n(63420),r=n(80380),s=n(50953),a=n(63127),i=n(27897),c=n(10700),d=n(51246),l=n(59594),u=n(20863),p=n(10501),g=n(63961),h=n(34375),f=n(86376),m=n(47611),v=n(10363),A=n(9211),y=n(26112),b=n(68776),w=n(58274),x=n(71246),C=n(46447),N=n(26632),_=n(36969),k=n(14645),G=n(85517),S=n(947),E=n(94102),T=n(18503),B=n(83060),D=n(37215),O=n(42937),M=n(9518),j=n(18271),F=n(60831),R=n(699),$=n(70563),q=n(44595),I=n(79171),L=n(86203),P=n(39744),W=n(43899),U=n(96077),z=n(84003),K=n(91297),Q=n(10833),Y=n(1620),H=n(94305),J=n(27720),V=n(6936),X=n(75483),Z=n(45401),tt=n(46222),et=n(53278),nt=n(48934),ot=n(31031),rt=n(28690),st=n(15224),at=n(72414),it=n(11285),ct=n(98379),dt=n(58006),lt=(n(78460),n(90989),n(26287),n(70063)),ut=n(24263),pt=(n(61338),n(64981)),gt=n(18343),ht=n(75592),ft=n(62665),mt=n(59381),vt=n(74684),At=n(42503),yt=n(46901),bt=n(47732),wt=(n(23020),n(53429),n(58995),n(57037),n(42892)),xt=n(65842),Ct=(n(57874),n(75105),n(92471),n(16406),n(2508));o.A,r.N,s.A,a.A,i.N,c.A,d.A,l.A,p.A,g.A,h.A,u.N,f.N,m.A,v.A,A.N,y.N,b.A,w.N,x.A,C.A,N.N,_.N,k.A,G.N,S.A,E.N,T.A,ct.N,B.N,D.N,O.N,M.A,j.N,F.N,R.N,$.A,q.N,I.N,L.N,P.A,W.A,U.N,z.N,K.N,Q.A,Y.A,H.N,J.N,V.N,X.N,Z.N,tt.A,it.N,et.A,nt.A,ot.N,rt.N,st.N,at.N,ct.a,dt.N,pt.N,lt.N,gt.N,ht.N,ft.N,mt.N,bt.A,ut.N,vt.N,At.N,yt.N,Symbol.toStringTag,wt.u,xt.u,Ct.yw,Symbol.toStringTag}},s={};function a(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,e=[],a.O=(t,n,o,r)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],r=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((t=>a.O[t](n[c])))?n.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,o,r]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,n)=>(a.f[n](t,e),e)),[])),a.u=t=>t+"-"+t+".js?v="+{7560:"6ccfebfcc1f9206bb48d",8618:"d30d39583cd1936d2676"}[t],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},o="nextcloud:",a.l=(t,e,r,s)=>{if(n[t])n[t].push(e);else{var i,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==o+r){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",o+r),i.src=t),n[t]=[e];var p=(e,o)=>{i.onerror=i.onload=null,clearTimeout(g);var r=n[t];if(delete n[t],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((t=>t(o))),e)return e(o)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.j=7584,(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{a.b=document.baseURI||self.location.href;var t={7584:0};a.f.j=(e,n)=>{var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=t[e]=[n,r]));n.push(o[2]=r);var s=a.p+a.u(e),i=new Error;a.l(s,(n=>{if(a.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,o[1](i)}}),"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,n)=>{var o,r,s=n[0],i=n[1],c=n[2],d=0;if(s.some((e=>0!==t[e]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var l=c(a)}for(e&&e(n);d<s.length;d++)r=s[d],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),a.nc=void 0;var i=a.O(void 0,[4208],(()=>a(35710)));i=a.O(i)})();
//# sourceMappingURL=settings-vue-settings-admin-security.js.map?v=ac3363e829bf186c31b2