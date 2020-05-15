!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("iscroll")):"function"==typeof define&&define.amd?define(["iscroll"],e):"object"==typeof exports?exports.ListPullLoading=e(require("iscroll")):t.ListPullLoading=e(t.IScroll)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.listPullLoading=e.install=void 0;var s=i(1),a=function(t){return t&&t.__esModule?t:{default:t}}(s),r=function(t,e){e&&(listLoading.props.globalOptions.default=function(){return e}),t.component("list-pull-loading",a.default)};e.install=r,e.listPullLoading=a.default,e.default={install:r,listPullLoading:a.default}},function(t,e,i){"use strict";function s(t){i(2)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(4),r=i.n(a),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-pull-loading"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-mask",on:{touch:function(t){t.stopPropagation(),t.preventDefault()}}}),t._v(" "),t._t("goTop",[s("transition",{attrs:{name:"fade"}},[t.isShowToTop&&t.isCanToTop?s("div",{staticClass:"go-top",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.gotoTop(e)}}},[s("img",{attrs:{src:i(6)}})]):t._e()])],{isCanToTop:t.isCanToTop}),t._v(" "),s("div",{ref:"scroller",staticClass:"list-pull-loading-box"},[s("div",{staticClass:"list-pull-loading-scroller"},[t._t("down",[s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.down,expression:"down != false"}],staticClass:"pull-down-tips",class:{loading:0!==t.down.state,"down-margin":null===t.myScroll}},[s("div",{staticClass:"tips-content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.down.state||1===t.down.state,expression:"down.state === 0 || down.state === 1"}],staticClass:"unload"},[s("p",{staticClass:"arrow",class:{"arrow-normal":0===t.down.state,"arrow-rotate":1===t.down.state}}),t._v(" "),s("p",{staticClass:"tips-text"},[t._v(t._s(1===t.down.state?t.down.notReleaseText:t.down.initText))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.down.state,expression:"down.state === 2"}],staticClass:"onload"},[s("p",{staticClass:"progress"},[s("svg",{attrs:{viewBox:"0 0 64 64"}},[s("g",{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})])])])]),t._v(" "),s("p",{staticClass:"tips-text"},[t._v(t._s(t.down.loadingText))])]),t._v(" "),t.down.isShowLastTimeText?s("div",{staticClass:"last-time-text tips-text"},[t._v("\n\t\t\t\t\t\t\t\t最后更新时间："),s("em",[t._v(t._s(t.timeDifferenceText))])]):t._e()])])],{down:t.down}),t._v(" "),t._t("default"),t._v(" "),t.hasData?t._t("list"):t._t("nodata",[s("div",{staticClass:"no-data"},[s("img",{attrs:{src:i(7)}}),t._v(" "),s("div",{staticClass:"mt20"},[t._v(t._s(t.noDataText))])])]),t._v(" "),t.hasData?t._t("up",[s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.up,expression:"up != false"}],staticClass:"pull-up-tips"},[s("div",{staticClass:"tips-content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.up.state||1===t.up.state,expression:"up.state === 0 || up.state === 1"}],staticClass:"unload"},[s("p",{staticClass:"arrow",class:{"arrow-normal":0===t.up.state,"arrow-rotate":1===t.up.state}}),t._v(" "),s("p",{staticClass:"tips-text"},[t._v(t._s(1===t.up.state?t.up.notReleaseText:t.up.initText))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.up.state,expression:"up.state === 2"}],staticClass:"onload"},[s("p",{staticClass:"progress"},[s("svg",{attrs:{viewBox:"0 0 64 64"}},[s("g",{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"}})]),t._v(" "),s("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"}},[s("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})])])])]),t._v(" "),s("p",{staticClass:"tips-text"},[t._v(t._s(t.up.loadingText))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:3===t.up.state,expression:"up.state === 3"}],staticClass:"no-more"},[s("p",{staticClass:"icon"}),t._v(" "),s("p",{staticClass:"tips-text"},[t._v(t._s(t.up.noMoreText))])])])])],{up:t.up}):t._e()],2)])],2)},n=[],l={render:o,staticRenderFns:n},u=l,c=i(3),p=s,h=c(r.a,u,!1,p,null,null);e.default=h.exports},function(t,e){},function(t,e){t.exports=function(t,e,i,s,a,r){var o,n=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,n=t.default);var u="function"==typeof n?n.options:n;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId=a);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):s&&(c=s),c){var p=u.functional,h=p?u.render:u.beforeCreate;p?(u._injectStyles=c,u.render=function(t,e){return c.call(e),h(t,e)}):u.beforeCreate=h?[].concat(h,c):[c]}return{esModule:o,exports:n,options:u}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=i(5),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{isLoading:!1,hasData:!0,downElHeight:0,upElHeight:0,scrollerMinHeight:0,directionY:0,startPullTime:0,endPullTime:0,lastQueryTime:0,isCanToTop:!1,isShowToTop:!0,initMaxTimes:3,noDataText:"没有找到相关的内容哦~",myScroll:null,api:null,auto:!0,imgResize:!1,iScrollOptions:{probeType:3,mouseWheel:!1,disableMouse:!0,scrollbars:!1,preventDefault:!0,startY:0},down:{offset:50,initText:"下拉刷新",notReleaseText:"松开刷新",loadingText:"正在加载更多",state:0,isShowLastTimeText:!0},up:{offset:50,initText:"上拉加载更多",notReleaseText:"松开加载更多",loadingText:"正在加载更多",noMoreText:"没有更多数据了...",state:0},parameters:{maxResultCount:20,skipCount:0}}},props:{options:Object,globalOptions:{type:Object,required:!1,default:function(){return{}}}},watch:{options:{handler:function(t,e){var i=this;t.parameters&&Object.assign(this.parameters,t.parameters),!0===t.auto&&1!=this.auto&&(this.auto=!0,this.updateUpState(2),this.query(2).then(function(){3!=i.up.state&&i.updateUpState(0),i.initMaxScroller(i.initMaxTimes-1)}))},deep:!0}},computed:{timeDifferenceText:function(){if(!this.lastQueryTime)return"正在查询，请稍后!";this.startPullTime||(this.startPullTime=(new Date).getTime());var t=(this.startPullTime-this.lastQueryTime)/1e3;return t<60?"刚刚之前":t<3600?parseInt(t/60,10)+"分钟前":t<86400?parseInt(t/3600,10)+"小时前":t<604800?parseInt(t/86400,10)+"天前":this.dateFormat(new Date(this.lastQueryTime),"yyyy年MM月dd日 hh:mm:ss")}},mounted:function(){return this.initData()},methods:{dateFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";if(!t||!t instanceof Date)return"";var i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in i)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return e},initData:function(){var t=this,e=Object.assign(this.globalOptions,this.options);if(!e.api)throw"错误的API";this.api=e.api,"boolean"==typeof e.auto&&(this.auto=e.auto),"number"==typeof e.initMaxTimes&&(this.initMaxTimes=e.initMaxTimes),"boolean"==typeof e.isShowToTop&&(this.isShowToTop=e.isShowToTop),e.noDataText&&(this.noDataText=e.noDataText),"boolean"==typeof e.imgResize&&(this.imgResize=e.imgResize),!1===e.down?this.down=!1:"object"==s(e.down)&&Object.assign(this.down,e.down),!1===e.up?this.up=!1:"object"==s(e.up)&&Object.assign(this.up,e.up),e.iScrollOptions&&Object.assign(this.iScrollOptions,e.iScrollOptions),e.parameters&&Object.assign(this.parameters,e.parameters),this.$nextTick(function(){t.initDom(),t.auto&&1!=t.isLoading&&(t.updateUpState(2),t.query(0).then(function(){3!=t.up.state&&t.updateUpState(0),t.initMaxScroller(t.initMaxTimes-1)}))})},initDom:function(){this.downElHeight=this.$refs.scroller.querySelector(".pull-down-tips")?this.$refs.scroller.querySelector(".pull-down-tips").offsetHeight:0,this.upElHeight=this.$refs.scroller.querySelector(".pull-up-tips")?this.$refs.scroller.querySelector(".pull-up-tips").offsetHeight:0,this.iScrollOptions.startY=-this.downElHeight,this.scrollerMinHeight=this.$refs.scroller.offsetHeight-(this.iScrollOptions.startY<0?this.iScrollOptions.startY:-1),this.$refs.scroller.querySelector(".list-pull-loading-scroller").style.minHeight=this.scrollerMinHeight+"px"},initIScroll:function(){var t=this,e=this;return this.initDom(),this.myScroll=new r.default(this.$refs.scroller,this.iScrollOptions),this.myScroll.on("scrollStart",function(){e.startPullTime=(new Date).getTime()}),this.myScroll.on("scroll",function(){var t=this.y,i=this.maxScrollY-t;e.down&&!e.isLoading&&t+e.downElHeight>=e.down.offset?e.updateDownState(1):e.down&&2!=e.down.state&&t<=0&&t+e.downElHeight<e.down.offset&&t+e.downElHeight>0?e.updateDownState(0):e.up&&!e.isLoading&&3!=e.up.state&&i>=e.up.offset-e.upElHeight?e.updateUpState(1):e.up&&3!=e.up.state&&i<e.up.offset-e.upElHeight&&i>=0&&e.updateUpState(0),e.$emit("scroll",this,e)}),this.myScroll.on("scrollEnd",function(){if(e.endPullTime=(new Date).getTime(),e.isShowToTop&&(e.isCanToTop=-this.y>=.5*e.scrollerMinHeight),e.$emit("scrollEnd",this,e),!(e.endPullTime-e.startPullTime<0))return e.endPullTime-e.startPullTime<200?void(this.y>-e.downElHeight?e.resizeIScrollPosition():this.maxScrollY<=this.y&&this.maxScrollY+e.upElHeight>this.y&&this.maxScrollY<-this.downElHeight-this.upElHeight&&e.resizeIScrollPosition(this.maxScrollY+e.upElHeight)):void(1==e.down.state?e.downRefreshEvent():1==e.up.state?e.upLoaddingEvent():this.y>-e.downElHeight?e.resizeIScrollPosition():this.maxScrollY<=this.y&&this.maxScrollY+e.upElHeight>this.y&&this.maxScrollY<-e.downElHeight-e.upElHeight&&e.resizeIScrollPosition(this.maxScrollY+e.upElHeight))}),this.$nextTick().then(function(){return t.myScrollRefresh()})},initMaxScroller:function(t){var e=this;return t>=0&&this.up&&3!==this.up.state&&this.myScroll.maxScrollY>=-this.downElHeight-this.upElHeight?(this.updateUpState(2),this.query(1).then(function(){return e.updateUpState(0),e.initMaxScroller(t-1)})):Promise.resolve()},initIScrollCacheData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this,r=function(t){return t>-a.downElHeight?t=-a.downElHeight:t<a.myScroll.maxScrollY+a.upElHeight&&a.myScroll.maxScrollY<-a.downElHeight-a.upElHeight&&(t=a.myScroll.maxScrollY+a.upElHeight),a.myScroll.scrollTo(0,t),t};return this.updateUpState(i),s?this.$nextTick().then(function(){return e.restartIScroll().then(function(){r(t)!=t&&e.imgResize&&e.myScrollRefresh().then(function(){r(t)})})}):void(this.hasData=s)},restartIScroll:function(){return this.myScroll?this.myScrollRefresh():this.initIScroll()},myScrollRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this;return new Promise(function(s,a){if(e&&t.initDom(),i.myScroll&&i.myScroll.refresh(),t.imgResize&&t.$refs.scroller){var r=t,o=-1,n=-1,l=t.$refs.scroller.querySelectorAll("img[lazy='loading']").length;if(0===l)return void s();n=setTimeout(function(){n=-1,s()},500),Array.from(t.$refs.scroller.querySelectorAll("img[lazy='loading']")).forEach(function(t,e){t.onload=function(){"loading"!==this.getAttribute("lazy")&&(--l,-1==o&&(o=setTimeout(function(){r.myScroll&&r.myScroll.refresh(),o=-1,l<=0&&-1!=n&&(clearTimeout(n),n=-1,s())},200)))}})}else s()})},resizeIScrollPosition:function(t){this.myScroll&&(t?t<this.myScroll.maxScrollY+this.upElHeight&&(t=this.myScroll.maxScrollY+this.upElHeight):t=-this.downElHeight,0==this.myScroll.maxScrollY?this.myScroll.scrollTo(0,t,0):(this.startPullTime=(new Date).getTime()+1e3,this.myScroll.scrollTo(0,t,300,r.default.utils.ease.quadratic)))},query:function(t){var e=this;return 1===t?this.parameters.skipCount+=this.parameters.maxResultCount:2!==t&&0!==t||(this.lastQueryTime=(new Date).getTime(),this.parameters.skipCount=0),this.isLoading=!0,this.api(this.parameters,1===t).then(function(i){return e.isLoading=!1,e.hasData=!(1!=t&&0===i),i<e.parameters.maxResultCount&&e.updateUpState(3),e.$nextTick()}).then(function(){return 0===t?e.initIScroll():1===t?e.myScrollRefresh():2===t?e.restartIScroll():void 0}).catch(function(t){e.isLoading=!1})},refresh:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=this.$refs.scroller.offsetHeight-(this.iScrollOptions.startY<0?this.iScrollOptions.startY:-1);return i>this.scrollerMinHeight&&(this.scrollerMinHeight=i,this.$refs.scroller.querySelector(".list-pull-loading-scroller").style.minHeight=this.scrollerMinHeight+"px"),!1===e?void(this.myScroll&&this.myScroll.refresh()):this.isLoading?Promise.resolve(!1):this.$nextTick().then(function(){return t.downRefreshEvent()}).then(function(){t.myScroll.y!=-t.downElHeight&&t.myScroll.scrollTo(0,-t.downElHeight,0,r.default.utils.ease.quadratic),t.isCanToTop=!1})},downRefreshEvent:function(){var t=this;if(this.$emit("down",this.myScroll),this.updateUpState(0),this.updateDownState(2),!this.isLoading)return this.query(2).then(function(){t.$nextTick(function(){t.initDom(),t.myScroll.y>-t.downElHeight&&t.resizeIScrollPosition(),t.updateDownState(0),t.initMaxScroller(t.initMaxTimes-1)})})},upLoaddingEvent:function(){var t=this;if(this.$emit("up",this.myScroll),this.updateUpState(2),!this.isLoading){var e=this.myScroll.maxScrollY;this.query(1).then(function(){3!=t.up.state&&t.updateUpState(0),t.myScroll.maxScrollY>e&&t.resizeIScrollPosition(t.myScroll.maxScrollY+t.upElHeight)})}},updateDownState:function(t){this.down&&this.down.state!=t&&this.$set(this.down,"state",t),1!=this.directionY&&(this.directionY=1)},updateUpState:function(t){this.up&&this.up.state!=t&&this.$set(this.up,"state",t),-1!=this.directionY&&(this.directionY=-1)},gotoTop:function(){var t=this;if(this.isLoading)return void mui.toast("正在加载数据，请稍后操作!");this.$nextTick(function(){t.resizeIScrollPosition()})},touchEvent:function(t){this.isLoading&&(t.preventDefault(),t.stopPropagation())},destroy:function(){this.myScroll&&this.myScroll.destroy()}},destroyed:function(){this.myScroll&&this.myScroll.destroy()}}},function(e,i){e.exports=t},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABrCAYAAABjaDz4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NWMxNThjZS1lZTBjLTQ5Y2MtOGEyZS01NmNlNDRhNGMxMTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkUwOEQ3N0QyNjYxMTFFNzkwRDNBMEJDOEJCNzE5QTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkUwOEQ3N0MyNjYxMTFFNzkwRDNBMEJDOEJCNzE5QTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2YzMTA4MGItNDYyYy00ZjYzLTg3MjEtZGY0ZmEyMDc1NjIzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NDc0N2Y5ODYtOWU5Yy0xMTc5LWE2ZDEtYTUz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"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAEACAYAAACeZ7vLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUY4ODQ3MzYzQjZEMTFFNzhFMERDN0ZDNkM2QUM4MTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY4ODQ3MzczQjZEMTFFNzhFMERDN0ZDNkM2QUM4MTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Rjg4NDczNDNCNkQxMUU3OEUwREM3RkM2QzZBQzgxMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Rjg4NDczNTNCNkQxMUU3OEUwREM3RkM2QzZBQzgxMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvAfC5MAABT1SURBVHja7J0JcBRXesd7dJ/oGqELxGkEyEiyQUgGhAQ2G2MgMS47sb0OS3ldTpzaJJXddSqpxKnEcSq72XWlslVJbHazZSc+KLAhFZuYwzZIIMCAWARIGBAYkBFISEhCQghdk++5W/F4PJJG0oxmuuf3q/qXenp6WjPf63+/97rf+9rmcDg0AG+zadMmb+wmXNQ7nh08//zzQV0OIRyKEMCkEgIMDtYlgxBgcLAueYQAg4M1iRKVEQYMDtakWDSdMGBwsCZrRLMJAwYH62ETPSrKFGURDgwO1qLEqfZeTTgwOFiLP3ZafpRwjJ0wL404GjXBPsIIhmSe6DGn16uN2ryO0ExMDZ4oeln0E9ELhBC8zD+7HJdq+a8Iyxhr8DF85l7RS8Zyu+jfCSN4ie+KfsvN+u+J3hTtI0T0wcGczBe9NsR76qr6FtEUwoTBwXzcI9opihtmGzXxpFw0g3BhcDAPpUbTe6oH284UHdW+eREOMDgEIJNFr4o+1fQBLZ6SInpf9JFoGWEcnjBCABNIsqaPMVf3ttUFtZhx7OthQ2dE20UVolOiBsKMwWHijq94TZ/2uVb0pObdC2Uq28tpw+SXRS2iSFGEqIPwY3DwLX2iVk2/OKb0oqhAtEH0rChhHPv+tehvRfVu3rtL6OmDg384IfqhKFvTx1N0jvLzt0XrRN8fwtyAwSEAuCV6RdMHTu3z8DNdolWiDwkfBgdzoPrOD2r6FfWR2Cg6RMgwOJiLAdGPRX89zDZvibYSqtGhLrK9K7KP4jOJTsuxoj2j/J8fiH5B6MEN/yBKF/3ATb/7R4RnbAZ/cpyff2iUn7mLwWEYfmz0s3Oc1r0uaiI0NNHB/KgKwDlZgHr0zibCMvYaWM3pHs39yOmiPzSWuzX9XuRoOEbYYQQqjK6fqsmrRGcJydgN/tooP7PMyeDqbPtTwgg+4DXD4DsIBU10sB67jQqkklBgcLAeaoTbftERQoHBwZrs0vS0YIDBwYJUEAIMDtalihBgcLAu/YRgfDAfHHwCD7agBgcADA4AGBwAvGJwxxDLABBgjOUimxpZ9KBxcmglhADWMrhKVfspoQMIfGwOB61sAPrgAIDBAQCDAwAGBwAMDgAYHACDAwAGBwAMDgAYHAAwOABgcADA4AAYHAAwOABgcADA4ACAwQFgeHiyyRjYtGnThP0vnhAC1OCcTAEwuJ+xEwLA4NZlCiEADG5dHiQEgMGtSYaomDAABrcma0X3EAbA4NbkSVGOKIFQAAa3FtmiUk2/TfYdwgEY3Fr8SBRqLH+fcAAGtw5zRX/g9FrV4CWEBTC4+VG19q9EkU7rbKLX6YsDBjc3g0Ze6ua9eaItohjCBBjcfMSJ/muE/rZqqldo+pV1AAxukib506LfiL7rwfYLRSdF/ybKJ3zgC5jhNHaiRLNEqw2DPiRKH+U+IkQviDYazXZl9lOiPlEvIbYWEznNGIOPn25RjegL0QrD8Ou1r2+JeUK76BVV9qJbhBSGIdI46Q/QRJ9YukQ7RE8YNfp/eFgI1aIFop9jbvAA1UJMpQ/uXy6LntP0mWNXh9muxqj16wkZeIi6vjMVgwcG+zT9FtlZN++pZtbviVoJE3hIktH9m4HBA6s2V7PIbris/4VRgwN4ykZRtGgRBg8s6kR/5PT6ruhnhAVG6dHBY+hBDB54vCf62Fj+H1EjIYFRoKYazzaW7xdNx+CBx6vG3/8mFDAK1C3Xv3F6rYZAP4fBA489mn7Pu4JQwCh4Rvv2cOYfaPpFN49goMvE0K/p49O/JBTjw1ejwQLwAROTRD9xs17NRPw70Z9QgwcW2wnBhKKGAL+o6ZN/zNqtG2ros6rFV2HwwOIIIZhQ1Lj+f9LGcO84AHhshL626otv1jxI5InBJ45OQgAeoCYuvenBdsmafk2ngD649ftrYA3yNP2CrKfdCtWE3y/6U9GvqcEBApfHRQe00U8oUScDNcFpr+gBDA4QOCj/qSScH4m2iuLHsa8y0UFRlaZn8r1XFEoTHWDiUXO7VcbdpzT9gtp4n3qjbsMeFu3W9HkOah6EmsacisEBJh41J6Ha0F8YZlc5/DaIJo/S2L/U9PkNF+mDAwQmn2v6PXv1FBx1j7vZg8+ofANqSvILQ5lbQQ0OZkSN4lrn4bZq6NtwtyjPa9+c8efvmv1fjf64+t6/M8R2akTkEs2DhCEYHMxIkaanMPKEkR7bPCcAf1+Tpid4+KlRszvTYxjfo2xAGBzMyL+IykfY5nXj78va8Omzrgbob3SI/lzTb4O94LRe1fDHPd0JBgczckQbeejvoMHVfPxTJv6tahDLMk1P0Klq71ElDOEiG0Bg0+tUg6tRbtcwOIC1qBQd0vT03BoGB7Ae72ljmJGIwQHMU4ufx+AA1uScNoYn4GBwAHNwZywfwuBgVXpc/pqd7rF8iPvgYFWmafqsrcvBHAQMDlbleqB9IX9kArI5HA4OBQBq8ODBV7m3IXBqNgwOrqinO0YRhnGhpm32EgYMHkioZHjq+VALCMW4URlI9ml6FpNjhMP3cJtseP5M0yffY27voB6mpx6Bq7KHriAcGNyfTBX9I2HwCer21a84/jC4P/lt40AE3zBTtIgwYHB/kUUIfE42IcDg/sJGCHxOBCHA4ACAwQEAgwNgcACwAoxk8xHZ2dknS0tL+6Kjo3PkZV9HR8fnH3/8cfKNGzfuMePvmT179rGlS5dGREZGqu/f3dbWdmbPnj2Zra2t0yltavCgIj8/v/Lhhx/OFXPfLy9jRQnx8fFF69evz5o2bVq12X5PcXFxxcqVKxeKudUD6tWY/KTExMQlTzzxRHJaWtrnlDgGDxrE1DeLioryNX1Ypisxq1atSg4JCTHNhItJkyZdzcvLU4//cXfbcNKaNWs4hjB48DBv3rxaTX/cjPuAh4RMzcrKOmOW31NQUFCnDXO/OiwsbI7dbq+j5DF4UCBN176RtklKSuo0UQ3uyW9up+QxeFDQ1tY24oXLmzdvxpvo93iyTSIlj8GDgpqamnu1EfJX37p1K9ksv6e1tXXYCTe9vb1nmpubZ1HyGDwouHv3buKhQ4dqtGEylzz00EMXzfBbbDbbQFFR0XC1c+uHH37IrVYMHlycOnXqATnwz3V2dh5xOBw3NJfc3Ha7fUlGRkZtoP+OwsLCyrCwsLkuq7vkN12TWnv/5s2bu8x6Xz9Y4OzrIxoaGnLfeeedr5YXLFhw6AHB6e3Q1atXh73xxhs9AwMDATmjKj4+vqGgoMA1k03v1q1bm4zBLRmUMjU46DV6cU9PzzceQq9uLz3yyCOHArRp3r9+/XrV8kh0OWkdZOQaBgc3npEme7RrUz0zM7NUasnKQPuya9eurYyKisp3XictjYbdu3cvpCgxOLhB+qyzz58/f9B1/eLFiwvVOO9A+Z6lpaXlGRkZy11WD3z66afXpRUSR0licBiCvXv3lnZ1dVW5rI5YuXLl/Dlz5hwNBHPn5OSUuq6/fPlyxcWLF++nBDE4jNBU37Jlyz39/f2ut8liysrKCqQ23++XgyAkpG/dunVuza3uBEjTvISiw+DgAdLMnfT++++HqVtNLm+FS3+85LHHHtsfFhZ2e6K+j7pa/swzz5yWZvm3zH337t1TckK6V75rKCWHwcFD2trast977727YpxvPQHTbreXbNy4sWXevHmf+bjW7lHTQJ966qnYqKioAjcnolPvvvvutL6+vhhKDIPDKFG3mzZv3jwgzfULbsyXXVJSUrRhw4bqrKys017+1w518nj22Wev5eXlqYtpCa4bdHV1HXv77bdnqtYGJWVuGOjiRzo6OjLfeuut9scff/xobGxsoev76lbVmjVrVFO5+sSJE521tbUFvb29sWP5XzExMU3SBTgj5p4aGhpaNJT5r1y5Ur5r164SmuUYHLyAmDdBastFy5YtK58/f/5iTc+Y8g0iIyPzi4qKNNEdVbuKCW/X19dPamxsnCqv7a7bq4EqcXFxjdKvvjpt2rTb0gpIiYiImC9vlQ5ZrTscjeXl5VfOnTtXRqlgcPAutgMHDpTW1NRckhq7WWrboR7pE63emzt3rqY0eI4Qc7aI+g1zR4hSZDHT0EgMNDU1Hdi5c+eC7u7uQooCg4MP++XSZJ+uBr5IHzw6PDw814OPRYqhM0Wj7otLF+HIJ598kiQGX070MThMEHV1dYtEKjNrdWFhYUdKSopKduitC163pGl/orKyMrO5ubmIaGNw8BPS184XqYkpd3JzcytzcnJsCQkJs6S2ThvNfvr7+y+1tLTU19bWRl24cCFPXlNjY3AIFPr6+qKrq6uXir56HRcXd01dQLPb7V3x8fED0i8PDQkJURNC1MUyx+3btwfa29tDb9y4EX/9+vVp0reeLh+bTiQxOJiAzs7OjPPnzysRDBgWBroAYHAAwOAAgMEBAIMDAAYHAAwOgMEBAIMDAAYHAAwOABgcADA4AGBwAAwOABgc/IvNZhtYuHDhgUB4vhkEFiR8sACFhYWV6rFHsuhob28/29jYmENUgBrcCgUYEtKXl5eXPViZl5aW3iQqgMEtQm5u7lEx+bTB14mJiYWiy0QGMLg1mudJrt2usrKyK0QGMLjJmT17dlVYWNhc1/WTJ09eFBsb20iEAIObmCVLlgz1gMDokpKSM0QIMLhJyczMrHH3XO9BsrOz74uMjGwnUhgcTEhpaWnnCJskFBcXnyBSGBxMRkpKysX4+PgRnwQ6Z86cuaGhod1EDIODWQosJKR39erVrZ6UnXqG2Zo1a44QteCFkWzmMHVfQkLClzNmzPgyPz8/JTw8fKGnn01PT1/+9NNPH62qqnI0NDRM6ejoyFDeJ6oYHCaYqKiom3a7/WpaWlp7ampqf1JSUlRMTEyqNLOnavrDA6ePZb9xcXGF0mcffHm7r6+vvrOz86bQ09TUFNHY2Jjc0tIyVdbHUgoYHLxMcXFxxYIFC3KlSZ0iL5N9/O9i1b3zxMRENepNmzlz5v+/MTAwcGX37t1tV65cyaNU6IODl8jNzZ1imNvfXYHswsLCW5QIBgcvcu7cufoA+So9x48fp5mOwcGb7N+/v1Saxfv8/DX6Kysrj3/xxRf3USIYHLzMzp07y65evVruL3MfPnz4s5qammJKAoODj9ixY8fya9euVUzwv3UcO3bs0MmTJ5dQAhgcfIvtgw8+KGlubt4/UeaWPvcB0TJCj8Fhgky+ffv2pS0tLQd8be7Tp0/vl9q7hJBjcJjINrPDEbJt27YH2traDvrqf9TW1lYcPHhwOdHG4OAfk4du3bq1qKen57S39339+vWKAwcOlBJlDA5+NvmuXbu8XUb9e/bsySW6GBwCAKltvZoCub+/v/7OnTspRBaDQwAQHR3d4s392Wy2CKKKwSFAmDx5coNXCzwkJCM8PPw2kcXgEACkp6d7e/KHzW63kzcdg0MgkJaW5ouTRiuRxeAQACQkJEzywUmjl8hicAgAIiMjs7y9z+Tk5BgiGxyQ0SWAiYqKarXZbKkjbDbQ2tp66NSpU2ERERH9BQUFsfK5/OE+EBMTk0Z0MTj4mdTUVJUIImmo97u7u0/s2rUrqrGxcengupMnT2o5OTlHli1blhIaGjrLbbMtJGSKSqfc398fRZQxOPiJjIwMt08mEWNeKC8vb62rq1vk7v2zZ88uPn/+fN/ixYtVrrd5bloBoSkpKReamprmEGUMDv6rwQecXzscjsbq6upzx44de2BgYGDWsO32gYGww4cPL6+qqrq9YsWKfdOnTy+S1dGD76enpzdjcAwOfkT61rasrK+usd25dOnSZ3v37i3s7e0d1fRO2T529+7dZfHx8Q2rVq2qstvtKrGDTfYdR4QxOPiRgwcPltTX159sbm6ecufOnbLx7KujoyNz27ZtmWLwC+Hh4T3Xrl0jNTIGBz9jE4N71YhysphFWIMH7oMDYHAAwOAAgMEBAIMDAAYHAAwOgMEBAIMDAAY3Of2EwOd0EwIM7i8uEQKfU0cIMLi/2C66RRh8xgnRScKAwf2FeuDAcyISFPomthsIg+9hNtnwbBVdEf2lqFBzSpgAY0JlqNkj+ntRPeHA4IHAZ6JHCQOYEZvD4SAKAPTBAQCDAwAGBwAMDgAYHAAwOAAGBwAMDgAYHAAwOABgcADA4ACAwQEwOACYFtPPB7969SqlCMOSlZWFwcGnRIhSREmiZONvoihBFGcsxxiaZKyLNN5XxBr7CDXedybS+Jw7ukR3XdapPHMqY2yP6Laxrt3YrtN4/47xXpuxrt1YbhXdNP62GPsADG5ZlBGzVSUhyjSW00TposmiVON1kp++X4wb83vzuyijN4puiJpE143XKs1Vg2pgGcudHCoYPFBRps0RzRLNdFFCkMcmydDcEbZTLYCLLrogOmucAACDT8jBer9ooWi+IXXgxhOacaNOhPcZcqVD9Lmo1lCV6LjROgAMPiZUX7ZAVCJaIlokmsHh4BfUCbTQkDNfGGavFO3X9DzqPG0Ggw+JamI/IlotWkbNHPDMMPS4U02vzP6/hi4QopExfVbVEW6TKVP/vuh3RfMobktxRtPz1v/nSGYP5ttkVjS4zaipXxQtN16DdVEHcIXoZ0bN7sDgX2O1kWyloqOiD41lzB0ElZRR1qrMjxnLYEGDvyzaq+lXwSE4ud84Bl4mFNYy+A9FL1Fjg3EMvGQcExjcIr/jRYoSOCas3wcHAAsa/OcUJbjwKiGwjsFVYb6iublFAkGHwzgWOOlbrImuLqysEP2GYg1aVNmvNI4FsGAfvFzTb5OtNZap0YOjxlZlvc4o+32E5GvCLFrgOwypoarfEz2hjTylEcyFmmq6RfSmxrj0IbH6WHRnZmv6EFYlNYOMySbmQk02OSj6yDh513n6QcaiB4fBXVsug9NFl2r6CCimiwYWarqomhfuPF20byw7wuDBZ3B3qFxp92kkfPBHzeya8EFdLLvprX9A0kXQjAPqE0POZBtGd5eyaRJh8wiVyNFdyiZlbFI2YXC/cmWYg1AZfIohVU1M1fQkixmannDRrvk36aKvGUy62KzpiRevGa/rNT3h4peGbnEYYXCz1kyDTcvhGEybnKx9nTY5QfM8bbJ6HW4ozmXfapuhbncOaHrCQ2dUhtNeQ4PZTj1Jm9yufZ02WYm0ySbg/wQYAC3PZfGD75flAAAAAElFTkSuQmCC"}])});