webpackJsonp([7],{279:function(t,a,i){"use strict";function e(t){c||i(820)}Object.defineProperty(a,"__esModule",{value:!0});var n=i(475),l=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(a,t,function(){return n[t]})}(s);var r=i(822),o=i.n(r),c=!1,d=i(0),p=e,g=d(l.a,o.a,!1,p,"data-v-c2f3469a",null);g.options.__file="src/views/imgManage/imgUpload.vue",a.default=g.exports},475:function(t,a,i){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var n=i(110),l=e(n),s=i(14),r=e(s),o=i(109);a.default={name:"",data:function(){return{imgTitleError:"",imgTitle:"",description:"",linkURL:"",imgsCascade:[{value:1,label:"荣誉证书"},{value:2,label:"团队风采"}],classify:[],publishLoading:!1}},computed:{},methods:{handleImgTitleBlur:function(){0===this.imgTitle.length&&(this.imgTitleError="图片标题不可为空哦")},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请选择图片文件。"})},beforeUpload:function(t,a,i){console.log("befor::",t,a,i)},uploadSuccess:function(t,a,i){console.log("success",t,a,i),this.linkURL=t.data.uri.linkurl},handlePublish:function(){var t=this;if(this.canPublish()){this.publishLoading=!0;var a={title:this.imgTitle,imgMode:this.classify[0],imgItem:this.classify[1],linkURL:this.linkURL,description:this.description};console.log("arg::::----------",a),o.api("/api/addImg",a,function(a){200===a.code&&setTimeout(function(){t.publishLoading=!1,t.$Notice.success({title:"发布成功",desc:"图片《"+t.imgTitle+"》保存成功"}),t.clearData()},500)})}},clearData:function(){this.imgTitle="",this.classify=[],this.linkURL="",this.description=""},canPublish:function(){return 0===this.imgTitle.length?(this.$Message.error("请输入图片标题"),!1):0===this.classify.length?(this.$Message.error("请选择图片分类"),!1):""===this.linkURL?(this.$Message.error("请上传图片"),!1):""!==this.description||(this.$Message.error("建议输入图片描述"),!1)},searchImgList:function(){var t=this;o.api("/api/searchImgList",{},function(a){if(console.log("callback",a),200===a.code){var i=!0,e=!1,n=void 0;try{for(var s,o=(0,l.default)(a.data.items);!(i=(s=o.next()).done);i=!0){var c=s.value,d={value:c.imgItem,label:c.imgItem},p=r.default.getIndex(t.imgsCascade,"value",c.imgMode),g=t.imgsCascade[p];p>-1?g.children?g.children.push(d):g.children=[d]:t.imgsCascade.push({value:c.imgMode,label:c.imgItem,children:[d]})}}catch(t){e=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(e)throw n}}}})}},created:function(){this.searchImgList()}}},820:function(t,a,i){var e=i(821);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(9)("1c539998",e,!1)},821:function(t,a,i){a=t.exports=i(8)(!1),a.push([t.i,"\n.margin-top-8[data-v-c2f3469a] {\n  margin-top: 8px;\n}\n.margin-top-10[data-v-c2f3469a] {\n  margin-top: 10px;\n}\n.margin-top-20[data-v-c2f3469a] {\n  margin-top: 20px;\n}\n.margin-left-10[data-v-c2f3469a] {\n  margin-left: 10px;\n}\n.margin-bottom-10[data-v-c2f3469a] {\n  margin-bottom: 10px;\n}\n.margin-bottom-100[data-v-c2f3469a] {\n  margin-bottom: 100px;\n}\n.margin-right-10[data-v-c2f3469a] {\n  margin-right: 10px;\n}\n.padding-left-6[data-v-c2f3469a] {\n  padding-left: 6px;\n}\n.padding-left-8[data-v-c2f3469a] {\n  padding-left: 5px;\n}\n.padding-left-10[data-v-c2f3469a] {\n  padding-left: 10px;\n}\n.padding-left-20[data-v-c2f3469a] {\n  padding-left: 20px;\n}\n.height-100[data-v-c2f3469a] {\n  height: 100%;\n}\n.height-120px[data-v-c2f3469a] {\n  height: 100px;\n}\n.height-200px[data-v-c2f3469a] {\n  height: 200px;\n}\n.height-492px[data-v-c2f3469a] {\n  height: 492px;\n}\n.height-460px[data-v-c2f3469a] {\n  height: 460px;\n}\n.line-gray[data-v-c2f3469a] {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap[data-v-c2f3469a] {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5[data-v-c2f3469a] {\n  padding-left: 10px;\n}\n[v-cloak][data-v-c2f3469a] {\n  display: none;\n}\n",""])},822:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"imgUpload"},[i("Row",[i("Col",{attrs:{span:"18"}},[i("Card",[i("Form",{attrs:{"label-width":80}},[i("FormItem",{attrs:{label:"图片标题",error:t.imgTitleError}},[i("Input",{attrs:{icon:"android-list",placeholder:"请输入图片标题"},on:{"on-blur":t.handleImgTitleBlur},model:{value:t.imgTitle,callback:function(a){t.imgTitle=a},expression:"imgTitle"}})],1)],1),t._v(" "),i("Form",{attrs:{"label-width":80}},[i("FormItem",{attrs:{label:"图片描述"}},[i("Input",{attrs:{icon:"android-list",placeholder:"请输入20-50字图片描述"},model:{value:t.description,callback:function(a){t.description=a},expression:"description"}})],1)],1),t._v(" "),i("Form",{attrs:{"label-width":80}},[i("FormItem",{attrs:{label:"图片地址"}},[i("Input",{attrs:{icon:"image",placeholder:"可点击右侧缩略图上传，也可使用第三方图床链接。仅支持单张图片"},model:{value:t.linkURL,callback:function(a){t.linkURL=a},expression:"linkURL"}})],1)],1),t._v(" "),i("div",{staticClass:"margin-top-20"},[i("img",{attrs:{src:t.linkURL,alt:t.imgTitle,width:"100%"}})])],1)],1),t._v(" "),i("Col",{staticClass:"padding-left-10",attrs:{span:"6"}},[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"upload"}}),t._v("\n        图片上传\n      ")],1),t._v(" "),i("div",{staticClass:"height-120px"},[i("Row",{staticClass:"height-100",attrs:{type:"flex",justify:"center",align:"middle"}},[i("Upload",{attrs:{name:"photos",action:"http://www.shrs2006.com/cgi-bin/service/upload/imgUpload",accept:"image/*",format:["jpg","png","jpeg","gif","bmp","svg"],"on-format-error":t.handleFormatError,"on-success":t.uploadSuccess,"before-upload":t.beforeUpload}},[i("span",[t._v("选择图片上传  ")]),t._v(" "),i("Button",{staticClass:"margin-top-20",attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1)],1)]),t._v(" "),i("Card",{staticClass:"margin-top-20"},[i("p",{attrs:{slot:"title"},slot:"title"},[i("Icon",{attrs:{type:"paper-airplane"}}),t._v("\n        发布\n      ")],1),t._v(" "),i("p",{},[i("span",[t._v("图片分类：")]),t._v(" "),i("Cascader",{attrs:{data:t.imgsCascade,trigger:"hover"},model:{value:t.classify,callback:function(a){t.classify=a},expression:"classify"}})],1),t._v(" "),i("Row",{staticClass:"margin-top-20"},[i("span",{staticClass:"publish-button"},[i("Button",{staticStyle:{width:"90px"},attrs:{loading:t.publishLoading,icon:"ios-checkmark",type:"primary"},on:{click:t.handlePublish}},[t._v("发布")])],1)])],1)],1)],1)],1)},n=[];e._withStripped=!0;var l={render:e,staticRenderFns:n};a.default=l}});