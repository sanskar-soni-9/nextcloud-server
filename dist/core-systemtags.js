(()=>{var e,n={65796:(e,n,s)=>{"use strict";var l=s(70580),i=s.n(l);!function(e){e.SystemTags={getDescriptiveTag:function(e){_.isUndefined(e.name)&&!_.isUndefined(e.toJSON)&&(e=e.toJSON());var n,s=document.createElement("span");if(_.isUndefined(e.name))return s.classList.add("non-existing-tag"),s.textContent=t("core","Non-existing tag #{tag}",{tag:e}),s;if(s.textContent=i()(e.name),e.userAssignable||(n=t("core","Restricted")),e.userVisible||(n=t("core","Invisible")),n){var l=document.createElement("em");l.textContent=" ("+n+")",s.appendChild(l)}return s}}}(OC),s(24862);var a=s(63814);!function(e){const t=e.Backbone.Collection.extend({sync:e.Backbone.davSync,usePUT:!0,_objectId:null,_objectType:"files",model:e.SystemTags.SystemTagModel,url(){return(0,a.dC)("dav")+"/systemtags-relations/"+this._objectType+"/"+this._objectId},setObjectId(e){this._objectId=e},setObjectType(e){this._objectType=e},initialize(e,t){t=t||{},_.isUndefined(t.objectId)||(this._objectId=t.objectId),_.isUndefined(t.objectType)||(this._objectType=t.objectType)},getTagIds(){return this.map((function(e){return e.id}))}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsMappingCollection=t}(OC),s(78974);var o=s(91424),r=s.n(o),c=s(74779),u=s.n(c),d=s(60121),p=s.n(d);!function(e){var n=e.Backbone.View.extend({_rendered:!1,_newTag:null,_lastUsedTags:[],className:"systemTagsInputFieldContainer",template:function(e){return'<input class="systemTagsInputField" type="hidden" name="tags" value=""/>'},initialize:function(t){t=t||{},this._multiple=!!t.multiple,this._allowActions=_.isUndefined(t.allowActions)||!!t.allowActions,this._allowCreate=_.isUndefined(t.allowCreate)||!!t.allowCreate,this._isAdmin=!!t.isAdmin,_.isFunction(t.initSelection)&&(this._initSelection=t.initSelection),this.collection=t.collection||e.SystemTags.collection;var n=this;this.collection.on("change:name remove",(function(){_.defer(n._refreshSelection)})),_.defer(_.bind(this._getLastUsedTags,this)),_.bindAll(this,"_refreshSelection","_onClickRenameTag","_onClickDeleteTag","_onSelectTag","_onDeselectTag","_onSubmitRenameTag")},_getLastUsedTags:function(){var t=this;$.ajax({type:"GET",url:e.generateUrl("/apps/systemtags/lastused"),success:function(e){t._lastUsedTags=e}})},_refreshSelection:function(){this.$tagsField.select2("val",this.$tagsField.val())},_onClickRenameTag:function(e){var n=$(e.target).closest(".systemtags-item"),s=n.attr("data-id"),l=this.collection.get(s).get("name"),i=$(u()({cid:this.cid,name:l,deleteTooltip:t("core","Delete"),renameLabel:t("core","Rename"),isAdmin:this._isAdmin}));return n.find(".label").after(i),n.find(".label, .systemtags-actions").addClass("hidden"),n.closest(".select2-result").addClass("has-form"),i.find("[title]").tooltip({placement:"bottom",container:"body"}),i.find("input").focus().selectRange(0,l.length),!1},_onSubmitRenameTag:function(e){e.preventDefault();var t=$(e.target),n=t.closest(".systemtags-item"),s=n.attr("data-id"),l=this.collection.get(s),i=$(e.target).find("input").val().trim();i&&i!==l.get("name")&&(l.save({name:i}),n.find(".label").text(i)),n.find(".label, .systemtags-actions").removeClass("hidden"),t.remove(),n.closest(".select2-result").removeClass("has-form")},_onClickDeleteTag:function(e){var t=$(e.target).closest(".systemtags-item"),n=t.attr("data-id");return this.collection.get(n).destroy(),$(e.target).tooltip("option","hide"),t.closest(".select2-result").remove(),!1},_addToSelect2Selection:function(e){var t=this.$tagsField.select2("data");t.push(e),this.$tagsField.select2("data",t)},_onSelectTag:function(e){var t,n=this;if(e.object&&e.object.isNew)return t=this.collection.create({name:e.object.name.trim(),userVisible:!0,userAssignable:!0,canAssign:!0},{success:function(e){n._addToSelect2Selection(e.toJSON()),n._lastUsedTags.unshift(e.id),n.trigger("select",e)},error:function(t,s){409===s.status&&(n.collection.reset(),n.collection.fetch({success:function(t){var s=t.where({name:e.object.name.trim(),userVisible:!0,userAssignable:!0});s.length&&(s=s[0],n._addToSelect2Selection(s.toJSON()),n.trigger("select",s))}}))}}),this.$tagsField.select2("close"),e.preventDefault(),!1;t=this.collection.get(e.object.id),this._lastUsedTags.unshift(t.id),this._newTag=null,this.trigger("select",t)},_onDeselectTag:function(e){this.trigger("deselect",e.choice.id)},_queryTagsAutocomplete:function(e){var t=this;this.collection.fetch({success:function(n){var s=n.filterByName(e.term.trim());t._isAdmin||(s=_.filter(s,(function(e){return e.get("canAssign")}))),e.callback({results:_.invoke(s,"toJSON")})}})},_preventDefault:function(e){e.stopPropagation()},_formatDropDownResult:function(n){return r()(_.extend({renameTooltip:t("core","Rename"),allowActions:this._allowActions,tagMarkup:this._isAdmin?e.SystemTags.getDescriptiveTag(n).innerHTML:null,isAdmin:this._isAdmin},n))},_formatSelection:function(t){return p()(_.extend({tagMarkup:this._isAdmin?e.SystemTags.getDescriptiveTag(t).innerHTML:null,isAdmin:this._isAdmin},t))},_createSearchChoice:function(e){if(e=e.trim(),!this.collection.filter((function(t){return t.get("name")===e})).length)return this._newTag?this._newTag.name=e:this._newTag={id:-1,name:e,userAssignable:!0,userVisible:!0,canAssign:!0,isNew:!0},this._newTag},_initSelection:function(e,t){var n=this,s=$(e).val().split(",");function l(e){var t=e.toJSON();return n._isAdmin||t.canAssign||(t.locked=!0),t}this.collection.fetch({success:function(){t(function(e){var t=n.collection.filter((function(t){return e.indexOf(t.id)>=0&&(n._isAdmin||t.get("userVisible"))}));return _.map(t,l)}(s))}})},render:function(){var n=this;this.$el.html(this.template()),this.$el.find("[title]").tooltip({placement:"bottom"}),this.$tagsField=this.$el.find("[name=tags]"),this.$tagsField.select2({placeholder:t("core","Collaborative tags"),containerCssClass:"systemtags-select2-container",dropdownCssClass:"systemtags-select2-dropdown",closeOnSelect:!1,allowClear:!1,multiple:this._multiple,toggleSelect:this._multiple,query:_.bind(this._queryTagsAutocomplete,this),id:function(e){return e.id},initSelection:_.bind(this._initSelection,this),formatResult:_.bind(this._formatDropDownResult,this),formatSelection:_.bind(this._formatSelection,this),createSearchChoice:this._allowCreate?_.bind(this._createSearchChoice,this):void 0,sortResults:function(t){var s=_.pluck(n.$tagsField.select2("data"),"id");return t.sort((function(t,l){var i=s.indexOf(t.id)>=0,a=s.indexOf(l.id)>=0;if(i===a){var o=n._lastUsedTags.indexOf(t.id),r=n._lastUsedTags.indexOf(l.id);return o!==r?-1===r?-1:-1===o?1:o<r?-1:1:e.Util.naturalSortCompare(t.name,l.name)}return i&&!a?-1:1})),t},formatNoMatches:function(){return t("core","No tags found")}}).on("select2-selecting",this._onSelectTag).on("select2-removing",this._onDeselectTag);var s=this.$tagsField.select2("dropdown");s.on("mouseup",".rename",this._onClickRenameTag),s.on("mouseup",".delete",this._onClickDeleteTag),s.on("mouseup",".select2-result-selectable.has-form",this._preventDefault),s.on("submit",".systemtags-rename-form",this._onSubmitRenameTag),this.delegateEvents()},remove:function(){this.$tagsField&&this.$tagsField.select2("destroy")},getValues:function(){this.$tagsField.select2("val")},setValues:function(e){this.$tagsField.select2("val",e)},setData:function(e){this.$tagsField.select2("data",e)}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsInputField=n}(OC);var m=s(85072),h=s.n(m),g=s(97825),A=s.n(g),f=s(77659),y=s.n(f),C=s(55056),b=s.n(C),v=s(10540),T=s.n(v),S=s(41113),w=s.n(S),k=s(33851),x={};x.styleTagTransform=w(),x.setAttributes=b(),x.insert=y().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=T(),h()(k.A,x),k.A&&k.A.locals&&k.A.locals},24862:()=>{!function(e,t){if(null!=e&&null!==(t=e.Files)&&void 0!==t&&t.Client){_.extend(e.Files.Client,{PROPERTY_FILEID:"{"+e.Files.Client.NS_OWNCLOUD+"}id",PROPERTY_CAN_ASSIGN:"{"+e.Files.Client.NS_OWNCLOUD+"}can-assign",PROPERTY_DISPLAYNAME:"{"+e.Files.Client.NS_OWNCLOUD+"}display-name",PROPERTY_USERVISIBLE:"{"+e.Files.Client.NS_OWNCLOUD+"}user-visible",PROPERTY_USERASSIGNABLE:"{"+e.Files.Client.NS_OWNCLOUD+"}user-assignable"});const t=e.Backbone.Model.extend({sync:e.Backbone.davSync,defaults:{userVisible:!0,userAssignable:!0,canAssign:!0},davProperties:{id:e.Files.Client.PROPERTY_FILEID,name:e.Files.Client.PROPERTY_DISPLAYNAME,userVisible:e.Files.Client.PROPERTY_USERVISIBLE,userAssignable:e.Files.Client.PROPERTY_USERASSIGNABLE,canAssign:e.Files.Client.PROPERTY_CAN_ASSIGN},parse:e=>({id:e.id,name:e.name,userVisible:!0===e.userVisible||"true"===e.userVisible,userAssignable:!0===e.userAssignable||"true"===e.userAssignable,canAssign:!0===e.canAssign||"true"===e.canAssign})});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagModel=t}}(OC)},78974:()=>{!function(e){var t=e.Backbone.Collection.extend({sync:e.Backbone.davSync,model:e.SystemTags.SystemTagModel,url:function(){return e.linkToRemote("dav")+"/systemtags/"},filterByName:function(e){return this.filter((function(t){return function(e,t){return e.get("name").substr(0,t.length).toLowerCase()===t.toLowerCase()}(t,e)}))},reset:function(){return this.fetched=!1,e.Backbone.Collection.prototype.reset.apply(this,arguments)},fetch:function(t){var n=this;if(t=t||{},this.fetched||this.working||t.force)return t.success&&t.success(this,null,t),this.trigger("sync",this,null,t),Promise.resolve();this.working=!0;var s=t.success;return(t=_.extend({},t)).success=function(){if(n.fetched=!0,n.working=!1,s)return s.apply(this,arguments)},e.Backbone.Collection.prototype.fetch.call(this,t)}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsCollection=t,e.SystemTags.collection=new e.SystemTags.SystemTagsCollection}(OC)},33851:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var s=n(71354),l=n.n(s),i=n(76314),a=n.n(i)()(l());a.push([e.id,".systemtags-select2-dropdown .select2-result-label .checkmark{visibility:hidden;margin-left:-5px;margin-right:5px;padding:4px}.systemtags-select2-dropdown .select2-result-label .new-item .systemtags-actions{display:none}.systemtags-select2-dropdown .select2-selected .select2-result-label .checkmark{visibility:visible}.systemtags-select2-dropdown .select2-result-label .icon{display:inline-block;opacity:.5}.systemtags-select2-dropdown .select2-result-label .icon.rename{padding:4px}.systemtags-select2-dropdown .systemtags-actions{position:absolute;right:5px}.systemtags-select2-dropdown .systemtags-rename-form{display:inline-block;width:calc(100% - 20px);top:-6px;position:relative}.systemtags-select2-dropdown .systemtags-rename-form input{display:inline-block;height:30px;width:calc(100% - 40px)}.systemtags-select2-dropdown .label{width:85%;display:inline-block;overflow:hidden;text-overflow:ellipsis}.systemtags-select2-dropdown .label.hidden{display:none}.systemtags-select2-dropdown span{line-height:25px}.systemtags-select2-dropdown .systemtags-item{display:inline-block;height:25px;width:100%}.systemtags-select2-dropdown .select2-result-label{height:25px}.systemtags-select2-container{width:100%}.systemtags-select2-container .select2-choices{flex-wrap:nowrap !important;max-height:44px}.systemtags-select2-container .select2-choices .select2-search-choice.select2-locked .label{opacity:.5}#select2-drop.systemtags-select2-dropdown .select2-results li.select2-result{padding:5px}","",{version:3,sources:["webpack://./core/css/systemtags.scss"],names:[],mappings:"AAcE,8DACC,iBAAA,CACA,gBAAA,CACA,gBAAA,CACA,WAAA,CAED,iFACC,YAAA,CAGF,gFACC,kBAAA,CAED,yDACC,oBAAA,CACA,UAAA,CACA,gEACC,WAAA,CAGF,iDACC,iBAAA,CACA,SAAA,CAED,qDACC,oBAAA,CACA,uBAAA,CACA,QAAA,CACA,iBAAA,CACA,2DACC,oBAAA,CACA,WAAA,CACA,uBAAA,CAGF,oCACC,SAAA,CACA,oBAAA,CACA,eAAA,CACA,sBAAA,CACA,2CACC,YAAA,CAGF,kCACC,gBAAA,CAED,8CACC,oBAAA,CACA,WAAA,CACA,UAAA,CAED,mDACC,WAAA,CAIF,8BACC,UAAA,CAEA,+CACC,2BAAA,CACA,eAAA,CAGD,4FACC,UAAA,CAIF,6EACC,WAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>\n * @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>\n * @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>\n * @copyright Copyright (c) 2016, Vincent Petry <pvince81@owncloud.com>\n * @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>\n * @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n */\n\n.systemtags-select2-dropdown {\n\t.select2-result-label {\n\t\t.checkmark {\n\t\t\tvisibility: hidden;\n\t\t\tmargin-left: -5px;\n\t\t\tmargin-right: 5px;\n\t\t\tpadding: 4px;\n\t\t}\n\t\t.new-item .systemtags-actions {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\t.select2-selected .select2-result-label .checkmark {\n\t\tvisibility: visible;\n\t}\n\t.select2-result-label .icon {\n\t\tdisplay: inline-block;\n\t\topacity: .5;\n\t\t&.rename {\n\t\t\tpadding: 4px;\n\t\t}\n\t}\n\t.systemtags-actions {\n\t\tposition: absolute;\n\t\tright: 5px;\n\t}\n\t.systemtags-rename-form {\n\t\tdisplay: inline-block;\n\t\twidth: calc(100% - 20px);\n\t\ttop: -6px;\n\t\tposition: relative;\n\t\tinput {\n\t\t\tdisplay: inline-block;\n\t\t\theight: 30px;\n\t\t\twidth: calc(100% - 40px);\n\t\t}\n\t}\n\t.label {\n\t\twidth: 85%;\n\t\tdisplay: inline-block;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\t&.hidden {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\tspan {\n\t\tline-height: 25px;\n\t}\n\t.systemtags-item {\n\t\tdisplay: inline-block;\n\t\theight: 25px;\n\t\twidth: 100%;\n\t}\n\t.select2-result-label {\n\t\theight: 25px;\n\t}\n}\n\n.systemtags-select2-container {\n\twidth: 100%;\n\n\t.select2-choices {\n\t\tflex-wrap: nowrap !important;\n\t\tmax-height: 44px;\n\t}\n\n\t.select2-choices .select2-search-choice.select2-locked .label {\n\t\topacity: 0.5;\n\t}\n}\n\n#select2-drop.systemtags-select2-dropdown .select2-results li.select2-result {\n\tpadding: 5px;\n}\n"],sourceRoot:""}]);const o=a},91424:(e,t,n)=>{var s=n(93633);e.exports=(s.default||s).template({1:function(e,t,n,s,l){return" new-item"},3:function(e,t,n,s,l){var i,a,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<span class="label">'+(null!=(i="function"==typeof(a=null!=(a=o(n,"tagMarkup")||(null!=t?o(t,"tagMarkup"):t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"tagMarkup",hash:{},data:l,loc:{start:{line:4,column:22},end:{line:4,column:37}}}):a)?i:"")+"</span>\n"},5:function(e,t,n,s,l){var i,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<span class="label">'+e.escapeExpression("function"==typeof(i=null!=(i=a(n,"name")||(null!=t?a(t,"name"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:l,loc:{start:{line:6,column:22},end:{line:6,column:30}}}):i)+"</span>\n"},7:function(e,t,n,s,l){var i,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<span class="systemtags-actions">\n\t\t\t<a href="#" class="rename icon icon-rename" title="'+e.escapeExpression("function"==typeof(i=null!=(i=a(n,"renameTooltip")||(null!=t?a(t,"renameTooltip"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"renameTooltip",hash:{},data:l,loc:{start:{line:10,column:54},end:{line:10,column:71}}}):i)+'"></a>\n\t\t</span>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,s,l){var i,a,o,r=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u="function",d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]},p='<span class="systemtags-item'+(null!=(i=d(n,"if").call(r,null!=t?d(t,"isNew"):t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:28},end:{line:1,column:57}}}))?i:"")+'" data-id="'+e.escapeExpression(typeof(a=null!=(a=d(n,"id")||(null!=t?d(t,"id"):t))?a:c)===u?a.call(r,{name:"id",hash:{},data:l,loc:{start:{line:1,column:68},end:{line:1,column:74}}}):a)+'">\n<span class="checkmark icon icon-checkmark"></span>\n'+(null!=(i=d(n,"if").call(r,null!=t?d(t,"isAdmin"):t,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.program(5,l,0),data:l,loc:{start:{line:3,column:1},end:{line:7,column:8}}}))?i:"");return a=null!=(a=d(n,"allowActions")||(null!=t?d(t,"allowActions"):t))?a:c,o={name:"allowActions",hash:{},fn:e.program(7,l,0),inverse:e.noop,data:l,loc:{start:{line:8,column:1},end:{line:12,column:18}}},i=typeof a===u?a.call(r,o):a,d(n,"allowActions")||(i=e.hooks.blockHelperMissing.call(t,i,o)),null!=i&&(p+=i),p+"</span>\n"},useData:!0})},74779:(e,t,n)=>{var s=n(93633);e.exports=(s.default||s).template({1:function(e,t,n,s,l){var i,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<a href="#" class="delete icon icon-delete" title="'+e.escapeExpression("function"==typeof(i=null!=(i=a(n,"deleteTooltip")||(null!=t?a(t,"deleteTooltip"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"deleteTooltip",hash:{},data:l,loc:{start:{line:5,column:53},end:{line:5,column:70}}}):i)+'"></a>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,s,l){var i,a,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<form class="systemtags-rename-form">\n\t <label class="hidden-visually" for="'+u(typeof(a=null!=(a=d(n,"cid")||(null!=t?d(t,"cid"):t))?a:r)===c?a.call(o,{name:"cid",hash:{},data:l,loc:{start:{line:2,column:38},end:{line:2,column:45}}}):a)+'-rename-input">'+u(typeof(a=null!=(a=d(n,"renameLabel")||(null!=t?d(t,"renameLabel"):t))?a:r)===c?a.call(o,{name:"renameLabel",hash:{},data:l,loc:{start:{line:2,column:60},end:{line:2,column:75}}}):a)+'</label>\n\t<input id="'+u(typeof(a=null!=(a=d(n,"cid")||(null!=t?d(t,"cid"):t))?a:r)===c?a.call(o,{name:"cid",hash:{},data:l,loc:{start:{line:3,column:12},end:{line:3,column:19}}}):a)+'-rename-input" type="text" value="'+u(typeof(a=null!=(a=d(n,"name")||(null!=t?d(t,"name"):t))?a:r)===c?a.call(o,{name:"name",hash:{},data:l,loc:{start:{line:3,column:53},end:{line:3,column:61}}}):a)+'">\n'+(null!=(i=d(n,"if").call(o,null!=t?d(t,"isAdmin"):t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:4,column:1},end:{line:6,column:8}}}))?i:"")+"</form>\n"},useData:!0})},60121:(e,t,n)=>{var s=n(93633);e.exports=(s.default||s).template({1:function(e,t,n,s,l){var i,a,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t<span class="label">'+(null!=(i="function"==typeof(a=null!=(a=o(n,"tagMarkup")||(null!=t?o(t,"tagMarkup"):t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"tagMarkup",hash:{},data:l,loc:{start:{line:2,column:21},end:{line:2,column:36}}}):a)?i:"")+"</span>\n"},3:function(e,t,n,s,l){var i,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t<span class="label">'+e.escapeExpression("function"==typeof(i=null!=(i=a(n,"name")||(null!=t?a(t,"name"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:l,loc:{start:{line:4,column:21},end:{line:4,column:29}}}):i)+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,s,l){var i,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(i=a(n,"if").call(null!=t?t:e.nullContext||{},null!=t?a(t,"isAdmin"):t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l,loc:{start:{line:1,column:0},end:{line:5,column:7}}}))?i:""},useData:!0})}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,l),i.loaded=!0,i.exports}l.m=n,e=[],l.O=(t,n,s,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],i=e[u][2];for(var o=!0,r=0;r<n.length;r++)(!1&i||a>=i)&&Object.keys(l.O).every((e=>l.O[e](n[r])))?n.splice(r--,1):(o=!1,i<a&&(a=i));if(o){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,s,i]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.e=()=>Promise.resolve(),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.j=6371,(()=>{l.b=document.baseURI||self.location.href;var e={6371:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var s,i,a=n[0],o=n[1],r=n[2],c=0;if(a.some((t=>0!==e[t]))){for(s in o)l.o(o,s)&&(l.m[s]=o[s]);if(r)var u=r(l)}for(t&&t(n);c<a.length;c++)i=a[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(u)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var i=l.O(void 0,[4208],(()=>l(65796)));i=l.O(i)})();
//# sourceMappingURL=core-systemtags.js.map?v=9e98b33cfc7dbc382231