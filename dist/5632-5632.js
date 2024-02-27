"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[5632],{67695:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(71354),s=n.n(o),m=n(76314),r=n.n(m)()(s());r.push([t.id,"\n.comments-activity[data-v-188dae4a] {\n\tpadding: 0;\n}\n","",{version:3,sources:["webpack://./apps/comments/src/views/ActivityCommentEntry.vue"],names:[],mappings:";AAmFA;CACA,UAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright Copyright (c) 2023 Ferdinand Thiessen <opensource@fthiessen.de>\n  -\n  - @author Ferdinand Thiessen <opensource@fthiessen.de>\n  -\n  - @license AGPL-3.0-or-later\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<Comment ref="comment"\n\t\ttag="li"\n\t\tv-bind="comment.props"\n\t\t:auto-complete="autoComplete"\n\t\t:resource-type="resourceType"\n\t\t:message="commentMessage"\n\t\t:resource-id="resourceId"\n\t\t:user-data="genMentionsData(comment.props.mentions)"\n\t\tclass="comments-activity"\n\t\t@delete="reloadCallback()" />\n</template>\n\n<script lang="ts">\nimport { translate as t } from \'@nextcloud/l10n\'\n\nimport Comment from \'../components/Comment.vue\'\nimport CommentView from \'../mixins/CommentView\'\n\nexport default {\n\tname: \'ActivityCommentEntry\',\n\n\tcomponents: {\n\t\tComment,\n\t},\n\n\tmixins: [CommentView],\n\tprops: {\n\t\tcomment: {\n\t\t\ttype: Object,\n\t\t\trequired: true,\n\t\t},\n\t\treloadCallback: {\n\t\t\ttype: Function,\n\t\t\trequired: true,\n\t\t},\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tcommentMessage: \'\',\n\t\t}\n\t},\n\n\twatch: {\n\t\tcomment() {\n\t\t\tthis.commentMessage = this.comment.props.message\n\t\t},\n\t},\n\n\tmounted() {\n\t\tthis.commentMessage = this.comment.props.message\n\t},\n\n\tmethods: {\n\t\tt,\n\t},\n}\n<\/script>\n\n<style scoped>\n.comments-activity {\n\tpadding: 0;\n}\n</style>\n'],sourceRoot:""}]);const a=r},25632:(t,e,n)=>{n.d(e,{default:()=>v});var o=n(53334),s=n(65463),m=n(70452);const r={name:"ActivityCommentEntry",components:{Comment:s.A},mixins:[m.A],props:{comment:{type:Object,required:!0},reloadCallback:{type:Function,required:!0}},data:()=>({commentMessage:""}),watch:{comment(){this.commentMessage=this.comment.props.message}},mounted(){this.commentMessage=this.comment.props.message},methods:{t:o.Tl}};var a=n(85072),i=n.n(a),c=n(97825),l=n.n(c),p=n(77659),u=n.n(p),d=n(55056),h=n.n(d),A=n(10540),f=n.n(A),g=n(41113),y=n.n(g),C=n(67695),b={};b.styleTagTransform=y(),b.setAttributes=h(),b.insert=u().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=f(),i()(C.A,b),C.A&&C.A.locals&&C.A.locals;const v=(0,n(14486).A)(r,(function(){var t=this;return(0,t._self._c)("Comment",t._b({ref:"comment",staticClass:"comments-activity",attrs:{tag:"li","auto-complete":t.autoComplete,"resource-type":t.resourceType,message:t.commentMessage,"resource-id":t.resourceId,"user-data":t.genMentionsData(t.comment.props.mentions)},on:{delete:function(e){return t.reloadCallback()}}},"Comment",t.comment.props,!1))}),[],!1,null,"188dae4a",null).exports}}]);
//# sourceMappingURL=5632-5632.js.map?v=f16542372833977f05d1