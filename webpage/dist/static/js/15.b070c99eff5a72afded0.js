webpackJsonp([15],{267:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=n.n(i),o=n(3),r=n.n(o),A=n(2);e.default={name:"Sqltable",data:function(){var t=this;return{columns6:[{type:"selection",width:60,align:"center"},{title:"工单编号:",key:"work_id",sortable:!0,sortType:"desc",width:250},{title:"工单说明:",key:"text"},{title:"提交时间:",key:"date",sortable:!0,width:150},{title:"提交人",key:"username",sortable:!0,width:150},{title:"状态",key:"status",width:150,render:function(t,e){var n=e.row,i="",a="";return 2===n.status?(i="blue",a="审核中"):0===n.status?(i="red",a="拒绝"):1===n.status?(i="green",a="同意"):(i="yellow",a="进行中"),t("Tag",{props:{type:"dot",color:i}},a)},sortable:!0,filters:[{label:"同意",value:1},{label:"拒绝",value:0},{label:"审核中",value:2},{label:"进行中",value:3}],filterMethod:function(t,e){return 1===t?1===e.status:2===t?2===e.status:0===t?0===e.status:3===t?3===e.status:void 0}},{title:"操作",key:"action",width:100,align:"center",render:function(e,n){return e("div",[e("Button",{props:{size:"small",type:"text"},on:{click:function(){t.edit_tab(n.index)}}},"查看")])}}],modal2:!1,sql:null,formitem:{workid:"",date:"",username:"",dataadd:"",database:"",att:"",id:null},summit:!1,columnsName:[{title:"ID",key:"ID",width:"50"},{title:"阶段",key:"stage",width:"100"},{title:"错误等级",key:"errlevel",width:"85"},{title:"阶段状态",key:"stagestatus"},{title:"错误信息",key:"errormessage"},{title:"当前检查的sql",key:"sql"},{title:"预计影响的SQL",key:"affected_rows"}],dataId:[],reject:{reje:!1,textarea:""},tmp:[],pagenumber:1,delrecord:[],togoing:null}},methods:{edit_tab:function(t){this.togoing=t,this.dataId=[],this.modal2=!0,2===this.tmp[t].status?(this.summit=!1,this.formitem=this.tmp[t],this.sql=this.tmp[t].sql.split(";")):(this.formitem=this.tmp[t],this.sql=this.tmp[t].sql.split(";"),this.summit=!0)},cancel_button:function(){this.modal2=!1},put_button:function(){var t=this;this.modal2=!1,this.tmp[this.togoing].status=3,a.a.put(A.a.url+"/audit_sql",{type:1,from_user:r.a.get("user"),to_user:this.formitem.username,id:this.formitem.id}).then(function(e){t.$Notice.success({title:"执行成功",desc:e.data}),t.mou_data(),t.$refs.page.currentPage=1}).catch(function(e){A.a.ajanxerrorcode(t,e)})},out_button:function(){this.modal2=!1,this.reject.reje=!0},rejecttext:function(){var t=this;a.a.put(A.a.url+"/audit_sql",{type:0,from_user:r.a.get("user"),text:this.reject.textarea,to_user:this.formitem.username,id:this.formitem.id}).then(function(e){t.$Notice.warning({title:e.data}),t.mou_data(),t.$refs.page.currentPage=1}).catch(function(e){A.a.ajanxerrorcode(t,e)})},test_button:function(){var t=this;a.a.put(A.a.url+"/audit_sql",{type:"test",base:this.formitem.basename,id:this.formitem.id}).then(function(e){200===e.data.status?t.dataId=e.data.result:t.$Notice.error({title:"警告",desc:"无法连接到Inception!"})}).catch(function(e){A.a.ajanxerrorcode(t,e)})},splicpage:function(t){this.mou_data(t)},mou_data:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;a.a.get(A.a.url+"/audit_sql?page="+e+"&username="+r.a.get("user")).then(function(e){t.tmp=e.data.data,t.pagenumber=e.data.page.alter_number}).catch(function(e){A.a.ajanxerrorcode(t,e)})},delrecordList:function(t){this.delrecord=t},delrecordData:function(){var t=this;a.a.post(A.a.url+"/audit_sql",{id:JSON.stringify(this.delrecord)}).then(function(e){t.$Notice.info({title:"信息",desc:e.data}),t.mou_data()}).catch(function(e){A.a.ajanxerrorcode(t,e)})}},mounted:function(){this.mou_data()}}},294:function(t,e,n){e=t.exports=n(77)(!0),e.push([t.i,".margin-top-8{margin-top:8px}.margin-top-10{margin-top:10px}.margin-top-20{margin-top:20px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-100{margin-bottom:100px}.margin-right-10{margin-right:10px}.padding-left-6{padding-left:6px}.padding-left-8{padding-left:5px}.padding-left-10{padding-left:10px}.padding-left-20{padding-left:20px}.height-100{height:100%}.height-120px{height:100px}.height-200px{height:200px}.height-492px{height:492px}.height-460px{height:460px}.line-gray{height:0;border-bottom:2px solid #dcdcdc}.notwrap{word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.padding-left-5{padding-left:10px}[v-cloak]{display:none}.dragging-tip-enter-active{opacity:1;transition:opacity .3s}.dragging-tip-enter,.dragging-tip-leave-to{opacity:0;transition:opacity .3s}.dragging-tip-con{display:block;text-align:center;width:100%;height:50px}.dragging-tip-con span{font-size:18px}.record-tip-con{display:block;width:100%;height:292px;overflow:auto}.record-item{box-sizing:content-box;display:block;overflow:hidden;height:24px;line-height:24px;padding:8px 10px;border-bottom:1px dashed #dcdcdc}.record-tip-con span{font-size:14px}.edittable-test-con{min-height:600px}.edittable-testauto-con{height:100%}.edittable-table-height-con{min-height:600px}.edittable-table-height1-con{height:200px}.edittable-con-1{box-sizing:content-box;padding:15px 0 0;height:550px}.exportable-table-download-con1{padding:16px 0 16px 20px;border-bottom:1px dashed #c3c3c3;margin-bottom:16px}.exportable-table-download-con2{padding-left:20px}.show-image{padding:20px 0}.show-image img{display:block;width:100%;height:auto}","",{version:3,sources:["/Users/yeshaobin/Yearning/webpage/src/components/Management/AuditSql.vue"],names:[],mappings:"AACA,cACE,cAAgB,CACjB,AACD,eACE,eAAiB,CAClB,AACD,eACE,eAAiB,CAClB,AACD,gBACE,gBAAkB,CACnB,AACD,kBACE,kBAAoB,CACrB,AACD,mBACE,mBAAqB,CACtB,AACD,iBACE,iBAAmB,CACpB,AACD,gBACE,gBAAkB,CACnB,AACD,gBACE,gBAAkB,CACnB,AACD,iBACE,iBAAmB,CACpB,AACD,iBACE,iBAAmB,CACpB,AACD,YACE,WAAa,CACd,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,WACE,SAAU,AACV,+BAAiC,CAClC,AACD,SACE,oBAAqB,AACrB,mBAAoB,AACpB,gBAAiB,AACjB,sBAAwB,CACzB,AACD,gBACE,iBAAmB,CACpB,AACD,UACE,YAAc,CACf,AACD,2BACE,UAAW,AACX,sBAAyB,CAC1B,AACD,2CAEE,UAAW,AACX,sBAAyB,CAC1B,AACD,kBACE,cAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,uBACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,aAAc,AACd,aAAe,CAChB,AACD,aACE,uBAAwB,AACxB,cAAe,AACf,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,iBAAkB,AAClB,gCAAoC,CACrC,AACD,qBACE,cAAgB,CACjB,AACD,oBACE,gBAAkB,CACnB,AACD,wBACE,WAAa,CACd,AACD,4BACE,gBAAkB,CACnB,AACD,6BACE,YAAc,CACf,AACD,iBACE,uBAAwB,AACxB,iBAAkB,AAClB,YAAc,CACf,AACD,gCACE,yBAA0B,AAC1B,iCAAkC,AAClC,kBAAoB,CACrB,AACD,gCACE,iBAAmB,CACpB,AACD,YACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,WAAa,CACd",file:"AuditSql.vue",sourcesContent:["\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.dragging-tip-enter-active {\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n.dragging-tip-enter,\n.dragging-tip-leave-to {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.dragging-tip-con {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n.dragging-tip-con span {\n  font-size: 18px;\n}\n.record-tip-con {\n  display: block;\n  width: 100%;\n  height: 292px;\n  overflow: auto;\n}\n.record-item {\n  box-sizing: content-box;\n  display: block;\n  overflow: hidden;\n  height: 24px;\n  line-height: 24px;\n  padding: 8px 10px;\n  border-bottom: 1px dashed gainsboro;\n}\n.record-tip-con span {\n  font-size: 14px;\n}\n.edittable-test-con {\n  min-height: 600px;\n}\n.edittable-testauto-con {\n  height: 100%;\n}\n.edittable-table-height-con {\n  min-height: 600px;\n}\n.edittable-table-height1-con {\n  height: 200px;\n}\n.edittable-con-1 {\n  box-sizing: content-box;\n  padding: 15px 0 0;\n  height: 550px;\n}\n.exportable-table-download-con1 {\n  padding: 16px 0 16px 20px;\n  border-bottom: 1px dashed #c3c3c3;\n  margin-bottom: 16px;\n}\n.exportable-table-download-con2 {\n  padding-left: 20px;\n}\n.show-image {\n  padding: 20px 0;\n}\n.show-image img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n"],sourceRoot:""}])},563:function(t,e,n){var i=n(294);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(78)("7b8a5b38",i,!0)},592:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"person"}}),t._v("\n        审核工单\n      ")],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"24"}},[n("Poptip",{attrs:{confirm:"",title:"您确认删除这些工单信息吗?"},on:{"on-ok":t.delrecordData}},[n("Button",{staticStyle:{"margin-left":"-1%"},attrs:{type:"text"}},[t._v("删除记录")])],1),t._v(" "),n("Table",{ref:"selection",attrs:{border:"",columns:t.columns6,data:t.tmp,stripe:""},on:{"on-selection-change":t.delrecordList}}),t._v(" "),n("br"),t._v(" "),n("Page",{ref:"page",attrs:{total:t.pagenumber,"show-elevator":"","page-size":20},on:{"on-change":t.splicpage}})],1)],1)],1)],1),t._v(" "),n("Modal",{attrs:{width:"800"},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[n("p",{staticStyle:{color:"#f60","font-size":"16px"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"information-circled"}}),t._v(" "),n("span",[t._v("SQL工单详细信息")])],1),t._v(" "),n("Form",{attrs:{"label-position":"right"}},[n("FormItem",{attrs:{label:"id:"}},[n("span",[t._v(t._s(t.formitem.id))])]),t._v(" "),n("FormItem",{attrs:{label:"工单编号:"}},[n("span",[t._v(t._s(t.formitem.work_id))])]),t._v(" "),n("FormItem",{attrs:{label:"提交时间:"}},[n("span",[t._v(t._s(t.formitem.date))])]),t._v(" "),n("FormItem",{attrs:{label:"提交人:"}},[n("span",[t._v(t._s(t.formitem.username))])]),t._v(" "),n("FormItem",{attrs:{label:"机房:"}},[n("span",[t._v(t._s(t.formitem.computer_room))])]),t._v(" "),n("FormItem",{attrs:{label:"连接名称:"}},[n("span",[t._v(t._s(t.formitem.connection_name))])]),t._v(" "),n("FormItem",{attrs:{label:"数据库库名:"}},[n("span",[t._v(t._s(t.formitem.basename))])]),t._v(" "),n("FormItem",{attrs:{label:"工单说明:"}},[n("span",[t._v(t._s(t.formitem.text))])]),t._v(" "),n("FormItem",{attrs:{label:"SQL语句:"}},t._l(t.sql,function(e){return n("p",[t._v(t._s(e))])}))],1),t._v(" "),n("p",{staticClass:"pa"},[t._v("SQL检查结果:")]),t._v(" "),n("Table",{attrs:{columns:t.columnsName,data:t.dataId,stripe:"",border:""}}),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"warning"},nativeOn:{click:function(e){t.test_button()}}},[t._v("检测sql")]),t._v(" "),n("Button",{on:{click:t.cancel_button}},[t._v("取消")]),t._v(" "),n("Button",{attrs:{type:"error",disabled:t.summit},on:{click:function(e){t.out_button()}}},[t._v("驳回")]),t._v(" "),n("Button",{attrs:{type:"success",disabled:t.summit},on:{click:function(e){t.put_button()}}},[t._v("同意")])],1)],1),t._v(" "),n("Modal",{on:{"on-ok":t.rejecttext},model:{value:t.reject.reje,callback:function(e){t.$set(t.reject,"reje",e)},expression:"reject.reje"}},[n("p",{staticStyle:{color:"#f60","font-size":"16px"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"information-circled"}}),t._v(" "),n("span",[t._v("SQL工单驳回理由说明")])],1),t._v(" "),n("Input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},placeholder:"请填写驳回说明"},model:{value:t.reject.textarea,callback:function(e){t.$set(t.reject,"textarea",e)},expression:"reject.textarea"}})],1)],1)},staticRenderFns:[]}},83:function(t,e,n){function i(t){n(563)}var a=n(1)(n(267),n(592),i,null,null);t.exports=a.exports}});
//# sourceMappingURL=15.b070c99eff5a72afded0.js.map