(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-marketing-live-list"],{1150:function(t,e,i){"use strict";i.r(e);var a=i("57d7"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"28c2":function(t,e,i){"use strict";var a=i("e1be"),n=i.n(a);n.a},"2d40":function(t,e,i){var a=i("bf0d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("434363b6",a,!0,{sourceMap:!1,shadowMode:!1})},"31aa":function(t,e,i){"use strict";i.r(e);var a=i("3616"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},3616:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1},mark:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};e.default=a},"3d09":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-5ad47e22]{background-color:#f8f8f8}.rf-live-list .left[data-v-5ad47e22]{text-align:center}.rf-live-list .left .image[data-v-5ad47e22]{width:%?170?%;height:%?150?%;border-radius:%?12?%}.rf-live-list .mid[data-v-5ad47e22]{margin:0 %?20?%}.rf-live-list .mid .name[data-v-5ad47e22]{font-size:%?28?%}.rf-live-list .mid .title[data-v-5ad47e22]{height:%?60?%;line-height:%?30?%}.rf-live-list .mid .time[data-v-5ad47e22]{font-size:%?24?%;color:#909399}body.?%PAGE?%[data-v-5ad47e22]{background-color:#f8f8f8}",""]),t.exports=e},"3d5e":function(t,e,i){"use strict";var a=i("2d40"),n=i.n(a);n.a},"51e1":function(t,e,i){"use strict";i.r(e);var a=i("6da8"),n=i("1150");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("6be1");var o,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"5ad47e22",null,!1,a["a"],o);e["default"]=s.exports},"57d7":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("75fc"));i("96cf");var r=a(i("3b8d"));i("6b54");var o=a(i("f97d")),d=a(i("5028")),s=a(i("d719")),l=i("c4c8"),c={components:{rfLoadMore:o.default,uniTag:s.default},data:function(){return{loading:!0,typeClass:"valid",state:1,tabCurrentIndex:0,liveTypeList:this.$mConstDataConfig.liveTypeList,liveList:[],loadingType:"more",page:1,headImg:this.$mAssetsPath.headImg}},filters:{time:function(t){return(0,d.default)(1e3*t).format("MM/DD HH:mm")},filterStateText:function(t){switch(parseInt(t,10)){case 101:return"直播中";case 102:return"未开始";case 103:return"已结束"}},filterStateTag:function(t){switch(parseInt(t,10)){case 101:return"success";case 102:return"warning";case 103:return"error"}}},onPullDownRefresh:function(){this.page=1,this.loading=!0,this.liveList=[],this.getLiveList("refresh")},onReachBottom:function(){"nomore"!==this.loadingType&&(this.page++,this.getLiveList())},onLoad:function(t){this.initData(t)},methods:{tabClick:function(t,e){this.page=1,this.liveList.length=0,this.loading=!0,this.tabCurrentIndex=t,this.state=e,this.getLiveList()},initData:function(t){this.state=t.state||101,"2"===this.state.toString()?this.tabCurrentIndex=1:"3"===this.state.toString()&&(this.tabCurrentIndex=2),this.getLiveList()},getLiveList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(l.miniProgramLiveIndex),{page:this.page,live_status:this.state}).then((function(t){i.loading=!1,"refresh"===e&&uni.stopPullDownRefresh(),i.loadingType=10===t.data.length?"more":"nomore",i.liveList=[].concat((0,n.default)(i.liveList),(0,n.default)(t.data))})).catch((function(){i.loading=!1,"refresh"===e&&uni.stopPullDownRefresh()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),navToLive:function(t){var e=t.room_id;e&&101===this.state&&this.$mHelper.toast("请从微信小程序进入带货直播间")}}};e.default=c},6872:function(t,e,i){"use strict";i.r(e);var a=i("9088"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"6be1":function(t,e,i){"use strict";var a=i("7520"),n=i.n(a);n.a},"6da8":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniTag:i("d719").default,rfLoadMore:i("f97d").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-live-list"},[i("v-uni-view",{staticClass:"navbar"},t._l(t.liveTypeList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-item",class:t.tabCurrentIndex===a?"text-"+t.themeColor.name+" current":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick(a,e.state)}}},[t._v(t._s(e.text))])})),1),t.liveList.length>0?i("v-uni-view",{staticClass:"rf-list"},[t._l(t.liveList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"rf-list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToLive(e)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{staticClass:"image",attrs:{preview:!1,mode:"aspectFill",src:e.cover}})],1),i("v-uni-view",{staticClass:"mid"},[i("v-uni-text",{staticClass:"title in2line"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"name in1line"},[t._v("主播："+t._s(e.anchor_name||"暂未填写"))]),"101"===e.live_status?i("v-uni-text",{staticClass:"time"},[t._v("直播开始于 "+t._s(t._f("time")(e.start_time)))]):t._e(),"102"===e.live_status?i("v-uni-text",{staticClass:"time"},[t._v("直播于 "+t._s(t._f("time")(e.start_time))+" 开始")]):t._e(),"103"===e.live_status?i("v-uni-text",{staticClass:"time"},[t._v("直播: "+t._s(t._f("time")(e.start_time))+" - "+t._s(t._f("time")(e.end_time)))]):t._e()],1),i("v-uni-view",{staticClass:"right"},[i("uni-tag",{staticClass:"tag",attrs:{text:t._f("filterStateText")(t.state),type:t._f("filterStateTag")(t.state),size:"small"}})],1)],1)})),t.liveList.length>0?i("rf-load-more",{staticClass:"load-more",attrs:{status:t.loadingType}}):t._e()],2):t._e(),0!==t.liveList.length||t.loading?t._e():i("rf-empty",{attrs:{info:"暂无直播记录"}}),i("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}})],1)},r=[]},7520:function(t,e,i){var a=i("3d09");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("56324b5b",a,!0,{sourceMap:!1,shadowMode:!1})},"75ad":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".rf-load-more[data-v-1f4d694c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n\t/*position: fixed;*/\n\t/*bottom: 5upx;*/\n\t/*text-align: center;*/}.rf-load-more__text[data-v-1f4d694c]{font-size:%?28?%;color:#999}.rf-load-more__img[data-v-1f4d694c]{height:24px;width:24px;margin-right:10px}.rf-load-more__img > uni-view[data-v-1f4d694c]{position:absolute}.rf-load-more__img > uni-view uni-view[data-v-1f4d694c]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-1f4d694c 1.56s ease infinite;animation:load-data-v-1f4d694c 1.56s ease infinite}.rf-load-more__img > uni-view uni-view[data-v-1f4d694c]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.rf-load-more__img > uni-view uni-view[data-v-1f4d694c]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.rf-load-more__img > uni-view uni-view[data-v-1f4d694c]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.rf-load-more__img > uni-view uni-view[data-v-1f4d694c]:nth-child(4){top:11px;left:0}.load1[data-v-1f4d694c],\n.load2[data-v-1f4d694c],\n.load3[data-v-1f4d694c]{height:24px;width:24px}.load2[data-v-1f4d694c]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-1f4d694c]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-1f4d694c]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-1f4d694c]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-1f4d694c]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-1f4d694c]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-1f4d694c]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-1f4d694c]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-1f4d694c]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-1f4d694c]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-1f4d694c]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-1f4d694c]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-1f4d694c]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-1f4d694c]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-1f4d694c{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},9088:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"rf-load-more",props:{status:{type:String,default:"more"},width:{type:String,default:"100vw"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{}}}},data:function(){return{}}};e.default=a},bf0d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-tag[data-v-549b4c4f]{box-sizing:border-box;padding:0 %?32?%;height:%?60?%;line-height:calc(%?60?% - 2px);font-size:%?28?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?6?%;border:1px solid #f8f8f8}.uni-tag--circle[data-v-549b4c4f]{border-radius:%?30?%}.uni-tag--mark[data-v-549b4c4f]{border-radius:0 %?30?% %?30?% 0}.uni-tag--disabled[data-v-549b4c4f]{opacity:.5}.uni-tag--small[data-v-549b4c4f]{height:%?40?%;padding:0 %?16?%;line-height:calc(%?40?% - 2px);font-size:%?24?%}.uni-tag--primary[data-v-549b4c4f]{color:#fff;background-color:#007aff;border:1px solid #007aff}.uni-tag--primary.uni-tag--inverted[data-v-549b4c4f]{border:1px solid}.uni-tag--success[data-v-549b4c4f]{color:#fff;background-color:#4cd964;border:1px solid #4cd964}.uni-tag--success.uni-tag--inverted[data-v-549b4c4f]{border:1px solid}.uni-tag--warning[data-v-549b4c4f]{color:#fff;background-color:#f0ad4e;border:1px solid #f0ad4e}.uni-tag--warning.uni-tag--inverted[data-v-549b4c4f]{border:1px solid}.uni-tag--error[data-v-549b4c4f]{color:#fff;border:1px solid}.uni-tag--error.uni-tag--inverted[data-v-549b4c4f]{color:#dd524d;background-color:#fff;border:1px solid #dd524d}.uni-tag--inverted[data-v-549b4c4f]{border:1px solid}.uni-tag--base.uni-tag--inverted[data-v-549b4c4f]{border:1px solid}.uni-tag--base[data-v-549b4c4f]{color:#333;background-color:#fff;border:1px solid #f8f8f8}",""]),t.exports=e},cadb:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-view",{staticClass:"uni-tag",class:[!0===t.disabled||"true"===t.disabled?"uni-tag--disabled":"",!0===t.circle||"true"===t.circle?"uni-tag--circle":"",!0===t.mark||"true"===t.mark?"uni-tag--mark":"","uni-tag--"+t.size,t.inverted?"uni-tag--inverted text-"+t.themeColor.name:"bg-"+t.themeColor.name],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},r=[]},cc91:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-load-more",style:{width:t.width}},["loading"===t.status&&t.showIcon?i("v-uni-view",{staticClass:"rf-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1):t._e(),i("v-uni-view",{staticClass:"cu-load",class:"more"===t.status?"loading":"over"})],1)},r=[]},d719:function(t,e,i){"use strict";i.r(e);var a=i("cadb"),n=i("31aa");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("3d5e");var o,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"549b4c4f",null,!1,a["a"],o);e["default"]=s.exports},e1be:function(t,e,i){var a=i("75ad");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1b33f9d1",a,!0,{sourceMap:!1,shadowMode:!1})},f97d:function(t,e,i){"use strict";i.r(e);var a=i("cc91"),n=i("6872");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("28c2");var o,d=i("f0c5"),s=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"1f4d694c",null,!1,a["a"],o);e["default"]=s.exports}}]);